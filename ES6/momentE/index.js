const moment = require('moment')

// console.log(moment)

// const date = moment();

// console.log(date);
// console.log(moment().format('YYYY-MM-DD HH:mm:ss A')) //表示当前的日期时间，format表示格式化

//拿到1天以前的时间
// const date = moment()
//     .subtract(1, 'day') //前面的参数是时间，后面的参数是单位(天，年或者月)
//     .format('YYYY-MM-DD HH:mm:ss A');

// console.log(date)

// const date = moment()
//     .subtract(7, 'month') //前面的参数是时间，后面的参数是单位(天，年，月，时，分，秒)
//     .format('YYYY-MM-DD HH:mm:ss A');

// console.log(date)

//往后加
// const date = moment()
//     .add(1, 'year') //前面的参数是时间，后面的参数是单位(天，年或者月)
//     .format('YYYY-MM-DD HH:mm:ss A');

// console.log(date);


//拿到现在的小时数
// let date = moment().hour()

// console.log(date)

//Date中的月份都是0-11


//获取当前月有多少天
// console.log(moment().daysInMonth()) //输出31

// const result = moment('2010-10-20').isBefore('2010-10-21') //表示2010-10-20号是否在2010-10-21号之前，返回结果为true，如果后面加上一个'year'，返回结果则为false，因为比较的内容不一样了

// const data = moment('2010-10-20').isAfter('2010-10-21') //表示2010-10-20号是否在2010-10-21号之后，返回结果为false


// console.log(result);

// console.log(data);


//两者相差了多久
// console.log(moment('1992-01-20').diff(moment(), 'day'))

// //转换成Date对象
// let date = moment().toDate();

// console.log(date)

function Banyuan(data) {
    this.data = data;

    this.push = function(v) {
        this.data.push(v)
        return this //返回的是当前的这个push的值，如果不加这一行，那么b1.push(1).push(2)会出错
    }
    this.value = function() {
        return this.data
    }
}

const b1 = new Banyuan([])

// console.log(b1)
// b1.push(3)

b1.push(3).push(4)
const data = b1.value()

console.log(data)