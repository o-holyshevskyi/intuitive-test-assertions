export function getRegexExp(regexString: string): RegExp {
    const escapedRegexString = regexString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(escapedRegexString);
}