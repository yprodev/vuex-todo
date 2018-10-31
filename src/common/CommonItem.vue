<template>
  <b-list-group-item href="#" :variant="completedTodo">
    {{ task.name }}
    <button
      type="button"
      class="close"
      aria-label="Close"
      @click="onToggle(task)">
      <span aria-hidden="true">&times;</span>
    </button>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CommonItem',
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    completedTodo() {
      return this.task.completed ? 'success' : null;
    }
  },
  methods: {
    ...mapMutations({
      onToggle: 'UPDATE_STATUS'
    })
  }

}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>


