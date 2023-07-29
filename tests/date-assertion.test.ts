import '../src/core/index';
import { getRegexExp } from './extension/regex-extension';

describe('test for date assertion', () => {
    test('be()', () => {
      const date = new Date();
  
      date.must().be(date);
    });

    test('not.be()', () => {
        const date = new Date();
        const expDate = new Date('2023-07-28');
    
        date.must().not.be(expDate);
    });

    test('throw be()', () => {
        const date = new Date();
        const expDate = new Date('2023-07-28');
    
        expect(() => date.must().be(expDate)).toThrow(getRegexExp(`Expected ${date.toLocaleString()} is not equal to ${expDate.toLocaleString()}`));
      });
  
    test('throw not.be()', () => {
        const date = new Date();
    
        expect(() => date.must().not.be(date)).toThrow(getRegexExp(`Expected ${date.toLocaleString()} is equal to ${date.toLocaleString()}`));
    });

    test('beBefore()', () => {
        const date = new Date();
        const expDate = new Date('2047-07-28');
    
        date.must().beBefore(expDate);
    });

    test('not.beBefore()', () => {
        const date = new Date();
        const expDate = new Date('2000-07-28');
    
        date.must().not.beBefore(expDate);
    });

    test('throw beBefore()', () => {
        const date = new Date();
        const expDate = new Date('2000-07-28');
    
        expect(() => date.must().beBefore(expDate)).toThrow(`Assertion Failed: ${date.toLocaleString()} is not before ${expDate.toLocaleString()}`);
    });

    test('throw not.beBefore()', () => {
        const date = new Date();
        const expDate = new Date('2047-07-28');
    
        expect(() => date.must().not.beBefore(expDate)).toThrow(`Assertion Failed: ${date.toLocaleString()} is before ${expDate.toLocaleString()}`);
    });

    test('beAfter()', () => {
        const date = new Date();
        const expDate = new Date('2000-07-28');
    
        date.must().beAfter(expDate);
    });

    test('not.beAfter()', () => {
        const date = new Date();
        const expDate = new Date('2047-07-28');
    
        date.must().not.beAfter(expDate);
    });

    test('throw beAfter()', () => {
        const date = new Date();
        const expDate = new Date('2047-07-28');
    
        expect(() => date.must().beAfter(expDate)).toThrow(`Assertion Failed: ${date.toLocaleString()} is not after ${expDate.toLocaleString()}`);
    });

    test('throw not.beAfter()', () => {
        const date = new Date();
        const expDate = new Date('2000-07-28');
    
        expect(() => date.must().not.beAfter(expDate)).toThrow(`Assertion Failed: ${date.toLocaleString()} is after ${expDate.toLocaleString()}`);
    });

    test('beInDateRange()', () => {
        const actualDate = new Date('2023-07-28');
        const startDate = new Date('2023-07-01');
        const endDate = new Date('2023-08-31');
    
        actualDate.must().beInDateRange(startDate, endDate);
    });

    test('not.beInDateRange()', () => {
        const startDate = new Date('2023-07-01');
        const endDate = new Date('2023-08-31');
        const futureDate = new Date('2047-09-15');
    
        futureDate.must().not.beInDateRange(startDate, endDate);
    });

    test('throw beInDateRange()', () => {
        const actualDate = new Date('2023-07-28');
        const startDate = new Date('2047-07-01');
        const endDate = new Date('2057-08-31');
    
        expect(() => actualDate.must().beInDateRange(startDate, endDate)).toThrow(`Assertion Failed: ${actualDate.toLocaleString()} is not within the date range ${startDate.toLocaleString()} - ${endDate.toLocaleString()}`);
    });

    test('throw not.beInDateRange()', () => {
        const startDate = new Date('2000-07-01');
        const endDate = new Date('2056-08-31');
        const futureDate = new Date('2047-09-15');
    
        expect(() => futureDate.must().not.beInDateRange(startDate, endDate)).toThrow(`Assertion Failed: ${futureDate.toLocaleString()} is within the date range ${startDate.toLocaleString()} - ${endDate.toLocaleString()}`);
    });

    test('today()', () => {
        const today = new Date();

        today.must().beToday();
    });

    test('not.beToday()', () => {
        const futureDate = new Date('2047-09-15');
    
        futureDate.must().not.beToday();
    });

    test('throw beToday()', () => {
        const futureDate = new Date('2047-09-15');
    
        expect(() => futureDate.must().beToday()).toThrow(`Assertion Failed: ${futureDate.toLocaleString()} is not today's date`);
    });

    test('throw not.beToday()', () => {
        const today = new Date();
    
        expect(() => today.must().not.beToday()).toThrow(`Assertion Failed: ${today.toLocaleString()} is today's date`);
    });

    test('beValidDate()', () => {
        const validDate = new Date(2023, 6, 28);

        validDate.must().beValidDate();
    });

    test('not.beValidDate()', () => {
        const invalidDate = new Date('invalid date');

        invalidDate.must().not.beValidDate();
    });

    test('throw beValidDate()', () => {
        const invalidDate = new Date('invalid date');
    
        expect(() => invalidDate.must().beValidDate()).toThrow(`Assertion Failed: ${invalidDate.toLocaleString()} is not a valid date`);
    });

    test('throw not.beValidDate()', () => {
        const validDate = new Date(2023, 6, 28);
    
        expect(() => validDate.must().not.beValidDate()).toThrow(`Assertion Failed: ${validDate.toLocaleString()} is a valid date`);
    });
});
