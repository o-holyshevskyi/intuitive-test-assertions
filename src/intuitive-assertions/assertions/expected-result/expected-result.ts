export class ExpectedResult {
    public isSuccess: boolean;
    public isFailure: boolean;
    private _error: string;  
    private _actualValue: any;
    private _expectedValue: any;

    private constructor (isSuccess: boolean, error: string, expectedValue: any, actualValue: any) {
        if (isSuccess && error) {
            throw new Error('InvalidOperation: A result cannot be successful and contain an error');
        }
        if (!isSuccess && !error) {
            throw new Error('InvalidOperation: A failing result needs to contain an error message');
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this._error = error;
        this._actualValue = actualValue;
        this._expectedValue = expectedValue;

        Object.freeze(this);
    }

    get error(): string {
        return buildError(this._error, this._expectedValue, this._actualValue);
    }

    public static fail(
        expectedValue: any,
        actualValue: any, 
        error: string): ExpectedResult {
        return new ExpectedResult(false, error, expectedValue, actualValue);
    }
}

function buildError(str: string, ...replacements: string[]): string {
    var args = replacements;
    return str.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match;
    });
}