import { Execute } from '../executor/execute';
import { Continuance } from '../continuance/continuance';

export default abstract class IntuitiveAssertions<TObject> {
  constructor(protected readonly object: TObject) {}

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: TObject): Continuance<this> {
    Execute.stuff
      .checkCondition(Object(this.object).valueOf() === Object(expected).valueOf())
      .throwWithMessage(`Expected to be '${expected}', but found '${this.object}'`);

    return new Continuance(this);
  }

  /**
   * Check if the expected object does not equal to expected value
   * @param expected expected value
   */
  public notBe(expected: TObject): Continuance<this> {
    Execute.stuff
      .checkCondition(Object(this.object).valueOf() !== Object(expected).valueOf())
      .throwWithMessage(`Expected to not be '${expected}', but found '${this.object}'`);

    return new Continuance(this);
  }

  /**
   * Check if the object is null or undefined
   */
  public beNullOrUndefined(): Continuance<this> {
    Execute.stuff.checkCondition(typeof this.object === null || typeof this.object === undefined)
      .throwWithMessage(`Expected to be null or undefined, but found the '${this.object}'`)
    return new Continuance(this);
  }

  /**
   * Check if the object is not null or undefined
   */
  public notBeNullOrUndefined(): Continuance<this> {
    Execute.stuff.checkCondition(typeof this.object !== null || typeof this.object !== undefined)
      .throwWithMessage(`Expected to not be null or undefined, but found the '${this.object}'`)
    return new Continuance(this);
  }
}
