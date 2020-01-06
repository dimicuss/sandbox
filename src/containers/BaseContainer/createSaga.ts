import { delay } from 'redux-saga/effects';


export default function createSaga({ name, ...otherProps }) {
    return function* saga() {
        while (true) {
            yield delay(3000);
            console.log(`Logging from ${name}`, otherProps);
        }
    }
}