import compose from '../compose';
import createHoc from '../createHoc';

export default (Wrapper: Function) => (...wrappers: Function[]) => (props: object = {}): Function => {
    return compose(
        createHoc(Wrapper)(props),
        ...wrappers,
    );
}