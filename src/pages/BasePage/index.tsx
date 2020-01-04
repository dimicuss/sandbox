import React from 'react';

import Redux from '@/utils/hoc/Redux';
import Container from '@/utils/hoc/Container';

import compose from '@/utils/lib/compose';

import BaseContainer from '@/containers/BaseContainer';

import Child from './components/Child';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';
import ButtonThree from './components/ButtonThree';


class BasePage extends React.PureComponent {
    render() {
        return (
            <ButtonOne>
              <ButtonTwo>
                <ButtonThree>
                  <Child />
                </ButtonThree>
              </ButtonTwo>
            </ButtonOne>
        );
    }
}


export default compose(
    Container({ name: 'SomeName1', ...BaseContainer }),
    Redux,
)(BasePage);
