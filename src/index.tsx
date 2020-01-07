import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import rootSaga from '@/utils/lib/rootSaga';
import addReducers from '@/utils/lib/addReducers';

import BasePage from '@/pages/BasePage';


const div = document.createElement('div');
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(addReducers({}), middlewares);


sagaMiddleware.run(rootSaga);
document.body.appendChild(div);
ReactDOM.render(
    <Provider store={store}>
        <BasePage />
    </Provider>,
    div,
);