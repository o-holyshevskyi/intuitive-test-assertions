import { Assertion, AssertionNot } from '../assertions';

export class DateAssertion extends Assertion<Date> {
    constructor(actualValue: Date) {
        super (actualValue);
    }

    get not(): DateAssertionNot {
        return new DateAssertionNot(this.actualValue);
    }

    beBefore(expectedDate: Date): void {
        if (!(this.actualValue < expectedDate)) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is not before ${expectedDate.toLocaleString()}`);
        }
    }

    beAfter(expectedDate: Date): void {
        if (!(this.actualValue > expectedDate)) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is not after ${expectedDate.toLocaleString()}`);
        }
    }

    beInDateRange(startDate: Date, endDate: Date): void {
        if (this.actualValue < startDate || this.actualValue > endDate) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is not within the date range ${startDate.toLocaleString()} - ${endDate.toLocaleString()}`);
        }
    }

    beToday(): void {
        const today = new Date();
        const isToday =
          this.actualValue.getFullYear() === today.getFullYear() &&
          this.actualValue.getMonth() === today.getMonth() &&
          this.actualValue.getDate() === today.getDate();
    
        if (!isToday) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is not today's date`);
        }
    }

    beValidDate(): void {
        if (isNaN(this.actualValue.getTime())) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is not a valid date`);
        }
    }
}

class DateAssertionNot extends AssertionNot<Date> {
    constructor(actualValue: Date) {
        super (actualValue);
    }

    beBefore(expectedDate: Date): void {
        if (!(this.actualValue > expectedDate)) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is before ${expectedDate.toLocaleString()}`);
        }
    }

    beAfter(expectedDate: Date): void {
        if (!(this.actualValue < expectedDate)) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is after ${expectedDate.toLocaleString()}`);
        }
    }

    beInDateRange(startDate: Date, endDate: Date): void {
        if (this.actualValue >= startDate && this.actualValue <= endDate) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is within the date range ${startDate.toLocaleString()} - ${endDate.toLocaleString()}`);
        }
    }

    beToday(): void {
        const today = new Date();
        const isToday =
          this.actualValue.getFullYear() === today.getFullYear() &&
          this.actualValue.getMonth() === today.getMonth() &&
          this.actualValue.getDate() === today.getDate();
    
        if (isToday) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is today's date`);
        }
    }

    beValidDate(): void {
        if (!isNaN(this.actualValue.getTime())) {
          throw new Error(`Assertion Failed: ${this.actualValue.toLocaleString()} is a valid date`);
        }
    }
}
