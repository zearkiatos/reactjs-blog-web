import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { postActions } from '../../actions';

class PostsNew extends Component {
  render() {
    const {
      handleSubmit,
    } = this.props;
    return (
      <form className="ui form" onSubmit={() => handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="field">
          <label>Title</label>
          <Field name="title" component="input" type="text" />
        </div>

        <div className="field">
          <label>Categories</label>
          <Field name="categories" component="input" type="text" />
        </div>

        <div className="field">
          <label>Content</label>
          <Field name="content" component="textarea" />
        </div>
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    );
  }
}

// connect: First argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost: postActions.createPost }, dispatch)
};
export default reduxForm({
  form: "PostsNewForm"
})(connect(null, mapDispatchToProps)(PostsNew));
