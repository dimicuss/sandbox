type SimpleObject = { [key: string]: any };

type HandleValue = (value: any, key: string, initialObject: SimpleObject) => any;


export default function mapValues(simpleObject: SimpleObject, handleValue: HandleValue, context?: any): SimpleObject {
    const result = {};

    for (let key in simpleObject) {
        if (simpleObject.hasOwnProperty(key)) {
            result[key] = handleValue.call(context, simpleObject[key], key, simpleObject)
        }
    }

    return result;
}
