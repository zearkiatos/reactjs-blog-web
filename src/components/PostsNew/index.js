import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';
import { postActions } from '../../actions';
import history from '../../history';

class PostsNew extends Component {
  onSubmit(props) {
    this.props.createPost(props).then(() => {
      // blog post has been created, navigate the user to the index
      // We nagigate by calling this.context.router.push with the
      // new path to navigate to.
      history.push('/');
    });
  }
  render() {
    const renderInput = ({ input, name, label, type, meta: { touched, error } }) => (
      <div className={`field  ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} name={name} />
          {touched && error && <div className="ui red message">{error}</div>}
        </div>
      </div>
    );

    const renderTextArea = ({ input, name, label, meta: { touched, error } }) => (
      <div className={`field  ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <div>
          <textarea {...input} placeholder={label} name={name}></textarea>
          {touched && error && <div className="ui red message">{error}</div>}
        </div>
      </div>
    );
    const {
      handleSubmit,
      invalid
    } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        <Field name="title" label="Title" component={renderInput} type="text" />

        <Field name="categories" label="Categories" component={renderInput} type="text" />

        <Field name="content" component={renderTextArea} label="Content" />
        <button type="submit" className="ui primary button" disabled={invalid}>
          Submit
        </button>
        <Link to="/" className="ui negative button">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
};

// connect: First argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost: postActions.createPost }, dispatch)
};
export default reduxForm({
  form: "PostsNewForm",
  validate
})(connect(null, mapDispatchToProps)(PostsNew));
