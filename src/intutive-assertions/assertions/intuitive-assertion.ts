import { Execute } from '../executor/execute';
import { Continuance } from '../continuance/continuance';

export default abstract class IntuitiveAssertions<TObject> {
  constructor(protected readonly object: TObject, protected readonly opposite = false) { }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: TObject): Continuance<this> {
    Execute.stuff
      .checkCondition(
          !this.opposite 
            ? Object(this.object).valueOf() === Object(expected).valueOf()
            : Object(this.object).valueOf() !== Object(expected).valueOf()
      )
      .throwWithMessage(
          !this.opposite
            ? `Expected value to be '${expected}', but found '${this.object}'`
            : `Expected value to not be '${expected}', but found '${this.object}'`
          );

    return new Continuance(this);
  }

  /**
   * Check if the object is null or undefined
   */
  public beNullOrUndefined(): Continuance<this> {
    Execute.stuff.checkCondition(
        !this.opposite
          ? typeof this.object === null || typeof this.object === undefined
          : typeof this.object !== null || typeof this.object !== undefined
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected value to be null or undefined, but found the '${this.object}'`
          : `Expected value to not be null or undefined, but found the '${this.object}'`)
    return new Continuance(this);
  }
}
