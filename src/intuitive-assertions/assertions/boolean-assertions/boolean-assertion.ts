import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';

export class BooleanAssertion {
  constructor(private readonly value: boolean, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new BooleanAssertion(this.value, true);
  }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: boolean): Continuance<this, any> {
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
   * Check if the expected object equals to true statement
   */
  public beTrue(): Continuance<this, any> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value === true : this.value !== true)
      .throwWithMessage(
        !this.opposite
          ? `Expected value to be 'True', but found '${this.value}'`
          : `Expected value to not be 'True', but found '${this.value}'`,
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected object equals to false statement
   */
  public beFalse(): Continuance<this, any> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value === false : this.value !== false)
      .throwWithMessage(
        !this.opposite
          ? `Expected value to be 'False', but found '${this.value}'`
          : `Expected value to not be 'False', but found '${this.value}'`,
      );

    return new Continuance(this, this.value);
  }
}
