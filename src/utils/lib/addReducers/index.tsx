import { combineReducers, ReducersMapObject, Reducer } from 'redux';


let initialReducers: ReducersMapObject = {};


export function setInitialReducers(reducers: ReducersMapObject) {
    initialReducers = reducers;
}


export default function addReducers(reducers: ReducersMapObject): Reducer {
    initialReducers = { ...initialReducers, ...reducers };
    return combineReducers(initialReducers);
}