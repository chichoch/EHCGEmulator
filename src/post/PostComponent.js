import React, { Component } from 'react';
import './PostComponent.css';
import CommentComponent from '../comment/CommentComponent'

const getRandomTime = () => {
  return Math.floor(Math.random() * 5000) + 1000;
};

class PostComponent extends Component {
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
    this.generateRecursiveTimeoutWithRandomInterval();
  }
  
  addComments = () => {
    var comments = this.state.comments;
    var commentIndex = this.state.commentIndex + 1;
    comments.push(<CommentComponent author="Author" content="Test" />);
    this.setState({
      comments: comments,
      commentIndex: commentIndex,
    });
  }

  generateRecursiveTimeoutWithRandomInterval = () => {
    this.addComments();
    const interval = getRandomTime();
    console.log(interval);
    setTimeout(() => {
      this.generateRecursiveTimeoutWithRandomInterval();
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
          {comments.map((obj, i) => <div>{obj}</div>)}
        </div>
      </div>
    );
  }
}

export default PostComponent;
