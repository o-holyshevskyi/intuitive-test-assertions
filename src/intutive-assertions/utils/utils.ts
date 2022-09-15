export function trimArgs (args: string): string {
    let match = args.toString().match(/\{[^}]*\}/gm);
    if (match !== null) {
        return match[0].replace(/(return )/, '') || '';
    }

    return match || '';
}

export function processArr<T>(arr: Array<T>): string {
    let result = [];
    
    for (let i = 0; i < arr.length; ++i) {
        let entry = arr[i];
        result[i] = JSON.stringify(entry === undefined ? 'undefined' : entry === null ? 'null' : entry);
    }

    const resultArr = result.join(', ');

    return resultArr;
}