import { BooleanAssertion } from './boolean-assertion/boolean-assertion';
import { DateAssertion } from './date-assertion/date-assertion';
import { NumberAssertion } from './number-assertion/number-assertion';
import { StringAssertion } from './string-assertion/string-assertion';
import { Assertion } from "./assertions";
import { SoftAssertion } from '../soft/wrapper/soft-assertion';

declare global {
    interface Number {
        must(): NumberAssertion;
    }

    interface Boolean {
        must(): BooleanAssertion;
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

Boolean.prototype.must = function (): BooleanAssertion {
    return new BooleanAssertion(this.valueOf());
};

String.prototype.must = function (): StringAssertion {
    return new StringAssertion(this.valueOf());
};

Date.prototype.must = function (): DateAssertion {
    return new DateAssertion(this);
};

declare module './assertions' {
    interface Assertion<T> {
      soft: SoftAssertion<T>;
    }
}

Object.defineProperty(Assertion.prototype, 'soft', {
    get: function (this: Assertion<any>) {
        if (!softAssertionState.assertion) {
            softAssertionState.assertion = new SoftAssertion(this.actualValue);
        }
        return softAssertionState.assertion;
    },
});

const softAssertionState: { assertion?: SoftAssertion<any> } = {};

afterEach(() => {
  if (softAssertionState.assertion) {
    softAssertionState.assertion.throwIfFailed();
    softAssertionState.assertion = undefined;
  }
});

export {}