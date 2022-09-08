import '../index';

describe('test for boolean assertion', () => {
  test('beTruth()', () => {
    const bool = true;

    bool.must().beTruth();
  });

  test('beFalse()', () => {
    const bool = false;

    bool.must().beFalse();
  });

  test('be()', () => {
    const bool = false;

    bool.must().be(false);
  });

  test('negative beTruth()', () => {
    const bool = false;

    expect(() => bool.must().beTruth()).toThrow();
  });

  test('negative beFalse()', () => {
    const bool = true;

    expect(() => bool.must().beFalse()).toThrow();
  });

  test('negative be()', () => {
    const bool = true;

    expect(() => bool.must().be(false)).toThrow();
  });
});
