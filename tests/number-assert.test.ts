import '../src/index';

describe('test for number assertion', () => {
  test('bePositive()', () => {
    const positive = 1;

    positive.must().bePositive();
  });

  test('beNegative()', () => {
    const negative = -1;

    negative.must().beNegative();
  });

  test('be()', () => {
    const number = 12;

    number.must().be(12);
  });

  test('beGreaterThan()', () => {
    const number = 12;

    number.must().beGreaterThan(10);
  });

  test('beLesserThan()', () => {
    const number = 12;

    number.must().beLesserThan(13);
  });

  test('negative bePositive() for 0', () => {
    const positive = 0;

    expect(() => positive.must().bePositive()).toThrow();
  });

  test('negative bePositive() < 0', () => {
    const positive = -1;

    expect(() => positive.must().bePositive()).toThrow();
  });

  test('negative beNegative() for 0', () => {
    const negative = 0;

    expect(() => negative.must().beNegative()).toThrow();
  });

  test('negative beNegative() > 0', () => {
    const negative = 1;

    expect(() => negative.must().beNegative()).toThrow();
  });

  test('negative beGreaterThan()', () => {
    const number = 12;

    expect(() => number.must().beGreaterThan(20)).toThrow();
  });

  test('negative beLesserThan()', () => {
    const number = 12;

    expect(() => number.must().beLesserThan(10)).toThrow();
  });
});
