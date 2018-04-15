import Random from './Random';
import normalizeList from './normalizeList';

/** Model of a list of works */
export default class WorkList {
  /**
   * constructor
   * @param {object} storage
   * @param {string} storage.value
   */
  constructor(storage) {
    this._storage = storage;
    this._random = new Random();
  }

  /**
   * Set random seed.
   *
   * @param {Array<number>} seed random seed with four numbers(128 bit integer).
   */
  setRandomSeed(seed) {
    this._random.setRandomSeed(seed);
  }

  shuffle() {
    this._storage.value = this._random.shuffle(this._storage.value);
  }

  normalize() {
    this._storage.value = normalizeList(this._storage.value);
  }
}
