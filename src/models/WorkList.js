import shuffle from './shuffle';
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
  }

  shuffle() {
    this._storage.value = shuffle(this._storage.value);
  }

  normalize() {
    this._storage.value = normalizeList(this._storage.value);
  }
}

