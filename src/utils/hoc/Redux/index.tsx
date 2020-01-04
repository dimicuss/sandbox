import { ReactReduxContext } from 'react-redux';
import ContextConsumer from '../ContextConsumer';


export default ContextConsumer({
    consumers: { redux: ReactReduxContext.Consumer },
});