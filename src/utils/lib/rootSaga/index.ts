import { createAction } from 'redux-act';
import { takeEvery, take, fork, cancel } from 'redux-saga/effects';


interface RunPayload {
    name: string,
    saga: Function,
}


interface CancelPayload {
    name: string
}


const runSaga = createAction<RunPayload>('runSaga');
const cancelSaga = createAction<CancelPayload>('cancelSaga');


function* handleRunSaga({ payload: runPayload }) {
    yield fork(runPayload.saga);

    while (true) {
        const { payload: cancelPayload } = yield take(cancelSaga);
        if (runPayload.name === cancelPayload.name) {
            yield cancel();
        }
    }
}


function* rootSaga() {
    yield takeEvery(runSaga, handleRunSaga);
}


export { runSaga, cancelSaga };
export default rootSaga;