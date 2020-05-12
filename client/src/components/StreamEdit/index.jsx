import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStream, editStream } from '../../actions/streamActions';
import StreamForm from '../StreamForm';

function StreamEdit(props) {
  const { id } = props.match.params;
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
    }
  }, [id, dispatch, stream]);

  const onSubmit = (formValues) => {
    dispatch(editStream(id, formValues));
  };

  const initialValues = {
    title: stream.title,
    description: stream.description,
  };

  return (
    <div className="stream-edit">
      <StreamForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        form="StreamEdit"
      />
    </div>
  );
}

export default StreamEdit;
