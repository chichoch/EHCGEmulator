import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './create_post/CreatePost.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        header: '',
        content: '',
        footer: '',
      }
    }

    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handlePostSubmit(posted) {
    this.setState({
      post: {
        header: posted.post.header,
        content: posted.post.content,
        footer: posted.post.footer
      }
    });
  }

  render() {
    return (
      <div>
        <CreatePost className="CreatePost"
          onSubmit={this.handlePostSubmit}
          post={this.state.post}
        />
        {this.state.post.header} {this.state.post.content} {this.state.post.footer} 
      </div>
    );
  }
}

export default App;
