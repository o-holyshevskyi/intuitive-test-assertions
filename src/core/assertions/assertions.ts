export class Assertion<T> {
    protected actualValue: T;

    constructor(actualValue: T) {
        this.actualValue = actualValue;
    }

    be(expectedValue: T): void {
        if (expectedValue !== this.actualValue) {
            throw Error(`Assertion Failed: ${this.actualValue instanceof Date ? this.actualValue.toLocaleString() : this.actualValue} is not equal to ${expectedValue instanceof Date ? expectedValue.toLocaleString() : expectedValue}`);
        }
    }

    get not(): AssertionNot<T> {
        return new AssertionNot(this.actualValue);
    }
}

export class AssertionNot<T> {
    protected actualValue: T;

  constructor(actualValue: T) {
    this.actualValue = actualValue;
  }

  be(expectedValue: T): void {
    if (expectedValue === this.actualValue) {
      throw new Error(`Assertion Failed: ${this.actualValue instanceof Date ? this.actualValue.toLocaleString() : this.actualValue} is equal to ${expectedValue instanceof Date ? expectedValue.toLocaleString() : expectedValue}`);
    }
  }
}