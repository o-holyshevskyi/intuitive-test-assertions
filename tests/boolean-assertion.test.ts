import '../src/core/index';
import { getRegexExp } from './extension/regex-extension';

describe('test for boolean assertion', () => {
    test('be()', () => {
      const bool = true;
  
      bool.must().be(bool);
    });

    test('not.be()', () => {
        const bool = false;
    
        bool.must().not.be(true);
    });

    test('throw be()', () => {
        const bool = true;
    
        expect(() => bool.must().be(false)).toThrow(getRegexExp(`Expected ${bool} is not equal to ${false}`));
      });
  
    test('throw not.be()', () => {
        const bool = true;
    
        expect(() => bool.must().not.be(bool)).toThrow(getRegexExp(`Expected ${bool} is equal to ${bool}`));
    });

    test('beTrue()', () => {
        const bool = true;
    
        bool.must().beTrue();
      });
  
    test('not.beTrue()', () => {
        const bool = false;
    
        bool.must().not.beTrue();
    });

    test('throw beTrue()', () => {
        const bool = false;
    
        expect(() => bool.must().beTrue()).toThrow(getRegexExp('Expected true, but got false'));
    });

    test('throw not.beTrue()', () => {
        const bool = true;
    
        expect(() => bool.must().not.beTrue()).toThrow(getRegexExp('Expected not to be true, but got true'));
    });

    test('beFalse()', () => {
        const bool = false;
    
        bool.must().beFalse();
      });
  
    test('not.beFalse()', () => {
        const bool = true;
    
        bool.must().not.beFalse();
    });

    test('throw beFalse()', () => {
        const bool = true;
    
        expect(() => bool.must().beFalse()).toThrow(getRegexExp('Expected false, but got true'));
    });

    test('throw not.beFalse()', () => {
        const bool = false;
    
        expect(() => bool.must().not.beFalse()).toThrow(getRegexExp('Expected not to be false, but got false'));
    });
});
