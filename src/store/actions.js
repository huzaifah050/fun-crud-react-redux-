export const addTodo = (todos) => {
  return {
    type: 'ADD_TODO',
    todos: todos,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
};

export const updateTodo = (updatedTodo, id) => {
  return {
    type: 'UPDATE_TODO',
    updatedTodo,
    id,
  };
};
