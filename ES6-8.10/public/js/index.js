var top = document.getElementsByClassName('top')[0];
var title = document.getElementsByClassName('title')[0];
var input = document.getElementsByClassName('input')[0];
var button = document.getElementsByClassName('button')[0];
var task = document.getElementsByClassName('task')[0];
var taskli = document.getElementsByClassName('task-li');
var close = document.getElementsByClassName('close');

init();

del();

//回车键与add按钮绑定同一个addtask事件
button.onclick = addTask;

input.onkeydown = function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
}

function init() {
    for (var i = 0; i < taskli.length; i++) {
        var span = createClose();
        taskli[i].appendChild(span);
    }
    check();
}

function addTask() {
    var li = document.createElement('li');

    li.className = 'task-li';

    if (input.value === '') {
        return;
    }

    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/addTask',
        data: {
            name: input.value
        },
        success: (result) => {
            var text = document.createTextNode(input.value);

            li.appendChild(text);

            task.appendChild(li);

            input.value = '';

            var span = createClose(); //给新添加的li标签添加删除键

            li.appendChild(span);

            li.onclick = function() {
                this.classList.toggle('checked');
            }

            del(); //控制新添加事件的删除
        },
        error: () => {

        }
    })

}




function check() {
    for (var i = 0; i < taskli.length; i++) {
        taskli[i].onclick = function() {
            // this.classList.toggle('checked');

            console.log(this.getAttribute('task'))
            console.log(this.classList.contains('checked'))

            $.ajax({
                type: 'post',
                url: 'http://localhost:3000/checkTask',
                data: {
                    name: this.getAttribute('task'),
                    checked: !this.classList.contains('checked')
                },
                success: (result) => {
                    this.classList.toggle('checked');
                },
                error: () => {

                }
            })

        }
    }
}

function createClose() {
    var span = document.createElement('span');
    var del = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(del);
    return span;
}

function del() {
    for (var i = 0; i < close.length; i++) {

        close[i].onclick = function() {
            let parentEle = this.parentElement;
            // var parentEle = this.parentElement;
            // parentEle.remove();
            $.ajax({
                type: 'post',
                url: 'http://localhost:3000/delTask',
                data: {
                    ele: this.parentElement.getAttribute('task')
                },
                success: (result) => {
                    this.parentElement.remove();
                },
                error: () => {

                }
            })
        }
    }
}