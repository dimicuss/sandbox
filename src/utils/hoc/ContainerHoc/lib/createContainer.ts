import { createAction as createActionAct } from 'redux-act';

import compose from '../../../lib/compose';
import mapValues from '../../../lib/mapValues';
import fromEntries from '../../../lib/fromEntries';


interface FunctionField {
    [key: string]: Function
}


interface Container {
    actions: FunctionField
    selectors: FunctionField
}


function createAction(name: string): [string, Function] {
    return [name, createActionAct(`${this}/${name}`)];
}


function createSelector(select: Function): Function {
    const selectBase = state => state[this];
    return compose(selectBase, select);
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
        actions: fromEntries(['clearState', ...actions].map(createAction, name)),
        selectors: mapValues(selectors, createSelector, name),
    };
}
