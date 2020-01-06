import React from 'react';
import createHoc from '../../lib/createHoc';


import { ContainerContext } from '../ContainerHoc';



class ConnectorHoc extends React.PureComponent {
    props: {
        name: string
        connect: Function
        Descendant: Function
    };

    ConnectedDescendant: Function;


    static contextType = ContainerContext;


	constructor(props, context) {
		super(props, context);
        const { Descendant, connect, name } = props;
		this.ConnectedDescendant = connect(context.containers[name])(Descendant);
	}


	render() {
        const { ConnectedDescendant, props } = this;
		const { Descendant, name, connect, ...otherProps } = props;
		return <ConnectedDescendant {...otherProps} />;
	}
}



export default createHoc(ConnectorHoc);
