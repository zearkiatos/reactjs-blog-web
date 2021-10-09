import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postActions } from "../../actions";
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>List of blog posts.</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: postActions.fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
