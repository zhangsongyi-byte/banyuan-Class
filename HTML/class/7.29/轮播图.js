var index = 1;
var container = document.getElementsByClassName('container')[0];
var ul = document.getElementsByClassName('img-ul')[0];
var li = document.getElementsByClassName('ul-li');
var img = document.getElementsByClassName('img')[0];
var arrows = document.getElementsByClassName('arrow');
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];

var buttonContainer = document.getElementsByClassName('button')[0];
var buttons = document.getElementsByClassName('button_container_circle');

var div = document.getElementsByClassName('div')[0];
var offset = img.offsetWidth;

var timer;

stopAnimation();

startAnimation();

Mouseover();

clickButton();


container.style.width = offset + 'px';
container.style.height = img.offsetHeight + 'px';
container.style.overflow = 'hidden';

ul.style.height = img.offsetHeight + 'px';
ul.style.width = offset * li.length + 'px';
ul.style.left = -offset + 'px';

// 初始化arrow高度
for (var i = 0; i < arrows.length; i++) {
    arrows[i].style.top = parseInt(img.offsetHeight) / 2 - parseInt(arrows[i].offsetHeight) / 2 + 'px';
}


//初始化button位置
buttonContainer.style.top = img.offsetHeight - 40 + "px";
buttonContainer.style.left = offset / 2 - buttonContainer.offsetWidth / 2 + 'px';

left.onclick = function leftC() {
    index--;
    animate();
    left.onclick = null;
    clearTimeout(b);
    var b = setTimeout(function() {
        left.onclick = leftC;
    }, 300);
}

right.onclick = function rightC() {
    index++;
    animate();
    right.onclick = null;
    clearTimeout(a);
    var a = setTimeout(function() {
        right.onclick = rightC;
    }, 300);
}

function animate() {
    ul.style.transition = '0.1s';
    ul.style.left = -offset * index + 'px';

    if (index === 0) {
        index = li.length - 2;
        reLocation();
    } else if (index === li.length - 1) {
        index = 1;
        reLocation();
    }

    controlButton();
}

function reLocation() {
    setTimeout(() => {
            ul.style.transition = '0s';
            ul.style.left = -offset * index + 'px';
        }, 300)
        // window.requestAnimationFrame(reLocation);
}

function controlButton() {
    var key;

    if (index === 0) {
        key = 5;
    } else if (index === li.length - 1) {
        key = 1;
    } else {
        key = index;
    }

    for (var i = 0; i < buttons.length; i++) {
        if (key == buttons[i].getAttribute('index')) {
            buttons[i].className = 'button_container_circle on';
        } else {
            buttons[i].className = 'button_container_circle';
        }
    }
}

function clickButton() {
    for (var i = 0; i < buttons.length; i++) {
        (function(k) {
            buttons[k].onclick = function() {
                index = buttons[k].getAttribute('index');
                animate();
            }
        })(i)
    }
}

// 自动轮播
function startAnimation() {
    timer = setInterval(function() {
        right.onclick();
    }, 2000)

}

//停止播放
function stopAnimation() {
    if (timer)
        clearInterval(timer);
}

function Mouseover() {
    container.onmouseover = function() {
        stopAnimation();
    }

    container.onmouseout = function() {
        startAnimation();
    }
}