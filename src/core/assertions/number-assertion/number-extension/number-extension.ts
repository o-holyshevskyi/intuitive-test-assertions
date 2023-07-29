import { SoftAssertion } from "../../../soft/soft-assertion";
import { softAssertionState } from "../../assertion-extensions";
import { NumberAssertion } from "../number-assertion";
import { NumberSoft } from "../interfaces/number-soft-interface";

declare global {
    interface Number {
        must(): NumberAssertion & NumberSoft;
    }
}

Number.prototype.must = function (): NumberAssertion & NumberSoft {
    const actualValue = this.valueOf();
    const assertion = new NumberAssertion(actualValue);
    if (!softAssertionState.assertion) {
        softAssertionState.assertion = new SoftAssertion();
    }
    return Object.assign(assertion, {
        soft: {
            be: function (expectedValue: number) {
                if (actualValue !== expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not equal to ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beLessThan: function (expectedValue: number) {
                if (actualValue > expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is greater than ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beLessThanOrEqual: function (expectedValue: number) {
                if (actualValue > expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is greater than ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                } else if (actualValue !== expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not equal to ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beGreaterThan: function (expectedValue: number) {
                if (actualValue < expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is lesser than ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beGreaterThanOrEqual: function (expectedValue: number) {
                if (actualValue < expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is lesser than ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                } else if (actualValue !== expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not equal to ${expectedValue}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beApproximately: function (expectedValue: number, tolerance: number) {
                const diff = Math.abs(Number(actualValue) - Number(expectedValue));
                if (diff > tolerance) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not approximately equal to ${expectedValue} within tolerance of ${tolerance}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beBetween: function (min: number, max: number) {
                if (actualValue < min || actualValue > max) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not between ${min} and ${max}`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beNegative: function () {
                if (actualValue >= 0) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not a negative number`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            bePositive: function () {
                if (actualValue <= 0) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not a positive number`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beInteger: function () {
                if (!Number.isInteger(actualValue)) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not an integer`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beEven: function () {
                if (actualValue % 2 !== 0) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not an even number`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beFinite: function () {
                if (!isFinite(actualValue)) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not a finite number`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beNaN: function () {
                if (!Number.isNaN(actualValue)) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not a NaN`);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            not: {
                be: function (expectedValue: number) {
                    if (actualValue === expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is equal to ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beLessThan: function (expectedValue: number) {
                    if (actualValue < expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is lesser than ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beLessThanOrEqual: function (expectedValue: number) {
                    if (actualValue < expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is lesser than ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    } else if (actualValue === expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is equal to ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beGreaterThan: function (expectedValue: number) {
                    if (actualValue > expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is greater than ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beGreaterThanOrEqual: function (expectedValue: number) {
                    if (actualValue > expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is greater than ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    } else if (actualValue === expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is equal to ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beApproximately: function (expectedValue: number, tolerance: number) {
                    const diff = Math.abs(Number(actualValue) - Number(expectedValue));
                    if (diff < tolerance) {
                        const error = new Error(`Assertion Failed: ${actualValue} is approximately equal to ${expectedValue} within tolerance of ${tolerance}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beBetween: function (min: number, max: number) {
                    if (actualValue >= min && actualValue <= max) {
                        const error = new Error(`Assertion Failed: ${actualValue} is between ${min} and ${max}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beNegative: function () {
                    if (actualValue < 0) {
                        const error = new Error(`Assertion Failed: ${actualValue} is a negative number`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                bePositive: function () {
                    if (actualValue > 0) {
                        const error = new Error(`Assertion Failed: ${actualValue} is a positive number`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beInteger: function () {
                    if (Number.isInteger(actualValue)) {
                        const error = new Error(`Assertion Failed: ${actualValue} is an integer`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beEven: function () {
                    if (actualValue % 2 === 0) {
                        const error = new Error(`Assertion Failed: ${actualValue} is an even number`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beFinite: function () {
                    if (isFinite(actualValue)) {
                        const error = new Error(`Assertion Failed: ${actualValue} is a finite number`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beNaN: function () {
                    if (Number.isNaN(actualValue)) {
                        const error = new Error(`Assertion Failed: ${actualValue} is a NaN`);
                        softAssertionState.assertion?.captureError(error);
                    }
                }
            }
        }
    });
};
