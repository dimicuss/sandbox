import { delay, take, select, fork, race, cancel, call, put } from 'redux-saga/effects';


const secondFactor = 1000;


type Func = (...args: any[]) => any;


export default function createSaga({ actions, selectors }) {
    function* handleStart(...rest) {
        const interval = yield select(selectors.interval);
        const timePassed = yield select(selectors.timePassed);
        yield delay(interval * secondFactor);
        yield put(actions.setTimePassed(interval + timePassed));
        yield call(handleStart, ...rest);

    }


    function* handleIncreaseInterval() {
        const interval = yield select(selectors.interval);
        yield put(actions.setInterval(interval + 1));
    }


    function* handleDecreaseInterval() {
        const interval = yield select(selectors.interval);
        const modifiedInterval = interval - 1;
        yield put(actions.setInterval(modifiedInterval <= 0 ? 1 : modifiedInterval));
    }


    return function* saga() {
        let latestStartTask = undefined;


        while (true) {
            const { start, reset, increase, decrease } = yield race({
                start: take(actions.start),
                reset: take(actions.reset),
                increase: take(actions.increaseInterval),
                decrease: take(actions.decreaseInterval),
            });



            if (start) {
                if (latestStartTask) {
                    yield cancel(latestStartTask)
                }
                latestStartTask = yield fork(handleStart);
            }


            if (reset) {
                if (latestStartTask) {
                    yield cancel(latestStartTask);
                }
                latestStartTask = undefined;
                yield put(actions.clearState());
            }


            if (increase) {
                yield call(handleIncreaseInterval);
                if (latestStartTask) {
                    yield cancel(latestStartTask);
                    latestStartTask = yield fork(handleStart);
                }

            }


            if (decrease) {
                yield call(handleDecreaseInterval);
                if (latestStartTask) {
                    yield cancel(latestStartTask);
                    latestStartTask = yield fork(handleStart);
                }
            }
        }
    }
}