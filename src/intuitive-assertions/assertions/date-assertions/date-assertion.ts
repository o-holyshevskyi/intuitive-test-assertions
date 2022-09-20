import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { processArr } from '../../utils/utils';
import { ExpectedResult } from '../expected-result/expected-result';

export class DateAssertion {
  constructor(private readonly value: Date, private readonly opposite = false) {}

  /**
   * Use not if you need to check opposite statement
   */
  get not() {
    return new DateAssertion(this.value, true);
  }

  /**
   * Check if the expected object totally equals to expected value
   * @param expected expected value
   */
  public be(expected: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.value === expected
          : this.value !== expected,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expected.toISOString(), this.value.toISOString(), 'Expected value to be \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expected.toISOString(), this.value.toISOString(), 'Expected value to not be \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date is after than the expected date
   * @param expectedDate expected date
   */
  public beAfter(expectedDate: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value > expectedDate : this.value < expectedDate)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date be after \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date not be after \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date is before than the expected date
   * @param expectedDate expected date
   */
  public beBefore(expectedDate: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value < expectedDate : this.value > expectedDate)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date be before \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date not be before \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date is on or after than the expected date
   * @param expectedDate expected date
   */
  public beOnOrAfter(expectedDate: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value >= expectedDate : this.value <= expectedDate)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date be on or after \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date not be on or after \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date is on or before than the expected date
   * @param expectedDate expected date
   */
  public beOnOrBefore(expectedDate: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(!this.opposite ? this.value <= expectedDate : this.value >= expectedDate)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date be on or before \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(expectedDate.toISOString(), this.value.toISOString(), 'Expected date not be on or before \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the year equals to expected year
   * @param year expected year
   */
  public containsYear(year: number): Continuance<this, Date> {
    const actualYear = this.value.getFullYear();

    Execute.stuff
      .checkCondition(!this.opposite ? actualYear === year : actualYear !== year)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(year, actualYear, 'Expected year equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(year, actualYear, 'Expected year not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the month equals to expected month
   * @param month expected year
   */
  public containsMonth(month: number): Continuance<this, Date> {
    const actualMonth = this.value.getMonth();

    Execute.stuff
      .checkCondition(!this.opposite ? actualMonth === month : actualMonth !== month)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(month, actualMonth, 'Expected month equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(month, actualMonth, 'Expected month not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the day of the month equals to expected day
   * @param date day of the month
   */
  public containsDate(date: number): Continuance<this, Date> {
    const actualDate = this.value.getDate();

    Execute.stuff
      .checkCondition(!this.opposite ? actualDate === date : actualDate !== date)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(date, actualDate, 'Expected day of the month equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(date, actualDate, 'Expected day of the month not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the day of the week equals to expected day
   * @param day day of the week
   */
  public containsDayOfWeek(day: number): Continuance<this, Date> {
    const actualDay = this.value.getDay();

    Execute.stuff
      .checkCondition(!this.opposite ? actualDay === day : actualDay !== day)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(day, actualDay, 'Expected day of the week equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(day, actualDay, 'Expected day of the week not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the hours equals to expected hour
   * @param hours hours
   */
  public containsHours(hours: number): Continuance<this, Date> {
    const actualHours = this.value.getHours();

    Execute.stuff
      .checkCondition(!this.opposite ? actualHours === hours : actualHours !== hours)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(hours, actualHours, 'Expected hours equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(hours, actualHours, 'Expected hours not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the minutes equals to expected hour
   * @param minutes minutes
   */
  public containsMinutes(minutes: number): Continuance<this, Date> {
    const actualMinutes = this.value.getMinutes();

    Execute.stuff
      .checkCondition(!this.opposite ? actualMinutes === minutes : actualMinutes !== minutes)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(minutes, actualMinutes, 'Expected minutes equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(minutes, actualMinutes, 'Expected minutes not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the seconds equals to expected hour
   * @param seconds seconds
   */
  public containsSeconds(seconds: number): Continuance<this, Date> {
    const actualSeconds = this.value.getSeconds();

    Execute.stuff
      .checkCondition(!this.opposite ? actualSeconds === seconds : actualSeconds !== seconds)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(seconds, actualSeconds, 'Expected seconds equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(seconds, actualSeconds, 'Expected seconds not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date is in date range
   * @param startDate start date range
   * @param endDate end date range
   */
  public beInDateRange(startDate: Date, endDate: Date): Continuance<this, Date> {
    Execute.stuff
      .checkCondition(
        !this.opposite
          ? this.value >= startDate && this.value <= endDate
          : this.value <= startDate || this.value >= endDate,
      )
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(`from '${startDate.toLocaleDateString()}' to '${endDate.toLocaleDateString()}'`, this.value.toLocaleDateString(), 'Expected \'{1}\' to be {0}, but value is out of this range')
          : ExpectedResult.fail(`before '${startDate.toLocaleDateString()}' or after '${endDate.toLocaleDateString()}'`, this.value.toLocaleDateString(), 'Expected \'{1}\' to be {0}, but value is in of this range'),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date precisely equals to expected date by timestamp
   * @param timestamp timestamp value
   */
  public bePrecisely(timestamp: number): Continuance<this, Date> {
    const actualTimestamp = this.value.getTime();

    Execute.stuff
      .checkCondition(!this.opposite ? actualTimestamp === timestamp : actualTimestamp !== timestamp)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(timestamp, actualTimestamp, 'Expected date precisely equals to \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(timestamp, actualTimestamp, 'Expected date precisely not equals to \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  /**
   * Check if the date be at least one of dates array
   * @param expectedDatesArray dates array
   */
  public beOneOf(expectedDatesArray: Array<Date>): Continuance<this, Date> {
    const isOneOf = this.isInArray(expectedDatesArray, this.value);

    Execute.stuff
      .checkCondition(!this.opposite ? isOneOf : !isOneOf)
      .throwWithResultMessage(
        !this.opposite
          ? ExpectedResult.fail(processArr(expectedDatesArray), this.value.toLocaleDateString(), 'Expected date be at least one of \'{0}\', but found \'{1}\'')
          : ExpectedResult.fail(processArr(expectedDatesArray), this.value.toLocaleDateString(), 'Expected date not be one of \'{0}\', but found \'{1}\''),
      );

    return new Continuance(this, this.value);
  }

  private isInArray(array: Array<Date>, value: Date): boolean {
    return !!array.find((item) => {
      return item.getTime() === value.getTime();
    });
  }
}
