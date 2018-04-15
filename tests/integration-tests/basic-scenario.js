describe('basic sceinario', () => {
  it('paste and shuffle, then copy.', () => {
    const TEXTAREA_SELECTOR = 'controlled-textarea textarea';
    const SHUFFLE_BUTTON_SELECTOR = 'button[ref="shuffleButton"]';
    const COPY_BUTTON_SELECTOR = 'button[ref="copyButton"]';
    const data = 'a\n\n  b\nc  \n  ';
    const expectedPastedData = 'a\nb\nc\n';
    const expectedShuffledData = 'a\nc\nb\n';

    browser.url('/index.html');

    browser.waitForExist('senku-app');

    // Paste
    browser.setValue(TEXTAREA_SELECTOR, data);
    const pastedData = browser.getValue(TEXTAREA_SELECTOR);
    expect(pastedData).toBe(expectedPastedData);

    // Shuffle
    browser.click(SHUFFLE_BUTTON_SELECTOR);
    const shuffledData = browser.getValue(TEXTAREA_SELECTOR);
    expect(shuffledData.split('\n').sort()).toEqual(expectedShuffledData.split('\n').sort());

    // Copy
    browser.click(COPY_BUTTON_SELECTOR);

    // TODO: How to access to clipboard on wdio?
  });
});
