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
            throw this.errorBuilder.createError(this.actualValue, 'beTrue');
        }
    }

    beFalse(): void {
        if (this.actualValue !== false) {
            throw this.errorBuilder.createError(this.actualValue, 'beFalse');
        }
    }
}

class BooleanAssertionNot extends AssertionNot<boolean> {
    constructor(actualValue: boolean) {
        super (actualValue);
    }

    beTrue(): void {
        if (this.actualValue === true) {
            throw this.errorBuilder.createError(this.actualValue, 'not.beTrue');
        }
    }

    beFalse(): void {
        if (this.actualValue === false) {
            throw this.errorBuilder.createError(this.actualValue, 'not.beFalse');
        }
    }
}
