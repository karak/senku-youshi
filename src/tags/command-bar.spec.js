import './command-bar.tag';
import { shallow, Simulate } from 'riot-test-utils';

describe('<command-bar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow('command-bar');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has "shuffleButton" in its refs', () => {
    expect(wrapper.refs).toHaveProperty('shuffleButton');
  });

  it('shuffleButton has a certain label', () => {
    const shuffleButton = wrapper.refs.shuffleButton;

    expect(shuffleButton.textContent).toBe('並べ替え');
  });

  it('fires "shuffle" event when button is clicked', () => {
    const handler = jest.fn();

    const shuffleButton = wrapper.refs.shuffleButton;

    wrapper.on('shuffle', handler);

    Simulate.click(shuffleButton);

    expect(handler).toHaveBeenCalled();
  });

  it('has "copyButton" in its refs', () => {
    expect(wrapper.refs).toHaveProperty('copyButton');
  });

  it('fires "copy" event when button is clicked', () => {
    const handler = jest.fn();

    const copyButton = wrapper.refs.copyButton;

    wrapper.on('copy', handler);

    Simulate.click(copyButton);

    expect(handler).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
