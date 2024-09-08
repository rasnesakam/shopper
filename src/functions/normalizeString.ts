export function turkishCharReplacer(substring: string, ...args: any[]): string{
    switch(substring){
        case "ı":
            return "i";
        case "ğ":
            return "g";
        case "ü":
            return "u";
        case "ş":
            return "s";
        case "ö":
            return "o";
        case "ç":
            return "c";
        default:
            return substring;
    }
}
export function normalizeString(value: string): string{
    return value.toLowerCase()
        .replaceAll(" ","-")
        .replaceAll(/[ığüşöç]/g, turkishCharReplacer);
}