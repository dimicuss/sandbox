import { createAction } from 'redux-act';
import { takeEvery, take, fork } from 'redux-saga/effects';


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
    const taskDescriptor = yield fork(runPayload.saga);

    while (true) {
        const { payload: cancelPayload } = yield take(cancelSaga);
        if (runPayload.name === cancelPayload.name) {
            yield taskDescriptor.cancel();
        }
    }
}

export { runSaga, cancelSaga };
export default function* rootSaga() {
    yield takeEvery(runSaga, handleRunSaga);
}