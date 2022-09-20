import '../src/index';

describe('Positive tests for boolean assertion', () => {
  test('beTruth()', () => {
    const bool = true;

    bool.must().beTrue();
  });

  test('not.beTruth()', () => {
    const bool = false;

    bool.must().not.beTrue().and.beFalse();
  });

  test('beFalse()', () => {
    const bool = false;

    bool.must().beFalse().and.not.beTrue();
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
});

describe('Negative tests for boolean assertion', () => {
  test('negative beTruth()', () => {
    const bool = false;

    expect(() => bool.must().beTrue()).toThrow('Expected value to be \'true\', but found \'false\'');
  });

  test('negative not.beTruth()', () => {
    const bool = true;

    expect(() => bool.must().not.beTrue()).toThrow('Expected value to not be \'true\', but found \'true\'');
  });

  test('negative beFalse()', () => {
    const bool = true;

    expect(() => bool.must().beFalse()).toThrow('Expected value to be \'false\', but found \'true\'');
  });

  test('negative not.beFalse()', () => {
    const bool = false;

    expect(() => bool.must().not.beFalse()).toThrow('Expected value to not be \'false\', but found \'false\'');
  });

  test('negative be()', () => {
    const bool = true;

    expect(() => bool.must().be(false)).toThrow('Expected value to be \'false\', but found \'true\'');
  });

  test('negative not.be()', () => {
    const bool = false;

    expect(() => bool.must().not.be(false)).toThrow('Expected value to not be \'false\', but found \'false\'');
  });
});