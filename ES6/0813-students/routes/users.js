const controller = require('../controller/users')

module.exports = (router) => {
  router.get('/welcome', controller.student)

  router.post('/add', controller.add)

  router.post('/select', controller.select)

}