'use strict';
import Comment from './Comment';

export default class CommentGenerator {
  getRandomComment() {
    const randomAuthorIndex = getRandomNumberBetween(0, comments.length);
    const randomAuthor = comments[randomAuthorIndex].author;
    const randomCommentIndex = getRandomNumberBetween(0, comments[randomAuthorIndex].comments.length);
    const randomComment = comments[randomAuthorIndex].comments[randomCommentIndex];
    return new Comment(randomAuthor, randomComment);
  }
}

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min;
}

const comments = [
  { 
    'author' : 'Author1',
    'comments': [
      'content1',
      'content2',
      'content3',
    ]
  },
  {
    'author' : 'Author2',
    'comments': [
      'content1',
      'content2',
      'content3',
      'content4',
    ]
  },
  {
    'author' : 'Author3',
    'comments': [
      'content1',
      'content2',
      'content3',
      'content4',
    ]
  },
]