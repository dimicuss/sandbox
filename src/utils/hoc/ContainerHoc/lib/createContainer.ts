import { createAction as createActionAct } from 'redux-act';

import compose from '../../../lib/compose';
import setPair from '../../../lib/setPair';


interface FunctionField {
    [key: string]: Function
}


interface Container {
    actions: FunctionField
    selectors: FunctionField
}


type Pair = [string, Function]


function createAction(name: string): Pair {
    return [name, createActionAct(`${this}/${name}`)];
}


function createSelector(pair: Pair): Pair {
    const [name, select] = pair;
    const selectBase = state => state[this];
    return [name, compose(selectBase, select)];
}


export { Container };
export default function createContainer(
    {
        name = '',
        actions = [],
        selectors = {},
    }: {
        name: string
        actions: string[]
        selectors: { [key: string]: Function }
    }
): Container {
    return  {
        actions: ['clearState', ...actions].map(createAction, name).reduce(setPair, {}),
        selectors: Object.entries(selectors).map(createSelector, name).reduce(setPair, {})
    };
}
