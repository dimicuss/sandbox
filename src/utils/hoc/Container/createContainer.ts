import compose from '../../lib/compose';
import { createAction as createActionAct } from 'redux-act';


interface FunctionField {
    [key: string]: Function
}


interface ContainerProps {
    actions: FunctionField
    selectors: FunctionField
    reducer: Function,
    saga: Function,
}


type Pair = [string, Function]


function setPair(result: object, [key, value]: [string, any]): object {
    result[key] = value;
    return result;
}


function createAction(name: string): Pair {
    return [name, createActionAct(`${this}${name}`)];
}


function createSelector(pair: Pair): Pair {
    const [name, select] = pair;
    const selectBase = state => state[this];
    return [name, compose(selectBase, select)];
}


function* defaultSaga() {}
function defaultReducer(state) { return state; }
function returnSaga() { return defaultSaga; }
function returnReducer() { return defaultReducer; }


export default function createContainerProps(
    {
        name = '',
        actions = [],
        selectors = {},
        createSaga = returnSaga,
        createReducer = returnReducer
    }: {
        name: string
        actions: string[]
        selectors: { [key: string]: Function }
        createSaga: Function,
        createReducer: Function
    }
): ContainerProps {
    const creatorArgs = {
        actions: actions.map(createAction, name).reduce(setPair, {}),
        selectors: Object.entries(selectors).map(createSelector, name).reduce(setPair, {})
    };

    return {
        ...creatorArgs,
        saga: createSaga(creatorArgs),
        reducer: createReducer(creatorArgs),
    }
}
