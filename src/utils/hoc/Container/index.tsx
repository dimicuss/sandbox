import React from 'react';
import { combineReducers, ReducersMapObject } from 'redux'

import createContainerProps, { ContainerProps } from './createContainerProps';

import createWrapper from '../../lib/createWrapper';
import { runSaga, cancelSaga } from '../../lib/rootSaga';


interface Props {
    name: string,
    redux: {
        store: {
            dispatch: Function
            replaceReducer: Function
        }
    }
    Descendant: Function
    actions: string[],
    selectors: object,
    createSaga: Function
    createReducer: Function
}


interface ContextType {
    containers: { [name: string]: ContainerProps }
    reducers: ReducersMapObject,
}


const Context = React.createContext({ containers: {}, reducers: {} });
const initialState = {};


function* defaultSaga() {}
function defaultReducer(state = initialState) { return state; }
function defaultCreateSaga() { return defaultSaga;}
function defaultCreateReducer() { return defaultReducer; }


class Container extends React.PureComponent {
    props: Props;
    context: ContextType;
    nextContext: ContextType;


    static contextType = Context;


    static defaultProps = {
        name: '',
        actions: [],
        selectors: {},
        createSaga: defaultCreateSaga,
        createReducer: defaultCreateReducer,
    };


    constructor(props, context) {
        super(props, context);
        const { name, redux, createSaga, createReducer } = props;
        const containerProps = createContainerProps(props);

        const args = { ...containerProps, containers: context.containers };

        const saga = createSaga(args);
        const reducer = createReducer(args);
        this.nextContext = {
            containers: { ...context.containers, [name]: containerProps },
            reducers: { ...context.reducers, [name]: reducer },
        };

        redux.store.replaceReducer(combineReducers(this.nextContext.reducers));
        redux.store.dispatch(runSaga({ name, saga }));

    }


    componentWillUnmount(): void {
        const { name, redux } = this.props;
        redux.store.dispatch(cancelSaga({ name }));
    }


    render() {
        const { Descendant, ...otherProps } = this.props;
        return (
            <Context.Provider value={this.nextContext}>
                <Descendant {...otherProps} />
            </Context.Provider>
        );
    }
}

export { Context };
export default createWrapper(Container);
