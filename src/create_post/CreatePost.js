import React, { Component } from 'react';
import './CreatePost.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer
    }

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleFooterChange = this.handleFooterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeaderChange(event) {
    this.setState({header: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleFooterChange(event) {
    this.setState({footer: event.target.value});
  }

  handleSubmit(event) {
      this.props.onSubmit({
        post: {
          header: this.state.header,
          content: this.state.content,
          footer: this.state.footer
        }
      });
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Hej Eriks <input type="text" value={this.state.header} onChange={this.handleHeaderChange} />-grupp!
        <br />  <br />
        <textarea type="text" value={this.state.content} onChange={this.handleContentChange} />
        <br /> <br />
        <input type="text" value={this.state.footer} onChange={this.handleFooterChange} /> +/-?
        <br />
        <input type="submit" value="Skicka" />
      </form>
    );
  }
}

export default CreatePost;
