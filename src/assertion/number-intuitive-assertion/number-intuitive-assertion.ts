import { Execute } from '../assertion-executing/execute';
import IntuitiveAssertions from '../intuitive-test-assertion';

export class NumberAssertion extends IntuitiveAssertions<number> {
    private actual: number;

    constructor(value: number) {
        super(value);
        this.actual = Number(this.object).valueOf();
    }

    /**
     * Check if the number is positive
     */
    bePositive(): void {
        Execute.stuff.checkCondition(this.actual > 0)
            .throwWithMessage(`Expected ${this.actual} to be positive, but value is lesser than 0`);
    }

    /**
     * Check if the number is negative
     */
    beNegative(): void {
        Execute.stuff.checkCondition(this.actual < 0)
            .throwWithMessage(`Expected ${this.actual} to be negative, but value is greater than 0`);
    }

    /**
     * Check if the number is greater than expected value
     * @param expected expected value
     */
    beGreaterThan(expected: number): void {
        Execute.stuff.checkCondition(this.actual > Number(expected).valueOf())
            .throwWithMessage(`Expected ${this.actual} to be greater than ${expected}, but value is lesser`);
    }

    /**
     * Check if the number is lesser than expected value
     * @param expected expected value
     */
    beLesserThan(expected: number): void {
        Execute.stuff.checkCondition(this.actual < Number(expected).valueOf())
            .throwWithMessage(`Expected ${this.actual} to be lesser than ${expected}, but value is greater`);
    }

    /**
     * Check if the number is greater or equal than expected value
     * @param expected expected value
     */
    beGreaterOrEqualTo(expected: number): void {
        Execute.stuff.checkCondition(this.actual >= Number(expected).valueOf())
            .throwWithMessage(`Expected ${this.actual} to be greater or equal to ${expected}, but value is lesser`);
    }

    /**
     * Check if the number is lesser or equal than expected value
     * @param expected expected value
     */
    beLesserOrEqualTo(expected: number): void {
        Execute.stuff.checkCondition(this.actual <= Number(expected).valueOf())
            .throwWithMessage(`Expected ${this.actual} to be lesser or equal to ${expected}, but value is greater`);
    }

    /**
     * Check if the number is within the range
     * @param rangeStart start range value
     * @param rangeEnd end range value
     */
    beInRange(rangeStart: number, rangeEnd: number): void {
        Execute.stuff.checkCondition(
                this.actual >= Number(rangeStart).valueOf() &&
                this.actual <= Number(rangeEnd).valueOf())
            .throwWithMessage(`Expected ${this.actual} to be in range ${rangeStart} - ${rangeEnd}, but value is out of this range`);
    }

    /**
     * Check if the number is integer
     */
    beInteger(): void {
        Execute.stuff.checkCondition(Number.isInteger(this.actual))
            .throwWithMessage(`Expected ${this.actual} to be integer, but value has fraction`);
    }

    /**
     * Check if the number is fraction
     */
    notBeInteger(): void {
        Execute.stuff.checkCondition(!Number.isInteger(this.actual))
            .throwWithMessage(`Expected ${this.actual} to be fraction, but value is integer`);
    }
}
