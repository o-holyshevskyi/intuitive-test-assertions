import { BooleanAssertion } from '../intutive-assertions/assertions/boolean-assertions/boolean-assertion';
import { NumberAssertion } from '../intutive-assertions/assertions/number-assertions/number-assertion';

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

export {}