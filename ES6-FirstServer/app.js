const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require("koa2-cors");

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')
const { resolve } = require('path')

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

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - $ms`)
})

// router.get('/test', async(ctx, next) => {
//     // ctx.body = 'Hello World'
//     // ctx.state = {
//     //     title: 'Koa2'
//     // }


//     let { user, id } = ctx.request.query;
//     // console.log(user);
//     // console.log(id);

//     let obj = {
//         user,
//         id
//     };
//     ctx.response.body = obj;

//     // await ctx.render('index', ctx.state)
// })

router.post('/banyuan/ajax', async function(ctx, next) {
    const query = ctx.request.body;

    if (query.status === 'time') {
        await sleep(5000);
    }


    ctx.response.body = {
        status: 'success'
    };
})

//延时器
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})