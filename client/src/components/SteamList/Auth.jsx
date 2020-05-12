import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStream } from '../../actions/streamActions';
import Modal from '../Layout/Modal';

function Auth(props) {
  const { userId, loggedUserId, id, title } = props;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  let content = null;
  if (userId === loggedUserId) {
    content = (
      <div className="right floated content">
        <Link to={`/streams/edit/${id}`} className="ui primary button">
          Edit
        </Link>
        <button
          className="ui negative button"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>
        {showModal && (
          <Modal
            confirmText="Delete"
            title={`Delete ${title}`}
            content="Are you sure you want to delete this Stream?"
            onConfirm={() => {
              dispatch(deleteStream(id));
              setShowModal(false);
            }}
            onCancel={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    );
  }
  return content;
}
export default Auth;
