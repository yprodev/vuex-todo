<template>
  <div class="container todo-input">
    <b-form-input
      type="text"
      class="form-control"
      placeholder="Type the name of the next task..."
      v-model="itemValue"
      @keyup.enter.native="onAdd">
    </b-form-input>
    <b-button
      class="btn btn-primary"
      variant="primary"
      @click="onAdd"
      :disabled="isDisabled()">
      Add Item
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      itemValue: ''
    };
  },
  methods: {
    onAdd() {
      if (this.isDisabled()) return;
      this.$emit('onTodoAdd', this.itemValue);
      console.log('Adding item...');
      this.clearInput();
    },
    isDisabled() {
      return this.itemValue === '';
    },
    clearInput() {
      this.itemValue = '';
    }
  }
}
</script>

<style>
  .todo-input {
    margin-bottom: 40px;
  }
</style>

