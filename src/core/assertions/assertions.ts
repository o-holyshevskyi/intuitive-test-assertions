import { ErrorBuilder } from "../../utils/errors/error-builder";

export class Assertion<T> {
  protected actualValue: T;
  protected readonly errorBuilder: ErrorBuilder<T>;

  constructor(actualValue: T) {
    this.actualValue = actualValue;
    this.errorBuilder = new ErrorBuilder<T>();
  }

  be(expectedValue: T): void {
    if (expectedValue !== this.actualValue) {
      throw this.errorBuilder.createError(this.actualValue, 'be', expectedValue);
    }
  }

  get not(): AssertionNot<T> {
    return new AssertionNot(this.actualValue);
  }

}

export class AssertionNot<T> {
  protected actualValue: T;
  protected readonly errorBuilder: ErrorBuilder<T>;

  constructor(actualValue: T) {
    this.actualValue = actualValue;
    this.errorBuilder = new ErrorBuilder<T>();
  }

  be(expectedValue: T): void {
    if (expectedValue === this.actualValue) {
      throw this.errorBuilder.createError(this.actualValue, 'not.be', expectedValue);
    }
  }
}