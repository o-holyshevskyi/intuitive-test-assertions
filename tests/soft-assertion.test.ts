import '../src/core/index';

describe('test for boolean soft assertion', () => {
  test('soft.be()', () => {
    const bool = true;

    expect(() => bool.must().soft.be(false)).not.toThrow();
  });

  test('soft.beTrue()', () => {
    const bool = false;

    expect(() => bool.must().soft.beTrue()).not.toThrow();
  });

  test('soft.beFalse()', () => {
    const bool = true;

    expect(() => bool.must().soft.beFalse()).not.toThrow();
  });

  test('soft.not.be()', () => {
    const bool = true;

    expect(() => bool.must().soft.not.be(true)).not.toThrow();
  });

  test('soft.not.beTrue()', () => {
    const bool = true;

    expect(() => bool.must().soft.not.beTrue()).not.toThrow();
  });

  test('soft.not.beFalse()', () => {
    const bool = false;

    expect(() => bool.must().soft.not.beFalse()).not.toThrow();
  });
});

