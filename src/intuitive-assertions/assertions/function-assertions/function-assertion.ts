import { Continuance } from '../../continuance/continuance';
import { Execute } from '../../executor/execute';
import { ExpectedResult } from '../expected-result/expected-result';

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
        .throwWithResultMessage(
            !this.opposite
                ? ExpectedResult.fail(type, typeof this.func(), 'Expected function returns type \'{0}\', but found \'{1}\'')
                : ExpectedResult.fail(type, typeof this.func(), 'Expected function does not return type \'{0}\', but found \'{1}\'')
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
        .throwWithResultMessage(
            !this.opposite
                ? ExpectedResult.fail(fooName, this.func.name, 'Expected function has name \'{0}\', but found \'{1}\'')
                : ExpectedResult.fail(fooName, this.func.name, 'Expected function does not have name \'{0}\', but found \'{1}\'')
        );

        return new Continuance(this, this.func);
    }

    /**
     * Check if the function throws an exception
     */
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
        .throwWithResultMessage(
            !this.opposite
                ? ExpectedResult.fail(undefined, undefined, 'Expected the function to be thrown')
                : ExpectedResult.fail(undefined, undefined, 'Expected the function to not be thrown')
        );

        return new Continuance(this, this.func);
    }
}