import React, { Component } from 'react';
import { addTodo } from '../store/actions';
import { connect } from 'react-redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      todo: '',
      id: '',
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
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

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };

const mapDispatchToProps = {
  addTodo: addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
