import React from 'react';
import Auth from './Auth';
import { Link } from 'react-router-dom';

function StreamItem(props) {
  const { id, title, description, userId, loggedUserId } = props;
  return (
    <div className="item">
      <Auth userId={userId} loggedUserId={loggedUserId} id={id} title={title} />
      <i className="large middle aligned icon camera" />
      <div className="content">
        <Link to={`/streams/${id}`}>{title}</Link>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default StreamItem;
