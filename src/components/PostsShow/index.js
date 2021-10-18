import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postActions } from "../../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.id);
  };
  render() {
    const { post } = this.props;
    if (post) {
      return (
        <div>
          <Link to="/">Back to Index</Link>
          <button
            className="ui negative right floated button"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
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
      deletePost: postActions.deletePost,
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
