import { DateAssertion } from './date-assertion/date-assertion';
import { StringAssertion } from './string-assertion/string-assertion';
import { SoftAssertion } from '../soft/soft-assertion';

declare global {
    interface String {
        must(): StringAssertion;
    }

    interface Date {
        must(): DateAssertion;
    }
}

String.prototype.must = function (): StringAssertion {
    return new StringAssertion(this.valueOf());
};

Date.prototype.must = function (): DateAssertion {
    return new DateAssertion(this);
};

export const softAssertionState: { assertion?: SoftAssertion } = {};

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
