// const { result } = require('lodash')

// const { result } = require('lodash')

// 获取selector中option的方式
let selectorMajor = document.getElementsByClassName('major')[0]

let selectorGender = document.getElementsByClassName('gender')[0]

let name = document.getElementsByClassName('name')[0]

let age = document.getElementsByClassName('age')[0]

let btn = document.getElementsByClassName('button')[0]

let genderSelect = document.getElementsByClassName('select')[0]

function getGender() {
  const index = selectorGender.selectedIndex

  const gender = selectorGender.options[index]

  return gender.value
}



function getMajor() {
  const index = selectorMajor.selectedIndex

  const major = selectorMajor.options[index]

  return major.value
}

btn.onclick = function () {
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/add',
    data: {
      name: name.value,
      gender: getGender(),
      age: age.value,
      major: getMajor()
    },
    success: (result) => {
      if (result.status === 'success') {

        $('.student-list').html('')//提交成功之后，先将原有的信息清除

        let html = ''
        // console.log(result.students)

        result.students.forEach((item) => {
          // let gender = item.gender == 1 ? '男' : '女'
          html += `<div><span>姓名：${item.name} 年龄：${item.age}岁 性别：${item.gender} 学科：${item.major}</span></div>`
        })
        $('.student-list').html(html)

        alert('提交成功')
      } else {
        alert(result.message)
      }
    }

  })
}

genderSelect.onchange = function () {
  let index = genderSelect.selectedIndex

  let gender = genderSelect.options[index]

  let genderValue = gender.value
  // console.log(genderValue)
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/select',
    data: {
      gender: genderValue
    },
    success: (result) => {
      $('.student-list').html('')//提交成功之后，先将原有的信息清除

      let html = ''
      // console.log(result)

      result.forEach((item) => {
        // let gender = item.gender == 1 ? '男' : '女'
        if(item.gender=='1'){
          item.gender='男'
        }else{
          item.gender='女'
        }
        html += `<div><span>姓名：${item.name} 年龄：${item.age}岁 性别：${item.gender} 学科：${item.major}</span></div>`
      })
      $('.student-list').html(html)
      alert('显示成功')
    }
  })
}