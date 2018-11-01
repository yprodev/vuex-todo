<template>
  <b-list-group v-if="todos.length">
    <common-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo">
    </common-item>
  </b-list-group>
  <div v-else>
    <h3>Please, add new todo!</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonItem from '../common/CommonItem.vue';

export default {
  components: {
    CommonItem
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  }
}
</script>
