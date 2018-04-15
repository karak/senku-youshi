import './command-bar.tag';
import { shallow } from 'riot-test-utils';
import { simulate } from 'simulate-event';

describe('<command-bar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow('command-bar');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has "shuffleButton" in its refs', () => {
    expect(wrapper.instance().refs).toHaveProperty('shuffleButton');
  });

  it('shuffleButton has a certain label', () => {
    const shuffleButton = wrapper.instance().refs.shuffleButton;

    expect(shuffleButton.textContent).toBe('並べ替え');
  });

  it('fires "shuffle" event when button is clicked', () => {
    const handler = jest.fn();

    const shuffleButton = wrapper.instance().refs.shuffleButton;

    wrapper.instance().on('shuffle', handler);

    simulate(shuffleButton, 'click');

    expect(handler).toHaveBeenCalled();
  });
});
