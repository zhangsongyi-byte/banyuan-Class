const { checkName: checkRegName, checkPassword: checkRegPassword } = require('../common/util')
const model = require('../models/user')

async function checkName(name) {
    let data = { flag: true }

    if (checkRegName(name)) {
        //判断用户名是否符合正则要求
        let result = await model.findOne({ name })

        if (result) {
            //如果符合正则要求，则判断在数据库中是否有重复的用户名
            data.flag = false
            data.message = '用户名重复'
        }
    } else {
        data.flag = false
        data.message = '用户名不符合要求'
    }
    return data
}

async function checkPassword(password) {
    return checkRegPassword(password)
}

async function regist(name, password) {
    await model.insertOne({ name, password })
}

async function login(name, password) {
    let result = await model.findOne({ name, password })

    let data = { status: 'success' }

    if (!result) {
        data.status = 'failed',
            data.message = '密码错误'
    }
    return data
}

module.exports = {
    checkName,
    checkPassword,
    regist,
    login
}