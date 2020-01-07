import React from 'react';
import { connect } from 'react-redux';

import mapValues from '../../lib/mapValues';
import createHoc from '../../lib/createHoc';
import { ContainerContext } from '../ContainerHoc';


function callSelector(selector) {
    return selector(this);
}


function bindSelectorsToState(selectors) {
    return (state) => mapValues(selectors, callSelector, state);
}


function defaultCreator() {
    return {};
}


class ConnectorHoc extends React.PureComponent {
    props: {
        name: string
        createDispatchers: Function
        createProps: Function
        Descendant: Function
    };

    ConnectedDescendant: Function;


    static contextType = ContainerContext;

    static defaultProps = {
        name: '',
        createProps: defaultCreator,
        createDispatchers: defaultCreator,
    };


	constructor(props, context) {
		super(props, context);
        const { Descendant, createDispatchers, createProps, name } = props;
        const { selectors, actions } = context[name];
		this.ConnectedDescendant = connect(
		    bindSelectorsToState(createProps(selectors)),
            createDispatchers(actions)
        )(Descendant);
	}


	render() {
        const { ConnectedDescendant, props } = this;
		const { Descendant, name, createDispatchers, createProps, ...otherProps } = props;
		return <ConnectedDescendant {...otherProps} />;
	}
}


export default createHoc(ConnectorHoc);
