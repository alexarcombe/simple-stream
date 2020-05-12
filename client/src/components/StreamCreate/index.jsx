import React from 'react';
import { useDispatch } from 'react-redux';
import { createStream } from '../../actions/streamActions';
import StreamForm from '../StreamForm';

function StreamCreate(props) {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(createStream(values));
  };

  return (
    <div className="stream-create">
      <StreamForm onSubmit={onSubmit} form="CreateStream" />
    </div>
  );
}

export default StreamCreate;
