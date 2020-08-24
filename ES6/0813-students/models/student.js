const { studentsModel } = require('./schema/student')

async function insertOne(data) {
  const studentModel = new studentsModel(data)

  await studentModel.save()
}

async function find(query) {

  return await studentsModel.find(query).lean()//如果不加lean()，那么返回的是一个document而不是一个object，不能直接进行重置操作
}

module.exports = {
  insertOne,
  find
}