import { createReducer as createReducerAct } from 'redux-act';


export default function createReducer({ actions }) {
    const initialState = {
        timePassed: 0,
        interval: 1,
    };


    return createReducerAct({
        [actions.setInterval]: (state, payload) => ({ ...state, interval: payload }),
        [actions.setTimePassed]: (state, payload) => ({ ...state, timePassed: payload }),
        [actions.clearState]: () => initialState,
    }, initialState)
}