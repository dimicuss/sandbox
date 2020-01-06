import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { combineReducers, ReducersMapObject } from 'redux'

import ContextConsumerHoc from '../ContextConsumerHoc';

import  createWrappedHoc from '../../lib/createWrappedHoc';
import { runSaga, cancelSaga } from '../../lib/rootSaga';
import createContainer, { Container } from './lib/createContainer';


interface ContextType {
    containers: { [name: string]: Container }
    reducers: ReducersMapObject,
}


interface Props {
    Descendant: Function
    redux: {
        store: {
            dispatch: Function
            replaceReducer: Function
        }
    }
    containerContext: ContextType,
    name: string,
    actions: string[],
    selectors: object,
    createSaga: Function
    createReducer: Function
}


const ContainerContext = React.createContext({ containers: {}, reducers: {} });
const initialState = {};


function* defaultSaga() {}
function defaultReducer(state = initialState) { return state; }
function defaultCreateSaga() { return defaultSaga }
function defaultCreateReducer() { return defaultReducer }


class ContainerHoc extends React.PureComponent {
    props: Props;
    nextContainerContext: ContextType;


    static defaultProps = {
        name: '',
        actions: [],
        selectors: {},
        createSaga: defaultCreateSaga,
        createReducer: defaultCreateReducer,
    };


    constructor(props, context) {
        super(props, context);
        const { redux, containerContext, name, createSaga, createReducer } = props;
        const container = createContainer(props);

        const args = { ...container, containers: containerContext.containers, name };

        const saga = createSaga(args);
        const reducer = createReducer(args);
        this.nextContainerContext = {
            reducers: { ...containerContext.reducers, [name]: reducer },
            containers: { ...containerContext.containers, [name]: container },
        };

        redux.store.replaceReducer(combineReducers(this.nextContainerContext.reducers));
        redux.store.dispatch(runSaga({ name, saga }));
    }


    componentWillUnmount(): void {
        const { name, redux } = this.props;
        redux.store.dispatch(cancelSaga({ name }));
    }


    render() {
        const { Descendant, redux, containerContext, name,  actions, selectors, createSaga, createReducer, ...otherProps } = this.props;
        return (
            <ContainerContext.Provider value={this.nextContainerContext}>
                <Descendant {...otherProps} />
            </ContainerContext.Provider>
        );
    }
}


export { ContainerContext };
export default createWrappedHoc(ContainerHoc)(
    ContextConsumerHoc({
        consumers: {
            redux: ReactReduxContext.Consumer,
            containerContext: ContainerContext.Consumer,
        },
    })
);
