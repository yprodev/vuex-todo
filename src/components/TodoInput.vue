<template>
  <div class="container todo-input">
    <b-form-group
      id="fieldset1"
      description="Let us keep your task in our storage."
      label="Enter your TODO name"
      label-for="input1">
      <b-form-input
        id="input1"
        v-model.trim="itemValue"
        @keyup.enter.native="onAdd">
      </b-form-input>
    </b-form-group>
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
  data() {
    return {
      itemValue: ''
    };
  },
  methods: {
    onAdd() {
      if (this.isDisabled()) return;
      this.$emit('onTodoAdd', this.itemValue);
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

<style scoped>
  .todo-input {
    margin-bottom: 40px;
  }
</style>

