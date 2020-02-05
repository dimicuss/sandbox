import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { rootSaga, combineReducers } from 'react-core-utils';

import BasePage from '@/pages/BasePage';


const div = document.createElement('div');
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(combineReducers({}), middlewares);


console.log(store);
sagaMiddleware.run(rootSaga);
document.body.appendChild(div);
ReactDOM.render(
    <Provider store={store}>
        <BasePage />
    </Provider>,
    div,
);