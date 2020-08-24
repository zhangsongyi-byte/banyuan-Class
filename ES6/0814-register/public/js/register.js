let registerName = document.getElementsByClassName('name')[0];
let registerPwd = document.getElementsByClassName('password')[0];
let registerBtn = document.getElementsByClassName('regist-btn')[0];

let loginName = document.getElementsByClassName('login-name')[0];
let loginPwd = document.getElementsByClassName('login-password')[0];
let loginBtn = document.getElementsByClassName('login-btn')[0];



let nameResult = false
let passwordResult = false


registerName.onblur = function() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/checkName',
        data: {
            name: registerName.value
        },
        success: (result) => {
            nameResult = result.flag
            console.log(nameResult)
            enableButton()
            if (!result.flag) {
                alert(result.message)
            }

        }
    })

}

registerPwd.onblur = function() {
    let password = registerPwd.value
    if (password) {
        let flag = checkPassword(password)
        passwordResult = flag
        enableButton()
    }

}

function checkPassword(password) {
    let pattern = /^\w{8,15}$/

    return pattern.test(password)
}

registerBtn.onclick = function() {
    $.ajax({
        type: 'post',
        url: "http://localhost:3000/checkAll",
        data: {
            name: registerName.value,
            password: registerPwd.value
        },
        success: (result) => {
            if (result.status === 'success') {
                alert('注册成功')
            }
        }
    })
}

function enableButton() {
    registerBtn.disabled = !(nameResult && passwordResult)
}


loginBtn.onclick = function() {
    if (loginName.value && loginPwd.value) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/login',
            data: {
                name: loginName.value,
                password: loginPwd.value
            },
            success: (result) => {
                console.log(result)
            }
        })
    }
}