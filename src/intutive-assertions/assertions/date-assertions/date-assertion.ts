import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import IntuitiveAssertions from '../intuitive-assertion';

export class DateAssertion extends IntuitiveAssertions<Date> {
    constructor(value: Date) {
        super(value);
    }

    /**
     * Check if the date is after than the expected date
     * @param expectedDate expected date
     */
    public beAfter(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(this.object > expectedDate)
            .throwWithMessage(`Expected date be after '${expectedDate}', but found '${this.object}'`);

        return new Continuance(this);
    }

    /**
     * Check if the date is before than the expected date
     * @param expectedDate expected date
     */
    public beBefore(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(this.object < expectedDate)
            .throwWithMessage(`Expected date be before '${expectedDate}', but found '${this.object}'`);

        return new Continuance(this);
    }

    /**
     * Check if the date is on or after than the expected date
     * @param expectedDate expected date
     */
    public beOnOrAfter(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(this.object >= expectedDate)
            .throwWithMessage(`Expected date be on or after '${expectedDate}', but found '${this.object}'`);

        return new Continuance(this);
    }

    /**
     * Check if the date is on or before than the expected date
     * @param expectedDate expected date
     */
    public beOnOrBefore(expectedDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(this.object <= expectedDate)
            .throwWithMessage(`Expected date be on or before '${expectedDate}', but found '${this.object}'`);

        return new Continuance(this);
    }

    /**
     * Check if the year equals to expected year
     * @param year expected year
     */
    public containsYear(year: number): Continuance<this> {
        const actualYear = this.object.getFullYear();

        Execute.stuff.checkCondition(actualYear === year)
            .throwWithMessage(`Expected year equals to '${year}', but found '${actualYear}'`);

        return new Continuance(this);
    }

    /**
     * Check if the year does not equal to expected year
     * @param year expected year
     */
    public notContainYear(year: number): Continuance<this> {
        const actualYear = this.object.getFullYear();

        Execute.stuff.checkCondition(actualYear !== year)
            .throwWithMessage(`Expected year does not equal to '${year}', but found '${actualYear}'`);

        return new Continuance(this);  
    }

    /**
     * Check if the month equals to expected month
     * @param month expected year
     */
    public containsMonth(month: number): Continuance<this> {
        const actualMonth = this.object.getMonth();

        Execute.stuff.checkCondition(actualMonth === month)
            .throwWithMessage(`Expected month equals to '${month}', but found '${actualMonth}'`);

        return new Continuance(this);
    }

    /**
     * Check if the month does not equal to expected month
     * @param month expected year
     */
    public notContainMonth(month: number): Continuance<this> {
        const actualMonth = this.object.getMonth();

        Execute.stuff.checkCondition(actualMonth !== month)
            .throwWithMessage(`Expected month does not equal to '${month}', but found '${actualMonth}'`);

        return new Continuance(this);
    }

    /**
     * Check if the day of the month equals to expected day
     * @param date day of the month
     */
    public containsDate(date: number): Continuance<this> {
        const actualDate = this.object.getDate();

        Execute.stuff.checkCondition(actualDate === date)
            .throwWithMessage(`Expected day of the month equals to '${date}', but found '${actualDate}'`);

        return new Continuance(this);
    }

    /**
     * Check if the day of the month equals to expected day
     * @param date day of the month
     */
    public notContainDate(date: number): Continuance<this> {
        const actualDate = this.object.getDate();

        Execute.stuff.checkCondition(actualDate !== date)
            .throwWithMessage(`Expected day of the month does not equal to '${date}', but found '${actualDate}'`);

        return new Continuance(this);
    }

    /**
     * Check if the day of the week equals to expected day
     * @param day day of the week
     */
    public containsDayOfWeek(day: number): Continuance<this> {
        const actualDay = this.object.getDay();

        Execute.stuff.checkCondition(actualDay === day)
            .throwWithMessage(`Expected day of the week equals to '${day}', but found '${actualDay}'`);
        
        return new Continuance(this);
    }

    /**
     * Check if the day of the month equals to expected day
     * @param day day of the month
     */
    public notContainDayOfWeek(day: number): Continuance<this> {
        const actualDay = this.object.getDay();

        Execute.stuff.checkCondition(actualDay !== day)
            .throwWithMessage(`Expected day of the week does not equal to '${day}', but found '${actualDay}'`);

        return new Continuance(this);
    }

    /**
     * Check if the hours equals to expected hour
     * @param hours hours
     */
    public containsHours(hours: number): Continuance<this> {
        const actualHours = this.object.getHours();

        Execute.stuff.checkCondition(actualHours === hours)
            .throwWithMessage(`Expected hours equals to '${hours}', but found '${actualHours}'`);
        
        return new Continuance(this);
    }

    /**
     * Check if the hours equals to expected day
     * @param hours hours
     */
    public notContainHours(hours: number): Continuance<this> {
        const actualHours = this.object.getHours();

        Execute.stuff.checkCondition(actualHours !== hours)
            .throwWithMessage(`Expected hours does not equal to '${hours}', but found '${actualHours}'`);

        return new Continuance(this);
    }

    /**
     * Check if the minutes equals to expected hour
     * @param minutes minutes
     */
    public containsMinutes(minutes: number): Continuance<this> {
        const actualMinutes = this.object.getMinutes();

        Execute.stuff.checkCondition(actualMinutes === minutes)
            .throwWithMessage(`Expected minutes equals to '${actualMinutes}', but found '${actualMinutes}'`);
        
        return new Continuance(this);
    }

    /**
     * Check if the minutes equals to expected day
     * @param minutes minutes
     */
    public notContainMinutes(minutes: number): Continuance<this> {
        const actualMinutes = this.object.getHours();

        Execute.stuff.checkCondition(actualMinutes !== minutes)
            .throwWithMessage(`Expected minutes does not equal to '${minutes}', but found '${actualMinutes}'`);

        return new Continuance(this);
    }

    /**
     * Check if the seconds equals to expected hour
     * @param seconds seconds
     */
     public containsSeconds(seconds: number): Continuance<this> {
        const actualSeconds = this.object.getSeconds();

        Execute.stuff.checkCondition(actualSeconds === seconds)
            .throwWithMessage(`Expected seconds equals to '${actualSeconds}', but found '${actualSeconds}'`);
        
        return new Continuance(this);
    }

    /**
     * Check if the seconds equals to expected day
     * @param seconds seconds
     */
    public notContainSeconds(seconds: number): Continuance<this> {
        const actualSeconds = this.object.getHours();

        Execute.stuff.checkCondition(actualSeconds !== seconds)
            .throwWithMessage(`Expected seconds does not equal to '${seconds}', but found '${actualSeconds}'`);

        return new Continuance(this);
    }

    /**
     * Check if the date is in date range
     * @param startDate start date range
     * @param endDate end date range
     */
    public beInDateRange(startDate: Date, endDate: Date): Continuance<this> {
        Execute.stuff.checkCondition(this.object >= startDate && this.object <= endDate)
            .throwWithMessage(`Expected '${this.object}' to be from '${startDate}' to '${endDate}', but value is out of this range`);

        return new Continuance(this);
    }

    /**
     * Check if the date precisely equals to expected date by timestamp
     * @param timestamp timestamp value
     */
    public bePrecisely(timestamp: number): Continuance<this> {
        const actualTimestamp = this.object.getTime();

        Execute.stuff.checkCondition(actualTimestamp === timestamp)
            .throwWithMessage(`Expected date precisely equals to '${timestamp}', but found ${actualTimestamp}`);

        return new Continuance(this);
    }

    /**
     * Check if the date be at least one of dates array
     * @param expectedDatesArray dates array
     */
    public beOneOf(expectedDatesArray: Array<Date>): Continuance<this> {
        expectedDatesArray.forEach(expectedDate => {
            Execute.stuff.checkCondition(this.object !== expectedDate)
                .throwWithMessage(`Expected date be at least one of '${expectedDatesArray}', but found '${this.object}'`);
        });

        return new Continuance(this);
    }

    /**
     * Check if the date is close to date with difference in milliseconds
     * @param expectedDate expected date
     * @param rigor difference time in milliseconds
     */
    public beCloseTo(expectedDate: Date, rigor: number): Continuance<this> {
        const actualTimestamp = this.object.getTime();
        const expectedTimestamp = expectedDate.getTime();

        Execute.stuff.checkCondition(actualTimestamp <= expectedTimestamp + rigor || actualTimestamp <= expectedTimestamp - rigor)
            .throwWithMessage(`Expected date be close to '${expectedDate}' with difference in ${rigor} milliseconds, but found ${this.object}`)

        return new Continuance(this);
    }
}
