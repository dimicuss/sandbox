import React from 'react';
import createHoc from '../../lib/createHoc';



class ContextConsumer extends React.PureComponent {
    static defaultProps = {
        consumers: {},
    };


    props: {
        consumers: { [name: string]: Function },
        Descendant: Function,
    };

    contextValues: { [name: string]: any };
    renderConsumer: Function;


    constructor(props, context) {
        super(props, context);
        this.contextValues = {};
        this.renderConsumer = this.createConsumerRenderer(Object.entries(props.consumers));
    }


    createConsumerRenderer = (consumerEntries, i = 0): Function => {
        if (i < consumerEntries.length) {
            const [name, Consumer] = consumerEntries[i];
            const nextRenderConsumer = this.createConsumerRenderer(consumerEntries, i + 1);

            const catchValue = (value) => {
                this.contextValues = { ...this.contextValues, [name]: value };
                return nextRenderConsumer();
            };

            return () => {
                return <Consumer>{catchValue}</Consumer>;
            };
        }


        return this.renderDescendant;
    };


     renderDescendant = () => {
         const { Descendant, consumers, ...otherProps } = this.props;

         const propsToPass = {
             ...otherProps,
             ...this.contextValues,
         };

         return <Descendant {...propsToPass} />
    };


    render() {
        return this.renderConsumer();
    }
}


export default createHoc(ContextConsumer);
