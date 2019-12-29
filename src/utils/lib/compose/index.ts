const compose = (...functions: Function[]): Function => (arg: any): any => {
    let result = arg;
    for (let i = 0; i < functions.length; i++) {
        result = functions[i](result);
    }
    return result;
};


export default compose;
