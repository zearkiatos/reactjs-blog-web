import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { postActions } from "../../actions";
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts = () =>
    this.props.posts &&
    this.props.posts.map((post) => (
      <div className="item" key={post.id}>
        <div className="content">
          <div className="ui one column grid">
            <div className="row">
              <div className="sixteen wide column">
                <Link to={`posts/${post.id}`}>
                  <span className="ui right floated">{post.categories}</span>
                  <div className="header">{post.title}</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="description"></div>
        </div>
      </div>
    ));
  render() {
    return (
      <div>
        <div className="ui one column grid">
          <div className="row">
            <div className="sixteen wide column">
              <Link to="/posts/new" className="ui right floated primary button">
                Add a Post
              </Link>
            </div>
          </div>
        </div>
        <h3>Posts</h3>
        <div className="ui relaxed divided list">{this.renderPosts()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: postActions.fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
