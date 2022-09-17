import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { processArr } from '../../utils/utils';
import IntuitiveAssertions from '../intuitive-assertion';

export class ArrayAssertion<T> extends IntuitiveAssertions<Array<T>> {
  constructor(private readonly array: Array<T>, opposite = false) {
    super(array, opposite);
  }

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new ArrayAssertion(this.array, true);
  }

  /**
   * Check if the collection is empty
   */
  public beEmpty(): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === 0 : this.array.length > 0)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to be empty, but found [ ${processArr(this.array)} ] with length '${
              this.array.length
            }'`
          : `Expected collection to not be empty, but found [${processArr(this.array)}]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equals to expected
   * @param expectedLength length
   */
  public haveLength(expectedLength: number): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === expectedLength : this.array.length !== expectedLength)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection has length '${expectedLength}', but found '${this.array.length}'`
          : `Expected collection does not have length '${expectedLength}', but found '${this.array.length}'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equal or greater than expected
   * @param expectedLength length
   */
  public haveLengthEqualOrGreaterThan(expectedLength: number): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length >= expectedLength : this.array.length <= expectedLength)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection has length equal or greater than '${expectedLength}', but found '${this.array.length}'`
          : `Expected collection does not have length equal or greater than '${expectedLength}', but found '${this.array.length}'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has length equal or lesser than expected
   * @param expectedLength length
   */
  public haveLengthEqualOrLesserThan(expectedLength: number): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length <= expectedLength : this.array.length >= expectedLength)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection has length equal or lesser than '${expectedLength}', but found '${this.array.length}'`
          : `Expected collection does not have length equal or lesser than '${expectedLength}', but found '${this.array.length}'`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection contains data with types
   * @param type expected types 'number' | 'string' | 'boolean' | 'object' | 'undefined'
   */
  public containsType(type: 'number' | 'string' | 'boolean' | 'object' | 'undefined'): Continuance<this> {
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
      return new Continuance(this);
    } else {
      Execute.stuff
        .checkCondition(false)
        .throwWithMessage(
          !this.opposite
            ? `Expected collection contains '${typeof type}', but found [ ${processArr(this.array)} ]`
            : `Expected collection does not contain '${typeof type}', but found [ ${processArr(this.array)} ]`,
        );
    }

    return new Continuance(this);
  }

  /**
   * Check if the collection starts with expected array. Arrays will be stringified to strings
   * @param arr expected start of array
   */
  public startsWith(arr: Array<boolean | object | null | undefined | string | number>): Continuance<this> {
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
      .throwWithMessage(
        !this.opposite
          ? `Expected collection starts with [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`
          : `Expected collection does not start with [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection ends with expected array. Arrays will be stringified to strings
   * @param arr expected end of array
   */
  public endsWith(arr: Array<T>): Continuance<this> {
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
      .throwWithMessage(
        !this.opposite
          ? `Expected collection ends with [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`
          : `Expected collection does not end with [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection sorted in ASC order with expected array
   */
  public beSortedInASC(): Continuance<this> {
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
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to be sorted in ASC, but found [ ${processArr(this.array)} ]`
          : `Expected collection to not be sorted in ASC, but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection sorted in DESC order with expected array
   */
  public beSortedInDESC(): Continuance<this> {
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
      .throwWithMessage(
        !this.opposite
          ? `Expected collection to be sorted in DESC, but found [ ${processArr(this.array)} ]`
          : `Expected collection to not be sorted in DESC, but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection contains a value
   * @param arrValue expected array value
   */
  public contains(arrValue: any): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.includes(arrValue) : !this.array.includes(arrValue))
      .throwWithMessage(
        !this.opposite
          ? `Expected collection contains '${arrValue}', but found [ ${processArr(this.array)} ]`
          : `Expected collection does not contain '${arrValue}', but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection equals to expected array
   * @param arr expected array
   */
  public equalsTo(arr: Array<T>): Continuance<this> {
    const isEqual =
      Array.isArray(this.array) &&
      Array.isArray(arr) &&
      this.array.length === arr.length &&
      this.array.every((val: any, i: number) => val === arr[i]);

    Execute.stuff
      .checkCondition(!this.opposite ? isEqual : !isEqual)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection equals to [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`
          : `Expected collection does not equals to [ ${processArr(arr)} ], but found [ ${processArr(this.array)} ]`,
      );

    return new Continuance(this);
  }

  /**
   * Check if the collection has the same length as expected array
   * @param arr expected array
   */
  public haveSameLengthAs(arr: Array<any>): Continuance<this> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.array.length === arr.length : this.array.length !== arr.length)
      .throwWithMessage(
        !this.opposite
          ? `Expected collection has length '${arr.length}', but found '${this.array.length}'`
          : `Expected collection does not have length '${arr.length}', but found '${this.array.length}'`,
      );

    return new Continuance(this);
  }
}
