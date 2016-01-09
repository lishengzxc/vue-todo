var store = {
  state: {
    todoList: [
      {
        name: '完成任务1',
        done: true
      }, {
        name: '完成任务2',
        done: false
      }
    ]
  },

  addTodo: function (todo) {
    this.state.todoList.push({
      name: todo,
      done: false
    })
    console.log(this)
  },

  completeTodo: function (index) {
    this.state.todoList[index].done = true
  },

  unCompleteTodo: function (index) {
    this.state.todoList[index].done = false
  }
}

export default store
