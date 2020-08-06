const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

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

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
    .use(json())
    .use(logger())
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

router.get('/add', async(ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        title: 'Koa2'
    }

    let { a, b } = ctx.request.query;

    let obj = {
        "sum": Number(a) + Number(b)
    };

    ctx.response.body = obj;

    // await ctx.render('index', ctx.state)
})

router.post('/isPrime', (ctx, next) => {
    const { number } = ctx.request.body;

    function isPrime(number) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;

    }

    function main(number) {
        if (isPrime(number) === false) {
            while (isPrime(number) === false) {
                number++;
                isPrime(number);
            }
            return number;
        }
    }


    let obj = {
        "isPrime": isPrime(number),
        "number": main(number)
    }

    ctx.response.body = obj;
})


routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})