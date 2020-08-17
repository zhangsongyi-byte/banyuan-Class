// 获取selector中option的方式
let selectorMajor = document.getElementsByClassName('major')[0]

let selectorGender = document.getElementsByClassName('gender')[0]

let name = document.getElementsByClassName('name')[0]

let age = document.getElementsByClassName('age')[0]

let btn = document.getElementsByClassName('button')[0]

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

btn.onclick = function() {
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
                alert('提交成功')
            } else {
                alert(result.message)
            }
        }

    })
}

// console.log(value)