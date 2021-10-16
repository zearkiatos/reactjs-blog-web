import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { postActions } from '../../actions';

class PostsNew extends Component {
  render() {
    const renderInput = ({ input, name, label, type, meta: { touched, error } }) => (
      <div className="field">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} name={name} />
          {touched && error && <div className="ui red message">{error}</div>}
        </div>
      </div>
    );
    const {
      handleSubmit,
      invalid
    } = this.props;
    return (
      <form className="ui form" onSubmit={() => handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="field">
          <Field name="title" label="Title" component={renderInput} type="text" />
        </div>

        <div className="field">
          <Field name="categories" label="Categories" component={renderInput} type="text" />
        </div>

        <div className="field">
          <label>Content</label>
          <Field name="content" component="textarea" />
        </div>
        <button type="submit" className="ui primary button" disabled={invalid}>
          Submit
        </button>
      </form>
    );
  }
}

function validate (values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title';
  }

  if(!values.categories) {
    errors.categories = 'Enter a categories';
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
