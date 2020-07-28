// var objDemo = document.getElementsByClassName('demo')[0];
var objDemo = $('.demo')[0];
// var objSmallbox = document.getElementsByClassName('small-box')[0];
var objSmallbox = $('.small-box')[0];
// var objMark = document.getElementsByClassName('mark')[0];
var objMark = $('.mark')[0];
// var objFloatbox = document.getElementsByClassName('float-box')[0];
var objFloatbox = $('.float-box')[0];
// var objBigbox = document.getElementsByClassName('big-box')[0];
var objBigbox = $('.big-box')[0];


objMark.onmouseover = function() {
    objFloatbox.style.display = 'block';
    objBigbox.style.display = 'block';
}

objMark.onmouseout = function() {
    objFloatbox.style.display = 'none';
    objBigbox.style.display = 'none';
}

//在鼠标移动的时候，左边的floatbox要可以移动，left的最小值为0，最大值为demo的实际宽度减去floatbox的实际宽度
objMark.onmousemove = function(e) {
    var event = e || window.event; //解决浏览器兼容性问题


    //client(X,Y):鼠标相对于浏览器的距离
    //offset(left,top,...):自身外边框到定位父级内边框的距离
    //offset(Width,Height):实际的宽度+边框宽度
    var left = event.clientX - objDemo.offsetLeft - objFloatbox.offsetWidth / 2;
    var top = event.clientY - objDemo.offsetTop - objFloatbox.offsetHeight / 2;


    //规定left和top的取值范围，不能超出Demo边框
    if (left < 0) {
        left = 0;
    } else if (left > (objMark.offsetWidth - objFloatbox.offsetWidth)) {
        left = objMark.offsetWidth - objFloatbox.offsetWidth;
    }

    if (top < 0) {
        top = 0;
    } else if (top > (objMark.offsetHeight - objFloatbox.offsetHeight)) {
        top = objMark.offsetHeight - objFloatbox.offsetHeight;
    }

    objFloatbox.style.left = left + 'px';
    objFloatbox.style.top = top + 'px';

    var bigboxImage = document.getElementsByClassName('catImage')[0];
    var bigboxImage = $('.catImage')[0];
    var leftPercent = left / (objMark.offsetWidth - objFloatbox.offsetWidth);
    var topPercent = top / (objMark.offsetHeight - objFloatbox.offsetHeight);

    //top是离上边框的距离，如果不加负号，那么图片是往下走的，什么都显示不了
    bigboxImage.style.left = -leftPercent * (bigboxImage.offsetWidth - objBigbox.offsetWidth) + 'px';
    bigboxImage.style.top = -topPercent * (bigboxImage.offsetHeight - objBigbox.offsetHeight) + 'px';



}