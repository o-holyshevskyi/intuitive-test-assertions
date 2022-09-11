import { Execute } from '../../executor/execute';
import { Continuance } from '../../continuance/continuance';
import IntuitiveAssertions from '../intuitive-assertion';

export class BooleanAssertion extends IntuitiveAssertions<boolean> {
  constructor(value: boolean) {
    super(value);
  }

  /**
   * Check if the expected object equals to true statement
   */
  public beTrue(): Continuance<this> {
    Execute.stuff
      .checkCondition(Boolean(this.object).valueOf() === Boolean(true).valueOf())
      .throwWithMessage(`Expected ${this.object}, but found False.`);

    return new Continuance(this);
  }

  /**
   * Check if the expected object equals to false statement
   */
  public beFalse(): Continuance<this> {
    Execute.stuff
      .checkCondition(Boolean(this.object).valueOf() === Boolean(false).valueOf())
      .throwWithMessage(`Expected ${this.object}, but found True.`);

    return new Continuance(this);
  }
}
