import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { ExpectedResult } from '../expected-result/expected-result';

export class StringAssertion {
  constructor(private readonly value: string, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new StringAssertion(this.value, true);
  }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: string): Continuance<this, string> {
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
   * Check if the expected object is an empty value
   */
  public beEmptyOrWhiteSpace(): Continuance<this, string> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value.length === 0 || this.value === ' ' : this.value.length > 0 || this.value === ' ',
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, this.value, 'Expected be empty or white space, but found \'{1}\'')
          : ExpectedResult.fail(undefined, this.value, 'Expected not be empty or white space, but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string contains the expected value
   * @param expected expected string
   */
  public contains(expected: string): Continuance<this, string> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value.includes(expected) : !this.value.includes(expected))
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' contains \'{0}\'')
          : ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' does not contain \'{0}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string contains all expected values from string array
   * @param expectedStringArray expected string array
   */
  public containsAll(expectedStringArray: Array<string>): Continuance<this, string> {
    expectedStringArray.forEach((expectedString) => {
      Execute.stuff
        .checkCondition(!this.opposite ? this.value.includes(expectedString) : !this.value.includes(expectedString))
        .throwWithResultMessage(
          !this.opposite
            ? ExpectedResult.fail(expectedString, this.value, 'Expected the \'{1}\' contains \'{0}\'')
            : ExpectedResult.fail(expectedString, this.value, 'Expected the \'{1}\' does not contain \'{0}\''),
        );
    });

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string contains at least one expected values from string array
   * @param expectedStringArray expected string array
   */
  public containsAny(expectedStringArray: Array<string>): Continuance<this, string> {
    expectedStringArray.forEach((expectedString) => {
      if (!this.opposite ? !this.value.includes(expectedString) : this.value.includes(expectedString)) {
        Execute.stuff.throwWithResultMessage(
          !this.opposite
            ? ExpectedResult.fail(expectedString, this.value, 'Expected the \'{1}\' contains \'{0}\'')
            : ExpectedResult.fail(expectedString, this.value, 'Expected the \'{1}\' does not contain \'{0}\''),
        );
      }
    });

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string starts with the expected value
   * @param expected expected string
   */
  public startsWith(expected: string): Continuance<this, string> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value.startsWith(expected) : !this.value.startsWith(expected))
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' starts with \'{0}\'')
          : ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' does not start with \'{0}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string ends with the expected value
   * @param expected expected string
   */
  public endsWith(expected: string): Continuance<this, string> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value.endsWith(expected) : !this.value.endsWith(expected))
      .throwWithResultMessage(
        !this.opposite
        ? ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' ends with \'{0}\'')
        : ExpectedResult.fail(expected, this.value, 'Expected the \'{1}\' does not end with \'{0}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string has a length equals to the expected value
   * @param expectedLength expected length
   */
  public hasLength(expectedLength: number): Continuance<this, string> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value.length === expectedLength : this.value.length !== expectedLength)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedLength, this.value.length, `Expected the '${this.value}' has a length '{0}', but found '{1}'`)
          : ExpectedResult.fail(expectedLength, this.value.length, `Expected the '${this.value}' has not a length '{0}', but found '{1}'`),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string matches to regular expression
   * @param regexExpr regular expression | string
   */
  public match(regexExpr: string | RegExp): Continuance<this, string> {
    if (!this.opposite ? this.value.match(regexExpr) === null : this.value.match(regexExpr) !== null) {
      Execute.stuff.throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(regexExpr, this.value, 'Expected the \'{1}\' matches with {0} regular expression')
          : ExpectedResult.fail(regexExpr, this.value, 'Expected the \'{1}\' does not match with {0} regular expression'),
      );
    }

    return new Continuance(this, this.value);
  }
}
