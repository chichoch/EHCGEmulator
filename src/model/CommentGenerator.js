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
    'author' : {
      'name': 'Fjanton Smuts',
      'img': require('../pictures/fjanton.jpg'),
    },
    'comments': [
      'Jag tycker inte att det du säger är speciellt konstruktivt, så jag vill inte att du håller på sådär din jävla idiot.',
      'Jag tycker inte att det du säger är speciellt konstruktivt, så jag vill inte att du håller på sådär din jävla idiot.',
      'Jag tycker inte att det du säger är speciellt konstruktivt, så jag vill inte att du håller på sådär din jävla idiot.',
    ]
  },
  {
    'author' : {
      'name': 'Author2',
      'img': ''
    },
    'comments': [
      'content1',
      'content2',
      'content3',
      'content4',
    ]
  },
  {
    'author' : {
      'name': 'Author3',
      'img': ''
    },
    'comments': [
      'content1',
      'content2',
      'content3',
      'content4',
    ]
  },
]
