import React, { Component } from 'react';
import './CommentComponent.css';

export default class CommentComponent extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div className="Comment">
        <div className="CommentAuthor">
          {comment.getAuthor()}
        </div>
        <div className="CommentContent">
          {comment.getContent()}
        </div>
      </div>
    );
  }
}