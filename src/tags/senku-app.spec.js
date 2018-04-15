import { shallow } from 'riot-test-utils';
import './senku-app.tag';

// mock normalize function
jest.mock('../models/normalizeList');
import normalizeList from '../models/normalizeList';
normalizeList.mockImplementation(appendExclamartionMark);
jest.mock('../models/shuffle');
import shuffle from '../models/shuffle';
shuffle.mockImplementation(x => 'shuffled');

 // append "!"
function appendExclamartionMark(x) {
  return typeof x === 'string' && x.length > 0 && x[x.length - 1] !== '!' ? x + '!' : x;
}

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

    expect(normalizeList).toBeCalledWith('Hello');
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

    expect(shuffle).toBeCalledWith('unshuffled');
    expect(editor.value).toBe('shuffled');
  });
});
