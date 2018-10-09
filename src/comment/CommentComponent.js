import React, { Component } from 'react';
import './CommentComponent.css';

export default class CommentComponent extends Component {
  render() {
    const {author, content} = this.props;
    return (
      <div className="Comment">
        <div className="CommentAuthor">
          {author}
        </div>
        <div className="CommentContent">
          {content}
        </div>
      </div>
    );
  }
}