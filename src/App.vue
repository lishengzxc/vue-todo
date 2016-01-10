<template>
  <div id="app">
    <todo-form></todo-form>
    <todo-list></todo-list>
    <p>
      double click to edit todo
    </p>
    <hr>
    <todo-filter></todo-filter>
  </div>
</template>

<script>
import TodoForm from './components/todo-form.vue'
import TodoList from './components/todo-list.vue'
import TodoFilter from './components/todo-filter.vue'

export default {
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList,
    'todo-filter': TodoFilter
  }
}
</script>
