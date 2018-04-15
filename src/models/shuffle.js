import split from 'lodash/split';
import xorshift0, { constructor as XorShift } from 'xorshift';

let xorshift = xorshift0;

export function setRandomSeed(seed) {
  xorshift = new XorShift(seed);
}

/** generate integer in range [lower, upper) */
function uniformInt(lower, upper) {
  const k = xorshift.random();
  return Math.floor(lower + k * (upper - lower));
}

/** swap i-th element and j-th element */
function swap(xs, i, j) {
  const tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}

/**
 * Shuffle an array in-place
 *
 * @param {Array<T>} xs array to shuffle
 * @param {number} start start index
 * @param {number} end end index(exclusive)
 * @returns {void}
 * @template T
 */
function randomShuffle(xs, start, end) {
  if (start >= end) {
    return;
  } else {
    const i = uniformInt(start, end);
    swap(xs, start, i);
    randomShuffle(xs, start + 1, end);
  }
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

/**
 * Shuffle a list of works separated by new-line
 *
 * @param {string} worksText list of works
 * @return {string} shuffled list
 */
export default function shuffle(worksText) {
  const works = split(worksText, '\n');

  const startIndex = 0;
  const endIndex = firstOflastEmptyElements(works);
  randomShuffle(works, startIndex, endIndex);

  return works.join('\n');
}
