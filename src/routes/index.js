import { Router } from 'director'

function r (context) {
  var routes = {
    '/all': () => {
      context.filter = 'all'
    },
    '/done': () => {
      context.filter = 'done'
    },
    '/undone': () => {
      context.filter = 'undone'
    }
  }

  var router = Router(routes)
  router.init()
}

export default r
