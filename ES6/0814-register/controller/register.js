const services = require('../services/register')
const { checkName: checkRegName } = require('../common/util')

const { usersModel } = require('../models/schema/user')

async function regist(ctx, next) {

    const users = await usersModel.find({}).lean()

    ctx.state = {
        users
    }

    await ctx.render('register', ctx.state)
}


async function checkName(ctx, next) {
    const { name } = ctx.request.body

    let data = await services.checkName(name)

    ctx.response.body = data
}


async function checkAll(ctx, next) {
    const { name, password } = ctx.request.body

    let data = { status: 'success' }

    let result = await services.checkName(name)

    if (result.flag) {
        //如果姓名正确
        if (services.checkPassword(password)) {
            //如果密码也正确，则录入注册信息
            await services.regist(name, password)
        } else {
            data.status = 'failed'
            data.message = '密码不符合要求'
        }
    } else {
        data.status = 'failed'
        data.message = result.message
    }
    ctx.response.body = data
}


async function login(ctx, next) {
    const { name, password } = ctx.request.body

    let data = {}

    //检测姓名是否符合要求
    let nameResult = checkRegName(name)

    if (nameResult) {
        //检测密码是否符合要求
        let passwordResult = await services.checkPassword(password)

        if (passwordResult) {
            //检测用户是否在平台注册过
            let loginResult = await services.login(name, password)
            if (loginResult.status === 'success') {
                data.status = 'success'
            } else {
                data = loginResult
            }
        } else {
            data.status = 'failed',
                data.message = '密码不符合要求'
        }
    } else {
        data.status = 'failed',
            data.message = '用户名不符合要求'
    }

    ctx.response.body = data

}

module.exports = {
    regist,
    checkName,
    checkAll,
    login
}