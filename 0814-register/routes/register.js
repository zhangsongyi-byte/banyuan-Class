const controller = require('../controller/register')

module.exports = (router) => {
    router.get('/register', controller.regist)
    router.post('/checkname', controller.checkName)
    router.post('/checkAll', controller.checkAll)
    router.post('/login', controller.login)
}