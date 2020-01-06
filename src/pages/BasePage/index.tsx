import React from 'react';


import compose from '@/utils/lib/compose';

import ContainerHoc from '@/utils/hoc/ContainerHoc';

import BaseContainer from '@/containers/BaseContainer';

import ButtonOneContext from '@/contexts/ButtonOne'
import ButtonTwoContext from '@/contexts/ButtonTwo'
import ButtonThreeContext from '@/contexts/ButtonThree'

import Child from './components/Child';
import Button from './components/Button';



const ButtonOne = Button({
    Provider: ButtonOneContext.Provider
});

const ButtonTwo = Button({
    Provider: ButtonTwoContext.Provider
});

const ButtonThree = Button({
    Provider: ButtonThreeContext.Provider
});


class BasePage extends React.PureComponent {
    render() {
        console.log(this.props);
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
    ContainerHoc({ name: 'SomeName1', ...BaseContainer }),
)(BasePage);
