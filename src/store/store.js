import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoItems: [],
  },
  mutations: {
    SET_TODOS: (state, todos) => {
      state.todoItems.push(...todos);
    },
    ADD_TODO: (state, todo) => {
      state.todoItems.push(todo);
    },
    UPDATE_TODO_STATUS: (state, task) => {
      const todoIndex = state.todoItems.findIndex(item => item.id === task.id);
      const foundTodo = state.todoItems.find(item => item.id === task.id);
      foundTodo.completed = !foundTodo.completed;
      state.todoItems.splice(todoIndex, 1, foundTodo);
    }
  },
  actions: {
    getTodos: ({ commit }) => {
      const data = [
        { id: 1, name: 'Buy bread', completed: false },
        { id: 2, name: 'Go to meet with the friends', completed: true },
        { id: 3, name: 'Make some trainings', completed: true },
        { id: 4, name: 'Create new pet project', completed: false },
        { id: 5, name: 'Go to bed', completed: false }
      ];
      setTimeout(() => {
        commit('SET_TODOS', data);
      }, 3000);
    }
  },
  getters: {
    todos: state => state.todoItems
  }
});
