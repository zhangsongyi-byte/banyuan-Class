const { studentsModel } = require('./schema/student')

async function insertOne(data) {
  const studentModel = new studentsModel(data)

  await studentModel.save()
}

async function find(query) {

  return await studentsModel.find(query)
}

module.exports = {
  insertOne,
  find
}