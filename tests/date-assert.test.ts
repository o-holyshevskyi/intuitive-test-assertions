import '../src/index';

describe('Positive tests for date type', () => {
    test('Test be() method', () => {
        const date = new Date();

        date.must().be(date);
    })

    test('Test for not.be() method', () => {
        const date = new Date(2008, 8, 25);

        date.must().not.be(new Date());
    })
    
    test('Test beAfter() method', () => {
        const date = new Date();

        date.must().beAfter(new Date(2008, 8, 25));
    })

    test('Test for not.beAfter() method', () => {
        const date = new Date(2008, 8, 25);

        date.must().not.beAfter(new Date());
    })

    test('Test beBefore() method', () => {
        const date = new Date(2008, 8, 25);

        date.must().beBefore(new Date());
    })

    test('Test for not.beBefore() method', () => {
        const date = new Date();

        date.must().not.beBefore(new Date(2008, 8, 25));
    })

    test('Test beOnOrAfter() method', () => {
        const date = new Date();

        date.must().beOnOrAfter(new Date);
    })

    test('Test beOnOrAfter() method', () => {
        const date = new Date(2000, 1, 1, 12, 1, 1);

        date.must().beOnOrAfter(new Date(2000, 1, 1, 12, 1, 0));
    })

    test('Test not.beOnOrAfter() method', () => {
        const date = new Date(2000, 1, 1, 12, 0, 0);

        date.must().not.beOnOrAfter(new Date(2000, 1, 1, 12, 0, 1));
    })

    test('Test beOnOrBefore() method', () => {
        const date = new Date();

        date.must().beOnOrBefore(new Date);
    })

    test('Test beOnOrBefore() method', () => {
        const date = new Date(2000, 1, 1, 12, 1, 1);

        date.must().beOnOrBefore(new Date(2000, 1, 1, 12, 1, 2));
    })

    test('Test not.beOnOrBefore() method', () => {
        const date = new Date(2000, 1, 1, 12, 0, 0);

        date.must().not.beOnOrBefore(new Date(2000, 1, 1, 11, 59, 59));
    })

    test('Test containsYear() method', () => {
        const date = new Date();

        date.must().containsYear(new Date().getFullYear()).and.not.containsHours(date.getHours() - 2);
    })

    test('Test not.containsYear() method', () => {
        const date = new Date();

        date.must().not.containsYear(new Date().getFullYear() - 2);
    })

    test('Test containsMonth() method', () => {
        const date = new Date();

        date.must().containsMonth(new Date().getMonth());
    })

    test('Test not.containsMonth() method', () => {
        const date = new Date();

        date.must().not.containsMonth(new Date().getMonth() - 2 + 4);
    })

    test('Test containsDate() method', () => {
        const date = new Date();

        date.must().containsDate(new Date().getDate());
    })

    test('Test not.containsDate() method', () => {
        const date = new Date();

        date.must().not.containsDate(new Date().getDate() - 2 + 4);
    })

    test('Test containsDayOfWeek() method', () => {
        const date = new Date();

        date.must().containsDayOfWeek(new Date().getDay());
    })

    test('Test not.containsDayOfWeek() method', () => {
        const date = new Date();

        date.must().not.containsDayOfWeek(new Date().getDay() - 2 + 4);
    })

    test('Test containsHours() method', () => {
        const date = new Date();

        date.must().containsHours(new Date().getHours());
    })

    test('Test not.containsHours() method', () => {
        const date = new Date();

        date.must().not.containsHours(new Date().getHours() - 2 + 4);
    })

    test('Test containsMinutes() method', () => {
        const date = new Date();

        date.must().containsMinutes(new Date().getMinutes());
    })

    test('Test not.containsMinutes() method', () => {
        const date = new Date();

        date.must().not.containsMinutes(new Date().getMinutes() - 2 + 4);
    })

    test('Test containsSeconds() method', () => {
        const date = new Date();

        date.must().containsSeconds(new Date().getSeconds());
    })

    test('Test not.containsSeconds() method', () => {
        const date = new Date();

        date.must().not.containsSeconds(new Date().getSeconds() - 2 + 4);
    })

    test('Test beInDateRange() method', () => {
        const date = new Date(2000, 4, 13);

        date.must().beInDateRange(new Date(2000, 1, 1), new Date());
    })

    test('Test not.beInDateRange() method', () => {
        const date = new Date();

        date.must().not.beInDateRange(new Date(2000, 4, 13), new Date(2020, 12, 31));
    })

    test('Test bePrecisely() method', () => {
        const date = new Date(2000, 4, 13);

        date.must().bePrecisely(new Date(2000, 4, 13).getTime());
    })

    test('Test not.bePrecisely() method', () => {
        const date = new Date();

        date.must().not.bePrecisely(new Date().getTime() + 3);
    })

    test('Test beOneOf() method', () => {
        const date = new Date(2000, 4, 13);

        date.must().beOneOf([ new Date(2000, 4, 13), new Date(2000, 4, 25) ]);
    })

    test('Test not.beOneOf() method', () => {
        const date = new Date();

        date.must().not.beOneOf([ new Date(2000, 4, 13), new Date(2000, 4, 25) ]);
    })
})

describe('Negative tests for date type', () => {
    test('Test be() method', () => {
        const date = new Date(2002, 8, 5);

        expect(() => date.must().be(new Date(2008, 8, 25))).toThrow(`Expected value to be \'${JSON.stringify(new Date(2008, 8, 25))}', but found \'${JSON.stringify(date)}\'`);
    })

    test('Test for not.be() method', () => {
        const date = new Date(2008, 8, 25);

        expect(() => date.must().not.be(date)).toThrow(`Expected value to not be \'${JSON.stringify(date)}\', but found \'${JSON.stringify(date)}\'`);
    })
    
    test('Test beAfter() method', () => {
        const date = new Date(2008, 8, 25);

        expect(() => date.must().beAfter(new Date(2020, 8, 5))).toThrow(`Expected date be after \'${new Date(2020, 8, 5).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test for not.beAfter() method', () => {
        const date = new Date(2022, 8, 5);

        expect(() => date.must().not.beAfter(new Date(2008, 8, 25))).toThrow(`Expected date not be after \'${new Date(2008, 8, 25).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test beBefore() method', () => {
        const date = new Date(2022, 8, 5);

        expect(() => date.must().beBefore(new Date(2008, 8, 25))).toThrow(`Expected date be before \'${new Date(2008, 8, 25).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test for not.beBefore() method', () => {
        const date = new Date(2008, 8, 25);

        expect(() => date.must().not.beBefore(new Date(2020, 8, 25))).toThrow(`Expected date not be before \'${new Date(2020, 8, 25).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test beOnOrAfter() method', () => {
        const date = new Date(2000, 1, 1, 12, 1, 1);

        expect(() => date.must().beOnOrAfter(new Date(2001, 1, 1, 12, 1, 0))).toThrow(`Expected date be on or after \'${new Date(2001, 1, 1, 12, 1, 0).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test not.beOnOrAfter() method', () => {
        const date = new Date(2000, 1, 1, 12, 0, 2);

        expect(() => date.must().not.beOnOrAfter(new Date(2000, 1, 1, 12, 0, 1))).toThrow(`Expected date not be on or after \'${new Date(2000, 1, 1, 12, 0, 1).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test beOnOrBefore() method', () => {
        const date = new Date(2020, 1, 1);

        expect(() => date.must().beOnOrBefore(new Date(2000, 1, 1))).toThrow(`Expected date be on or before \'${new Date(2000, 1, 1).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test beOnOrBefore() method', () => {
        const date = new Date(2000, 1, 1, 12, 1, 3);

        expect(() => date.must().beOnOrBefore(new Date(2000, 1, 1, 12, 1, 2))).toThrow(`Expected date be on or before \'${new Date(2000, 1, 1, 12, 1, 2).toISOString()}\', but found \'${date.toISOString()}\'`);
    })

    test('Test containsYear() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsYear(new Date(2022, 1, 1, 0, 1, 1).getFullYear()+ 3)).toThrow('Expected year equals to \'2025\', but found \'2022\'');
    })

    test('Test not.containsYear() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsYear(new Date(2022, 1, 1, 0, 1, 1).getFullYear())).toThrow('Expected year not equals to \'2022\', but found \'2022\'');
    })

    test('Test containsMonth() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsMonth(new Date(2022, 1, 1, 0, 1, 1).getMonth() + 2)).toThrow('Expected month equals to \'3\', but found \'1\'');
    })

    test('Test not.containsMonth() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsMonth(new Date(2022, 1, 1, 0, 1, 1).getMonth())).toThrow('Expected month not equals to \'1\', but found \'1\'');
    })

    test('Test containsDate() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsDate(new Date(2022, 1, 1, 0, 1, 1).getDate() + 6)).toThrow('Expected day of the month equals to \'7\', but found \'1\'');
    })

    test('Test not.containsDate() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsDate(new Date(2022, 1, 1, 0, 1, 1).getDate())).toThrow('Expected day of the month not equals to \'1\', but found \'1\'');
    })

    test('Test containsDayOfWeek() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsDayOfWeek(new Date(2022, 1, 1, 0, 1, 1).getDay() + 5)).toThrow('Expected day of the week equals to \'7\', but found \'2\'');
    })

    test('Test not.containsDayOfWeek() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsDayOfWeek(new Date(2022, 1, 1, 0, 1, 1).getDay())).toThrow('Expected day of the week not equals to \'2\', but found \'2\'');
    })

    test('Test containsHours() method', () => {
        const date = new Date(2022, 1, 1, 1, 1, 1);

        expect(() => date.must().containsHours(new Date(2022, 1, 1, 0, 1, 1).getHours() + 6)).toThrow('Expected hours equals to \'6\', but found \'1\'');
    })

    test('Test not.containsHours() method', () => {
        const date = new Date(2022, 1, 1, 5, 1, 1);

        expect(() => date.must().not.containsHours(new Date(2022, 1, 1, 5, 1, 1).getHours())).toThrow('Expected hours not equals to \'5\', but found \'5\'');
    })

    test('Test containsMinutes() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsMinutes(new Date(2022, 1, 1, 0, 1, 1).getMinutes() + 6)).toThrow('Expected minutes equals to \'7\', but found \'1\'');
    })

    test('Test not.containsMinutes() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsMinutes(new Date(2022, 1, 1, 0, 1, 1).getMinutes())).toThrow('Expected minutes not equals to \'1\', but found \'1\'');
        
    })

    test('Test containsSeconds() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().containsSeconds(new Date(2022, 1, 1, 0, 1, 1).getSeconds() + 6)).toThrow('Expected seconds equals to \'7\', but found \'1\'');
    })

    test('Test not.containsSeconds() method', () => {
        const date = new Date(2022, 1, 1, 0, 1, 1);

        expect(() => date.must().not.containsSeconds(new Date(2022, 1, 1, 0, 1, 1).getSeconds())).toThrow('Expected seconds not equals to \'1\', but found \'1\'');
    })

    test('Test beInDateRange() method', () => {
        const date = new Date(2200, 4, 13);

        expect(() => date.must().beInDateRange(new Date(2000, 1, 1), new Date())).toThrow(`Expected \'5/13/2200\' to be from \'2/1/2000\' to \'${new Date().toLocaleDateString()}\', but value is out of this range`);
    })

    test('Test not.beInDateRange() method', () => {
        const date = new Date(2010, 12, 31);

        expect(() => date.must().not.beInDateRange(new Date(2000, 4, 13), new Date(2020, 12, 31))).toThrow('Expected \'1/31/2011\' to be before \'5/13/2000\' or after \'1/31/2021\', but value is in of this range');
    })

    test('Test bePrecisely() method', () => {
        const date = new Date(2000, 4, 13);

        expect(() => date.must().bePrecisely(new Date(2000, 4, 14).getTime())).toThrow(`Expected date precisely equals to \'${new Date(2000, 4, 14).getTime()}\', but found ${date.getTime()}`);
        
    })

    test('Test not.bePrecisely() method', () => {
        const date = new Date(2000, 4, 13);

        expect(() => date.must().not.bePrecisely(new Date(2000, 4, 13).getTime())).toThrow(`Expected date precisely not equals to \'${new Date(2000, 4, 13).getTime()}\', but found ${date.getTime()}`);
    })

    test('Test beOneOf() method', () => {
        const date = new Date();

        expect(() => date.must().beOneOf([ new Date(2000, 4, 13), new Date(2000, 4, 25) ])).toThrow(`Expected date be at least one of \'\"5/13/2000\", \"5/25/2000\"\', but found \'${new Date().toLocaleDateString()}\'`);
    })

    test('Test not.beOneOf() method', () => {
        const date = new Date(2000, 4, 13);

        expect(() => date.must().not.beOneOf([ new Date(2000, 4, 13), new Date(2000, 4, 25) ])).toThrow('Expected date not be one of \'\"5/13/2000\", \"5/25/2000\"\', but found \'5/13/2000\'');
    })
})