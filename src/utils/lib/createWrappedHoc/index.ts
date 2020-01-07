import compose from '../compose';
import createHoc from '../createHoc';

export default (...wrappers: Function[]) => (Wrapper: Function) =>  (props: object = {}): Function => {
    return compose(
        createHoc(Wrapper)(props),
        ...wrappers,
    );
}