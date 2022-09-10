import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import IntuitiveAssertions from '../intuitive-assertion';

export class NumberAssertion extends IntuitiveAssertions<number> {
  private actual: number;

  constructor(value: number) {
    super(value);
    this.actual = Number(this.object).valueOf();
  }

  /**
   * Check if the number is positive
   */
  public bePositive(): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual > 0)
      .throwWithMessage(`Expected '${this.actual}' to be positive, but value is lesser than 0`);

    return new Continuance(this);
  }

  /**
   * Check if the number is negative
   */
  public beNegative(): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual < 0)
      .throwWithMessage(`Expected '${this.actual}' to be negative, but value is greater than 0`);

    return new Continuance(this);
  }

  /**
   * Check if the number is greater than expected value
   * @param expected expected value
   */
  public beGreaterThan(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual > Number(expected).valueOf())
      .throwWithMessage(`Expected '${this.actual}' to be greater than '${expected}', but value is lesser`);

    return new Continuance(this);
  }

  /**
   * Check if the number is lesser than expected value
   * @param expected expected value
   */
  public beLesserThan(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual < Number(expected).valueOf())
      .throwWithMessage(`Expected '${this.actual}' to be lesser than '${expected}', but value is greater`);

    return new Continuance(this);
  }

  /**
   * Check if the number is greater or equal than expected value
   * @param expected expected value
   */
  public beGreaterOrEqualTo(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual >= Number(expected).valueOf())
      .throwWithMessage(`Expected '${this.actual}' to be greater or equal to '${expected}', but value is lesser`);

    return new Continuance(this);
  }

  /**
   * Check if the number is lesser or equal than expected value
   * @param expected expected value
   */
  public beLesserOrEqualTo(expected: number): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual <= Number(expected).valueOf())
      .throwWithMessage(`Expected '${this.actual}' to be lesser or equal to '${expected}', but value is greater`);

    return new Continuance(this);
  }

  /**
   * Check if the number is within the range
   * @param rangeStart start range value
   * @param rangeEnd end range value
   */
  public beInRange(rangeStart: number, rangeEnd: number): Continuance<this> {
    Execute.stuff
      .checkCondition(this.actual >= Number(rangeStart).valueOf() && this.actual <= Number(rangeEnd).valueOf())
      .throwWithMessage(
        `Expected '${this.actual}' to be in range '${rangeStart}' - '${rangeEnd}', but value is out of this range`
      );

    return new Continuance(this);
  }

  /**
   * Check if the number is integer
   */
  public beInteger(): Continuance<this> {
    Execute.stuff
      .checkCondition(Number.isInteger(this.actual))
      .throwWithMessage(`Expected '${this.actual}' to be integer, but value has fraction`);

    return new Continuance(this);
  }

  /**
   * Check if the number is fraction
   */
  public notBeInteger(): Continuance<this> {
    Execute.stuff
      .checkCondition(!Number.isInteger(this.actual))
      .throwWithMessage(`Expected '${this.actual}' to be fraction, but value is integer`);

    return new Continuance(this);
  }
}
