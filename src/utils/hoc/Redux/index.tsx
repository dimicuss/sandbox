import { ReactReduxContext } from 'react-redux';
import ContextConsumer from '../ContextConsumer';


export default ContextConsumer({
    name: 'redux',
    Consumer: ReactReduxContext.Consumer,
});