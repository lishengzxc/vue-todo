<template>
  <ul>
    <li v-for="(index, todo) in todos">
      <input type="checkbox" v-model="todo.done">
      <span v-on:dblclick="makeEditTodo(index)" v-show="!todo.canEdit">{{todo.name}}</span>
      <input v-show="todo.canEdit" v-todo-focus="todo.canEdit" v-on:blur="inputOnBlur" type="text" v-model="todo.name">
      <button v-on:click="removeTodo(index)" v-show="!todo.canEdit">x</button>
    </li>
  </ul>
</template>

<script>
import todoStore from '../stores/'

export default {
  data () {
    return {
      todos: todoStore.state.todos
    }
  },
  methods: {
    removeTodo (index) {
      todoStore.removeTodo(index)
    },
    makeEditTodo (index) {
      todoStore.state.todos.forEach((v, i) => {
        if (i === index) {
          v.canEdit = true
        } else {
          v.canEdit = false
        }
      })
    },
    inputOnBlur () {
      todoStore.state.todos.forEach(v => {
        v.canEdit = false
      })
    }
  },
  directives: {
    'todo-focus': function (value) {
      if (!value) return
      this.el.focus()
    }
  }
}
</script>
