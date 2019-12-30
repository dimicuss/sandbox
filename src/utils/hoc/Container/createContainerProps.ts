import compose from '../../lib/compose';
import { createAction as createActionAct } from 'redux-act';


interface FunctionField {
    [key: string]: Function
}


interface ContainerProps {
    actions: FunctionField
    selectors: FunctionField
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


export { ContainerProps };
export default function createContainerProps(
    {
        name = '',
        actions = [],
        selectors = {},
    }: {
        name: string
        actions: string[]
        selectors: { [key: string]: Function }
    }
): ContainerProps {
    return  {
        actions: actions.map(createAction, name).reduce(setPair, {}),
        selectors: Object.entries(selectors).map(createSelector, name).reduce(setPair, {})
    };
}
