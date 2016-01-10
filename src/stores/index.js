import route from '../routes/'

var store = {
  state: {
    todos: [{
      name: '完成任务1',
      done: true,
      canEdit: false
    }, {
      name: '完成任务2',
      done: false,
      canEdit: false
    }],
    filter: 'all'
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
  addTodo: function (todo) {
    this.state.todos.push({
      name: todo,
      done: false,
      canEdit: false
    })
  },
  removeTodo: function (index) {
    this.state.todos.splice(index, 1)
  }
}

route(store)

export default store
