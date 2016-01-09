<template>
  <div>
    <div>{{todo}}</div>
    <input type="text" v-model="todo">
    <button v-on:click="addTodo">submit</button>
  </div>
</template>

<script>
import todoStore from '../stores/'

export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      todoStore.addTodo(this.todo)
      this.todo = ''
    }
  }
}
</script>
