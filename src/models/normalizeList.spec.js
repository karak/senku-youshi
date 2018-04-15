import normalizeList from './normalizeList';

describe('normalizeList', () => {
  it('trim whitespaces', () => {
    const text = normalizeList(' a\t\n   b c\t ');
    expect(text).toBe('a\nb c');
  });

  it('trim empty line', () => {
    const text = normalizeList('a\n   \nb\nc');
    expect(text).toBe('a\nb\nc');
  });

  it('keep last one empty line', () => {
    const text = normalizeList('a\n\nb\nc\n\n');
    expect(text).toBe('a\nb\nc\n');
  });
});
