const mongoose = require('mongoose')

async function welcome(ctx, next) {

    await ctx.render('index')
}
const { Schema } = mongoose
const usersSchema = new Schema({
    name: String,
    gender: Number,
    age: Number,
    majors: String
})

const usersModel = mongoose.model('students', usersSchema)

let students = ['name', 'gender', 'age', 'major']

async function add(ctx, next) {
    const { name, gender, age, major } = ctx.request.body
    let data = {
        name,
        gender,
        age,
        major
    }

    const userModel = new usersModel(data)

    await userModel.save()

    ctx.response.body = { status: 'success' }
}
module.exports = {
    welcome,
    add
}