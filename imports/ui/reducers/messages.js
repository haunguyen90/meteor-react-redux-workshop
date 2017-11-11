export const SEND_MESSAGE = 'messages/SEND';
export const SEND_MESSAGE_FAILURE = 'messages/SEND_FAILURE';
export const SEND_MESSAGE_SUCCESS = 'messages/SEND_SUCCESS';

const initialState = {
  isSending: false,
  error: null,
};

export default function messages(state = initialState, action = {}) {
  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        isSending: true,
        error: null,
      });

    case SEND_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        isSending: false,
        error: action.error,
      });

    case SEND_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        isSending: false,
        lastMessageId: action.messageId,
      });
    default:
      return state;
  }
}
