import React from 'react';
import createWrapper from '../../lib/createWrapper';
import createContainer from './createContainer';


const Context = React.createContext({});


class Container extends React.PureComponent {
    props: {
        Descendant: Function,
        store: object,
        name: string,
    };

    modifiedContext: { [name: string]: object };


    static contextType = Context;


    constructor(props, context) {
        super(props, context);
        const { name, store } = props;

        this.modifiedContext = {
            ...context,
            [name]: createContainer(props),
        };
    }


    componentWillUnmount(): void {

    }


    render() {
        const { Descendant, ...otherProps } = this.props;

        console.log(this.modifiedContext);

        return (
            <Context.Provider value={this.modifiedContext}>
                <Descendant {...otherProps} />
            </Context.Provider>
        );
    }
}


export default createWrapper(Container);
