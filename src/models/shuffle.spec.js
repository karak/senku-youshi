import shuffle, { setRandomSeed } from './shuffle';

/** wrapper of test function for convinience
 * @param {Array<string>} xs source array
 * @returns {Array<string>} shuffled array
 */
function shuffleAsArray(xs) {
  return shuffle(xs.join('\n')).split('\n');
}

/** Fixed random seed through testing */
const RANDOM_SEED = [123456789, 362436069, 521288629, 88675123];

describe('shuffle', () => {
  beforeEach(() => {
    // fix results
    setRandomSeed(RANDOM_SEED);
  });

  it('shuffles', () => {
    const x = ['a', 'b', 'c', 'd', 'e'];

    const y = shuffleAsArray(x);

    expect(y).toEqual(['a', 'd', 'e', 'c', 'b']);
  });

  it('shuffles keeping last empty line', () => {
    const x = ['a', 'b', 'c', 'd', ''];

    const y = shuffleAsArray(x);

    expect(y).toEqual(['a', 'd', 'b', 'c', '']);
  });
});
