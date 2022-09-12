import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { Expression } from '../expression/expression';
import { trimArgs } from '../../utils/utils';

export class ObjectAssertion {
    constructor(public readonly subject: object | any) { }

    /**
     * Check if the collection is empty
     */
    public beEmpty(): Continuance<this> {
        Execute.stuff.checkCondition(Object.keys(this.subject).length === 0)
            .throwWithMessage(`Expected collection to be empty, but found ${JSON.stringify(this.subject?.valueOf())}`);

        return new Continuance(this);
    }

    /**
     * Check if the collection does not empty
     */
    public notBeEmpty(): Continuance<this> {
        Execute.stuff.checkCondition(Object.keys(this.subject).length > 0)
            .throwWithMessage(`Expected collection to not be empty, but found ${JSON.stringify(this.subject?.valueOf())}`);

        return new Continuance(this);
    }

    /**
     * Check if the collection has length equal to expected
     * @param length 
     */
    public haveLength(length: number): Continuance<this> {
        Execute.stuff.checkCondition(Object.keys(this.subject).length === length)
            .throwWithMessage(`Expected collection to have length '${length}', but found ${Object.keys(this.subject).length}`);

        return new Continuance(this);
    }

    /**
     * Check if the collection has length equal or greater than the expected
     * @param length 
     */
    public haveLengthEqualOrGreaterThan(length: number): Continuance<this> {
        Execute.stuff.checkCondition(Object.keys(this.subject).length >= length)
            .throwWithMessage(`Expected collection to have length equal or greater than '${length}', but found ${Object.keys(this.subject).length}`);

        return new Continuance(this);
    }

    /**
     * Check if the collection has length equal or greater than the expected
     * @param length 
     */
    public haveLengthEqualOrLesserThan(length: number): Continuance<this> {
        Execute.stuff.checkCondition(Object.keys(this.subject).length <= length)
            .throwWithMessage(`Expected collection to have length equal or lesser than '${length}', but found ${Object.keys(this.subject).length}`);

        return new Continuance(this);
    }

    /**
     * Check if the collection contains null or undefined
     */
    public containsNullOrUndefined(): Continuance<this> {
        let isNullOrUndefined;
        
        try {
            Object.values(this.subject).forEach(val => {
                if (val === null || val === undefined) {
                    throw true;
                };
            })
        } catch (e) {
            isNullOrUndefined = e;
        }
        
        if (isNullOrUndefined) {
            return new Continuance(this);
        } else {
            Execute.stuff.throwWithMessage(`Expected collection contains null or undefined, but found ${JSON.stringify(this.subject?.valueOf())}`);
        }

        return new Continuance(this);
    }

    /**
     * Check if the collection does not contain null or undefined
     */
    public notContainNullOrUndefined(): Continuance<this> {
        let isNullOrUndefined;
        
        try {
            Object.values(this.subject).forEach(val => {
                if (val !== null || val !== undefined) {
                    throw true;
                };
            })
        } catch (e) {
            isNullOrUndefined = e;
        }
        
        if (!isNullOrUndefined) {
            return new Continuance(this);
        } else {
            Execute.stuff.throwWithMessage(`Expected collection does not contain null or undefined, but found ${JSON.stringify(this.subject?.valueOf())}`);
        }

        return new Continuance(this);
    }

    /**
     * Check if the collections contains a key
     * @param expectedKey collection key
     */
    public containsKey(expectedKey: string): Continuance<this> {
        let isContainsProp;

        try {
            Object.keys(this.subject).forEach(key => {
                if (key === expectedKey) {
                    throw true;
                };
            })
        } catch (e) {
            isContainsProp = e;
        }

        if (isContainsProp) {
            return new Continuance(this);
        } else {
            Execute.stuff.throwWithMessage(`Expected collection contains '${expectedKey}' key, but found ${JSON.stringify(this.subject?.valueOf())}`);
        }

        return new Continuance(this);
    }

    /**
     * Check if the collections does not contain a key
     * @param expectedKey collection key
     */
    public notContainKey(expectedKey: string): Continuance<this> {
        let notContainsProp;

        try {
            Object.keys(this.subject).forEach(key => {
                if (key === expectedKey) {
                    throw false;
                };
            })
        } catch (e) {
            notContainsProp = e;
        }

        if (!notContainsProp) {
            Execute.stuff.throwWithMessage(`Expected collection does not contain '${expectedKey}' key, but found ${JSON.stringify(this.subject?.valueOf())}`);
        } else {
            return new Continuance(this);
        }

        return new Continuance(this);
    }

    /**
     * Check if the object contains key be value based on expression function
     * @param expression expression function
     */
    public contains(expression: (object: Expression) => boolean): void {
        Execute.stuff.checkCondition(expression(this))
            .throwWithMessage(`Expected collection ${trimArgs(arguments[0])}, but found ${JSON.stringify(this.subject?.valueOf())}}`)
    }

    /**
     * Check if the object does not contain key be value based on expression function
     * @param expression expression function
     */
    public notContain(expression: (object: Expression, ...args: any[]) => boolean): void {
        Execute.stuff.checkCondition(!expression(this))
            .throwWithMessage(`Expected collection ${trimArgs(arguments[0])}, but found ${JSON.stringify(this.subject?.valueOf())}}`)
    }
}
