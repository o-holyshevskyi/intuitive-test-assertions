import { Assertion } from "../../assertions/assertions";

export class SoftAssertion<T> extends Assertion<T> {
    private errors: Error[] = [];

    constructor(actualValue: T) {
        super(actualValue);
    }

    captureError(error: Error): void {
      this.errors.push(error);
    }

    getErrors(): Error[] {
        return this.errors;
    }
  
    throwIfFailed(): void {
      if (this.errors.length > 0) {
        const combinedError = new Error(
          `Soft Assertion Failed: ${this.errors.length} assertion(s) failed.`
        );
        combinedError.stack = this.errors.map((error) => error.message).join('\n');
        throw combinedError;
      }
    }

    be(expectedValue: any): void {
        if (this.actualValue !== expectedValue) {
          const errorMessage = `Assertion Failed: ${this.actualValue instanceof Date ? this.actualValue.toLocaleString() : this.actualValue} is not equal to ${expectedValue instanceof Date ? expectedValue.toLocaleString() : expectedValue}`;
          this.captureError(new Error(errorMessage));
        }
    }
}

