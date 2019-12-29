import React from 'react';


const createWrapper = (Wrapper: Function) => (props: object = {}) => (Descendant: Function): Function => {
    class WrapperInvoker extends React.PureComponent {
        render() {
            return <Wrapper {...this.props} {...props} Descendant={Descendant} />;
        }
    }

    return WrapperInvoker;
};


export default createWrapper;