import { ReactReduxContext } from 'react-redux';
import ContextConsumer from '../ContextConsumer';


export default ContextConsumer({
    name: 'store',
    Consumer: ReactReduxContext.Consumer,
});