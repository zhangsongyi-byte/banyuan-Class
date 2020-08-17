// 正则检测姓名是否符合要求
function checkName(name) {

    let pattern = /^[a-zA-Z0-9_-]{4,16}$/


    return pattern.test(name)

}


function checkPassword(password) {

    let pattern = /^\w{8,15}$/

    return pattern.test(password)

}


module.exports = {
    checkName,
    checkPassword
}




// 正则检测密码是否符合要求