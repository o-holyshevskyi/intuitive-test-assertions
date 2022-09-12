import { ObjectAssertion } from '../collection-assertions/object-assertion';

export class Expression {
    public readonly subject: object | any;

    constructor() {
        this.subject = new ObjectAssertion(this);
    }
}