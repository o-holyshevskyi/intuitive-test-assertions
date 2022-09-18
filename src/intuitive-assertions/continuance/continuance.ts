import { BooleanAssertion } from '../assertions/boolean-assertions/boolean-assertion';
import { ArrayAssertion } from '../assertions/collection-assertions/array-assertion';
import { ObjectAssertion } from '../assertions/collection-assertions/object-assertion';
import { DateAssertion } from '../assertions/date-assertions/date-assertion';
import { FunctionAssertion } from '../assertions/function-assertions/function-assertion';
import { NumberAssertion } from '../assertions/number-assertions/number-assertion';
import { StringAssertion } from '../assertions/string-assertions/string-assertion';

export class Continuance<TAssertion extends any, TValue extends any | undefined | object> {
  /**
   * If you want to verify two statements in one row, use and property
   */
  public and: TAssertion;

  constructor(private readonly type: TAssertion, private readonly value: TValue) {
    this.and = this.getContinuance(this.type, this.value) as TAssertion;
  }

  private getContinuance(type: TAssertion, value: TValue): TAssertion | undefined {
    if (typeof type === 'object' && Object.getPrototypeOf(type) === BooleanAssertion.prototype) {
      return new BooleanAssertion(value as boolean, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === ArrayAssertion.prototype) {
      return new ArrayAssertion(value as Array<any>, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === ObjectAssertion.prototype) {
      return new ObjectAssertion(value as boolean, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === DateAssertion.prototype) {
      return new DateAssertion(value as Date, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === NumberAssertion.prototype) {
      return new NumberAssertion(value as number, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === StringAssertion.prototype) {
      return new StringAssertion(value as string, false) as TAssertion;
    }
    if (typeof type === 'object' && Object.getPrototypeOf(type) === FunctionAssertion.prototype) {
      return new FunctionAssertion(value as any, false) as TAssertion;
    }
  }
}
