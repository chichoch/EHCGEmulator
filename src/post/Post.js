import React, { Component } from 'react';
import './Post.css';

const getRandomTime = () => {
  return Math.floor(Math.random() * 10000) + 1000;
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer,
      comments: [],
      commentIndex: 0,
      intervalId: 0,
    }
  }

  componentDidMount() {
    const interval = getRandomTime();
    console.log(interval);
    setTimeout(() => {
      this.addComments();
    }, interval);
  }
  
  addComments = () => {
    var comments = this.state.comments;
    var commentIndex = this.state.commentIndex + 1;
    comments.push('Test'+commentIndex);
    this.setState({
      comments: comments,
      commentIndex: commentIndex,
    });
    const interval = getRandomTime();
    console.log(interval);
    setTimeout(() => {
      this.addComments();
    }, interval);
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
