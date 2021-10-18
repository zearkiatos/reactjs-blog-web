import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postActions } from "../../actions";

class PostsShow extends Component {
  shouldComponentUpdate() {
    this.props.fetchPost(this.post.match.params.id);
  }
  render() {
    return <div>Show post {this.props.match.params.id}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPost: postActions.fetchPost,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(PostsShow);
