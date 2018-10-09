import React, { Component } from 'react';
import './App.css';
import CreatePost from './create_post/CreatePost.js';
import Post from './post/Post.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        header: '',
        content: '',
        footer: '',
      },
      posts: []
    }

    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handlePostSubmit(posted) {
    var posts = this.state.posts;
    posts.push(posted.post);
    this.setState({
      posts: posts
    });
  }

  render() {
    return (
      <div>
        <CreatePost className="CreatePost"
          onSubmit={this.handlePostSubmit}
          post={this.state.post}
        />
        {this.state.posts.map((obj, i) => <Post post={obj} key={i} />)}
      </div>
    );
  }
}

export default App;
