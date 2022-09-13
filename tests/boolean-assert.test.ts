import '../src/index';

describe('test for boolean assertion', () => {
  test('beTruth()', () => {
    const bool = true;

    bool.must().beTrue();
  });

  test('not.beTruth()', () => {
    const bool = false;

    bool.must().not.beTrue();
  });

  test('beFalse()', () => {
    const bool = false;

    bool.must().beFalse();
  });

  test('not.beFalse()', () => {
    const bool = true;

    bool.must().not.beFalse();
  });

  test('be()', () => {
    const bool = false;

    bool.must().be(false);
  });

  test('not.be()', () => {
    const bool = false;

    bool.must().not.be(true);
  });

  test('negative beTruth()', () => {
    const bool = false;

    expect(() => bool.must().beTrue()).toThrow();
  });

  test('negative not.beTruth()', () => {
    const bool = true;

    expect(() => bool.must().not.beTrue()).toThrow();
  });

  test('negative beFalse()', () => {
    const bool = true;

    expect(() => bool.must().beFalse()).toThrow();
  });

  test('negative not.beFalse()', () => {
    const bool = false;

    expect(() => bool.must().not.beFalse()).toThrow();
  });

  test('negative be()', () => {
    const bool = true;

    expect(() => bool.must().be(false)).toThrow();
  });

  test('negative not.be()', () => {
    const bool = false;

    expect(() => bool.must().not.be(false)).toThrow();
  });
});
