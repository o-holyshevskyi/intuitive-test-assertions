import { BooleanSoft } from "../interfaces/boolean-soft-interface";
import { SoftAssertion } from "../../../soft/soft-assertion";
import { softAssertionState } from "../../assertion-extensions";
import { BooleanAssertion } from "../boolean-assertion";
import { ErrorBuilder } from "../../../../utils/errors/error-builder";

declare global {
    interface Boolean {
        must(): BooleanAssertion & BooleanSoft;
    }
}

Boolean.prototype.must = function (): BooleanAssertion & BooleanSoft {
    const actualValue = this.valueOf();
    const assertion = new BooleanAssertion(actualValue);
    const errorBuilder = new ErrorBuilder<boolean>();

    if (!softAssertionState.assertion) {
        softAssertionState.assertion = new SoftAssertion();
    }
    
    return Object.assign(assertion, {
        soft: {
            be: function (expectedValue: boolean) {
                if (actualValue !== expectedValue) {
                    const error = errorBuilder.createError(actualValue, 'be', expectedValue);
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beTrue: function () {
                if (actualValue !== true) {
                    const error = errorBuilder.createError(actualValue, 'beTrue');
                    softAssertionState.assertion?.captureError(error);
                }
            },
            beFalse: function () {
                if (actualValue !== false) {
                    const error = errorBuilder.createError(actualValue, 'beFalse');
                    softAssertionState.assertion?.captureError(error);
                }
            },
            not: {
                be: function (expectedValue: boolean) {
                    if (actualValue === expectedValue) {
                        const error = errorBuilder.createError(actualValue, 'not.be', expectedValue);
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beTrue: function () {
                    if (actualValue === true) {
                        const error = errorBuilder.createError(actualValue, 'not.beTrue');
                        softAssertionState.assertion?.captureError(error);
                    }
                },
                beFalse: function () {
                    if (actualValue === false) {
                        const error = errorBuilder.createError(actualValue, 'not.beFalse');
                        softAssertionState.assertion?.captureError(error);
                    }
                }
            }
        }
    });
};
