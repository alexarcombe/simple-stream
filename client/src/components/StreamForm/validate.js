export default (props) => {
  const { title, description } = props;
  const errors = {};
  if (!title) {
    errors.title = 'You need to provide a title.';
  }

  if (!description) {
    errors.description = 'You need to provide a description.';
  }
  return errors;
};
