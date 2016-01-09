<template>
  <div id="app">
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoForm from './components/todo-form.vue'
import TodoList from './components/todo-list.vue'

export default {
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
