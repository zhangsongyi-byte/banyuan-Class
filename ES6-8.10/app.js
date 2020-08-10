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

let tasks = [{
        name: 'Taskone',
        checked: true
    },
    {
        name: 'Tasktwo',
        checked: false
    },
    {
        name: 'Taskthree',
        checked: false
    },
    {
        name: 'Taskfour',
        checked: true
    },
    {
        name: 'Taskfive',
        checked: false
    },
    {
        name: 'Tasksix',
        checked: false
    },
]

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



router.get('/', async(ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        title: ['banyuan', 'good'],
        test: 'test',
        content: '我们是半圆学社',
        flag: true,
        gender: 0,
        news: news
    }

    // if (ctx.state.gender === 1) {
    //     console.log('woman');
    // } else {
    //     console.log('man');
    // }
    await ctx.render('index', ctx.state); //渲染的是index里的内容，返回的是一个html页面
    // ctx.response.body={};//返回的是一个对象
})

router.get('/todoList', async(ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        tasks
    }

    // if (ctx.state.gender === 1) {
    //     console.log('woman');
    // } else {
    //     console.log('man');
    // }
    await ctx.render('todoList', ctx.state); //渲染的是index里的内容，返回的是一个html页面
    // ctx.response.body={};//返回的是一个对象
})


router.post('/checkTask', (ctx, next) => {
    const { name, checked } = ctx.request.body;

    console.log(checked);
    tasks.forEach((item) => {
        if (item.name === name) {
            item.checked = !(item.checked); //原来写的是check,check本身传进来是一个字符串，而不是布尔值true
        }
    })
    console.log(tasks);
    ctx.response.body = { status: 'success' }
})

router.post('/addTask', (ctx, next) => {
    const { name } = ctx.request.body;

    tasks.push({
        name,
        checked: false
    })

    ctx.response.body = { status: 'success' }
})


router.post('/delTask', (ctx, next) => {
    const { ele } = ctx.request.body;
    var index = 0;

    for (let i = 0; i < tasks.length - 1; i++) {
        if (tasks[i].name === ele) {
            index = i;
        }
    }
    tasks.splice(index, 1);

    ctx.response.body = { index }
})



routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})