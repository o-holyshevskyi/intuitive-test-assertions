import { Execute } from '../assertion-executing/execute';
import { Continuance } from '../continuance/continuance';
import IntuitiveAssertions from '../intuitive-test-assertion';

export class BooleanAssertion extends IntuitiveAssertions<boolean> {
    constructor(value: boolean) {
        super(value);
    }

    /**
     * Check if the expected object equals to true statement
     */
    public beTruth(): Continuance<this> {
        Execute.stuff.checkCondition(Boolean(this.object).valueOf() === Boolean(true).valueOf())
            .throwWithMessage(`Expected ${this.object} to be true statement, but found this is false`);

        return new Continuance(this);
    }

    /**
     * Check if the expected object equals to false statement
     */
    public beFalse(): Continuance<this> {
        Execute.stuff.checkCondition(Boolean(this.object).valueOf() === Boolean(false).valueOf())
            .throwWithMessage(`Expected ${this.object} to be false statement, but found this is true`);

        return new Continuance(this);
    }
}
