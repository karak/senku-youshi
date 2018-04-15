import WorkList from './WorkList';

describe('WorkList', () => {
  let text;
  const storage = {};
  Object.defineProperty(storage, 'value', {
    set: x => (text = x),
    get: () => text,
  });
  let workList;

  beforeEach(() => {
    text = '';
    workList = new WorkList(storage);
  });

  describe('normalize', () => {
    it('trim whitespaces', () => {
      text = ' a\t\n   b c\t ';
      workList.normalize();
      expect(text).toBe('a\nb c');
    });

    it('trim full-width whitespaces', () => {
      text = '　abc　　';
      workList.normalize();
      expect(text).toBe('abc');
    });

    it('trim empty line', () => {
      text = 'a\n   \nb\nc';
      workList.normalize();
      expect(text).toBe('a\nb\nc');
    });

    it('keep last one empty line', () => {
      text = 'a\n\nb\nc\n\n';
      workList.normalize();
      expect(text).toBe('a\nb\nc\n');
    });
  });

  describe('shuffle', () => {
    /** Fixed random seed through testing */
    const RANDOM_SEED = [123456789, 362436069, 521288629, 88675123];

    beforeEach(() => {
      // fix results
      workList.setRandomSeed(RANDOM_SEED);
    });

    it('shuffles', () => {
      text = ['a', 'b', 'c', 'd', 'e'].join('\n');

      workList.shuffle();

      expect(text).toEqual(['a', 'd', 'e', 'c', 'b'].join('\n'));
    });

    it('shuffles keeping last empty line', () => {
      text = ['a', 'b', 'c', 'd', ''].join('\n');

      workList.shuffle();

      expect(text).toEqual(['a', 'd', 'b', 'c', ''].join('\n'));
    });

    it('complete shuffle at initial state', () => {
      expect(() => workList.shuffle()).not.toThrow();
    });
  });
});
