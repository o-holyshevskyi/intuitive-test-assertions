import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import IntuitiveAssertions from '../intuitive-assertion';

export class BooleanAssertion extends IntuitiveAssertions<boolean> {
  constructor(value: boolean, opposite = false) {
    super(value, opposite);
  }

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new BooleanAssertion(this.object, true);
  }

  /**
   * Check if the expected object equals to true statement
   */
  public beTrue(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.object === true : this.object !== true)
      .throwWithMessage(
        !this.opposite ? `Expected ${this.object}, but found False.` : `Expected ${this.object} not be True`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the expected object equals to false statement
   */
  public beFalse(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.object === false : this.object !== false)
      .throwWithMessage(
        !this.opposite ? `Expected ${this.object}, but found True.` : `Expected ${this.object} not be False`,
      );

    return new Continuance(this);
  }
}
