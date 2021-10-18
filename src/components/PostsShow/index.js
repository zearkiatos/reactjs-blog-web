import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postActions } from "../../actions";

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const { post } = this.props;
    if (post) {
      return (
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      );
    }
    return <div>Loading...</div>;
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

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
