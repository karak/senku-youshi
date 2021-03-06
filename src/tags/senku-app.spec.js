import { shallow } from 'riot-test-utils';
import './senku-app.tag';

// mock normalize function
jest.mock('../models', () => {
  // append "!"
  function appendExclamartionMark(x) {
    return typeof x === 'string' && x.length > 0 && x[x.length - 1] !== '!'
      ? x + '!'
      : x;
  }

  class MockWorkList {
    constructor(storage) {
      this._storage = storage;
    }

    normalize() {
      this._storage.value = appendExclamartionMark(this._storage.value);
    }

    shuffle() {
      this._storage.value = 'shuffled';
    }
  }

  const mockClipboard = {
    copy(text) {
      throw 'Clipboard is: ' + text;
    },
  };

  return {
    WorkList: MockWorkList,
    clipboard: mockClipboard,
  };
});

describe('<senku-app />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow('senku-app');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has "editor" in refs', () => {
    expect(wrapper.refs).toHaveProperty('editor');
  });

  it('normalizes the value on <senku-editor> changes its value', () => {
    const editor = wrapper.refs.editor;

    editor.value = 'Hello';
    editor.trigger('change', { value: 'Hello' });

    expect(editor.value).toBe('Hello' + '!');
  });

  it('has "commandBar" in refs', () => {
    expect(wrapper.refs).toHaveProperty('commandBar');
  });

  it('shuffles the value on <command-bar> fires "shuffle" event', () => {
    const editor = wrapper.refs.editor;
    const commandBar = wrapper.refs.commandBar;

    editor.value = 'unshuffled';

    commandBar.trigger('shuffle');

    expect(editor.value).toBe('shuffled');
  });

  it('paste to the clipboard on <command-bar> fires "copy" event', () => {
    const editor = wrapper.refs.editor;
    const commandBar = wrapper.refs.commandBar;

    editor.value = 'copied!';

    expect(() => commandBar.trigger('copy')).toThrow('Clipboard is: copied!');
  });

  it('matches snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
