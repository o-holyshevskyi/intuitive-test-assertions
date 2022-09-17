import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { processArr } from '../../utils/utils';
import IntuitiveAssertions from '../intuitive-assertion';

export class DateAssertion extends IntuitiveAssertions<Date> {
    constructor(value: Date, opposite = false) {
        super(value, opposite);
    }

    /**
     * Use not if you need to check opposite statement
     */
    get not() {
        return new DateAssertion(this.object, true);
    }

    /**
     * Check if the date is after than the expected date
     * @param expectedDate expected date
     */
    public beAfter(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite 
                    ? this.object > expectedDate
                    : this.object < expectedDate
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date be after '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
                    : `Expected date not be after '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the date is before than the expected date
     * @param expectedDate expected date
     */
    public beBefore(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.object < expectedDate
                    : this.object > expectedDate
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date be before '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
                    : `Expected date not be before '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the date is on or after than the expected date
     * @param expectedDate expected date
     */
    public beOnOrAfter(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite    
                    ? this.object >= expectedDate
                    : this.object <= expectedDate
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date be on or after '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
                    : `Expected date not be on or after '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the date is on or before than the expected date
     * @param expectedDate expected date
     */
    public beOnOrBefore(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.object <= expectedDate
                    : this.object >= expectedDate
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date be on or before '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
                    : `Expected date not be on or before '${expectedDate.toISOString()}', but found '${this.object.toISOString()}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the year equals to expected year
     * @param year expected year
     */
    public containsYear(year: number): Continuance<this> {
        const actualYear = this.object.getFullYear();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualYear === year
                    : actualYear !== year
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected year equals to '${year}', but found '${actualYear}'`
                    : `Expected year not equals to '${year}', but found '${actualYear}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the month equals to expected month
     * @param month expected year
     */
    public containsMonth(month: number): Continuance<this> {
        const actualMonth = this.object.getMonth();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualMonth === month
                    : actualMonth !== month
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected month equals to '${month}', but found '${actualMonth}'`
                    : `Expected month not equals to '${month}', but found '${actualMonth}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the day of the month equals to expected day
     * @param date day of the month
     */
    public containsDate(date: number): Continuance<this> {
        const actualDate = this.object.getDate();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualDate === date
                    : actualDate !== date
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected day of the month equals to '${date}', but found '${actualDate}'`
                    : `Expected day of the month not equals to '${date}', but found '${actualDate}'`
            );

        return new Continuance(this);
    }

    /**
     * Check if the day of the week equals to expected day
     * @param day day of the week
     */
    public containsDayOfWeek(day: number): Continuance<this> {
        const actualDay = this.object.getDay();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualDay === day
                    : actualDay !== day
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected day of the week equals to '${day}', but found '${actualDay}'`
                    : `Expected day of the week not equals to '${day}', but found '${actualDay}'`
            );
        
        return new Continuance(this);
    }

    /**
     * Check if the hours equals to expected hour
     * @param hours hours
     */
    public containsHours(hours: number): Continuance<this> {
        const actualHours = this.object.getHours();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualHours === hours
                    : actualHours !== hours
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected hours equals to '${hours}', but found '${actualHours}'`
                    : `Expected hours not equals to '${hours}', but found '${actualHours}'`
            );
        
        return new Continuance(this);
    }

    /**
     * Check if the minutes equals to expected hour
     * @param minutes minutes
     */
    public containsMinutes(minutes: number): Continuance<this> {
        const actualMinutes = this.object.getMinutes();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualMinutes === minutes
                    : actualMinutes !== minutes
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected minutes equals to '${minutes}', but found '${actualMinutes}'`
                    : `Expected minutes not equals to '${minutes}', but found '${actualMinutes}'`
            );
        
        return new Continuance(this);
    }

    /**
     * Check if the seconds equals to expected hour
     * @param seconds seconds
     */
     public containsSeconds(seconds: number): Continuance<this> {
        const actualSeconds = this.object.getSeconds();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualSeconds === seconds
                    : actualSeconds !== seconds
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected seconds equals to '${seconds}', but found '${actualSeconds}'`
                    : `Expected seconds not equals to '${seconds}', but found '${actualSeconds}'`
            );
        
        return new Continuance(this);
    }

    /**
     * Check if the date is in date range
     * @param startDate start date range
     * @param endDate end date range
     */
    public beInDateRange(startDate: Date, endDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.object >= startDate && this.object <= endDate
                    : this.object <= startDate || this.object >= endDate
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected '${this.object.toLocaleDateString()}' to be from '${startDate.toLocaleDateString()}' to '${endDate.toLocaleDateString()}', but value is out of this range`
                    : `Expected '${this.object.toLocaleDateString()}' to be before '${startDate.toLocaleDateString()}' or after '${endDate.toLocaleDateString()}', but value is in of this range`
            );

        return new Continuance(this);
    }

    /**
     * Check if the date precisely equals to expected date by timestamp
     * @param timestamp timestamp value
     */
    public bePrecisely(timestamp: number): Continuance<this> {
        const actualTimestamp = this.object.getTime();

        Execute.stuff.checkCondition(
                !this.opposite
                    ? actualTimestamp === timestamp
                    : actualTimestamp !== timestamp
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date precisely equals to '${timestamp}', but found ${actualTimestamp}`
                    : `Expected date precisely not equals to '${timestamp}', but found ${actualTimestamp}`
            );

        return new Continuance(this);
    }

    /**
     * Check if the date be at least one of dates array
     * @param expectedDatesArray dates array
     */
    public beOneOf(expectedDatesArray: Array<Date>): Continuance<this> {
        const isOneOf = this.isInArray(expectedDatesArray, this.object);
        
        Execute.stuff.checkCondition(
                !this.opposite
                    ? isOneOf
                    : !isOneOf
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected date be at least one of '${processArr(expectedDatesArray)}', but found '${this.object.toLocaleDateString()}'`
                    : `Expected date not be one of '${processArr(expectedDatesArray)}', but found '${this.object.toLocaleDateString()}'`
            );

        return new Continuance(this);
    }

    private isInArray(array: Array<Date>, value: Date): boolean {
        return !!array.find(item => {return item.getTime() == value.getTime()});
      }
}
