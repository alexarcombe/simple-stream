import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStream } from '../../actions/streamActions';

function StreamShow(props) {
  const { match } = props;
  const { id } = match.params;
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
    }
  }, [dispatch, id, stream]);

  let content;
  if (!stream) {
    content = 'Loading...';
  } else {
    content = stream.title;
  }

  return <div>{content}</div>;
}

export default StreamShow;
