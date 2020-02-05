import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { rootSaga, combineReducers } from 'react-core-utils'

import Timer, { TimerComponent } from './';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export default { title: 'Timer' };


export const TimerWithContainer = () => (
    <Provider store={store}>
        <Timer />
    </Provider>
);


export const SimpleTimer = () => (
    <TimerComponent />
);
