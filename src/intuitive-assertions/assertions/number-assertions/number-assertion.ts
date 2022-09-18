import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';

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
          ? Object(this.value).valueOf() === Object(expected).valueOf()
          : Object(this.value).valueOf() !== Object(expected).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected value to be '${JSON.stringify(expected)}', but found '${JSON.stringify(this.value)}'`
          : `Expected value to not be '${JSON.stringify(expected)}', but found '${JSON.stringify(this.value)}'`,
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is positive
   */
  public bePositive(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value > 0 : this.value < 0)
      .throwWithMessage(
        !this.opposite
          ? this.value === 0
            ? `Expected positive value, but value '${this.value}' equal to 0`
            : `Expected positive value, but value '${this.value}' is lesser than 0`
          : this.value === 0
          ? `Expected not positive value, but value '${this.value}' equal to 0`
          : `Expected not positive value, but value '${this.value}' is greater than 0`,
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is negative
   */
  public beNegative(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value < 0 : this.value > 0)
      .throwWithMessage(
        !this.opposite
          ? this.value === 0
            ? `Expected negative value, but value '${this.value}' equal to 0`
            : `Expected negative value, but value '${this.value}' is greater than 0`
          : this.value === 0
          ? `Expected not negative value, but value '${this.value}' equal to 0`
          : `Expected not negative value, but value '${this.value}' is lesser than 0`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.value}' be greater than '${expected}', but value is lesser`
          : `Expected a value '${this.value}' not be greater than '${expected}', but value is greater`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.value}' be lesser than '${expected}', but value is greater`
          : `Expected a value '${this.value}' not be lesser than '${expected}', but value is lesser`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.value}' greater or equal to '${expected}', but value is lesser`
          : `Expected a value '${this.value}' not be greater or equal to '${expected}', but value is lesser`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.value}' lesser or equal to '${expected}', but value is greater`
          : `Expected a value '${this.value}' not be lesser or equal to '${expected}', but value is greater`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected value '${this.value}' to be between '${rangeStart}' and '${rangeEnd}', but value is out of this range`
          : `Expected value '${this.value}' to not be between '${rangeStart}' and '${rangeEnd}', but value is in this range`,
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the number is integer
   */
  public beInteger(): Continuance<this, number> {
    Execute.stuff
      .checkCondition(!this.opposite ? Number.isInteger(this.value) : !Number.isInteger(this.value))
      .throwWithMessage(
        !this.opposite
          ? `Expected value '${this.value}' to be integer, but value has fraction`
          : `Expected value '${this.value}' to be fraction, but value is integer`,
      );

    return new Continuance(this, this.value);
  }
}
