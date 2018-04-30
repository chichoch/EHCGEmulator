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
        <div className="PostHeader">
          Hej Eriks {this.props.post.header}-grupp!
        </div>
        <div className="PostContent">
          {this.props.post.content}
        </div>
        <div className="PostFooter">
          {this.props.post.footer} +/-?
        </div>
      </div>
    );
  }
}

export default Post;
