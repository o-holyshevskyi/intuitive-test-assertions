import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { processArr } from '../../utils/utils';
import { ExpectedResult } from '../expected-result/expected-result';

export class ArrayAssertion<T> {
  constructor(private readonly array: Array<T>, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new ArrayAssertion(this.array, true);
  }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: Array<T>): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.array === expected
          : this.array !== expected,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(JSON.stringify(expected), JSON.stringify(this.array), 'Expected value to be \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(JSON.stringify(expected), JSON.stringify(this.array), 'Expected value to not be \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection is empty
   */
  public beEmpty(): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === 0 : this.array.length > 0)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(processArr(this.array), this.array.length, 'Expected collection to be empty, but found [ {0} ] with length \'{1}\'')
          : ExpectedResult.fail(undefined, processArr(this.array), 'Expected collection to not be empty, but found [{1}]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection has length equals to expected
   * @param expectedLength length
   */
  public haveLength(expectedLength: number): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === expectedLength : this.array.length !== expectedLength)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection has length \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection does not have length \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection has length equal or greater than expected
   * @param expectedLength length
   */
  public haveLengthEqualOrGreaterThan(expectedLength: number): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length >= expectedLength : this.array.length <= expectedLength)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection has length equal or greater than \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection does not have length equal or greater than \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection has length equal or lesser than expected
   * @param expectedLength length
   */
  public haveLengthEqualOrLesserThan(expectedLength: number): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length <= expectedLength : this.array.length >= expectedLength)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection has length equal or lesser than \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedLength, this.array.length, 'Expected collection does not have length equal or lesser than \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection contains data with types
   * @param type expected types 'number' | 'string' | 'boolean' | 'object' | 'undefined'
   */
  public containsType(type: 'number' | 'string' | 'boolean' | 'object' | 'undefined'): Continuance<this, Array<T>> {
    let isHaveType = false;

    try {
      this.array.forEach((arr) => {
        if (typeof arr === type) {
          throw true;
        }
      });
    } catch (e) {
      isHaveType = e as boolean;
    }

    if (!this.opposite ? isHaveType : !isHaveType) {
      return new Continuance(this, this.array);
    } else {
      Execute.stuff
        .checkCondition(false)
        .throwWithResultMessage(
          !this.opposite
            ? ExpectedResult.fail(typeof type, processArr(this.array), 'Expected collection contains \'{0}\', but found [ {1} ]')
            : ExpectedResult.fail(typeof type, processArr(this.array), 'Expected collection does not contain \'{0}\', but found [ {1} ]'),
        );
    }

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection starts with expected array. Arrays will be stringified to strings
   * @param arr expected start of array
   */
  public startsWith(arr: Array<boolean | object | null | undefined | string | number>): Continuance<this, Array<T>> {
    let startsWith = false;

    if (!this.opposite) {
      try {
        for (let i = 0; i < arr.length; i++) {
          if (JSON.stringify(this.array[i]) === JSON.stringify(arr[i])) {
            startsWith = true;
          } else {
            throw false;
          }
        }
      } catch (e) {
        startsWith = e as boolean;
      }
    } else {
      try {
        for (let i = 0; i < arr.length; i++) {
          if (JSON.stringify(this.array[i]) !== JSON.stringify(arr[i])) {
            throw true;
          } else {
            startsWith = false;
          }
        }
      } catch (e) {
        startsWith = e as boolean;
      }
    }

    Execute.stuff
      .checkCondition(startsWith)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection starts with [ {0} ], but found [ {1} ]')
          : ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection does not start with [ {0} ], but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection ends with expected array. Arrays will be stringified to strings
   * @param arr expected end of array
   */
  public endsWith(arr: Array<T>): Continuance<this, Array<T>> {
    let endsWith = false;

    const actual = [...this.array].reverse();
    const expected = [...arr].reverse();

    if (!this.opposite) {
      try {
        for (let i = 0; i < arr.length; i++) {
          if (JSON.stringify(actual[i]) === JSON.stringify(expected[i])) {
            endsWith = true;
          } else {
            throw false;
          }
        }
      } catch (e) {
        endsWith = e as boolean;
      }
    } else {
      try {
        for (let i = 0; i < arr.length; i++) {
          if (JSON.stringify(actual[i]) !== JSON.stringify(expected[i])) {
            endsWith = true;
          } else {
            throw false;
          }
        }
      } catch (e) {
        endsWith = e as boolean;
      }
    }

    Execute.stuff
      .checkCondition(endsWith)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection ends with [ {0} ], but found [ {1} ]')
          : ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection does not end with [ {0} ], but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection sorted in ASC order with expected array
   */
  public beSortedInASC(): Continuance<this, Array<T>> {
    let isSortedInASC = false;
    let sortedArray: any[] = [];

    if (
      this.array.find((el) => {
        return typeof el === 'number';
      })
    ) {
      sortedArray = [...this.array].sort(function (a: any, b: any) {
        return a - b;
      });
    } else {
      sortedArray = [...this.array].sort();
    }

    if (!this.opposite) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === sortedArray[i]) {
          isSortedInASC = true;
        } else {
          isSortedInASC = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] !== sortedArray[i]) {
          isSortedInASC = true;
          break;
        } else {
          isSortedInASC = false;
        }
      }
    }

    Execute.stuff
      .checkCondition(isSortedInASC)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, processArr(this.array), 'Expected collection to be sorted in ASC, but found [ {1} ]')
          : ExpectedResult.fail(undefined, processArr(this.array), 'Expected collection to not be sorted in ASC, but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection sorted in DESC order with expected array
   */
  public beSortedInDESC(): Continuance<this, Array<T>> {
    let isSortedInASC = false;
    let sortedArray: any[] = [];

    if (
      this.array.find((el) => {
        return typeof el === 'number';
      })
    ) {
      sortedArray = [...this.array]
        .sort(function (a: any, b: any) {
          return a - b;
        })
        .reverse();
    } else {
      sortedArray = [...this.array].sort().reverse();
    }

    if (!this.opposite) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === sortedArray[i]) {
          isSortedInASC = true;
        } else {
          isSortedInASC = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] !== sortedArray[i]) {
          isSortedInASC = true;
          break;
        } else {
          isSortedInASC = false;
        }
      }
    }

    Execute.stuff
      .checkCondition(isSortedInASC)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(undefined, processArr(this.array), 'Expected collection to be sorted in DESC, but found [ {1} ]')
          : ExpectedResult.fail(undefined, processArr(this.array), 'Expected collection to not be sorted in DESC, but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection contains a value
   * @param arrValue expected array value
   */
  public contains(arrValue: any): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.includes(arrValue) : !this.array.includes(arrValue))
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(arrValue, processArr(this.array), 'Expected collection contains \'{0}\', but found [ {1} ]')
          : ExpectedResult.fail(arrValue, processArr(this.array), 'Expected collection does not contain \'{0}\', but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection equals to expected array
   * @param arr expected array
   */
  public equalsTo(arr: Array<T>): Continuance<this, Array<T>> {
    const isEqual =
      Array.isArray(this.array) &&
      Array.isArray(arr) &&
      this.array.length === arr.length &&
      this.array.every((val: any, i: number) => val === arr[i]);

    Execute.stuff
      .checkCondition(!this.opposite ? isEqual : !isEqual)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection equals to [ {0} ], but found [ {1} ]')
          : ExpectedResult.fail(processArr(arr), processArr(this.array), 'Expected collection does not equals to [ {0} ], but found [ {1} ]'),
      );

    return new Continuance(this, this.array);
  }

  /**
   * Check if the collection has the same length as expected array
   * @param arr expected array
   */
  public haveSameLengthAs(arr: Array<any>): Continuance<this, Array<T>> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === arr.length : this.array.length !== arr.length)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(arr.length, this.array.length, 'Expected collection has length \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(arr.length, this.array.length, 'Expected collection does not have length \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.array);
  }
}
