import '../src/index';

describe('test for number assertion', () => {
  test('bePositive()', () => {
    const positive = 1;

    positive.must().bePositive();
  });

  test('not.bePositive()', () => {
    const positive = -1;

    positive.must().not.bePositive();
  });

  test('beNegative()', () => {
    const negative = -1;

    negative.must().beNegative();
  });

  test('not.beNegative()', () => {
    const negative = 1;

    negative.must().not.beNegative();
  });

  test('be()', () => {
    const number = 12;

    number.must().be(12);
  });

  test('not.be()', () => {
    const number = 11;

    number.must().not.be(12);
  });

  test('beGreaterThan()', () => {
    const number = 12;

    number.must().beGreaterThan(10);
  });

  test('not.beGreaterThan()', () => {
    const number = 9;

    number.must().not.beGreaterThan(10);
  });

  test('beLesserThan()', () => {
    const number = 12;

    number.must().beLesserThan(13);
  });

  test('not.beLesserThan()', () => {
    const number = 14;

    number.must().not.beLesserThan(13);
  });

  test('beInRange()', () => {
    const number = 5;

    number.must().beInRange(0, 10);
  });

  test('not.beInRange()', () => {
    const number = 11;

    number.must().not.beInRange(0, 10);
  });

  test('negative bePositive() for 0', () => {
    const positive = 0;

    expect(() => positive.must().bePositive()).toThrow();
  });

  test('negative bePositive() < 0', () => {
    const positive = -1;

    expect(() => positive.must().bePositive()).toThrow();
  });

  test('negative not.bePositive() < 0', () => {
    const positive = 2;

    expect(() => positive.must().not.bePositive()).toThrow();
  });

  test('negative beNegative() for 0', () => {
    const negative = 0;

    expect(() => negative.must().beNegative()).toThrow();
  });

  test('negative beNegative() > 0', () => {
    const negative = 1;

    expect(() => negative.must().beNegative()).toThrow();
  });

  test('negative not.beNegative() > 0', () => {
    const negative = -1;

    expect(() => negative.must().not.beNegative()).toThrow();
  });

  test('negative beGreaterThan()', () => {
    const number = 12;

    expect(() => number.must().beGreaterThan(20)).toThrow();
  });

  test('negative not.beGreaterThan()', () => {
    const number = 22;

    expect(() => number.must().not.beGreaterThan(20)).toThrow();
  });

  test('negative beLesserThan()', () => {
    const number = 12;

    expect(() => number.must().beLesserThan(10)).toThrow();
  });

  test('negative not.beLesserThan()', () => {
    const number = 9;

    expect(() => number.must().not.beLesserThan(10)).toThrow();
  });

  test('negative beInRange()', () => {
    const number = 5;

    expect(() => number.must().beInRange(10, 12)).toThrow();
  });

  test('negative not.beInRange()', () => {
    const number = 11;

    expect(() => number.must().not.beInRange(10, 12)).toThrow();
  });
});
