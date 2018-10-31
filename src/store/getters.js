const getAllTodos = state => state.todoItems;
const getCompletedTodos = state => state.todoItems.map(todo => (todo.completed === true));
const isEmptyTodos = state => state.todoItems.length !== 0;

export default {
  getAllTodos,
  getCompletedTodos,
  isEmptyTodos
}
