import split from 'lodash/split';
import xorshift0, { constructor as XorShift } from 'xorshift';

/** swap i-th element and j-th element */
function swap(xs, i, j) {
  const tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}

/**
 * detect last sequence of non-empty string
 *
 * @param {Array<string>} xs
 * @returns {number} first index of the sequence if exists, length of the array otherwise
 */
function firstOflastEmptyElements(xs) {
  for (let i = xs.length; i > 0; i -= 1) {
    if (xs[i - 1].length > 0) {
      return i;
    }
  }
}

/** Random algorithm */
export default class Random {
  constructor() {
    this.xorshift = xorshift0;
  }

  setRandomSeed(seed) {
    this.xorshift = new XorShift(seed);
  }

  /** generate integer in range [lower, upper) */
  uniformInt(lower, upper) {
    const k = this.xorshift.random();
    return Math.floor(lower + k * (upper - lower));
  }

  /**
   * Shuffle an array in-place
   *
   * @param {Array<T>} xs array to shuffle
   * @param {number} start start index
   * @param {number} end end index(exclusive)
   * @returns {void}
   * @template T
   * @private
   */
  randomShuffle(xs, start, end) {
    if (start >= end) {
      return;
    } else {
      const i = this.uniformInt(start, end);
      swap(xs, start, i);
      this.randomShuffle(xs, start + 1, end);
    }
  }

  /**
   * Shuffle a list of works separated by new-line
   *
   * @param {string} worksText list of works
   * @return {string} shuffled list
   */
  shuffle(worksText) {
    const works = split(worksText, '\n');

    const startIndex = 0;
    const endIndex = firstOflastEmptyElements(works);
    this.randomShuffle(works, startIndex, endIndex);

    return works.join('\n');
  }
}
