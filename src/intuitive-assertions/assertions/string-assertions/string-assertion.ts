import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';

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
   * Check if the expected object is an empty value
   */
  public beEmptyOrWhiteSpace(): Continuance<this, string> {
    Execute.stuff
      .checkCondition(
        !this.opposite ? this.value.length === 0 || this.value === ' ' : this.value.length > 0 || this.value === ' ',
      )
      .throwWithMessage(
        !this.opposite
          ? `Expected be empty or white space, but found '${this.value}'`
          : `Expected not be empty or white space, but found '${this.value}'`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected the '${this.value}' contains '${expected}'`
          : `Expected the '${this.value}' does not contain '${expected}'`,
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
        .throwWithMessage(
          !this.opposite
            ? `Expected the '${this.value}' contains '${expectedString}'`
            : `Expected the '${this.value}' does not contain '${expectedString}'`,
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
        Execute.stuff.throwWithMessage(
          !this.opposite
            ? `Expected the '${this.value}' contains '${expectedString}'`
            : `Expected the '${this.value}' does not contain '${expectedString}'`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected the '${this.value}' starts with '${expected}'`
          : `Expected the '${this.value}' does not start with '${expected}'`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected the '${this.value}' ends with '${expected}'`
          : `Expected the '${this.value}' does not end with '${expected}'`,
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
      .throwWithMessage(
        !this.opposite
          ? `Expected the '${this.value}' has a length '${expectedLength}', but found '${this.value.length}'`
          : `Expected the '${this.value}' has not a length '${expectedLength}', but found '${this.value.length}'`,
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the expected string matches to regular expression
   * @param regexExpr regular expression | string
   */
  public match(regexExpr: string | RegExp): Continuance<this, string> {
    if (!this.opposite ? this.value.match(regexExpr) === null : this.value.match(regexExpr) !== null) {
      Execute.stuff.throwWithMessage(
        !this.opposite
          ? `Expected the '${this.value}' matches with ${regexExpr} regular expression`
          : `Expected the '${this.value}' does not match with ${regexExpr} regular expression`,
      );
    }

    return new Continuance(this, this.value);
  }
}
