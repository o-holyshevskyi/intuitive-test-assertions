type ErrorBuilderFunction<T> = (actualValue: T, expectedValue?: T) => Error;

interface ErrorTemplate {
    methodName: string;
    template: string;
}

export class ErrorBuilder<T> {
    private errorBuilders: Map<string, ErrorBuilderFunction<T>> = new Map();

    constructor() {}

    private addTemplate(methodName: string): void {
        const errorMessageTemplate = errorTemplates.find((template) => template.methodName === methodName);

        if (errorMessageTemplate) {
            const errorMessage = this.buildErrorMessage(errorMessageTemplate.template);

            this.errorBuilders.set(methodName, (actualValue: T, expectedValue?: T) => {
                const formattedActualValue = this.getFormattedValue(actualValue);
                const formattedExpectedValue = this.getFormattedValue(expectedValue);
                
                const message = this.colorizeErrorMessage(errorMessage.replace("{actualValue}", `${formattedActualValue}`))
                    .replace('{expectedValue}', `${formattedExpectedValue}`);
                return new Error(message);
            });
        }
    }

    private colorizeErrorMessage(message: string): string {
        const redColor = '\x1b[31m';
        const resetColor = '\x1b[0m';
      
        return `${redColor}${message}${resetColor}`;
    }

    private getFormattedValue<V>(value: V): string | V {
        return value instanceof Date
            ? value.toLocaleString()
            : value
    }

    private buildErrorMessage(template: string): string {
        const date = new Date().toLocaleString();
        return `❌ === ${date} >>> ${template}`;
    }

    createError(actualValue: T, methodName: string, expectedValue?: T): Error {
        this.addTemplate(methodName);

        const errorBuilder = this.errorBuilders.get(methodName);
        if (errorBuilder) {
            return errorBuilder(actualValue, expectedValue);
        } else {
            return new Error(`Unknown method '${methodName}' called on ErrorBuilder`);
        }
    }
}

const errorTemplates: ErrorTemplate[] = [
    {
        methodName: 'beTrue',
        template: 'Expected true, but got {actualValue}'
    },
    {
        methodName: 'beFalse',
        template: 'Expected false, but got {actualValue}'
    },
    {
        methodName: 'not.beTrue',
        template: 'Expected not to be true, but got {actualValue}'
    },
    {
        methodName: 'not.beFalse',
        template: 'Expected not to be false, but got {actualValue}'
    },
    {
        methodName: 'be',
        template: 'Expected {actualValue} is not equal to {expectedValue}'
    },
    {
        methodName: 'not.be',
        template: 'Expected {actualValue} is equal to {expectedValue}'
    }
]
