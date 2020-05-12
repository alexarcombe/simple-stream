import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

function InputField(props) {
  const { input, label, meta } = props;
  const { error, touched } = meta;
  return (
    <div
      className={classNames('field', { error: touched && !_.isEmpty(error) })}
    >
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <div className="ui error message">{touched && error}</div>
    </div>
  );
}

export default InputField;
