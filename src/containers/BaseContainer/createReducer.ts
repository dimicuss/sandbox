export default function createReducer(state = {}) {
    const initialState = {};

    return function reducer(state = initialState) {
        return state;
    }
}