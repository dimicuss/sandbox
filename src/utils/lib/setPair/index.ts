export default function setPair(result: object, [key, value]: [string, any]): object {
    result[key] = value;
    return result;
}