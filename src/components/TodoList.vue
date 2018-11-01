<template>
  <b-list-group v-if="isTodoItems">
    <common-item
      v-for="task in tasks"
      :key="task.id"
      :task="task">
    </common-item>
  </b-list-group>
  <div v-else>
    <h3>Plase, add new todo!</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonItem from '../common/CommonItem.vue';

export default {
  name: 'TodoList',
  components: {
    CommonItem
  },
  computed: {
    ...mapGetters({
      tasks: 'getAllTodos',
      isTodoItems: 'isEmptyTodos'
    })
  }
}
</script>
