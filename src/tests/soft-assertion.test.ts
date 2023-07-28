import '../core/index';

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
});

