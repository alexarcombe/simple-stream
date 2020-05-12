import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Modal component.
 * @param {Object} props
 * @param {string} props.confirmText - Confirm button text
 * @param {string} props.title - Header text
 * @param {string} props.content - Content text
 * @param {function} props.onConfirm - callback for confirm
 * @param {function} props.onCancel - callback for cancel
 */
function Modal(props) {
  const { confirmText, title, content, onConfirm, onCancel } = props;
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onCancel}>
      <div
        className="ui standard modal visisble active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <button className="ui primary button" onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="ui button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
