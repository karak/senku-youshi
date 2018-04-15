import map from 'lodash/map';
import split from 'lodash/split';
import filter from 'lodash/filter';
import trim from 'lodash/trim';

/**
 * normalize list of works with noise
 *
 * @param {string} value - original value
 * @returns {string} - normalized value
 *
 * @todo implementation
 */
export default function normalizeList(value) {
  return split(value, /\r?\n/)
    .map(x => trim(x))
    .filter((x, i, xs) => x.length > 0 || i === xs.length - 1)
    .join('\n');
}
