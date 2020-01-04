import React from 'react';
import { ReactReduxContext } from 'react-redux';

import Container from '@/utils/hoc/Container';
import ContextConsumer from '@/utils/hoc/ContextConsumer';

import compose from '@/utils/lib/compose';

import BaseContainer from '@/containers/BaseContainer';

import ButtonOne from '../ButtonOne';
import ButtonTwo from '../ButtonTwo';
import ButtonThree from '../ButtonThree';



class Child extends React.PureComponent {
    props: {
        button1: number,
        button2: number,
        button3: number,
    };


	render() {
        const { button1, button2, button3 } = this.props;
		return <span>{button1} {button2} {button3}</span>
	}
}


export default compose(
    Container({ name: 'child', ...BaseContainer }),
    ContextConsumer({
        consumers: {
            button1: ButtonOne.context.Consumer,
            button2: ButtonTwo.context.Consumer,
            button3: ButtonThree.context.Consumer,
            redux: ReactReduxContext.Consumer,
        },
    }),
)(Child);