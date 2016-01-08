<template>
  <div id="app">
    <todo-form></todo-form>
  </div>
</template>

<script>
import TodoForm from './components/todo-form.vue'

export default {
  components: {
    'todo-form': TodoForm
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
