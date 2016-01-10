<template>
  <form v-on:submit.prevent="addTodo">
    <div>{{todo}}</div>
    <button v-on:click.prevent="toggleAllStatus">all toggle</button>
    <input type="text" v-model="todo">
    <input type="submit" value="submit">
  </form>
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
    addTodo (event) {
      todoStore.addTodo(this.todo)
      this.todo = ''
    },

    toggleAllStatus (event) {
      var status = todoStore.state.todos.some(item => !item.done)
      todoStore.state.todos.forEach(item => {
        item.done = status
      })
    }
  }
}
</script>
