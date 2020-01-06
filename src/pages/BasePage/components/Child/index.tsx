import React from 'react';

import ContainerHoc from '@/utils/hoc/ContainerHoc';
import ContextConsumerHoc from '@/utils/hoc/ContextConsumerHoc';

import compose from '@/utils/lib/compose';

import BaseContainer from '@/containers/BaseContainer';

import ButtonOne from '@/contexts/ButtonOne';
import ButtonTwo from '@/contexts/ButtonTwo';
import ButtonThree from '@/contexts/ButtonThree';



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
    ContainerHoc({ name: 'child', ...BaseContainer }),
    ContextConsumerHoc({
        consumers: {
            button1: ButtonOne.Consumer,
            button2: ButtonTwo.Consumer,
            button3: ButtonThree.Consumer,
        },
    }),
)(Child);