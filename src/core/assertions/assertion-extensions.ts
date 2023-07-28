import { BooleanAssertion } from './boolean-assertion/boolean-assertion';
import { DateAssertion } from './date-assertion/date-assertion';
import { NumberAssertion } from './number-assertion/number-assertion';
import { StringAssertion } from './string-assertion/string-assertion';
import { SoftAssertion } from '../soft/wrapper/soft-assertion';

interface BooleanSoft {
    be: (expectedValue: boolean) => void;
    beTrue: () => void;
    beFalse: () => void;
}

declare global {
    interface Number {
        must(): NumberAssertion;
    }

    interface Boolean {
        must(): BooleanAssertion & { soft: BooleanSoft};
    }

    interface String {
        must(): StringAssertion;
    }

    interface Date {
        must(): DateAssertion;
    }
}
  
Number.prototype.must = function (): NumberAssertion {
    return new NumberAssertion(this.valueOf());
};

Boolean.prototype.must = function (): BooleanAssertion & { soft: BooleanSoft } {
    const actualValue = this.valueOf();
    const assertion = new BooleanAssertion(actualValue);
    if (!softAssertionState.assertion) {
        softAssertionState.assertion = new SoftAssertion();
    }
    return Object.assign(assertion, {
        soft: {
            be: function (expectedValue: boolean) {
                if (actualValue !== expectedValue) {
                    const error = new Error(`Assertion Failed: Expected ${expectedValue}, but got ${actualValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beTrue: function () {
                if (actualValue !== true) {
                    const error = new Error(`Assertion Failed: Expected true, but got ${actualValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beFalse: function () {
                if (actualValue !== false) {
                    const error = new Error(`Assertion Failed: Expected false, but got ${actualValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            }
        }
    });
};

String.prototype.must = function (): StringAssertion {
    return new StringAssertion(this.valueOf());
};

Date.prototype.must = function (): DateAssertion {
    return new DateAssertion(this);
};

const softAssertionState: { assertion?: SoftAssertion } = {};

afterEach(() => {
  if (softAssertionState.assertion) {
    softAssertionState.assertion.throwIfFailed();
    softAssertionState.assertion = undefined;
  }
});

export {}

//TODO: Create a colorized msgs
/*function colorizeErrorMessage(message: string): string {
    // ANSI escape codes for colors
    const redColor = '\x1b[31m'; // Red color
    const resetColor = '\x1b[0m'; // Reset color to default
  
    return `${redColor}${message}${resetColor}`;
}*/
