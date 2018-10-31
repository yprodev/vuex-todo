<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
    <todo-input @onTodoAdd="addTodo"></todo-input>
    <todo-list
      v-if="isTodoItems"
      :tasks="todoItems">
    </todo-list>
    <div v-else>
      <h3>Plase, add new todo!</h3>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todoItems: [
        { id: 1, name: 'Buy bread', completed: false },
        { id: 2, name: 'Go to meet with the friends', completed: true },
        { id: 3, name: 'Make some trainings', completed: true },
        { id: 4, name: 'Create new pet project', completed: false },
        { id: 5, name: 'Go to bed', completed: false }
      ]
    };
  },
  computed: {
    isTodoItems() {
      return this.todoItems.length !== 0;
    }
  },
  methods: {
    addTodo(name) {
      const todo = {
        id: new Date().getTime(),
        name,
        completed: false
      };
      this.todoItems.push(todo);
    },
  }
}
</script>

<style lang="scss">
body {
  padding-top: 40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
