const { insertOne } = require('../models/student')

//增加学生
async function addStudent(data) {

    const { name } = data

    let result = { status: 'success' }

    if (name) {
        await insertOne(data)
    } else {
        result.status = 'failed'
        result.message = '没有用户名'
    }
    return result
}

module.exports = {
    addStudent
}