import React from 'react';

import compose from '@/utils/lib/compose';

import ContainerHoc from '@/utils/hoc/ContainerHoc';
import ConnectorHoc from "@/utils/hoc/ConnectorHoc";

import TimerContainer from '@/containers/TimerContainer';

import Timer from './components/Timer';


const ConnectedTimer = compose(
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
    ContainerHoc({ name: 'Time2', ...TimerContainer }),
)(Timer);



export default class BasePage extends React.PureComponent {
    render() {
        return <ConnectedTimer />;
    }
}
