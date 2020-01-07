import createSaga from './createSaga'
import createReducer from './createReducer'


export default {
    actions: [
        'setTimePassed',
        'setInterval',
        'start',
        'reset',
        'increaseInterval',
        'decreaseInterval',
    ],
    selectors: {
        timePassed: (state) => state.timePassed,
        interval: (state) => state.interval,
    },
    createSaga,
    createReducer,
}