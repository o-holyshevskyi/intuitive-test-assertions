import { BooleanSoft } from "../interfaces/boolean-soft-interface";
import { SoftAssertion } from "../../../soft/soft-assertion";
import { softAssertionState } from "../../assertion-extensions";
import { BooleanAssertion } from "../boolean-assertion";

declare global {
    interface Boolean {
        must(): BooleanAssertion & BooleanSoft;
    }
}

Boolean.prototype.must = function (): BooleanAssertion & BooleanSoft {
    const actualValue = this.valueOf();
    const assertion = new BooleanAssertion(actualValue);
    if (!softAssertionState.assertion) {
        softAssertionState.assertion = new SoftAssertion();
    }
    return Object.assign(assertion, {
        soft: {
            be: function (expectedValue: boolean) {
                if (actualValue !== expectedValue) {
                    const error = new Error(`Assertion Failed: ${actualValue} is not equal to ${expectedValue}`);
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
            },
            not: {
                be: function (expectedValue: boolean) {
                    if (actualValue === expectedValue) {
                        const error = new Error(`Assertion Failed: ${actualValue} is equal to ${expectedValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beTrue: function () {
                    if (actualValue === true) {
                        const error = new Error(`Assertion Failed: Expected not to be true, but got ${actualValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beFalse: function () {
                    if (actualValue === false) {
                        const error = new Error(`Assertion Failed: Expected not to be false, but got ${actualValue}`);
                        softAssertionState.assertion?.captureError(error);
                    }
                }
            }
        }
    });
};
