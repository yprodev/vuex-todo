<template>
  <b-list-group-item v-if="editMode">

    <b-form-group
      id="fieldset2"
      description="Updating the value of the todo you just clicked on."
      label="Update the value"
      label-for="input1"
      :state="editInputState"
      :invalid-feedback="validateEditInput">
      <b-form-input
        id="input1"
        v-model.trim="todoEditValue"
        :state="editInputState"
        @keyup.enter.native="onSave">
      </b-form-input>
    </b-form-group>
    <b-button
      class="btn btn-primary"
      variant="primary"
      @click="onSave"
      :disabled="isDisabled()">
      Save
    </b-button>
  </b-list-group-item>
  <b-list-group-item v-else :variant="completedTodo" class="d-flex justify-content-between align-items-center">
    {{ todo.name }}
    <div>
      <b-button
        type="button"
        :variant="toggleStatusBtnVariant"
        @click="onToggle(todo)">
        {{ toggleStatusBtnName }}
      </b-button>
      <b-button
        type="button"
        variant="warning"
        @click="onEdit(todo)">
        Edit
      </b-button>
      <b-button
        type="button"
        variant="danger"
        @click="onRemove(todo.id)">
        Remove
      </b-button>
    </div>
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
  data: () => ({
    todoEditValue: '',
    todoEditItem: {},
    editMode: false
  }),
  computed: {
    completedTodo() {
      return this.todo.completed ? 'success' : 'danger';
    },
    toggleStatusBtnName() {
      return this.todo.completed ? 'Undone' : 'Done';
    },
    toggleStatusBtnVariant() {
      return this.todo.completed ? 'outline-success' : 'success';
    },
    editInputState() {
      return this.todoEditValue.length >= 4 ? true : false;
    },
    validateEditInput() {
      if (this.todoEditValue.length > 4) {
        return ''
      } else if (this.todoEditValue.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    }
  },
  methods: {
    ...mapMutations([
      'UPDATE_TODO',
      'UPDATE_TODO_STATUS',
      'REMOVE_TODO',
    ]),
    onToggle(task) {
      this.UPDATE_TODO_STATUS(task);
    },
    isDisabled() {
      return this.editMode && this.todoEditValue === '';
    },
    onEdit(todo) {
      this.editMode = true;
      this.todoEditValue = todo.name;
      Object.assign(this.todoEditItem, todo);
    },
    onSave() {
      if (this.isDisabled()) return;
      this.todoEditItem.name = this.todoEditValue;
      this.UPDATE_TODO(this.todoEditItem);
      this.editMode = false;
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


