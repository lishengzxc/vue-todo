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
    ],
    todos: [
      {
        name: '完成任务1',
        done: true,
        canEdit: false
      }, {
        name: '完成任务2',
        done: false,
        canEdit: false
      }
    ]
  },
  filters: {
    all: function (todos) {
      return todos
    },
    undone: function (todos) {
      return todos.filter(todo => !todo.done)
    },
    done: function (todos) {
      return todos.filter(todo => todo.done)
    }
  },
  // TODO: todos is not todoList
  addTodo: function (todo) {
    this.state.todos.push({
      name: todo,
      done: false
    })
  },
  removeTodo: function (index) {
    this.state.todos.splice(index, 1)
  }
}

export default store
