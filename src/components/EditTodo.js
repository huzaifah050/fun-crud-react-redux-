import React, { Component } from 'react';
import { addTodo, updateTodo } from '../store/actions';
import { connect } from 'react-redux';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo.todo,
      id: props.todo.id,
    };
    this.id = props.match.params.id;
    
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.state, this.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-fiel">
            <input
              type="text"
              name="todo"
              id="add-todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <label htmlFor="add-todo">Add todo</label>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    todo: state.todos.find((todo) => todo.id === id),
  };
};

const mapDispatchToProps = {
  addTodo: addTodo,
  updateTodo: updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
