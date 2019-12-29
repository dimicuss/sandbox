import React from 'react';
import createWrapper from '../../lib/createWrapper';



class ContextConsumer extends React.PureComponent {
    props: {
        Consumer: Function,
        Descendant: Function,
        name: string,
    };


    renderChild = (value) => {
        const { Descendant, Consumer, name, ...otherProps } = this.props;

        const propsToPass = {
            ...otherProps,
            [name]: value,
        };

        return <Descendant {...propsToPass} />
    };


    render() {
        const { Consumer } = this.props;
        return <Consumer>{this.renderChild}</Consumer>;
    }
}


export default createWrapper(ContextConsumer);
