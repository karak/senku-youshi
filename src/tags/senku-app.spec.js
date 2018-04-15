import { shallow } from 'riot-test-utils';
import './senku-app.tag';

// mock normalize function
jest.mock('../models', () => {
  // append "!"
  function appendExclamartionMark(x) {
    return typeof x === 'string' && x.length > 0 && x[x.length - 1] !== '!' ? x + '!' : x;
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

  return {
    WorkList: MockWorkList
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
    expect(wrapper.instance().refs).toHaveProperty('editor');
  });

  it('normalizes the value on <senku-editor> changes its value', () => {
    const editor = wrapper.instance().refs.editor;

    editor.value = 'Hello';
    editor.trigger('change', { value: 'Hello' });

    expect(editor.value).toBe('Hello' + '!');
  });

  it('has "commandBar" in refs', () => {
    expect(wrapper.instance().refs).toHaveProperty('commandBar');
  });

  it('shuffles the value on <command-bar> fires "shuffle" event', () => {
    const editor = wrapper.instance().refs.editor;
    const commandBar = wrapper.instance().refs.commandBar;

    editor.value = 'unshuffled';

    commandBar.trigger('shuffle');

    expect(editor.value).toBe('shuffled');
  });
});
