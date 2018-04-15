import { shallow } from 'riot-test-utils';
import './senku-app.tag';

// mock normalize function
jest.mock('../models/normalizeList');
import normalizeList from '../models/normalizeList';
normalizeList.mockImplementation(x => x + '!'); // append "!"

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

    editor.trigger('change', { value: 'Hello' });

    expect(editor.value).toBe('Hello' + '!');
  });
});
