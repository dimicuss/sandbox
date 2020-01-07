import React from 'react'

import compose from '@/utils/lib/compose';

import ContainerHoc from '@/utils/hoc/ContainerHoc';
import ConnectorHoc from "@/utils/hoc/ConnectorHoc";

import TimerContainer from '@/containers/TimerContainer';


type EventHandler = (event: any) => void;


export class TimerComponent extends React.PureComponent {
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


export default compose(
    ConnectorHoc({
        name: 'Timer',
        createProps: ({ timePassed, interval }) => ({
            timePassed,
            interval,
        }),
        createDispatchers: ({ start, reset, increaseInterval, decreaseInterval }) => ({
            start,
            reset,
            increaseInterval,
            decreaseInterval,
        }),
    }),
    ContainerHoc({ name: 'Timer', ...TimerContainer }),
)(TimerComponent);
