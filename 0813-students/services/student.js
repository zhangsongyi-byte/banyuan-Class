const moment = require('moment')
const _=require('lodash')
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

async function getStudent(data) {
  return await find({
    createdAt: {
      $lt: moment().toDate(),
      $gt: moment().subtract(1, 'day').toDate()
    }
  })

  // let students=await find(data)
  // students=_.map((item)=>{
  //   if(item.gender=='1'){
  //     item.gender='男'
  //   }else{
  //     item.gender='女'
  //   }
  //   return item
  // })
  // return students
}

module.exports = {
  addStudent,
  getStudent
}