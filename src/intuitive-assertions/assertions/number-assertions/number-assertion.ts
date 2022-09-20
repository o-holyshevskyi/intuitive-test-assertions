import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import { ExpectedResult } from '../expected-result/expected-result';

export class NumberAssertion {
  constructor(private readonly value: number, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new NumberAssertion(this.value, true);
  }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.value === expected
          : this.value !== expected,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected value to be \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expected, this.value, 'Expected value to not be \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is positive
   */
  public bePositive(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value > 0 : this.value < 0)
      .throwWithResultMessage(
        !this.opposite
          ? this.value === 0
            ? ExpectedResult.fail(undefined, this.value, 'Expected positive value, but value \'{1}\' equal to 0')
            : ExpectedResult.fail(undefined, this.value, 'Expected positive value, but value \'{1}\' is lesser than 0')
          : this.value === 0
          ? ExpectedResult.fail(undefined, this.value, 'Expected not positive value, but value \'{1}\' equal to 0')
          : ExpectedResult.fail(undefined, this.value, 'Expected not positive value, but value \'{1}\' is greater than 0'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is negative
   */
  public beNegative(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value < 0 : this.value > 0)
      .throwWithResultMessage(
        !this.opposite
        ? this.value === 0
        ? ExpectedResult.fail(undefined, this.value, 'Expected negative value, but value \'{1}\' equal to 0')
        : ExpectedResult.fail(undefined, this.value, 'Expected negative value, but value \'{1}\' is greater than 0')
      : this.value === 0
      ? ExpectedResult.fail(undefined, this.value, 'Expected not negative value, but value \'{1}\' equal to 0')
      : ExpectedResult.fail(undefined, this.value, 'Expected not negative value, but value \'{1}\' is lesser than 0'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is greater than expected value
   * @param expected expected value
   */
  public beGreaterThan(expected: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value > Number(expected).valueOf() : this.value < Number(expected).valueOf(),
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' be greater than \'{0}\', but value is lesser')
          : ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' not be greater than \'{0}\', but value is greater'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is lesser than expected value
   * @param expected expected value
   */
  public beLesserThan(expected: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value < Number(expected).valueOf() : this.value > Number(expected).valueOf(),
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' be lesser than \'{0}\', but value is greater')
          : ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' not be lesser than \'{0}\', but value is lesser'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is greater or equal than expected value
   * @param expected expected value
   */
  public beGreaterOrEqualTo(expected: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value >= Number(expected).valueOf() : this.value <= Number(expected).valueOf(),
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' greater or equal to \'{0}\', but value is lesser')
          : ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' not be greater or equal to \'{0}\', but value is lesser'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is lesser or equal than expected value
   * @param expected expected value
   */
  public beLesserOrEqualTo(expected: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value <= Number(expected).valueOf() : this.value >= Number(expected).valueOf(),
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' lesser or equal to \'{0}\', but value is greater')
          : ExpectedResult.fail(expected, this.value, 'Expected a value \'{1}\' not be lesser or equal to \'{0}\', but value is greater'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is within the range
   * @param rangeStart start range value
   * @param rangeEnd end range value
   */
  public beInRange(rangeStart: number, rangeEnd: number): Continuance<this, number> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.value >= Number(rangeStart).valueOf() && this.value <= Number(rangeEnd).valueOf()
          : this.value <= Number(rangeStart).valueOf() || this.value >= Number(rangeEnd).valueOf(),
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(`between '${rangeStart}' and '${rangeEnd}'`, this.value, 'Expected value \'{1}\' to be {0}, but value is out of this range')
          : ExpectedResult.fail(`between '${rangeStart}' and '${rangeEnd}'`, this.value, 'Expected value \'{1}\' to not be {0}, but value is in this range'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is integer
   */
  public beInteger(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? Number.isInteger(this.value) : !Number.isInteger(this.value))
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, this.value, 'Expected value \'{1}\' to be integer, but value has fraction')
          : ExpectedResult.fail(undefined, this.value, 'Expected value \'{1}\' to be fraction, but value is integer'),
      );

    return new Continuance(this, this.value);
  }
}
