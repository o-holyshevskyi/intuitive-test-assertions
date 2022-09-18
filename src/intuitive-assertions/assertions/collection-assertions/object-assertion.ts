import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { Expression } from '../expression/expression';
import { trimArgs } from '../../utils/utils';

export class ObjectAssertion {
  constructor(public readonly subject: object | any, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new ObjectAssertion(this.subject, true);
  }

  /**
   * Check if the collection is empty
   */
  public beEmpty(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? Object.keys(this.subject).length === 0 : Object.keys(this.subject).length > 0)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to be empty, but found ${JSON.stringify(this.subject?.valueOf())}`
          : `Expected collection to not be empty, but found ${JSON.stringify(this.subject?.valueOf())}`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equal to expected
   * @param length
   */
  public haveLength(length: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length === length : Object.keys(this.subject).length !== length,
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to have length '${length}', but found '${Object.keys(this.subject).length}'`
          : `Expected collection to not have length '${length}', but found '${Object.keys(this.subject).length}'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equal or greater than the expected
   * @param length
   */
  public haveLengthEqualOrGreaterThan(length: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length >= length : Object.keys(this.subject).length <= length,
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to have length equal or greater than '${length}', but found '${
              Object.keys(this.subject).length
            }'`
          : `Expected collection to not have length equal or greater than '${length}', but found '${
              Object.keys(this.subject).length
            }'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equal or greater than the expected
   * @param length
   */
  public haveLengthEqualOrLesserThan(length: number): Continuance<this> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length <= length : Object.keys(this.subject).length >= length,
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to have length equal or lesser than '${length}', but found '${
              Object.keys(this.subject).length
            }'`
          : `Expected collection to not have length equal or lesser than '${length}', but found '${
              Object.keys(this.subject).length
            }'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection contains null or undefined
   */
  public containsNullOrUndefined(): Continuance<this> {
    let isNullOrUndefined;

    try {
      Object.values(this.subject).forEach((val) => {
        if (!this.opposite ? val === null || val === undefined : val !== null || val !== undefined) {
          throw true;
        }
      });
    } catch (e) {
      isNullOrUndefined = e;
    }

    if (!this.opposite ? isNullOrUndefined : !isNullOrUndefined) {
      return new Continuance(this);
    } else {
      Execute.stuff.throwWithMessage(
        !this.opposite
          ? `Expected collection contains null or undefined, but found ${JSON.stringify(this.subject?.valueOf())}`
          : `Expected collection does not contain null or undefined, but found ${JSON.stringify(
              this.subject?.valueOf(),
            )}`,
      );
    }

    return new Continuance(this);
  }

  /**
   * Check if the collections contains a key
   * @param expectedKey collection key
   */
  public containsKey(expectedKey: string): Continuance<this> {
    let isContainsProp;

    try {
      Object.keys(this.subject).forEach((key) => {
        if (key === expectedKey) {
          throw !this.opposite ? true : false;
        }
      });
    } catch (e) {
      isContainsProp = e;
    }

    if (isContainsProp) {
      return new Continuance(this);
    } else {
      Execute.stuff.throwWithMessage(
        !this.opposite
          ? `Expected collection contains '${expectedKey}' key, but found ${JSON.stringify(this.subject?.valueOf())}`
          : `Expected collection does not contain '${expectedKey}' key, but found ${JSON.stringify(
              this.subject?.valueOf(),
            )}`,
      );
    }

    return new Continuance(this);
  }

  /**
   * Check if the object contains key be value based on expression function
   * @param expression expression function
   */
  public contains(expression: (object: Expression) => boolean): void {
    Execute.stuff
      .checkCondition(!this.opposite ? expression(this) : !expression(this))
      .throwWithMessage(
        !this.opposite
          ? `Expected collection contains ${trimArgs(arguments[0])}, but found ${JSON.stringify(
              this.subject?.valueOf(),
            )}}`
          : `Expected collection does not contain ${trimArgs(arguments[0])}, but found ${JSON.stringify(
              this.subject?.valueOf(),
            )}}`,
      );
  }
}
