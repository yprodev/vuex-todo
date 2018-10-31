import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => !todo.completed),
    completedTodos: state => state.todos.filter((todo) => todo.completed)

  }
});
