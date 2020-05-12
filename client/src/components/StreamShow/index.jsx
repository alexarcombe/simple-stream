import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions/streamActions';

function StreamShow(props) {
  const { match } = props;
  const { id } = match.params;
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  let player;

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
    }
  }, [dispatch, id, stream]);

  useEffect(() => {
    if (stream) {
      player = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [stream, id, player]);

  let content;
  if (!stream) {
    content = 'Loading...';
  } else {
    content = (
      <>
        <video ref={videoRef} style={{ width: '100%' }} controls={true} />
        <h2>{stream.title}</h2>
        <p>{stream.description}</p>
      </>
    );
  }

  return <div className="stream-show">{content}</div>;
}

export default StreamShow;
