import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import { ExpectedResult } from '../expected-result/expected-result';

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
   * Check if the expected object equals to true statement
   */
  public beTrue(): Continuance<this, any> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value === true : this.value !== true)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(true, this.value, 'Expected value to be \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(true, this.value, 'Expected value to not be \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected object equals to false statement
   */
  public beFalse(): Continuance<this, any> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value === false : this.value !== false)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(false, this.value, 'Expected value to be \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(false, this.value, 'Expected value to not be \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }
}
