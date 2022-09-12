import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';

export class ArrayAssertion<T> {
    constructor(private readonly array: Array<T>) { }

    /**
     * Check if the collection is empty
     */
    public beEmpty(): Continuance<this> {
        Execute.stuff.checkCondition(this.array.length === 0)
            .throwWithMessage(`Expected collection to be empty, but found [${this.array.toString()}] with length '${this.array.length}'`);

        return new Continuance(this);
    }

    /**
     * Check if the collection does not empty
     */
    public notBeEmpty(): Continuance<this> {
        Execute.stuff.checkCondition(this.array.length > 0)
            .throwWithMessage(`Expected collection to not be empty, but found [${this.array.toString()}]`);

        return new Continuance(this);
    }
}