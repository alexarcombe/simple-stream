import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from './InputField';
import validate from './validate';

function StreamForm(props) {
  const { handleSubmit, onSubmit } = props; // handleSubmit comes from reduxForm

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={InputField} label="Enter Title" />
      <Field
        name="description"
        component={InputField}
        label="Enter Description"
      />
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
}

// {form: name} needs to come from caller.
export default reduxForm({ validate })(StreamForm);
