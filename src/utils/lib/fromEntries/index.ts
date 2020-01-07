type Entry = [string, any];


export default function fromEntries(entries: Entry[]): { [key: string]: any } {
    const result = {};

    for (let i = 0; i < entries.length; i++) {
        result[entries[i][0]] = entries[i][1];
    }

    return result;
}