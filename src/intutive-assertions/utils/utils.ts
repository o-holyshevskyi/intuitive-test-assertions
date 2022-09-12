export function trimArgs (args: string): string {
    let match = args.toString().match(/\{[^}]*\}/gm);
    if (match !== null) {
        return match[0].replace(/(return )/, '') || '';
    }

    return match || '';
}