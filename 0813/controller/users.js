const services = require('../services/student')

async function welcome(ctx, next) {
    // const students = await studentsModel.find({}).lean()

    // ctx.state = {
    //     students
    // }

    await ctx.render('index')
}
// const { Schema } = mongoose
// const studentsSchema = new Schema({
//     name: String,
//     age: Number,
//     gender: Number,
//     major: String
// })

// const studentsModel = mongoose.model('students', studentsSchema)

// let students = ['name', 'gender', 'age', 'major']

async function add(ctx, next) {
    const data = ctx.request.body

    let result = await services.addStudent(data)

    // const studentModel = new studentsModel(data)

    // await studentModel.save()

    ctx.response.body = result
}
module.exports = {
    welcome,
    add
}