import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer
    }
  }

  render() {
    return (
      <div className="Post">
        Placeholder
      </div>
    );
  }
}

export default Post;
