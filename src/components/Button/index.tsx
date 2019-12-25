import React from 'react';


export default class Button extends React.PureComponent {
    props: object;


    render() {
        return <button {...this.props} />;
    }
}
