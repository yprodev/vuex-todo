<template>
  <b-list-group>
    <common-item
      v-for="task in tasks"
      :key="task.id"
      :task="task">
    </common-item>
  </b-list-group>
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
      tasks: 'getAllTodos'
    })
  }
}
</script>
