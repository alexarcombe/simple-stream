import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStreams } from '../../actions/streamActions';
import StreamItem from './StreamItem';

function StreamList() {
  const { streams, auth } = useSelector((state) => state);
  const { signedIn, userId } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  let content = Object.values(streams).map((stream) => (
    <StreamItem key={stream.id} {...stream} loggedUserId={userId} />
  ));

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{content}</div>
      {signedIn && (
        <div style={{ textAlign: 'end' }}>
          <Link to="/streams/new" className="ui green button">
            Create Stream
          </Link>
        </div>
      )}
    </div>
  );
}

export default StreamList;
