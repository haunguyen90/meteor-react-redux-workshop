import { all } from 'redux-saga/effects';

// Import all Saga here
import messageFlow from './messages';

export default function* rootSaga() {
  yield all([
    messageFlow(),
  ]);
}
