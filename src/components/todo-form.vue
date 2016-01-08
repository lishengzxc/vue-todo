<template>
  <div>
    <div>{{todo}}</div>
    <input type="text" v-model="todo">
    <button v-on:click="addTodo">submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      alert(this.todo)
      this.todo = ''
    }
  }
}
</script>
