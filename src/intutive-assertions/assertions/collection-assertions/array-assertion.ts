import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';

export class ArrayAssertion<T> {
    constructor(private readonly array: Array<T>, private readonly opposite = false) { }

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
        Execute.stuff.checkCondition(
                !this.opposite
                    ? this.array.length === 0
                    : this.array.length > 0
            )
            .throwWithMessage(
                !this.opposite
                    ? `Expected collection to be empty, but found [${this.array.toString()}] with length '${this.array.length}'`
                    : `Expected collection to not be empty, but found [${this.array.toString()}]`
            );

        return new Continuance(this);
    }
}