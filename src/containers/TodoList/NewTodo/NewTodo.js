import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import './NewTodo.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

class NewTodo extends Component {
  state = {
    title: '',
    content: '',
  }

  postTodoHandler = () => {
    this.props.onStoreTodo(this.state.title, this.state.content);
    this.props.history.push('/todos');
  }

  render() {
    return (
      <div className="NewTodo">
        <h1>Add a New Todo!</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        ></input>
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        >
        </textarea>
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStoreTodo: (title, content) =>
      dispatch({ type: actionTypes.ADD_TODO, title: title, content: content }),
  }
};

export default connect(null, mapDispatchToProps)(NewTodo);