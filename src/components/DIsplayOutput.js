import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../store/actions';
import { Link } from 'react-router-dom';

class DIsplayOutput extends Component {
  handleClick = (id) => {
    this.props.deleteTodo(id);
  };
  render() {
    const todo = this.props.todos.length ? (
      this.props.todos.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            <li onClick={() => this.handleClick(todo.id)}>{todo.todo}</li>
            <Link to={'/edit/' + todo.id}>
              <span>Edit Todo</span>
            </Link>
          </div>
        );
      })
    ) : (
      <h3>No todo...</h3>
    );
    return <div className="collection">{todo}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  deleteTodo: deleteTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(DIsplayOutput);
