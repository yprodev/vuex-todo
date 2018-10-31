<template>
  <b-list-group>
    <common-item
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :task="task">
    </common-item>
  </b-list-group>
</template>

<script>
import CommonItem from '../common/CommonItem.vue';

export default {
  name: 'TodoList',
  components: {
    CommonItem
  },
  props: {
    tasks: {
      required: true,
      type: Array,
      default: () => ([])
    }
  }
}
</script>
