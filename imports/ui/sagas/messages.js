import { Meteor } from 'meteor/meteor';
import { takeEvery, all, call, put } from 'redux-saga/effects';

import { SEND_MESSAGE, SEND_MESSAGE_FAILURE, SEND_MESSAGE_SUCCESS } from '../reducers/messages';

const insertMessage = payload => (
  new Promise((resolve) => {
    Meteor.call('messagesInsert', payload, (error, messageId) => {
      resolve({ error, messageId });
    });
  })
)

export function* sendMessage({ payload }) {
  const { error, messageId } = yield call(insertMessage, payload);
  if (error) {
    yield put({ type: SEND_MESSAGE_FAILURE, error: error.reason });
  } else {
    yield put({ type: SEND_MESSAGE_SUCCESS, messageId });
  }
}

export default function* messagesFlow() {
  yield all([
    takeEvery([SEND_MESSAGE], sendMessage),
  ])
}
