import React, { Component } from "react";
import { reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    return (
      <form className="ui form">
        <h3>
          Create a New Post
        </h3>
        <div className="field">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Categories</label>
          <input type="text"  />
        </div>

        <div className="field">
          <label>Content</label>
          <textarea></textarea>
        </div>
        <button type="submit" className="ui primary button">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"],
})(PostsNew);
