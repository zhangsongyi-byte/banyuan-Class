const controller = require('../controller/users')

module.exports = (router) => {
    router.get('/welcome', controller.welcome)

    router.post('/add', controller.add)
}