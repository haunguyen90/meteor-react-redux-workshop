import Fingerprint from 'fingerprintjs';

export const CHANGE_NAME = 'auth/CHANGE_NAME';

const initialState = {
  userId: new Fingerprint().get(),
  name: '',
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });

    default:
      return state;
  }
}
