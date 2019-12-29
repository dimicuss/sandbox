import React from 'react';
import Store from '@/utils/hoc/Store'
import Container from '@/utils/hoc/Container';
import compose from '@/utils/lib/compose';


class BasePage extends React.PureComponent {
    render() {
        return <span>sdasdasdasdasaasdasdsd</span>;
    }
}


export default compose(
    Container({ name: 'SomeName2' }),
    Container({ name: 'SomeName1' }),
    Store,
)(BasePage);
