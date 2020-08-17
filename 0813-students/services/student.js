const moment = require('moment')
const { insertOne, find } = require('../models/student')

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

async function getStudent(query) {
  return await find({
    createdAt: {
      $lt: moment().toDate(),
      $gt: moment().subtract(1, 'day').toDate()
    }
  })
}

module.exports = {
  addStudent,
  getStudent
}