import { combineReducers, ReducersMapObject, Reducer } from 'redux';


let initialReducers: ReducersMapObject = {};


export function setInitialReducers(reducers: ReducersMapObject) {
    initialReducers = reducers;
}


export default function addReducer(name: string, reducer: Reducer): Reducer {
    initialReducers = { ...initialReducers, [name]: reducer };
    return combineReducers(initialReducers);
}