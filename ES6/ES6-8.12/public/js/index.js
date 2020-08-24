let name = document.getElementsByClassName('name')[0];
let password = document.getElementsByClassName('password')[0];
let check = document.getElementsByClassName('check')[0];
let btn = document.getElementsByClassName('button')[0];
let pName = document.getElementsByClassName('pName')[0];
let pPwd = document.getElementsByClassName('pPwd')[0];
let pCheck = document.getElementsByClassName('pCheck')[0];

let loginName = document.getElementsByClassName('loginName')[0];
let loginPwd = document.getElementsByClassName('loginPwd')[0];
let loginButton = document.getElementsByClassName('loginButton')[0];

loginButton.onclick = function() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/checkLogin',
        data: {
            name: loginName.value,
            password: loginPwd.value
        },
        success: (result) => {
            if (result.status === 'success') {
                alert('登陆成功');
            } else {
                alert(result.message);
            }
        }
    })
}




let patternName = /^([0-9a-zA-Z]|-|_){4,16}$/;
let patternPwd = /^([0-9a-zA-Z]|_){8,15}$/;

let nameFlag = false;
let pwdFlag = false;
let checkFlag = false;



name.oninput = function() {
    if (patternName.test(name.value) === true) {
        pName.style.display = 'none';
        nameFlag = true;
    } else {
        pName.style.display = 'block';
    }
    enableButton();
}

password.oninput = function() {
    if (patternPwd.test(password.value) === true) {
        pPwd.style.display = 'none';
        pwdFlag = true;
    } else {
        pPwd.style.display = 'block';
    }

    enableButton();
}

check.oninput = function() {
    if (check.value === password.value) {
        pCheck.style.display = 'none';
        checkFlag = true;
    } else {
        pCheck.style.display = 'block';
    }
    enableButton();
}

btn.onclick = function() {
    if (name.value && password.value && check.value) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/register',
            data: {
                name: name.value,
                password: password.value,
                check: check.value
            },
            success: (result) => {
                alert('注册成功!');
            },
            error: () => {
                console.log(error);
            }
        })
    }
}

function enableButton() {
    btn.disabled = !(nameFlag === true && pwdFlag === true && checkFlag === true);
}