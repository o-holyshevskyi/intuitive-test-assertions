import { Assertion, AssertionNot } from '../assertions';

export class BooleanAssertion extends Assertion<boolean> {
    constructor(actualValue: boolean) {
        super(actualValue);
    }

    get not(): BooleanAssertionNot {
        return new BooleanAssertionNot(this.actualValue);
    }

    beTrue(): void {
        if (this.actualValue !== true) {
          throw new Error(`Assertion Failed: Expected true, but got ${this.actualValue}`);
        }
    }

    beFalse(): void {
        if (this.actualValue !== false) {
          throw new Error(`Assertion Failed: Expected false, but got ${this.actualValue}`);
        }
    }
}

class BooleanAssertionNot extends AssertionNot<boolean> {
    constructor(actualValue: boolean) {
        super (actualValue);
    }

    beTrue(): void {
        if (this.actualValue === true) {
          throw new Error(`Assertion Failed: Expected not to be true, but got ${this.actualValue}`);
        }
    }

    beFalse(): void {
        if (this.actualValue === false) {
          throw new Error(`Assertion Failed: Expected not to be false, but got ${this.actualValue}`);
        }
    }
}
