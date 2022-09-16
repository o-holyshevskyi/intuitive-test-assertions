import '../src/index';

describe('Positive tests for array type', () => {
    test('Test beEmpty() method', () => {
        const array: string[] = [];

        array.must().beEmpty();
    })

    test('Test not.beEmpty() method', () => {
        const array = [ 1, 2, 3, 4, 5 ];

        array.must().not.beEmpty();
    })

    test('Test haveLength()', () => {
        const array = [ 1, 2, 3, 4, 5];

        array.must().haveLength(5);
    })

    test('Test not.haveLength()', () => {
        const array = [ 1, 2, 3, 4 ];

        array.must().not.haveLength(5);
    })

    test('Test haveLengthEqualOrGreaterThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        array.must().haveLengthEqualOrGreaterThan(5);
    })

    test('Test haveLengthEqualOrGreaterThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        array.must().haveLengthEqualOrGreaterThan(4);
    })

    test('Test not.haveLengthEqualOrGreaterThan()', () => {
        const array = [ 1, 2, 3, 4 ];

        array.must().not.haveLengthEqualOrGreaterThan(5);
    })

    test('Test haveLengthEqualOrLesserThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        array.must().haveLengthEqualOrLesserThan(5);
    })

    test('Test haveLengthEqualOrLesserThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        array.must().haveLengthEqualOrLesserThan(6);
    })

    test('Test not.haveLengthEqualOrLesserThan()', () => {
        const array = [ 1, 2, 3, 4 ];

        array.must().not.haveLengthEqualOrLesserThan(3);
    })

    test('Test containsType()', () => {
        const array = [ 1, 'test me', 3, 4 ];

        array.must().containsType('string');
    })

    test('Test containsType()', () => {
        const array = [ 1, 'test me', 3, 4 ];

        array.must().containsType('number');
    })

    test('Test containsType()', () => {
        const array = [ 1, 'test me', true, 4 ];

        array.must().containsType('boolean');
    })

    test('Test containsType()', () => {
        const array = [ 1, 'test me', true, undefined ];

        array.must().containsType('undefined');
    })

    test('Test containsType()', () => {
        const array = [ null, { test: true }, true, undefined ];

        array.must().containsType('object');
    })

    test('Test not.containsType()', () => {
        const array = [ 1, 'test me', 3, 4 ];

        array.must().not.containsType('boolean');
    })

    test('Test not.containsType()', () => {
        const array = [ 1, 'test me', 3, 4 ];

        array.must().not.containsType('object');
    })

    test('Test not.containsType()', () => {
        const array = [ 1, 'test me', true, 4 ];

        array.must().not.containsType('undefined');
    })

    test('Test not.containsType()', () => {
        const array = [ '2', 'test me', true, undefined ];

        array.must().not.containsType('number');
    })

    test('Test not.containsType()', () => {
        const array = [ null, { test: true }, true, undefined ];

        array.must().not.containsType('string');
    })

    test('Test startsWith()', () => {
        const actualArray = [ null, { test: true }, true, undefined ];
        const expectedArray = [ null, { test: true } ];

        actualArray.must().startsWith(expectedArray);
    })

    test('Test not.startsWith()', () => {
        const actualArray = [ null, { test: true }, true, undefined ];
        const expectedArray = [ 2, { test: true } ];

        actualArray.must().not.startsWith(expectedArray);
    })

    test('Test endsWith()', () => {
        const actualArray = [ 1, 2, 3, 4 ];
        const expectedArray = [ 3, 4 ];

        actualArray.must().endsWith(expectedArray);
    })

    test('Test not.endsWith()', () => {
        const actualArray = [ 1, 2, 3, 4 ];
        const expectedArray = [ 2, 3 ];

        actualArray.must().not.endsWith(expectedArray);
    })

    test('Test beSortedInASC()', () => {
        const sortedArrayInASC = [ 'A', 'B', 'C' ];

        sortedArrayInASC.must().beSortedInASC();
    })

    test('Test not.beSortedInASC()', () => {
        const sortedArrayInASC = [ 8, 7, 2, 9 ];

        sortedArrayInASC.must().not.beSortedInASC();
    })

    test('Test beSortedInDESC()', () => {
        const sortedArrayInDESC = [ 'C', 'B', 'A' ];

        sortedArrayInDESC.must().beSortedInDESC();
    })

    test('Test not.beSortedInDESC()', () => {
        const sortedArrayInDESC = [ 9, 1, 7, 2 ];

        sortedArrayInDESC.must().not.beSortedInDESC();
    })

    test('Test contains()', () => {
        const sortedArrayInDESC = [ 's', 1, 7, 2 ];

        sortedArrayInDESC.must().contains(7);
    })

    test('Test not.contains()', () => {
        const sortedArrayInDESC = [ 's', 1, 7, 2 ];

        sortedArrayInDESC.must().not.contains('a');
    })

    test('Test equalsTo()', () => {
        const sortedArrayInDESC = [ 's', 1, 7, 2 ];

        sortedArrayInDESC.must().equalsTo(sortedArrayInDESC);
    })

    test('Test not.equalsTo()', () => {
        const sortedArrayInDESC = [ 's', 1, 7, 2 ];
        const expectedArray = [ 's', 2, 7, 2 ]

        sortedArrayInDESC.must().not.equalsTo(expectedArray);
    })

    test('Test beUndefined()', () => {
        const nullArr = [ 's', 2, 7, 2 ];

        nullArr.must().haveSameLengthAs([ 2, 2, 7, 2 ]);
    })

    test('Test not.beUndefined()', () => {
        const nullArr = [ 2, 2, 7, 2 ];

        nullArr.must().not.haveSameLengthAs([ 2, 2, 7, 2, new Date(2022, 9, 15) ]);
    })

    test('Test be()', () => {
        const nullArr = [ 's', 2, 7, 2 ];

        nullArr.must().be(nullArr);
    })

    test('Test not.be()', () => {
        const nullArr = [ 2, 2, 7, 2 ];

        nullArr.must().not.be([ 2, 2, 7, 2, 5 ]);
    })
})

describe('Negative tests for array type', () => {
    test('Test beEmpty() method', () => {
        const array = [ 1, 2, 3, 4, 5 ];
        
        expect(() => array.must().beEmpty()).toThrow('Expected collection to be empty, but found [ 1, 2, 3, 4, 5 ] with length \'5\'');
    })

    test('Test not.beEmpty() method', () => {
        const array: Date[] = [];
        
        expect(() => array.must().not.beEmpty()).toThrow('Expected collection to not be empty, but found []');
    })

    test('Test haveLength()', () => {
        const array = [ 1, 2, 3, 4, 5];

        expect(() => array.must().haveLength(6)).toThrow('Expected collection has length \'6\', but found \'5\'');
    })

    test('Test not.haveLength()', () => {
        const array = [ 1, 2, 3, 4 ];

        expect(() => array.must().not.haveLength(4)).toThrow('Expected collection does not have length \'4\', but found \'4\'');
    })

    test('Test haveLengthEqualOrGreaterThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        expect(() => array.must().haveLengthEqualOrGreaterThan(6)).toThrow('Expected collection has length equal or greater than \'6\', but found \'5\'');
    })

    test('Test not.haveLengthEqualOrGreaterThan()', () => {
        const array = [ 1, 2, 3, 4 ];

        expect(() => array.must().not.haveLengthEqualOrGreaterThan(1)).toThrow('Expected collection does not have length equal or greater than \'1\', but found \'4\'');
    })

    test('Test haveLengthEqualOrLesserThan()', () => {
        const array = [ 1, 2, 3, 4, 5];

        expect(() => array.must().haveLengthEqualOrLesserThan(4)).toThrow('Expected collection has length equal or lesser than \'4\', but found \'5\'');
    })

    test('Test not.haveLengthEqualOrLesserThan()', () => {
        const array = [ 1, 2, 3, 4 ];

        expect(() => array.must().not.haveLengthEqualOrLesserThan(6)).toThrow('Expected collection does not have length equal or lesser than \'6\', but found \'4\'');
    })

    test('Test containsType()', () => {
        const array = [ null, { test: true }, true, undefined ];

        expect(() => array.must().containsType('string')).toThrow('Expected collection contains \'string\', but found [ \"null\", {\"test\":true}, true, \"undefined\" ]');
    })

    test('Test not.containsType()', () => {
        const array = [ 1, 'test me', 3, 4 ];

        expect(() => array.must().not.containsType('number')).toThrow('Expected collection does not contain \'string\', but found [ 1, \"test me\", 3, 4 ]');
    })

    test('Test startsWith()', () => {
        const actualArray = [ null, { test: true }, true, undefined ];
        const expectedArray = [ 1, { test: true } ];

        expect(() => actualArray.must().startsWith(expectedArray)).toThrow('Expected collection starts with [ 1, {\"test\":true} ], but found [ \"null\", {\"test\":true}, true, \"undefined\" ]');
    })

    test('Test not.startsWith()', () => {
        const actualArray = [ null, { test: true }, true, undefined ];
        const expectedArray = [ null, { test: true } ];

        expect(() => actualArray.must().not.startsWith(expectedArray)).toThrow('Expected collection does not start with [ \"null\", {\"test\":true} ], but found [ \"null\", {\"test\":true}, true, \"undefined\" ]');
    })

    test('Test endsWith()', () => {
        const actualArray = [ 1, 2, 3, 4 ];
        const expectedArray = [ 2, 4 ];

        expect(() => actualArray.must().endsWith(expectedArray)).toThrow('Expected collection ends with [ 2, 4 ], but found [ 1, 2, 3, 4 ]');
    })

    test('Test not.endsWith()', () => {
        const actualArray = [ 1, 2, 3, 4 ];
        const expectedArray = [ 3, 4 ];

        expect(() => actualArray.must().not.endsWith(expectedArray)).toThrow('Expected collection does not end with [ 3, 4 ], but found [ 1, 2, 3, 4 ]');
    })

    test('Test beSortedInASC()', () => {
        const sortedArrayInASC = [ 'B', 'C', 'A' ];

        expect(() => sortedArrayInASC.must().beSortedInASC()).toThrow('Expected collection to be sorted in ASC, but found [ \"B\", \"C\", \"A\" ]');
    })

    test('Test not.beSortedInASC()', () => {
        const sortedArrayInASC = [ 1, 2, 5, 15 ];

        expect(() => sortedArrayInASC.must().not.beSortedInASC()).toThrow('Expected collection to not be sorted in ASC, but found [ 1, 2, 5, 15 ]');
    })

    test('Test beSortedInDESC()', () => {
        const sortedArrayInDESC = [ 'B', 'C', 'A' ];

        expect(() => sortedArrayInDESC.must().beSortedInDESC()).toThrow('Expected collection to be sorted in DESC, but found [ \"B\", \"C\", \"A\" ]');
    })

    test('Test not.beSortedInASC()', () => {
        const sortedArrayInDESC = [ 15, 10, 5, 1 ];

        expect(() => sortedArrayInDESC.must().not.beSortedInDESC()).toThrow('Expected collection to not be sorted in DESC, but found [ 15, 10, 5, 1 ]');
    })

    test('Test contains()', () => {
        const sortedArrayInDESC = [ 'B', 'C', 'A' ];

        expect(() => sortedArrayInDESC.must().contains(2)).toThrow('Expected collection contains \'2\', but found [ \"B\", \"C\", \"A\" ]');
    })

    test('Test not.contains()', () => {
        const sortedArrayInDESC = [ 15, 10, 5, 1 ];

        expect(() => sortedArrayInDESC.must().not.contains(10)).toThrow('Expected collection does not contain \'10\', but found [ 15, 10, 5, 1 ]');
    })

    test('Test equalsTo()', () => {
        const sortedArrayInDESC = [ 'B', 'C', 'A' ];
        const expectedArray = [ 'V', 'C', 'A' ];

        expect(() => sortedArrayInDESC.must().equalsTo(expectedArray)).toThrow('Expected collection equals to [ \"V\", \"C\", \"A\" ], but found [ \"B\", \"C\", \"A\" ]');
    })

    test('Test not.equalsTo()', () => {
        const sortedArrayInDESC = [ 15, 10, 5, 1 ];

        expect(() => sortedArrayInDESC.must().not.equalsTo(sortedArrayInDESC)).toThrow('Expected collection does not equals to [ 15, 10, 5, 1 ], but found [ 15, 10, 5, 1 ]');
    })

    test('Test haveSameLengthAs()', () => {
        const nullArr = [ 15, 10, 5, 1 ];

        expect(() => nullArr.must().haveSameLengthAs([ 's', 's', 's'])).toThrow('Expected collection has length \'3\', but found \'4\'');
    })

    test('Test not.haveSameLengthAs()', () => {
        const nullArr = [ 's', 's', 's', 's' ];

        expect(() => nullArr.must().not.haveSameLengthAs([ 15, 10, 5, 1 ])).toThrow('Expected collection does not have length \'4\', but found \'4\'');
    })

    test('Test be()', () => {
        const nullArr = [ 's', 2, 7, 2 ];

        expect(() => nullArr.must().be([ 2, 2, 7, 2, 5 ])).toThrow('Expected value to be \'2,2,7,2,5\', but found \'s,2,7,2\'');
        
    })

    test('Test not.be()', () => {
        const nullArr = [ 2, 2, 7, 2 ];

        expect(() => nullArr.must().not.be(nullArr)).toThrow('Expected value to not be \'2,2,7,2\', but found \'2,2,7,2\'');
        ;
    })
})