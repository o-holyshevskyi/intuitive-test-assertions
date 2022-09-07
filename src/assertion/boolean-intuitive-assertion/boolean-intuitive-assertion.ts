import { Execute } from '../assertion-executing/execute';
import IntuitiveAssertions from '../intuitive-test-assertion';

export class BooleanAssertion extends IntuitiveAssertions<boolean> {
    constructor(value: boolean) {
        super(value);
    }

    public beTruth(): void {
        Execute.stuff.checkCondition(Boolean(this.object) === true).throwWithMessage(`Expected ${this.object} to be truth, but this is false`);
    }

    public beFalse(): void {
        Execute.stuff.checkCondition(Boolean(this.object) === false).throwWithMessage(`Expected ${this.object} to be false, but this is truth`)
    }
}
