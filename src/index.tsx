import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import BasePage from '@/pages/BasePage';


const store = createStore(combineReducers({}));


const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(
    <Provider store={store}>
        <BasePage />
    </Provider>,
    div,
);