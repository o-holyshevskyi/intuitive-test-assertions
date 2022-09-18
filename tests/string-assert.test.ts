import '../src/index';

describe('Positive tests for string type', () => {
    test('Test be() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().be(str).and.hasLength(26);
    })

    test('Test not.be() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.be('Test assertions');
    })

    test('Test beEmptyOrWhiteSpace() method', () => {
        const str = ' ';

        str.must().beEmptyOrWhiteSpace();
    })

    test('Test not.beEmptyOrWhiteSpace() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.beEmptyOrWhiteSpace();
    })

    test('Test contains() method', () => {
        const str = 'Test assertions';

        str.must().contains('assertions');
    })

    test('Test not.contains() method', () => {
        const str = 'Test assertions';

        str.must().not.contains('Intuitive');
    })

    test('Test containsAll() method', () => {
        const str = 'Test assertions';

        str.must().containsAll([ 'Test', 'assertions' ]);
    })

    test('Test not.containsAll() method', () => {
        const str = 'Test assertions';

        str.must().not.containsAll([ 'One', 'two', 'eleven' ]);
    })

    test('Test containsAny() method', () => {
        const str = 'Test assertions';

        str.must().containsAny([ 'assertions' ]);
    })

    test('Test not.containsAny() method', () => {
        const str = 'Test assertions';

        str.must().not.containsAny([ 'Intuitive' ]);
    })

    test('Test startsWith() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().startsWith('Intuitive tests assertions');
    })

    test('Test not.startsWith() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.startsWith('Tests assertions');
    })

    test('Test endsWith() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().endsWith('assertions');
    })

    test('Test not.endsWith() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.endsWith('Intuitive tests');
    })

    test('Test hasLength() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().hasLength(str.length);
    })

    test('Test not.hasLength() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.hasLength(15);
    })

    test('Test match() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().match(/.+/gm);
    })

    test('Test not.match() method', () => {
        const str = 'Intuitive tests assertions';

        str.must().not.match(/\s+/gm);
    })
})

describe('Negative tests for string type', () => {
    test('Test be() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().be('Tests assertions')).toThrow('Expected value to be \'\"Tests assertions\"\', but found \'\"Intuitive tests assertions\"\'');
    })

    test('Test not.be() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().not.be(str)).toThrow('Expected value to not be \'\"Intuitive tests assertions\"\', but found \'\"Intuitive tests assertions\"\'');
    })

    test('Test beEmptyOrWhiteSpace() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().beEmptyOrWhiteSpace()).toThrow('Expected be empty or white space, but found \'Intuitive tests assertions\'');
    })

    test('Test not.beEmptyOrWhiteSpace() method', () => {
        const str = '';

        expect(() => str.must().not.beEmptyOrWhiteSpace()).toThrow('Expected not be empty or white space, but found \'\'');
    })

    test('Test contains() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().contains('Intuitive')).toThrow('Expected the \'Test assertions\' contains \'Intuitive\'');
    })

    test('Test not.contains() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().not.contains('assertions')).toThrow('Expected the \'Test assertions\' does not contain \'assertions\'');
    })

    test('Test containsAll() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().containsAll([ 'Test', 'assertions', 'Intuitive' ])).toThrow('Expected the \'Test assertions\' contains \'Intuitive\'');
    })

    test('Test not.containsAll() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().not.containsAll([ 'Test', 'assertions' ])).toThrow('Expected the \'Test assertions\' does not contain \'Test\'');
    })

    test('Test containsAny() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().containsAny([ 'Intuitive' ])).toThrow('Expected the \'Test assertions\' contains \'Intuitive\'');
    })

    test('Test not.containsAny() method', () => {
        const str = 'Test assertions';

        expect(() => str.must().not.containsAny([ 'assertions' ])).toThrow('Expected the \'Test assertions\' does not contain \'assertions\'');
    })

    test('Test startsWith() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().startsWith('Tests assertions')).toThrow('Expected the \'Intuitive tests assertions\' starts with \'Tests assertions\'');
    })

    test('Test not.startsWith() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().not.startsWith('Intuitive tests')).toThrow('Expected the \'Intuitive tests assertions\' does not start with \'Intuitive tests\'');
    })

    test('Test endsWith() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().endsWith('tests')).toThrow('Expected the \'Intuitive tests assertions\' ends with \'tests\'');
    })

    test('Test not.endsWith() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().not.endsWith('assertions')).toThrow('Expected the \'Intuitive tests assertions\' does not end with \'assertions\'');
    })

    test('Test hasLength() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().hasLength(5)).toThrow('Expected the \'Intuitive tests assertions\' has a length \'5\', but found \'26\'');
    })

    test('Test not.hasLength() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().not.hasLength(str.length)).toThrow('Expected the \'Intuitive tests assertions\' has not a length \'26\', but found \'26\'');
    })

    test('Test match() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().match(/\d+/gm)).toThrow('Expected the \'Intuitive tests assertions\' matches with /\\d+/gm regular expression');
    })

    test('Test not.match() method', () => {
        const str = 'Intuitive tests assertions';

        expect(() => str.must().not.match(/.+/gm)).toThrow('Expected the \'Intuitive tests assertions\' does not match with /.+/gm regular expression');
    })
})