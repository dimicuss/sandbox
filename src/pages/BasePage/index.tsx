import React from 'react';
import Redux from '@/utils/hoc/Redux'
import Container from '@/utils/hoc/Container';
import compose from '@/utils/lib/compose';

import BaseContainer from '@/containers/BaseContainer';


class BasePage extends React.PureComponent {
    render() {
        return <span>sdasdasdasdasaasdasdsd</span>;
    }
}


export default compose(
    Container({ name: 'SomeName2', ...BaseContainer }),
    Container({ name: 'SomeName1', ...BaseContainer }),
    Redux,
)(BasePage);
