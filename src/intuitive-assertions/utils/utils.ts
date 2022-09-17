export function trimArgs (args: string): string {
    const match = args.toString().match(/\{[^}]*\}/gm);
    if (match !== null) {
        return match[0].replace(/(return )/, '') || '';
    }

    return match || '';
}

export function processArr<T>(arr: boolean[] | object[] | null[] | undefined[] | string[] | number[] | T[]): string {
    const result = [];
    
    for (let i = 0; i < arr.length; ++i) {
        const entry = arr[i];
        result[i] = JSON.stringify(entry === undefined ? 'undefined' : entry === null ? 'null' : entry instanceof Date ? entry.toLocaleDateString() : entry);
    }

    const resultArr = result.join(', ');

    return resultArr;
}