import { SIGN_CHANGE } from '../actions/types';

const initialState = {
  signedIn: null,
  userId: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_CHANGE:
      return { ...state, signedIn: payload.signedIn, userId: payload.userId };
    default:
      return state;
  }
}
