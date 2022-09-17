import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import IntuitiveAssertions from '../intuitive-assertion';

export class NumberAssertion extends IntuitiveAssertions<number> {
  private actual: number;

  constructor(value: number, opposite = false) {
    super(value, opposite);
    this.actual = Number(this.object).valueOf();
  }

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new NumberAssertion(this.object, true);
  }

  /**
   * Check if the number is positive
   */
  public bePositive(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.actual > 0 : this.actual < 0)
      .throwWithMessage(
        !this.opposite
          ? `Expected positive value '${this.actual}', but value is lesser than 0`
          : `Expected not positive value '${this.actual}', but value is lesser than 0`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is negative
   */
  public beNegative(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.actual < 0 : this.actual > 0)
      .throwWithMessage(
        !this.opposite
          ? `Expected negative value '${this.actual}', but value is greater than 0`
          : `Expected not negative value '${this.actual}', but value is greater than 0`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is greater than expected value
   * @param expected expected value
   */
  public beGreaterThan(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.actual > Number(expected).valueOf() : this.actual < Number(expected).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.actual}' greater than '${expected}', but value is lesser`
          : `Expected a value '${this.actual}' not be greater than '${expected}', but value is lesser`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is lesser than expected value
   * @param expected expected value
   */
  public beLesserThan(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.actual < Number(expected).valueOf() : this.actual > Number(expected).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.actual}' lesser than '${expected}', but value is greater`
          : `Expected a value '${this.actual}' not be lesser than '${expected}', but value is greater`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is greater or equal than expected value
   * @param expected expected value
   */
  public beGreaterOrEqualTo(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.actual >= Number(expected).valueOf() : this.actual <= Number(expected).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.actual}' greater or equal to '${expected}', but value is lesser`
          : `Expected a value '${this.actual}' not be greater or equal to '${expected}', but value is lesser`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is lesser or equal than expected value
   * @param expected expected value
   */
  public beLesserOrEqualTo(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.actual <= Number(expected).valueOf() : this.actual >= Number(expected).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected a value '${this.actual}' lesser or equal to '${expected}', but value is greater`
          : `Expected a value '${this.actual}' not be lesser or equal to '${expected}', but value is greater`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is within the range
   * @param rangeStart start range value
   * @param rangeEnd end range value
   */
  public beInRange(rangeStart: number, rangeEnd: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.actual >= Number(rangeStart).valueOf() && this.actual <= Number(rangeEnd).valueOf()
          : this.actual <= Number(rangeStart).valueOf() || this.actual >= Number(rangeEnd).valueOf(),
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected value '${this.actual}' to be between '${rangeStart}' and '${rangeEnd}', but value is out of this range`
          : `Expected value '${this.actual}' to not be between '${rangeStart}' and '${rangeEnd}', but value is in this range`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is integer
   */
  public beInteger(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? Number.isInteger(this.actual) : !Number.isInteger(this.actual))
      .throwWithMessage(
        !this.opposite
          ? `Expected value '${this.actual}' to be integer, but value has fraction`
          : `Expected value '${this.actual}' to be fraction, but value is integer`,
      );

    return new Continuance(this);
  }
}
