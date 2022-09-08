import { BooleanAssertion } from './boolean-intuitive-assertion/boolean-intuitive-assertion';
import { NumberAssertion } from './number-intuitive-assertion/number-intuitive-assertion';

export {};

declare global {
    export interface Boolean {
        /**
         * Returns the {@link BooleanAssertion} object that can be used to check the {@link Boolean} type
         */
        must(): BooleanAssertion;
    }

    export interface Number {
        /**
         * Returns the {@link NumberAssertion} object that can be used to check the {@link Number} type
         */
        must(): NumberAssertion;
    }
}

Boolean.prototype.must = function (this: boolean): BooleanAssertion {
    return new BooleanAssertion(this);
}

Number.prototype.must = function (this: number): NumberAssertion {
    return new NumberAssertion(this);
}
