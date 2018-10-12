import React, { Component } from 'react';
import './CommentComponent.css';
import AuthorComponent from './AuthorComponent';

export default class CommentComponent extends Component {
  render() {
    const {comment} = this.props;
    const author = comment.getAuthor();
    const content = comment.getContent();
    return (
      <div className="Comment">
        <div className="CommentAuthor">
          <AuthorComponent src={author.img}/>
        </div>
        <div className="CommentContent">
          <b>
            {author.name + ' '}
          </b>
          {content}
        </div>
      </div>
    );
  }
}
