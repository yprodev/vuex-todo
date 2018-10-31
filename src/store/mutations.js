export default {
  FETCH_TODOS: (state, todos) => {
    state.todoItems.push(...todos);
  },
  ADD_TODO: (state, todo) => {
    state.todoItems.push(todo);
  },
  UPDATE_STATUS: (state, task) => {
    const todoIndex = state.todoItems.findIndex(item => item.id === task.id);
    const foundTodo = state.todoItems.find(item => item.id === task.id);
    foundTodo.completed = !foundTodo.completed;
    state.todoItems.splice(todoIndex, 1, foundTodo);
  }
}
