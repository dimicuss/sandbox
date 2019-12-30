import React from 'react';
import createWrapper from '../../lib/createWrapper';


import { Context } from '../Container';



class Connector extends React.PureComponent {
    props: {
        name: string
        connect: Function
        Descendant: Function
    };

    ConnectedDescendant: Function;


    static contextType = Context;


	constructor(props, context) {
		super(props, context);
        const { Descendant, connect, name } = props;
		this.ConnectedDescendant = connect(context[name])(Descendant);
	}


	render() {
        const { ConnectedDescendant, props } = this;
		const { Descendant, name, connect, ...otherProps } = props;
		return <ConnectedDescendant {...otherProps} />;
	}
}



export default createWrapper(Connector);
