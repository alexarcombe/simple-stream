import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { authInit, signIn, signOut } from '../../actions/authActions';

function GoogleAuth() {
  const { signedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authInit());
  }, [dispatch]);

  const onClick = () => {
    if (signedIn) {
      signOut();
    } else {
      signIn();
    }
  };

  let content;
  if (signedIn === null) {
    return null;
  } else if (signedIn) {
    content = 'Sign Out';
  } else {
    content = 'Sign In with Google ';
  }

  return (
    <div className="item">
      <button
        className={classNames('ui google button', {
          green: !signedIn,
          red: signedIn,
        })}
        onClick={onClick}
      >
        <i className="ui icon google" />
        {content}
      </button>
    </div>
  );
}

export default GoogleAuth;
