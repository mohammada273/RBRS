import {fork} from 'redux-saga/effects'
import HomeSaga from '../features/Home/saga'

export default function* rootSaga() {
    yield fork(HomeSaga)
}
