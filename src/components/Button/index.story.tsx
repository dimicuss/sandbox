import React from 'react';
import Button from './index';


export default { title: 'Button' };


export const redButton = () => {
    const style: object = {
        backgroundColor: 'red',
    };

    return <Button style={style}>Red button</Button>;
};


export const greenButton = () => {
    const style: object = {
        backgroundColor: 'green',
    };

    return <Button style={style}>Green button</Button>;
};

