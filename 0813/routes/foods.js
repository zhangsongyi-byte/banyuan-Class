module.exports = (router) => {
    router.get('/foods', async function(ctx, next) {
        await ctx.render('index')
    })

    router.post('/foods', async function(ctx, next) {
        ctx.body = 'this a users response!'
    })
}