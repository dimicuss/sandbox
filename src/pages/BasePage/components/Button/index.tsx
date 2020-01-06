import React from 'react';
import passProps from '@/utils/lib/passProps';


class Button extends React.PureComponent {
    props: {
        Provider: Function,
        children: any,
    };

    state = {
        value: 0,
    };


    handleClick = () => {
        this.setState({ value: this.state.value + 1 });
    };


    render() {
        const { value } = this.state;
        const { Provider, children } = this.props;

        return <Provider value={value}>
            <button onClick={this.handleClick}>Click me</button>
            {children}
        </Provider>
    }
}


export default passProps(Button);
