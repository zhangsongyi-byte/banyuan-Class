const moment = require('moment')
const _=require('lodash')
const services = require('../services/student')
const {find}=require('../models/student')

// async function welcome(ctx, next) {

//     await ctx.render('index')
// }

async function student(ctx, next) {

  const data=ctx.request.query
  let students = await services.getStudent(data)
  // console.log('students ==>', students)
  
  _.map(students,(item)=>{
    console.log(item)
    if(item.gender=='1'){
      item.gender='男'
    }else{
      item.gender='女'
    }
  })

  console.log('students ==>', students)

  // console.log(result)

  ctx.state = { students }
  await ctx.render('index', ctx.state)

}

async function add(ctx, next) {
  const data = ctx.request.body

  let result = await services.addStudent(data)//===>{status:'success'}
  result.students=await services.getStudent({})//重新获取数据库里所有的student,给result增加一个新的属性，为student数组
  _.map(result.students,(item)=>{
    // console.log(item)
    if(item.gender=='1'){
      item.gender='男'
    }else{
      item.gender='女'
    }
  })
  ctx.response.body = result
}
async function select(ctx,next){
  const {gender}=ctx.request.body

  let genderData={}
  if(gender == 0){
    genderData= await find({gender:'0'})
  }else{
    // console.log(1)
    genderData= await find({gender:'1'})
  }
  ctx.response.body=genderData
}


module.exports = {
  add,
  student,
  select
}