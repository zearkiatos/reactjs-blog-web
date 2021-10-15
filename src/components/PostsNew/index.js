import React, { Component } from "react";
import { reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit}>
        <h3>Create a New Post</h3>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" {...title} />
        </div>

        <div className="field">
          <label>Categories</label>
          <input type="text" name="categories" {...categories}/>
        </div>

        <div className="field">
          <label>Content</label>
          <textarea name="content" {...content}></textarea>
        </div>
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"],
})(PostsNew);
