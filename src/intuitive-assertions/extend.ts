import { BooleanAssertion } from './assertions/boolean-assertions/boolean-assertion';
import { ArrayAssertion } from './assertions/collection-assertions/array-assertion';
import { ObjectAssertion } from './assertions/collection-assertions/object-assertion';
import { DateAssertion } from './assertions/date-assertions/date-assertion';
import { FunctionAssertion } from './assertions/function-assertions/function-assertion';
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

  export interface Date {
    /**
     * Returns the {@link DateAssertion} object that can be used to check the {@link Date} type
     */
    must(): DateAssertion;
  }

  export interface Object {
    /**
     * Returns the {@link ObjectAssertion} object that can be used to check the Object type
     */
    must(): ObjectAssertion;
  }

  export interface Array<T> {
    /**
     * Returns the {@link ArrayAssertion} object that can be used to check the {@link Array} type
     */
    must(): ArrayAssertion<T>;
  }

  export interface Function {
    /**
     * Returns the {@link FunctionAssertion} object that can be used to check the {@link Function} type
     */
    must(): FunctionAssertion;
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
};

Date.prototype.must = function (this: Date): DateAssertion {
  return new DateAssertion(this);
};

Object.prototype.must = function (this: Object): ObjectAssertion {
  return new ObjectAssertion(this);
};

Array.prototype.must = function <T>(this: Array<T>): ArrayAssertion<T> {
  return new ArrayAssertion(this);
};

Function.prototype.must = function (this: Function): FunctionAssertion {
  return new FunctionAssertion(this);
};

export const must = function (fn: () => any): FunctionAssertion {
  return new FunctionAssertion(fn);
};

export {};
