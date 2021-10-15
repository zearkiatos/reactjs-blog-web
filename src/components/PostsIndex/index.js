import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { postActions } from "../../actions";
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
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
        List of blog posts.
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: postActions.fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
