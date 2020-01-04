import React from 'react';


export default class Button extends React.PureComponent {
	static context = React.createContext(0);


    state = {
        value: 0,
    };


	handleClick = () => {
		this.setState({ value: this.state.value + 1 });
	};

	
	render() {
		return (
		    <Button.context.Provider value={this.state.value}>
                <button onClick={this.handleClick}>ClickMe</button>
                {this.props.children}
            </Button.context.Provider>
        )
	}
}
