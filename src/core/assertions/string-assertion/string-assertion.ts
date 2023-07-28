import { Assertion, AssertionNot } from '../assertions';

export class StringAssertion extends Assertion<string> {
    constructor(actualValue: string) {
        super (actualValue);
    }

    get not(): StringAssertionNot {
        return new StringAssertionNot(this.actualValue);
    }

    contain(substring: string): void {
        if (!this.actualValue.includes(substring)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' does not contain '${substring}'`);
        }
    }

    startWith(prefix: string): void {
        if (!this.actualValue.startsWith(prefix)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' does not start with '${prefix}'`);
        }
    }

    endWith(suffix: string): void {
        if (!this.actualValue.endsWith(suffix)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' does not end with '${suffix}'`);
        }
    }

    haveLength(length: number): void {
        if (this.actualValue.length !== length) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has length ${this.actualValue.length}, expected length ${length}`);
        }
    }

    haveMaxLength(maxLength: number): void {
        if (this.actualValue.length > maxLength) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has length ${this.actualValue.length}, expected maximum length ${maxLength}`);
        }
    }

    haveMinLength(minLength: number): void {
        if (this.actualValue.length < minLength) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has length ${this.actualValue.length}, expected minimum length ${minLength}`);
        }
    }

    match(pattern: RegExp): void {
        if (!pattern.test(this.actualValue)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' does not match the pattern '${pattern}'`);
        }
    }
}

class StringAssertionNot extends AssertionNot<string> {
    constructor(actualValue: string) {
        super (actualValue);
    }

    contain(substring: string): void {
        if (this.actualValue.includes(substring)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' contains '${substring}'`);
        }
    }

    startWith(prefix: string): void {
        if (this.actualValue.startsWith(prefix)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' starts with '${prefix}'`);
        }
    }

    endWith(suffix: string): void {
        if (this.actualValue.endsWith(suffix)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' ends with '${suffix}'`);
        }
    }

    haveLength(length: number): void {
        if (this.actualValue.length === length) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has not length ${this.actualValue.length}, but length is ${length}`);
        }
    }

    haveMaxLength(maxLength: number): void {
        if (this.actualValue.length < maxLength) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has length ${this.actualValue.length}, expected minimum length ${maxLength}`);
        }
    }

    haveMinLength(minLength: number): void {
        if (this.actualValue.length > minLength) {
          throw new Error(`Assertion Failed: '${this.actualValue}' has length ${this.actualValue.length}, expected maximum length ${minLength}`);
        }
    }

    match(pattern: RegExp): void {
        if (pattern.test(this.actualValue)) {
          throw new Error(`Assertion Failed: '${this.actualValue}' matches the pattern '${pattern}'`);
        }
    }
}
