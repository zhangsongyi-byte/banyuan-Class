const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const mongoose = require('mongoose')
const views = require('koa-views')
const co = require('co')
const cors = require('koa2-cors');
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
    .use(json())
    .use(logger())
    .use(cors({
        credentials: true,
    }))
    .use(require('koa-static')(__dirname + '/public'))
    .use(views(path.join(__dirname, '/views'), {
        options: { settings: { views: path.join(__dirname, 'views') } },
        map: { 'njk': 'nunjucks' },
        extension: 'njk'
    }))
    .use(router.routes())
    .use(router.allowedMethods())


async function initConnection() {
    await mongoose.connect('mongodb://localhost/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error) => {
        if (error) {
            console.log(error);
        }
        console.log('mongodb connection success');
    });
}

initConnection();

// logger
app.use(async(ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
        console.log(`${ctx.method} ${ctx.url} - $ms`)
    })
    //放入数据库中
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: String,
    password: String,
});

const usersModel = mongoose.model('users', usersSchema);

router.get('/login', async(ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
})



router.post('/register', async(ctx, next) => {
    const { name, password, check } = ctx.request.body;

    let patternName = /^([0-9a-zA-Z]|-|_){4,16}$/;
    let patternPwd = /^([0-9a-zA-Z]|_){8,15}$/;

    let nameFlag = patternName.test(name);
    let pwdFlag = patternPwd.test(password);

    let checkFlag = false;

    if (password === check) {
        checkFlag = true;
    }

    if (nameFlag && pwdFlag && checkFlag) {

        let data = {
            name,
            password
        }

        const userModel = new usersModel(data);

        await userModel.save();

        //根据存储的用户名判断password是否正确

        ctx.response.body = {
            status: 'success'
        }
    }


})

router.post('/checkLogin', async(ctx, next) => {
    const { name, password } = ctx.request.body;

    try {
        let data = { status: 'failed' };

        let result = await usersModel.findOne({ name });

        console.log(result);
        if (result) {
            if (result.password != password) {
                data.message = '密码不正确';
            } else {
                data.status = 'success';
            }
        } else {
            data.message = '用户名不存在';
        }
        ctx.response.body = data;
    } catch (error) {
        console.log(error);
    }
})

routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})