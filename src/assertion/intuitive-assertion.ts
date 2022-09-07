import { BooleanAssertion } from './boolean-intuitive-assertion/boolean-intuitive-assertion';

export {};

declare global {
    export interface Boolean {
        must(): BooleanAssertion;
    }
}

Boolean.prototype.must = function (this: boolean): BooleanAssertion {
    return new BooleanAssertion(this);
}
