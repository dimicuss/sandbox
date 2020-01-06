import React from 'react'

type EventHandler = (event: any) => void;


class BasePage extends React.PureComponent {
	props: {
		timePassed?: number,
		interval?: number,
		start?: EventHandler,
		reset?: EventHandler,
		increaseInterval?: EventHandler,
		decreaseInterval?: EventHandler,
	};


	static defaultProps = {
		timePassed: 0,
		interval: 1,
	};


	render() {
		const { timePassed, interval, start, reset, increaseInterval, decreaseInterval } = this.props;

		return (
			<div>
				<div>
					<span>Time passed: {timePassed}</span>
				</div>
				<div>
					<button onClick={start}>Start</button> <button onClick={reset}>Reset</button>
				</div>
				<div>
					<div>
						<span>interval: {interval}</span>
					</div>
					<div>
						<button onClick={increaseInterval}>+</button> <button onClick={decreaseInterval}>-</button>
					</div>
				</div>
			</div>
		);
	}
}


export default BasePage;
