<template>
  <b-container id="app">
    <h1>Todo App</h1>
    <todo-input @onTodoAdd="addTodo" class=".todo-input-comp"></todo-input>
    <todo-list></todo-list>
  </b-container>
</template>

<script>
import Vue from 'vue';
import Vuex, { mapMutations, mapActions } from 'vuex';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    ...mapMutations([
      'ADD_TODO'
    ]),
    ...mapActions([
      'getTodos'
    ]),
    addTodo(name) {
      const todo = {
        id: new Date().getTime(),
        name,
        completed: false
      };
      this.ADD_TODO(todo);
    }
  },
  mounted() {
    this.getTodos();
  }
}
</script>

<style lang="scss" scoped>
body {
  padding-top: 40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.todo-input-comp {
  margin-bottom: 40px;
}
</style>
