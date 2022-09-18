import { Continuance } from "../../continuance/continuance";
import { Execute } from "../../executor/execute";

export class FunctionAssertion {
    constructor(private readonly func: any, private readonly opposite = false) { }

    /**
     * Use not if you need to check opposite statement
     */
    get not() {
        return new FunctionAssertion(this.func, true);
    }

    /**
     * Check if the returned type of the function equals to expected type
     * @param type expected type
     */
    public returnsType(type: 'undefined' | 'object' | 'boolean' | 'number' | 'string' | 'symbol' | 'function'): Continuance<this, any> {
        Execute.stuff.checkCondition(
            !this.opposite
                ? typeof this.func() === type
                : typeof this.func() !== type
        )
        .throwWithMessage(
            !this.opposite
                ? `Expected function returns type '${type}', but found '${typeof this.func()}'`
                : `Expected function does not return type '${type}', but found '${typeof this.func()}'`
        );

        return new Continuance(this, this.func);
    }

    /**
     * Check if the function name equals to the expected name
     * @param fooName function name
     */
    public haveName(fooName: string): Continuance<this, any> {
        Execute.stuff.checkCondition(
            !this.opposite
                ? this.func.name === fooName
                : this.func.name !== fooName
        )
        .throwWithMessage(
            !this.opposite
                ? `Expected function has name '${fooName}', but found '${this.func.name}'`
                : `Expected function does not have name '${fooName}', but found '${this.func.name}'`
        );

        return new Continuance(this, this.func);
    }

    public beThrown(): Continuance<this, any> {
        let isThrown = !this.opposite ? false : true;
        
        try {
            this.func();
            isThrown = false;
        } catch (e: any) {
            isThrown = e ? true : false;
        }

        Execute.stuff.checkCondition(
            !this.opposite
                ? isThrown
                : !isThrown
        )
        .throwWithMessage(
            !this.opposite
                ?   `Expected function '${this.func.name}' to be thrown`
                :   `Expected function '${this.func.name}' to not be thrown`
        );

        return new Continuance(this, this.func);
    }
}