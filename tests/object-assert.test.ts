import '../src/index';

describe('Positive tests for object type', () => {
    test('Test beEmpty() method', () => {
        const obj = {};

        obj.must().beEmpty();
    })

    test('Test notBeEmpty() method', () => {
        const obj = { firstElement: 1 };

        obj.must().not.beEmpty().and.not.contains((object) => object.subject.firstElement === 2);
    })

    test('Test haveLength() method', () => {
        const obj = { firstElement: 1 };

        obj.must().haveLength(1);
    })

    test('Test haveLengthEqualOrGreaterThan() method', () => {
        const obj = { firstElement: 1 };

        obj.must().haveLengthEqualOrGreaterThan(1);
    })

    test('Test haveLengthEqualOrLesserThan() method', () => {
        const obj = { firstElement: 1 };

        obj.must().haveLengthEqualOrLesserThan(2);
    })

    test('Test containsNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: null, thirdElement: undefined };

        obj.must().containsNullOrUndefined();
    })

    test('Test containsNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        obj.must().not.containsNullOrUndefined();
    })

    test('Test containsKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        obj.must().containsKey('secondElement');
    })

    test('Test notContainKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        obj.must().not.containsKey('name');
    })

    test('Test contains() method', () => {
        const obj = { firstElement: 1, secondElement: 2 }

        obj.must().contains((obj) => obj.subject.firstElement === 1 && obj.subject.secondElement !== 5 );
    })

    test('Test notContain() method', () => {
        const obj = { firstElement: 1, secondElement: 2 }

        obj.must().not.contains((obj) => obj.subject.firstElement === 3);
    })
})

describe('Negative tests for object type', () => {
    test('Test beEmpty() method', () => {
        const obj = { firstElement: 1 };

        expect(() => obj.must().beEmpty()).toThrow('Expected collection to be empty, but found {\"firstElement\":1}');
    })

    test('Test notBeEmpty() method', () => {
        const obj = { };

        expect(() => obj.must().not.beEmpty()).toThrow('Expected collection to not be empty, but found {}');
    })

    test('Test haveLength() method', () => {
        const obj = { };

        expect(() => obj.must().haveLength(1)).toThrow('Expected collection to have length \'1\', but found \'0\'');
    })

    test('Test haveLengthEqualOrGreaterThan() method', () => {
        const obj = { };

        expect(() => obj.must().haveLengthEqualOrGreaterThan(1)).toThrow('Expected collection to have length equal or greater than \'1\', but found \'0\'');
    })

    test('Test haveLengthEqualOrLesserThan() method', () => {
        const obj = { firstElement: 1, secondElement: 2 };

        expect(() => obj.must().haveLengthEqualOrLesserThan(1)).toThrow('Expected collection to have length equal or lesser than \'1\', but found \'2\'');
    })

    test('Test notContainNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: null, thirdElement: undefined };

        expect(() => obj.must().not.containsNullOrUndefined()).toThrow('Expected collection does not contain null or undefined, but found {\"firstElement\":1,\"secondElement\":null}');
    })

    test('Test containsNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().containsNullOrUndefined()).toThrow('Expected collection contains null or undefined, but found {\"firstElement\":1,\"secondElement\":2,\"thirdElement\":3}');
    })

    test('Test containsKey() method', () => {
        const obj = { firstElement: 1, secondElement: null, thirdElement: undefined };

        expect(() => obj.must().containsKey('name')).toThrow('Expected collection contains \'name\' key, but found {\"firstElement\":1,\"secondElement\":null}');
    })

    test('Test notContainKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().not.containsKey('secondElement')).toThrow('Expected collection does not contain \'secondElement\' key, but found {\"firstElement\":1,\"secondElement\":2,\"thirdElement\":3}');
    })

    test('Test contains() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().contains((obj) => obj.subject.firstElement === 5 )).toThrow('Expected collection contains { obj.subject.firstElement === 5; }, but found {\"firstElement\":1,\"secondElement\":2,\"thirdElement\":3}');
    })

    test('Test notContain() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().not.contains((obj) => obj.subject.firstElement === 1 )).toThrow('Expected collection does not contain { obj.subject.firstElement === 1; }, but found {\"firstElement\":1,\"secondElement\":2,\"thirdElement\":3}');
    })
})