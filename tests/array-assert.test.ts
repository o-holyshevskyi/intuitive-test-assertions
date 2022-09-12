import '../src/index';

describe('Positive tests for array type', () => {
    test('Test beEmpty() method', () => {
        const array: string[] = [];

        array.must().beEmpty();
    })

    test('Test notBeEmpty() method', () => {
        const array = [ 1, 2, 3, 4, 5 ];

        array.must().notBeEmpty();
    })
})

describe('Negative tests for array type', () => {
    test('Test beEmpty() method', () => {
        const array = [ 1, 2, 3, 4, 5 ];
        
        expect(() => array.must().beEmpty()).toThrow();
    })

    test('Test notBeEmpty() method', () => {
        const array: Date[] = [];
        
        expect(() => array.must().notBeEmpty()).toThrow();
    })
})