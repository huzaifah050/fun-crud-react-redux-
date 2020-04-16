import uuid from 'react-uuid';

const initState = {
  todos: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        todo: action.todos.todo,
        id: uuid(),
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: filteredTodos };

    case 'UPDATE_TODO':
      const updated_todo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, ...action.updatedTodo };
        } else {
          return todo;
        }
      });

      return { ...state, todos: updated_todo };
    default:
      return state;
  }
};

export default reducer;
