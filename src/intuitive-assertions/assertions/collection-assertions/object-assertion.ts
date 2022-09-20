import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { Expression } from '../expression/expression';
import { trimArgs } from '../../utils/utils';
import { ExpectedResult } from '../expected-result/expected-result';

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
  public beEmpty(): Continuance<this, object> {
    Execute.stuff
      .checkCondition(!this.opposite ? Object.keys(this.subject).length === 0 : Object.keys(this.subject).length > 0)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, JSON.stringify(this.subject?.valueOf()), 'Expected collection to be empty, but found {1}')
          : ExpectedResult.fail(undefined, JSON.stringify(this.subject?.valueOf()), 'Expected collection to not be empty, but found {1}'),
      );

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the collection has length equal to expected
   * @param length
   */
  public haveLength(length: number): Continuance<this, object> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length === length : Object.keys(this.subject).length !== length,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to have length \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to not have length \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the collection has length equal or greater than the expected
   * @param length
   */
  public haveLengthEqualOrGreaterThan(length: number): Continuance<this, object> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length >= length : Object.keys(this.subject).length <= length,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to have length equal or greater than \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to not have length equal or greater than \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the collection has length equal or greater than the expected
   * @param length
   */
  public haveLengthEqualOrLesserThan(length: number): Continuance<this, object> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? Object.keys(this.subject).length <= length : Object.keys(this.subject).length >= length,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to have length equal or lesser than \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(length, Object.keys(this.subject).length, 'Expected collection to not have length equal or lesser than \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the collection contains null or undefined
   */
  public containsNullOrUndefined(): Continuance<this, object> {
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
      return new Continuance(this, this.subject);
    } else {
      Execute.stuff.throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, JSON.stringify(this.subject?.valueOf()), 'Expected collection contains null or undefined, but found {1}')
          : ExpectedResult.fail(undefined, JSON.stringify(this.subject?.valueOf()), 'Expected collection does not contain null or undefined, but found {1}'),
      );
    }

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the collections contains a key
   * @param expectedKey collection key
   */
  public containsKey(expectedKey: string): Continuance<this, object> {
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
      return new Continuance(this, this.subject);
    } else {
      Execute.stuff.throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedKey, JSON.stringify(this.subject?.valueOf()), 'Expected collection contains \'{0}\' key, but found {1}')
          : ExpectedResult.fail(expectedKey, JSON.stringify(this.subject?.valueOf()), 'Expected collection does not contain \'{0}\' key, but found {1}'),
      );
    }

    return new Continuance(this, this.subject);
  }

  /**
   * Check if the object contains key be value based on expression function
   * @param expression expression function
   */
  public contains(expression: (object: Expression) => boolean): Continuance<this, object> {
    Execute.stuff
      .checkCondition(!this.opposite ? expression(this) : !expression(this))
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(trimArgs(arguments[0]), JSON.stringify(this.subject?.valueOf()), 'Expected collection contains {0}, but found {1}')
          : ExpectedResult.fail(trimArgs(arguments[0]), JSON.stringify(this.subject?.valueOf()), 'Expected collection does not contain {0}, but found {1}'),
      );

    return new Continuance(this, this.subject);
  }
}
