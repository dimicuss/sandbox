import React from 'react';
import { connect } from 'react-redux';

import setPair from '../..//lib/setPair';
import createHoc from '../../lib/createHoc';
import { ContainerContext } from '../ContainerHoc';


function callSelector([name, selector]) {
    return [name, selector(this)];
}


function bindSelectorsToState(selectors) {
    return (state) => Object.entries(selectors).map(callSelector, state).reduce(setPair, {});
}


function defaultCreator() {
    return {};
}


class ConnectorHoc extends React.PureComponent {
    props: {
        name: string
        createDispatchers: Function
        createSelectors: Function
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
        const { selectors, actions } = context.containers[name];
		this.ConnectedDescendant = connect(
		    bindSelectorsToState(createProps(selectors)),
            createDispatchers(actions)
        )(Descendant);
	}


	render() {
        const { ConnectedDescendant, props } = this;
		const { Descendant, name, createDispatchers, createSelectors, ...otherProps } = props;
		return <ConnectedDescendant {...otherProps} />;
	}
}


export default createHoc(ConnectorHoc);
