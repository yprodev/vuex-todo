<template>
  <b-list-group-item :variant="completedTodo">
    {{ todo.name }}
    <b-button
      type="button"
      variant="success"
      @click="onToggle(todo)">
      Done
    </b-button>
    <b-button
      type="button"
      variant="warning"
      @click="onToggle(todo)">
      Edit
    </b-button>
    <b-button
      type="button"
      variant="danger"
      @click="onRemove(todo.id)">
      Remove
    </b-button>
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
      'UPDATE_TODO_STATUS',
      'REMOVE_TODO'
    ]),
    onToggle(task) {
      this.UPDATE_TODO_STATUS(task);
    },
    onRemove(id) {
      this.REMOVE_TODO(id);
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>


