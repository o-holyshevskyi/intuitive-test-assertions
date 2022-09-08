import { BooleanAssertion } from './boolean-intuitive-assertion/boolean-intuitive-assertion';
import { NumberAssertion } from './number-intuitive-assertion/number-intuitive-assertion';

export {};

declare global {
    export interface Boolean {
        must(): BooleanAssertion;
    }

    export interface Number {
        must(): NumberAssertion;
    }
}

Boolean.prototype.must = function (this: boolean): BooleanAssertion {
    return new BooleanAssertion(this);
}

Number.prototype.must = function (this: number): NumberAssertion {
    return new NumberAssertion(this);
}
