import { combineReducers as combineReducersRedux, ReducersMapObject, Reducer } from 'redux';


let initialReducers: ReducersMapObject = {};


export function setInitialReducers(reducers: ReducersMapObject) {
    initialReducers = reducers;
}


export default function combineReducers(reducers: ReducersMapObject): Reducer {
    initialReducers = { ...initialReducers, ...reducers };
    return combineReducersRedux(initialReducers);
}