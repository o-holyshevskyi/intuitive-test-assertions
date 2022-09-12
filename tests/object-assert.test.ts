import '../src/index';

describe('Positive tests for object type', () => {
    test('Test beEmpty() method', () => {
        const obj = {};

        obj.must().beEmpty();
    })

    test('Test notBeEmpty() method', () => {
        const obj = { firstElement: 1 };

        obj.must().notBeEmpty();
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

        obj.must().notContainNullOrUndefined();
    })

    test('Test containsKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        obj.must().containsKey('secondElement');
    })

    test('Test notContainKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        obj.must().notContainKey('name');
    })

    test('Test contains() method', () => {
        const obj = { firstElement: 1, secondElement: 2 }

        obj.must().contains((obj) => obj.subject.firstElement === 1 && obj.subject.secondElement !== 5 );
    })

    test('Test notContain() method', () => {
        const obj = { firstElement: 1, secondElement: 2 }

        obj.must().notContain((obj) => obj.subject.firstElement === 3);
    })
})

describe('Negative tests for object type', () => {
    test('Test beEmpty() method', () => {
        const obj = { firstElement: 1 };

        expect(() => obj.must().beEmpty()).toThrow();
    })

    test('Test notBeEmpty() method', () => {
        const obj = { };

        expect(() => obj.must().notBeEmpty()).toThrow();
    })

    test('Test haveLength() method', () => {
        const obj = { };

        expect(() => obj.must().haveLength(1)).toThrow();
    })

    test('Test haveLengthEqualOrGreaterThan() method', () => {
        const obj = { };

        expect(() => obj.must().haveLengthEqualOrGreaterThan(1)).toThrow();
    })

    test('Test haveLengthEqualOrLesserThan() method', () => {
        const obj = { firstElement: 1, secondElement: 2 };

        expect(() => obj.must().haveLengthEqualOrLesserThan(1)).toThrow();
    })

    test('Test notContainNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: null, thirdElement: undefined };

        expect(() => obj.must().notContainNullOrUndefined()).toThrow();
    })

    test('Test containsNullOrUndefined() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().containsNullOrUndefined()).toThrow();
    })

    test('Test containsKey() method', () => {
        const obj = { firstElement: 1, secondElement: null, thirdElement: undefined };

        expect(() => obj.must().containsKey('name')).toThrow();
    })

    test('Test notContainKey() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().notContainKey('secondElement')).toThrow();
    })

    test('Test contains() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().contains((obj) => obj.subject.firstElement === 5 )).toThrow();
    })

    test('Test notContain() method', () => {
        const obj = { firstElement: 1, secondElement: 2, thirdElement: 3 };

        expect(() => obj.must().notContain((obj) => obj.subject.firstElement === 1 )).toThrow();
    })
})