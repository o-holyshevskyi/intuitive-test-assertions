import { Assertion, AssertionNot } from '../assertions';

export class NumberAssertion extends Assertion<number> {
    constructor(actualValue: number) {
        super (actualValue);
    }

    get not(): NumberAssertionNot {
        return new NumberAssertionNot(this.actualValue);
    }

    beLessThan(expectedValue: number): void {
        if (this.actualValue > expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is greater than ${expectedValue}`);
        }
    }

    beLessThanOrEqual(expectedValue: number): void {
        if (this.actualValue > expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is greater than ${expectedValue}`);
        } else if (this.actualValue !== expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is not equal to ${expectedValue}`);
        }
    }

    beGreaterThan(expectedValue: number): void {
        if (this.actualValue < expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is lesser than ${expectedValue}`);
        }
    }

    beGreaterThanOrEqual(expectedValue: number): void {
        if (this.actualValue < expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is lesser than ${expectedValue}`);
        } else if (this.actualValue !== expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is not equal to ${expectedValue}`);
        }
    }

    beApproximately(expectedValue: number, tolerance: number): void {
        const diff = Math.abs(Number(this.actualValue) - Number(expectedValue));
        if (diff > tolerance) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not approximately equal to ${expectedValue} within tolerance of ${tolerance}`);
        }
    }

    beBetween(min: number, max: number): void {
        if (this.actualValue < min || this.actualValue > max) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not between ${min} and ${max}`);
        }
    }

    beNegative(): void {
        if (this.actualValue >= 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not a negative number`);
        }
    }

    bePositive(): void {
        if (this.actualValue <= 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not a positive number`);
        }
    }

    beInteger(): void {
        if (!Number.isInteger(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not an integer`);
        }
    }

    beEven(): void {
        if (this.actualValue % 2 !== 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not an even number`);
        }
    }

    beFinite(): void {
        if (!isFinite(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not a finite number`);
        }
    }

    beNaN(): void {
        if (!Number.isNaN(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is not a NaN`);
        }
    }
}

class NumberAssertionNot extends AssertionNot<number> {
    constructor(actualValue: number) {
        super (actualValue);
    }

    beLessThan(expectedValue: number): void {
        if (this.actualValue < expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is lesser than ${expectedValue}`);
        }
    }

    beLessThanOrEqual(expectedValue: number): void {
        if (this.actualValue < expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is lesser than ${expectedValue}`);
        } else if (this.actualValue === expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is equal to ${expectedValue}`);
        }
    }

    beGreaterThan(expectedValue: number): void {
        if (this.actualValue > expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is greater than ${expectedValue}`);
        }
    }

    beGreaterThanOrEqual(expectedValue: number): void {
        if (this.actualValue > expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is greater than ${expectedValue}`);
        } else if (this.actualValue === expectedValue) {
            throw Error(`Assertion Failed: ${this.actualValue} is equal to ${expectedValue}`);
        }
    }

    beApproximately(expectedValue: number, tolerance: number): void {
        const diff = Math.abs(Number(this.actualValue) - Number(expectedValue));
        if (diff < tolerance) {
          throw new Error(`Assertion Failed: ${this.actualValue} is approximately equal to ${expectedValue} within tolerance of ${tolerance}`);
        }
    }

    beBetween(min: number, max: number): void {
        if (this.actualValue >= min && this.actualValue <= max) {
          throw new Error(`Assertion Failed: ${this.actualValue} is between ${min} and ${max}`);
        }
    }

    beNegative(): void {
        if (this.actualValue < 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is a negative number`);
        }
    }

    bePositive(): void {
        if (this.actualValue > 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is a positive number`);
        }
    }

    beInteger(): void {
        if (Number.isInteger(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is an integer`);
        }
    }

    beEven(): void {
        if (this.actualValue % 2 === 0) {
          throw new Error(`Assertion Failed: ${this.actualValue} is an even number`);
        }
    }

    beFinite(): void {
        if (isFinite(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is a finite number`);
        }
    }

    beNaN(): void {
        if (Number.isNaN(this.actualValue)) {
          throw new Error(`Assertion Failed: ${this.actualValue} is a NaN`);
        }
    }
}
