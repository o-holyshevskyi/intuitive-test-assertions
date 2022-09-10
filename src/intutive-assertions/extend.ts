import { BooleanAssertion } from './assertions/boolean-assertions/boolean-assertion';
import { NumberAssertion } from './assertions/number-assertions/number-assertion';
import { StringAssertion } from './assertions/string-assertions/string-assertion';

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

  export interface String {
    /**
     * Returns the {@link StringAssertion} object that can be used to check the {@link String} type
     */
    must(): StringAssertion;
  }
}

Boolean.prototype.must = function (this: boolean): BooleanAssertion {
  return new BooleanAssertion(this);
};

Number.prototype.must = function (this: number): NumberAssertion {
  return new NumberAssertion(this);
};

String.prototype.must = function (this: string): StringAssertion {
  return new StringAssertion(this);
}

export {};
