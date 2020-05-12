import { SIGN_CHANGE } from './types';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_KEY;
let auth;

export const authInit = () => (dispatch) => {
  window.gapi.load('client:auth2', () =>
    window.gapi.client.init({ clientId, scope: 'email' }).then(() => {
      auth = window.gapi.auth2.getAuthInstance();
      dispatch(changeSignedIn(auth.isSignedIn.get()));
      auth.isSignedIn.listen((signedIn) => dispatch(changeSignedIn(signedIn)));
    })
  );
};

export const signIn = () => {
  auth.signIn();
};

export const signOut = () => {
  auth.signOut();
};

export const changeSignedIn = (signedIn) => {
  const userId = signedIn ? auth.currentUser.get().getId() : null;

  return {
    type: SIGN_CHANGE,
    payload: { signedIn, userId },
  };
};
