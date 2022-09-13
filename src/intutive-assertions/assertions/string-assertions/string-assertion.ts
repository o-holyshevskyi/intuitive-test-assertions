import { Continuance } from "../../continuance/continuance";
import { Execute } from "../../executor/execute";
import IntuitiveAssertions from "../intuitive-assertion";

export class StringAssertion extends IntuitiveAssertions<string> {
    private actual: string;

    constructor(value: string, opposite = false) {
        super(value, opposite);
        this.actual = String(this.object).valueOf();
    }

    /**
     * Use not if you need to check opposite statement
     */
    get not() {
        return new StringAssertion(this.object, true);
    }

    /**
     * Check if the expected object is an empty value
     */
    public beEmptyOrWhiteSpace(): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite 
                    ? this.actual.length === 0
                    : this.actual.length > 0 || this.actual === ' '
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected be empty or white space, but found '${this.object}'`
                    : `Expected not be empty or white space, but found '${this.actual}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the expected string contains the expected value
     * @param expected expected string
     */
    public contains(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(
            !this.opposite
                ? this.actual.includes(expected)
                : !this.actual.includes(expected)
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected the '${this.actual}' contains '${expected}'`
                    : `Expected the '${this.actual}' does not contain '${expected}'`
            );

        return new Continuance(this);
    }
    
    /**
     * Check if the expected string contains all expected values from string array
     * @param expectedStringArray expected string array
     */
    public containsAll(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            Execute.stuff.checkCondition(
                    !this.opposite
                        ? this.actual.includes(expectedString)
                        : !this.actual.includes(expectedString)
                )
                .throwWithMessage(
                    !this.opposite
                        ? `Expected the '${this.actual}' contains '${expectedString}'`
                        : `Expected the '${this.actual}' does not contain '${expectedString}'`
                );
        });

        return new Continuance(this);
    }
    
    /**
     * Check if the expected string contains at least one expected values from string array
     * @param expectedStringArray expected string array
     */
    public containsAny(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            if (
                !this.opposite 
                    ? !this.actual.includes(expectedString)
                    : !this.actual.includes(expectedString)
                ) {
                    Execute.stuff.throwWithMessage(
                        !this.opposite
                            ? `Expected the '${this.actual}' contains '${expectedString}'`
                            : `Expected the '${this.actual}' contains '${expectedString}'`);
            }
        });

        return new Continuance(this);
    }
    
    /**
     * Check if the expected string starts with the expected value
     * @param expected expected string
     */
    public startsWith(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.actual.startsWith(expected)
                    : !this.actual.startsWith(expected)
            )
            .throwWithMessage(
                !this.opposite    
                    ? `Expected the '${this.actual}' starts with ${expected}`
                    : `Expected the '${this.actual}' does not start with ${expected}`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string ends with the expected value
     * @param expected expected string
     */
    public endsWith(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite    
                    ? this.actual.endsWith(expected)
                    : !this.actual.endsWith(expected)
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected the '${this.actual}' ends with ${expected}`
                    : `Expected the '${this.actual}' does not end with ${expected}`
            );

        return new Continuance(this);
    }

    /**
     * Check if the expected string has a length equals to the expected value
     * @param expectedLength expected length
     */
    public hasLength(expectedLength: number): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.actual.length === expectedLength
                    : this.actual.length !== expectedLength
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected the '${this.actual}' has a length '${expectedLength}', but found '${this.actual.length}'`
                    : `Expected the '${this.actual}' has not a length '${expectedLength}', but found '${this.actual.length}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the expected string matches to regular expression
     * @param regexExpr regular expression | string
     */
    public match(regexExpr: string | RegExp): Continuance<this> {
        if (
            !this.opposite
                ? this.actual.match(regexExpr) === null
                : this.actual.match(regexExpr) !== null) {
                Execute.stuff.throwWithMessage(
                    !this.opposite
                        ? `Expected the '${this.actual}' matches with regular expression`
                        : `Expected the '${this.actual}' does not match with regular expression`);
        }

        return new Continuance(this);
    }
}