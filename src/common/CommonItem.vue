<template>
  <b-list-group-item :variant="completedTodo">
    {{ todo.name }}
    <button
      type="button"
      class="close"
      aria-label="Close"
      @click="onToggle(todo)">
      <span aria-hidden="true">Done</span>
    </button>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    completedTodo() {
      return this.todo.completed ? 'success' : 'danger';
    }
  },
  methods: {
    ...mapMutations([
      'UPDATE_STATUS'
    ]),
    onToggle(task) {
      this.UPDATE_STATUS(task);
    }
  }
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>


