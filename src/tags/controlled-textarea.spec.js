import { shallow } from 'riot-test-utils';
import './controlled-textarea.tag';

describe('<controlled-textarea />', () => {

  describeWithTag('refs', (getWrapper) => {
    it('has textarea in refs', () => {
      const wrapper = getWrapper();
      expect(wrapper.instance().refs).toHaveProperty('textarea');
      expect(wrapper.instance().refs.textarea).toBeInstanceOf(HTMLTextAreaElement);
    });
  });

  describe('opts.defaultValue', () => {
    let wrapper = null;
    
    afterEach(() => {
      if (wrapper) {
        wrapper.unmount();
      }
    });

    it('value is empty by default', () => {
      wrapper = shallow('controlled-textarea');

      expect(wrapper.instance().value).toBe('');
    });

    it('value is assigned from the option', () => {
      const opts = { defaultValue: 'Once upon a time...' };
      wrapper = shallow('controlled-textarea', opts);

      expect(wrapper.instance().value).toBe(opts.defaultValue);
    });
  });

  describeWithTag('value accessor', (getWrapper) => {
    it('assigns the set value to value of textarea', () => {
      const wrapper = getWrapper();
      wrapper.instance().value = 'Changed';
      expect(wrapper.instance().value).toBe('Changed');
      expect(wrapper.instance().refs.textarea.value).toBe('Changed');
    });

    it('get value of textarea', () => {
      const wrapper = getWrapper();
      wrapper.instance().refs.textarea.value = 'Changed';
      expect(wrapper.instance().value).toBe('Changed');
    });
  });

  describeWithTag('event "change"', (getWrapper) => {
    // todo: dispatch event
    it('is triggered by "input" of textarea');
  })
});

function describeWithTag(suite, opts, callback) {
  if (arguments.length < 3) {
    callback = opts;
    opts = {}
  }

  describe(suite, () => {
    let wrapper = null;
    
    beforeEach(() => {
      wrapper = shallow('controlled-textarea', opts);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    callback(() => wrapper, ...arguments);
  });
}
