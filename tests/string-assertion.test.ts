import '../src/core/index';
import { getRegexExp } from './extension/regex-extension';

describe('test for string assertion', () => {
    test('be()', () => {
      const str = 'someStr';
  
      str.must().be(str);
    });

    test('not.be()', () => {
        const str = 'someStr';
        const expStr = 'someExpStr'
    
        str.must().not.be(expStr);
    });

    test('throw be()', () => {
        const str = 'someStr';
        const expStr = 'someExpStr'
    
        expect(() => str.must().be(expStr)).toThrow(getRegexExp(`Expected ${str} is not equal to ${expStr}`));
      });
  
    test('throw not.be()', () => {
        const str = 'someStr';
    
        expect(() => str.must().not.be(str)).toThrow(getRegexExp(`Expected ${str} is equal to ${str}`));
    });

    test('contain()', () => {
      const str = 'abc';
      const expStr = 'b'
  
      str.must().contain(expStr);
    });

    test('not.contain()', () => {
        const str = 'abc';
        const expStr = 'd'
    
        str.must().not.contain(expStr);
    });

    test('throw contain()', () => {
        const str = 'abc';
        const expStr = 'd'
    
        expect(() => str.must().contain(expStr)).toThrow(`Assertion Failed: '${str}' does not contain '${expStr}'`);
    });
  
    test('throw not.contain()', () => {
        const str = 'abc';
        const expStr = 'b'
    
        expect(() => str.must().not.contain(expStr)).toThrow(`Assertion Failed: '${str}' contains '${expStr}'`);
    });

    test('startWith()', () => {
        const str = 'abc';
        const expStr = 'ab'
    
        str.must().startWith(expStr);
    });

    test('not.startWith()', () => {
        const str = 'abc';
        const expStr = 'cd'
    
        str.must().not.startWith(expStr);
    });

    test('throw startWith()', () => {
        const str = 'abc';
        const expStr = 'cd'
    
        expect(() => str.must().startWith(expStr)).toThrow(`Assertion Failed: '${str}' does not start with '${expStr}'`);
    });

    test('throw not.startWith()', () => {
        const str = 'abc';
        const expStr = 'ab'
    
        expect(() => str.must().not.startWith(expStr)).toThrow(`Assertion Failed: '${str}' starts with '${expStr}'`);
    });

    test('endWith()', () => {
        const str = 'abc';
        const expStr = 'bc'
    
        str.must().endWith(expStr);
    });

    test('not.endWith()', () => {
        const str = 'abc';
        const expStr = 'ab'
    
        str.must().not.endWith(expStr);
    });

    test('throw endWith()', () => {
        const str = 'abc';
        const expStr = 'ab'
    
        expect(() => str.must().endWith(expStr)).toThrow(`Assertion Failed: '${str}' does not end with '${expStr}'`);
    });

    test('throw not.endWith()', () => {
        const str = 'abc';
        const expStr = 'bc'
    
        expect(() => str.must().not.endWith(expStr)).toThrow(`Assertion Failed: '${str}' ends with '${expStr}'`);
    });

    test('haveLength()', () => {
        const str = 'abc';
        const length = 3;
    
        str.must().haveLength(length);
    });

    test('not.haveLength()', () => {
        const str = 'abc';
        const length = 4;
    
        str.must().not.haveLength(length);
    });

    test('throw haveLength()', () => {
        const str = 'abc';
        const length = 4;
    
        expect(() => str.must().haveLength(length)).toThrow(`Assertion Failed: '${str}' has length ${str.length}, expected length ${length}`);
    });

    test('throw not.haveLength()', () => {
        const str = 'abc';
        const length = 3;
    
        expect(() => str.must().not.haveLength(length)).toThrow(`Assertion Failed: '${str}' has not length ${str.length}, but length is ${length}`);
    });

    test('haveMaxLength()', () => {
        const str = 'abc';
        const length = 4;
    
        str.must().haveMaxLength(length);
    });

    test('not.haveMaxLength()', () => {
        const str = 'abc';
        const length = 3;
    
        str.must().not.haveMaxLength(length);
    });

    test('throw haveMaxLength()', () => {
        const str = 'abc';
        const length = 2;
    
        expect(() => str.must().haveMaxLength(length)).toThrow(`Assertion Failed: '${str}' has length ${str.length}, expected maximum length ${length}`);
    });

    test('throw not.haveMaxLength()', () => {
        const str = 'abc';
        const length = 4;
    
        expect(() => str.must().not.haveMaxLength(length)).toThrow(`Assertion Failed: '${str}' has length ${str.length}, expected minimum length ${length}`);
    });

    test('haveMinLength()', () => {
        const str = 'abc';
        const length = 3;
    
        str.must().haveMinLength(length);
    });

    test('not.haveMinLength()', () => {
        const str = 'abc';
        const length = 4;
    
        str.must().not.haveMinLength(length);
    });

    test('throw haveMinLength()', () => {
        const str = 'abc';
        const length = 4;
    
        expect(() => str.must().haveMinLength(length)).toThrow(`Assertion Failed: '${str}' has length ${str.length}, expected minimum length ${length}`);
    });

    test('throw not.haveMinLength()', () => {
        const str = 'abc';
        const length = 2;
    
        expect(() => str.must().not.haveMinLength(length)).toThrow(`Assertion Failed: '${str}' has length ${str.length}, expected maximum length ${length}`);
    });

    test('match()', () => {
        const str = 'slava ukraini, geroyam slava';
        const regex = /ukraini/;
    
        str.must().match(regex);
    });

    test('not.match()', () => {
        const str = 'slava ukraini, geroyam slava';
        const regex = /Ukraini/;
    
        str.must().not.match(regex);
    });

    test('throw match()', () => {
        const str = 'slava ukraini, geroyam slava';
        const regex = /Ukraini/;
    
        expect(() => str.must().match(regex)).toThrow(`Assertion Failed: '${str}' does not match the pattern '${regex}'`);
    });

    test('throw not.match()', () => {
        const str = 'slava ukraini, geroyam slava';
        const regex = /ukraini/;
    
        expect(() => str.must().not.match(regex)).toThrow(`Assertion Failed: '${str}' matches the pattern '${regex}'`);
    });
});
