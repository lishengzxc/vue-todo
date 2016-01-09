<template>
  <ul>
    <li v-for="todo in todoList">
      <input type="checkbox" v-model="todo.done">{{todo.name}}
    </li>
  </ul>
</template>

<script>
import todoStore from '../stores/'

export default {
  data () {
    return {
      todoList: todoStore.state.todoList
    }
  }
}
</script>
