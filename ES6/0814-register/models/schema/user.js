const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new Schema({
    name: String,
    password: String
})

const usersModel = mongoose.model('users', usersSchema)

module.exports = {
    usersModel
}