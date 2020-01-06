import React from 'react';


export default (Descendant: Function) => (props: object = {}): Function => {
    class WrapperInvoker extends React.PureComponent {
        render() {
            return <Descendant {...props} {...this.props} />
        }
    }


    return WrapperInvoker;
}
