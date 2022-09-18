[![npm](https://img.shields.io/npm/v/intuitive-test-assertions?style=plastic)](https://www.npmjs.com/package/intuitive-test-assertions) [![downloads](https://img.shields.io/npm/dw/intuitive-test-assertions?style=plastic)](https://www.npmjs.com/package/intuitive-test-assertions) [![checks](https://img.shields.io/github/checks-status/holyaleks/test-assertion/main?style=plastic)](https://github.com/holyaleks/test-assertion/actions) [![follow](https://img.shields.io/github/forks/holyaleks/test-assertion?style=social)](https://github.com/holyaleks/test-assertion)

# Intuitive Assertion

Install the Intuitive test assertions package in your application

```npm
npm i intuitive-test-assertions
```

# Available assertions

Intuitive assertions are available for different types in [TypeScript language](https://www.typescriptlang.org/docs/handbook/basic-types.html). Start using library importing `intuitive-test-assertions` in your file

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';
```

After importing this library you are able to use Intuitive Test Assertions in your tests.

## Boolean

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): boolean {
    return true;
}

const bool = foo();

bool.must().be(true);
bool.must().beTrue();
// if you want to verify something opposite, use the not property
bool.must().not.beFalse();
bool.must().not.be(false);

bool.must().beFalse(); // the message will be thrown: 'Expected value to be 'False', but found 'true''
```

## Number

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): number {
    return 5;
}

const numb = foo();

numb.must().be(5);
numb.must().beGreaterOrEqualTo(5);
numb.must().beGreaterThan(4);
numb.must().beLesserOrEqualTo(5);
numb.must().beLesserThan(6);
numb.must().beInRange(0, 10);
numb.must().beInteger();
numb.must().bePositive();
// if you want to verify something opposite, use the not property
numb.must().not.beNegative();

numb.must().beInRange(10, 12); // the message will be thrown: 'Expected value '5' to be between '10' and '12', but value is out of this range'
```

## Array

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): Array<number> {
    return [ 1, 2, 3, 4, 5, 6 ];
}

const arr = foo();

arr.must().be([ 1, 2, 3, 4, 5, 6 ]);
arr.must().not.beEmpty();
arr.must().beSortedInASC();
// if you want to verify something opposite, use the not property
arr.must().not.beSortedInDESC();
arr.must().contains(3);
arr.must().containsType('number');
arr.must().endsWith([ 4, 5, 6 ]);
arr.must().equalsTo([ 1, 2, 3, 4, 5, 6 ]);
arr.must().haveLength(6);
arr.must().haveLengthEqualOrGreaterThan(5);
arr.must().haveLengthEqualOrLesserThan(7);
arr.must().haveSameLengthAs([ 1, 2, 3, 4, 5, 6 ]);
arr.must().startsWith([ 1, 2, 3 ]);

arr.must().haveSameLengthAs([ 's', 's', 's']); // the message will be thrown: 'Expected collection has length '3', but found '6''
```

## Object

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): Object {
    return { firstElement: 1, secondElement: null, thirdElement: undefined };
}

const obj = foo();

// if you want to verify something opposite, use the not property
obj.must().not.beEmpty(); 
obj.must().contains((object) => object.subject.firstElement === 1);
obj.must().containsKey('secondElement');
obj.must().containsNullOrUndefined();
obj.must().haveLength(3);
obj.must().haveLengthEqualOrGreaterThan(2);
obj.must().haveLengthEqualOrLesserThan(4);

obj.must().contains((obj) => obj.subject.firstElement === 5 ) // the message will be thrown: 
// 'Expected collection { obj.subject.firstElement === 5; }, but found {"firstElement":1,"secondElement":2,"thirdElement":3}}'
```

## Date

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): Date {
    return new Date(2022, 1, 1, 10, 55, 15);
}

const date = foo();

date.must().be(new Date(2022, 1, 1, 10, 55, 15));
date.must().beAfter(new Date(2022, 1, 1, 9, 55, 15));
date.must().beBefore(new Date(2022, 9, 17));
date.must().beInDateRange(new Date(2021, 12, 31), new Date(2022, 12, 31));
date.must().beOnOrAfter(new Date(2022, 1, 1, 8, 55, 15));
date.must().beOnOrBefore(new Date(2022, 1, 1, 11, 55, 15));
date.must().beOneOf([ new Date(2022, 1, 1, 10, 55, 15), new Date(2022, 1, 1, 9, 55, 15), new Date(2022, 1, 1, 8, 55, 15) ]);
date.must().bePrecisely(new Date(2022, 1, 1, 10, 55, 15).getTime());
date.must().containsDate(1);
date.must().containsDayOfWeek(5);
date.must().containsHours(10);
date.must().containsMinutes(55);
date.must().containsMonth(1);
date.must().containsSeconds(15);
date.must().containsYear(2022);

date.must().beOneOf([ new Date(2000, 4, 13), new Date(2000, 4, 25) ]); // the message will be thrown: 
// 'Expected date be at least one of '"5/13/2000", "5/25/2000"', but found '1/1/2022''
```

## String

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): string {
    return 'Intuitive test assertions';
}

const str = foo();

str.must().be('Intuitive test assertions');
// if you want to verify something opposite, use the not property
str.must().not.beEmptyOrWhiteSpace();
str.must().contains('test');
str.must().containsAll([ 'Intuitive', 'test', 'assertions' ]);
str.must().containsAny([ 'Intuitive' ]);
str.must().endsWith('assertions');
str.must().startsWith('Intuitive');
str.must().hasLength(26);
str.must().match(/.+/gm);

str.must().beEmptyOrWhiteSpace(); // the message will be thrown: 
// 'Expected be empty or white space, but found 'Intuitive test assertions''
```

## Multiple assertion statements in one row

If you want to check something with two or more statements in one row use `and` property

```TypeScript
// *.test.ts file
import 'intuitive-test-assertions';

function foo(): Array<number> {
    return [ 1, 2, 3, 4, 5, 6 ];
}

const arr = foo();

// if you want to check something with two or more statements in one row use and property
arr.must().not.beEmpty().and.haveLength(6);

```
