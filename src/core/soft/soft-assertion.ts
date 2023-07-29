export class SoftAssertion {
  private errors: Error[] = [];

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
      this.errors = [];
      throw combinedError;
    }
  }
}

