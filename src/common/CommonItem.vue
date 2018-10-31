<template>
  <b-list-group-item href="#" :variant="completedTodo">
    {{ task.name }}
    <button
      type="button"
      class="close"
      aria-label="Close"
      @click="onToggle">
      <span aria-hidden="true">&times;</span>
    </button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'CommonItem',
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {

    };
  },
  computed: {
    completedTodo() {
      return this.task.completed ? 'success' : null;
    }
  },
  methods: {
    onToggle() {
      this.task.completed = !this.task.completed;
    }
  }
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>


