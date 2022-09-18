import '../src/index';

describe('Positive tests for function assertions', () => {
    test('Test returnsType() method', () => {
        function foo(): number {
            return 2;
        }

        foo.must().returnsType('number').and.haveName('foo');
    })

    test('Test returnsType() method', () => {
        function foo(): undefined {
            return undefined;
        }

        foo.must().returnsType('undefined');
    })

    test('Test returnsType() method', () => {
        function foo(): [] {
            return [];
        }

        foo.must().returnsType('object');
    })

    test('Test returnsType() method', () => {
        function foo(): boolean {
            return true;
        }

        foo.must().returnsType('boolean');
    })

    test('Test returnsType() method', () => {
        function foo(): string {
            return '2';
        }

        foo.must().returnsType('string');
    })

    test('Test returnsType() method', () => {
        function foo(): symbol {
            return Symbol('key');
        }

        foo.must().returnsType('symbol');
    })

    test('Test returnsType() method', () => {
        function foo(): null {
            return null;
        }

        foo.must().returnsType('object');
    })

    test('Test returnsType() method', () => {
        function foo(): any {
            return () => "func";
        }

        foo.must().returnsType('function');
    })

    test('Test not.returnsType() method', () => {
        function foo(): number {
            return 3;
        }

        foo.must().not.returnsType('string');
    })

    test('Test not.haveName() method', () => {
        function foo(): number {
            return 3;
        }

        foo.must().not.haveName('bar');
    })

    test('Test beThrown() method', () => {
        function foo(): number {
            throw new Error('The foo function is thrown');
        }

        foo.must().beThrown();
    })

    test('Test beThrown() method', () => {
        function foo(): number {
            return 2;
        }

        foo.must().not.beThrown();
    })
})

describe('Negative tests for function assertions', () => {
    test('Test returnsType() method', () => {
        function foo(): number {
            return 2;
        }

        expect(() => foo.must().returnsType('string')).toThrow('Expected function returns type \'string\', but found \'number\'');
    })

    test('Test not.returnsType() method', () => {
        function foo(): number {
            return 2;
        }

        expect(() => foo.must().not.returnsType('number')).toThrow('Expected function does not return type \'number\', but found \'number\'');
    })

    test('Test haveName() method', () => {
        function foo(): number {
            return 2;
        }

        expect(() => foo.must().haveName('bar')).toThrow('Expected function has name \'bar\', but found \'foo\'');
    })

    test('Test not.haveName() method', () => {
        function foo(): number {
            return 2;
        }

        expect(() => foo.must().not.haveName('foo')).toThrow('Expected function does not have name \'foo\', but found \'foo\'');
    })

    test('Test beThrown() method', () => {
        function foo(): number {
            return 2;
        }

        expect(() => foo.must().beThrown()).toThrow('Expected function \'foo\' to be thrown');
    })

    test('Test not.beThrown() method', () => {
        function foo(): number {
            throw new Error('Test is thrown');
        }

        expect(() => foo.must().not.beThrown()).toThrow('Expected function \'foo\' to not be thrown');
    })
})