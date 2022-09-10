import { Continuance } from "../../continuance/continuance";
import { Execute } from "../../executor/execute";
import IntuitiveAssertions from "../intuitive-assertion";

export class StringAssertion extends IntuitiveAssertions<string> {
    private actual: string;

    constructor(value: string) {
        super(value);
        this.actual = String(this.object).valueOf();
    }

    /**
     * Check if the expected object is not an empty value
     */
    public notBeEmptyOrWhiteSpace(): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.length > 0 || this.actual === ' ')
            .throwWithMessage(`Expected not be empty or white space, but found '${this.actual}'`);

        return new Continuance(this);
    }

    /**
     * Check if the expected object is an empty value
     */
    public beEmptyOrWhiteSpace(): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.length === 0)
            .throwWithMessage(`Expected be empty or white space, but found '${this.object}'`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string contains the expected value
     * @param expected expected string
     */
    public contains(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.includes(expected))
            .throwWithMessage(`Expected the '${this.actual}' contains '${expected}'`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string does not contain the expected value
     * @param expected expected string
     */
    public notContain(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(!this.actual.includes(expected))
            .throwWithMessage(`Expected the '${this.actual}' does not contain '${expected}'`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string contains all expected values from string array
     * @param expectedStringArray expected string array
     */
    public containsAll(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            Execute.stuff.checkCondition(this.actual.includes(expectedString))
                .throwWithMessage(`Expected the '${this.actual}' contains '${expectedString}'`);
        });

        return new Continuance(this);
    }

    /**
     * Check if the expected string does not contain all expected values from string array
     * @param expectedStringArray expected string array
     */
    public notContainAll(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            Execute.stuff.checkCondition(!this.actual.includes(expectedString))
                .throwWithMessage(`Expected the '${this.actual}' does not contain '${expectedString}'`);
        });

        return new Continuance(this);
    }

    /**
     * Check if the expected string contains at least one expected values from string array
     * @param expectedStringArray expected string array
     */
    public containsAny(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            if (!this.actual.includes(expectedString)) {
                Execute.stuff.throwWithMessage(`Expected the '${this.actual}' contains '${expectedString}'`);
            } 
        });

        return new Continuance(this);
    }

    /**
     * Check if the expected string does not contain any expected values from string array
     * @param expectedStringArray expected string array
     */
    public notContainAny(expectedStringArray: Array<string>): Continuance<this> {
        expectedStringArray.forEach(expectedString => {
            if (this.actual.includes(expectedString)) {
                Execute.stuff.throwWithMessage(`Expected the '${this.actual}' contains '${expectedString}'`);
            } 
        });

        return new Continuance(this);
    }

    /**
     * Check if the expected string starts with the expected value
     * @param expected expected string
     */
    public startsWith(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.startsWith(expected))
            .throwWithMessage(`Expected the '${this.actual}' starts with ${expected}`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string ends with the expected value
     * @param expected expected string
     */
    public endsWith(expected: string): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.endsWith(expected))
            .throwWithMessage(`Expected the '${this.actual}' ends with ${expected}`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string has a length equals to the expected value
     * @param expectedLength expected length
     */
    public hasLength(expectedLength: number): Continuance<this> {
        Execute.stuff.checkCondition(this.actual.length === expectedLength)
            .throwWithMessage(`Expected the '${this.actual}' has a length '${expectedLength}', but found '${this.actual.length}'`);

        return new Continuance(this);
    }

    /**
     * Check if the expected string matches to regular expression
     * @param regexExpr regular expression | string
     */
    public match(regexExpr: string | RegExp): Continuance<this> {
        if (this.actual.match(regexExpr) === null) {
            Execute.stuff.throwWithMessage(`Expected the '${this.actual}' matches with regular expression`);
        }

        return new Continuance(this);
    }

    /**
     * Check if the expected string does not match to regular expression
     * @param regexExpr regular expression | string
     */
    public notMatch(regexExpr: string | RegExp): Continuance<this> {
        if (this.actual.match(regexExpr) !== null) {
            Execute.stuff.throwWithMessage(`Expected the '${this.actual}' does not match with regular expression`);
        }

        return new Continuance(this);
    }
}