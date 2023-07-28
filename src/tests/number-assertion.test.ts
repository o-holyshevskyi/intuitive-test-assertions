import '../core/index';

describe('test for number assertion', () => {
    test('be()', () => {
      const num = 5;
  
      num.must().be(5);
    });

    test('not.be()', () => {
        const num = 5;
    
        num.must().not.be(6);
    });

    test('throw be()', () => {
        const num = 5;
        const expNum = 6;
    
        expect(() => num.must().be(expNum)).toThrow(`Assertion Failed: ${num} is not equal to ${expNum}`);
      });
  
    test('throw not.be()', () => {
        const num = 5;
    
        expect(() => num.must().not.be(num)).toThrow(`Assertion Failed: ${num} is equal to ${num}`);
    });

    test('beLessThan()', () => {
        const num = 5;
    
        num.must().beLessThan(6);
    });
  
    test('not.beLessThan()', () => {
        const num = 5;
    
        num.must().not.beLessThan(4);
    });

    test('throw beLessThan()', () => {
        const num = 5;
        const expNum = 4;
    
        expect(() => num.must().beLessThan(expNum)).toThrow(`Assertion Failed: ${num} is greater than ${expNum}`);
    });
  
    test('throw not.beLessThan()', () => {
        const num = 5;
        const expNum = 6;
    
        expect(() => num.must().not.beLessThan(expNum)).toThrow(`Assertion Failed: ${num} is lesser than ${expNum}`);
    });

    test('beLessThanOrEqual()', () => {
        const num = 5;
    
        num.must().beLessThanOrEqual(5);
    });
  
    test('not.beLessThanOrEqual()', () => {
        const num = 5;
    
        num.must().not.beLessThanOrEqual(4);
    });

    test('throw beLessThanOrEqual()', () => {
        const num = 5;
        const expNum = 4;
    
        expect(() => num.must().beLessThanOrEqual(expNum)).toThrow(`Assertion Failed: ${num} is greater than ${expNum}`);
    });
  
    test('throw not.beLessThanOrEqual()', () => {
        const num = 5;
    
        expect(() => num.must().not.beLessThanOrEqual(num)).toThrow(`Assertion Failed: ${num} is equal to ${num}`);
    });

    test('beGreaterThan()', () => {
        const num = 5;
    
        num.must().beGreaterThan(4);
    });
  
    test('not.beGreaterThan()', () => {
        const num = 5;
    
        num.must().not.beGreaterThan(6);
    });

    test('throw beGreaterThan()', () => {
        const num = 5;
        const expNum = 6;
    
        expect(() => num.must().beGreaterThan(expNum)).toThrow(`Assertion Failed: ${num} is lesser than ${expNum}`);
    });
  
    test('throw not.beGreaterThan()', () => {
        const num = 5;
        const expNum = 4;
    
        expect(() => num.must().not.beGreaterThan(expNum)).toThrow(`Assertion Failed: ${num} is greater than ${expNum}`);
    });

    test('beGreaterThanOrEqual()', () => {
        const num = 5;
    
        num.must().beGreaterThan(5);
    });
  
    test('not.beGreaterThanOrEqual()', () => {
        const num = 5;
    
        num.must().not.beGreaterThan(6);
    });

    test('throw beGreaterThanOrEqual()', () => {
        const num = 5;
        const expNum = 6;
    
        expect(() => num.must().beGreaterThanOrEqual(expNum)).toThrow(`Assertion Failed: ${num} is lesser than ${expNum}`);
    });
  
    test('throw not.beGreaterThanOrEqual()', () => {
        const num = 5;
    
        expect(() => num.must().not.beGreaterThanOrEqual(num)).toThrow(`Assertion Failed: ${num} is equal to ${num}`);
    });

    test('beApproximately()', () => {
        const num = 5.1;
    
        num.must().beApproximately(5, 0.2);
    });
  
    test('not.beApproximately()', () => {
        const num = 5.3;
    
        num.must().not.beApproximately(5, 0.2);
    });

    test('throw beApproximately()', () => {
        const num = 5.4;
        const expNum = 5;
        const tolerance = 0.2;
    
        expect(() => num.must().beApproximately(expNum, tolerance)).toThrow(`Assertion Failed: ${num} is not approximately equal to ${expNum} within tolerance of ${tolerance}`);
    });
  
    test('throw not.beApproximately()', () => {
        const num = 5.3;
        const expNum = 5;
        const tolerance = 0.5;
    
        expect(() => num.must().not.beApproximately(expNum, tolerance)).toThrow(`Assertion Failed: ${num} is approximately equal to ${expNum} within tolerance of ${tolerance}`);
    });

    test('beBetween()', () => {
        const num = 5.1;
    
        num.must().beBetween(5, 5.2);
    });
  
    test('not.beBetween()', () => {
        const num = 5.3;
    
        num.must().not.beBetween(5.5, 5.8);
    });

    test('throw beBetween()', () => {
        const num = 5.4;
        const minNum = 6;
        const maxNum = 7;
    
        expect(() => num.must().beBetween(minNum, maxNum)).toThrow(`Assertion Failed: ${num} is not between ${minNum} and ${maxNum}`);
    });
  
    test('throw not.beBetween()', () => {
        const num = 5.3;
        const minNum = 5;
        const maxNum = 5.5;
    
        expect(() => num.must().not.beBetween(minNum, maxNum)).toThrow(`Assertion Failed: ${num} is between ${minNum} and ${maxNum}`);
    });

    test('beNegative()', () => {
        const num = -5.1;
    
        num.must().beNegative();
    });
  
    test('not.beNegative()', () => {
        const num = 5.3;
    
        num.must().not.beNegative();
    });

    test('not.beNegative()', () => {
        const num = 0;
    
        num.must().not.beNegative();
    });

    test('throw beNegative()', () => {
        const num = 5.4;
    
        expect(() => num.must().beNegative()).toThrow(`Assertion Failed: ${num} is not a negative number`);
    });

    test('throw beNegative()', () => {
        const num = 0;
    
        expect(() => num.must().beNegative()).toThrow(`Assertion Failed: ${num} is not a negative number`);
    });
  
    test('throw not.beNegative()', () => {
        const num = -5.3;
    
        expect(() => num.must().not.beNegative()).toThrow(`Assertion Failed: ${num} is a negative number`);
    });

    test('bePositive()', () => {
        const num = 5.1;
    
        num.must().bePositive();
    });
  
    test('not.bePositive()', () => {
        const num = 0;
    
        num.must().not.bePositive();
    });

    test('not.bePositive()', () => {
        const num = -5;
    
        num.must().not.bePositive();
    });

    test('throw bePositive()', () => {
        const num = -5.4;
    
        expect(() => num.must().bePositive()).toThrow(`Assertion Failed: ${num} is not a positive number`);
    });

    test('throw bePositive()', () => {
        const num = 0;
    
        expect(() => num.must().bePositive()).toThrow(`Assertion Failed: ${num} is not a positive number`);
    });
  
    test('throw not.bePositive()', () => {
        const num = 5.3;
    
        expect(() => num.must().not.bePositive()).toThrow(`Assertion Failed: ${num} is a positive number`);
    });

    test('beInteger()', () => {
        const num = 5;
    
        num.must().beInteger();
    });
  
    test('not.beInteger()', () => {
        const num = 5.2;
    
        num.must().not.beInteger();
    });

    test('throw beInteger()', () => {
        const num = 5.2;
    
        expect(() => num.must().beInteger()).toThrow(`Assertion Failed: ${num} is not an integer`);
    });
  
    test('throw not.beInteger()', () => {
        const num = 5;
    
        expect(() => num.must().not.beInteger()).toThrow(`Assertion Failed: ${num} is an integer`);
    });

    test('beEven()', () => {
        const num = 2;
    
        num.must().beEven();
    });
  
    test('not.beEven()', () => {
        const num = 3;
    
        num.must().not.beEven();
    });

    test('throw beEven()', () => {
        const num = 3;
    
        expect(() => num.must().beEven()).toThrow(`Assertion Failed: ${num} is not an even number`);
    });
  
    test('throw not.beEven()', () => {
        const num = 2;
    
        expect(() => num.must().not.beEven()).toThrow(`Assertion Failed: ${num} is an even number`);
    });

    test('beFinite()', () => {
        const num = 3;
    
        num.must().beFinite();
    });
  
    test('not.beFinite()', () => {
        const num = Infinity;
    
        num.must().not.beFinite();
    });

    test('not.beFinite()', () => {
        const num = NaN;
    
        num.must().not.beFinite();
    });

    test('throw beFinite()', () => {
        const num = Infinity;
    
        expect(() => num.must().beFinite()).toThrow(`Assertion Failed: ${num} is not a finite number`);
    });

    test('throw beFinite()', () => {
        const num = NaN;
    
        expect(() => num.must().beFinite()).toThrow(`Assertion Failed: ${num} is not a finite number`);
    });
  
    test('throw not.beFinite()', () => {
        const num = 3;
    
        expect(() => num.must().not.beFinite()).toThrow(`Assertion Failed: ${num} is a finite number`);
    });

    test('beNaN()', () => {
        const num = NaN;
    
        num.must().beNaN();
    });
  
    test('not.beNaN()', () => {
        const num = 5;
    
        num.must().not.beNaN();
    });

    test('throw beNaN()', () => {
        const num = 5;
    
        expect(() => num.must().beNaN()).toThrow(`Assertion Failed: ${num} is not a NaN`);
    });
  
    test('throw not.beNaN()', () => {
        const num = NaN;
    
        expect(() => num.must().not.beNaN()).toThrow(`Assertion Failed: ${num} is a NaN`);
    });
});
