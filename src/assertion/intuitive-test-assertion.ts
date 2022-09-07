import { Execute } from './assertion-executing/execute';

export default abstract class IntuitiveAssertions<TObject> {
    constructor(protected readonly object: TObject) {}

    public be(expected: TObject): void {
        Execute.stuff.checkCondition(Object(this.object).valueOf() === Object(expected).valueOf())
        .throwWithMessage(`Expected to be ${expected}, but found ${this.object}`);
    }

    public notBe(expected: TObject): void {
        Execute.stuff.checkCondition(Object(this.object).valueOf() !== Object(expected).valueOf())
        .throwWithMessage(`Expected to not be ${expected}, but found ${this.object} is similar`);
    }
}
