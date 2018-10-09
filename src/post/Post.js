import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer,
      comments: [],
      commentIndex: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      var comments = this.state.comments;
      var commentIndex = this.state.commentIndex + 1;
      comments.push('Test'+commentIndex);
      this.setState({
        comments: comments,
        commentIndex: commentIndex,
      })
    }, 1000)
  }

  render() {
    const {post} = this.props;
    const {comments} = this.state;
    return (
      <div className="Post">
        <div className="PostHeader">
          Hej Eriks {post.header}-grupp!
        </div>
        <div className="PostContent">
          {post.content}
        </div>
        <div className="PostFooter">
          {post.footer} +/-?
        </div>
        <div className="Comments">
          {comments.map((obj) => <div>{obj}</div>)}
        </div>
      </div>
    );
  }
}

export default Post;
