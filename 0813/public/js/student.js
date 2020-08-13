// 获取selector中option的方式
let selectorMajor = document.getElementsByClassName('major')[0]

const index1 = selectorMajor.selectedIndex

const major = selectorMajor.options[index1]

const value1 = major.value

let selectorGender = document.getElementsByClassName('gender')[0]

const index2 = selectorGender.selectedIndex

const gender = selectorGender.options[index2]

const value2 = gender.value

let name = document.getElementsByClassName('name')[0]

let age = document.getElementsByClassName('age')[0]


let btn = document.getElementsByClassName('button')[0]

btn.onclick = function() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/add',
        data: {
            name: name.value,
            age: age.value,
            major: value1,
            gender: value2
        },
        success: (result) => {
            alert('提交成功')
        }
    })
}

// console.log(value)