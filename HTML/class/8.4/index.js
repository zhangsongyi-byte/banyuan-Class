// const { sayHello: hello } = require('./sayHello');

// // index.sayHello('isen')
// // console.log(index);

// // sayHello('isen');

// function sayHello() {

//     hello({});
// }

// sayHello();



// var array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = function() {
//         console.log(i);
//     }
// }


// console.log(a);
// var a = 1;


// console.log(b);
// let b = 1;

// let [a, b, c] = [2, 6, 0];
// console.log(c);

// let [bar, [
//     [baz], beta
// ]] = [1, [
//     [2], 3
// ]];
// console.log(baz);

// let [x, y = 'b'] = ['a', undefined];
// console.log(y);

// let [x = 1] = [null];
// console.log(x);

//改名
// let obj = { foo: 'aaa', baz: 'vvv' };
// let { foo: bar } = obj;
// console.log(bar);


//每隔1秒输出1
// setInterval(() => {
//     console.log(1);
// }, 1000)



// }

// sayHello();

// {
//     var a = 1;
//     let b = 1;
// }

// console.log(b);


// var array = [];

// for(let i = 0;i<10;i++){

//     array[i] = function(){

//         console.log(i)
//     }
// }

// var i = 0;

// array[i] = function(){

//     console.log(i)
// }

// i++;

// array[i] = function(){

//     console.log(i)
// }


// {
//     let i = 0;
//     array[i] = function(){

//         console.log(i)
//     }
// }


// {
//     let i = 1;
//     array[i] = function(){

//         console.log(i)
//     }
// }


// {
//     let i = 2;
//     array[i] = function(){

//         console.log(i)
//     }
// }

// array[2]()
// var a;
// console.log(a);
// a = 1;

// console.log(b);
// let b = 1;

// let tmp = 123;

// if (true) {

//   tmp = 'abc'; // ReferenceError

//   console.log(tmp)
//   let tmp;
// }

// let a = 1;

// let a = 10;

// console.log(a);

// const Pi = 3.14;

// Pi = 2;

// const obj = {};

// obj.a = 3;

// console.log(obj);


// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];

// console.log(a);

// let [foo, [[bar], baz]] = [1, [[2], 3]];

// console.log(bar);

// let [,, third] = ["foo", "bar", "baz"];

// console.log(third);


// let [x, y] = [1, 2, 3];

// console.log('x ==>',x,'y===>',y);

// let [a, [,b], d] = [1, [2, 3], 4];

// console.log(b);

// let [foo = 2] = [10];

// console.log('foo===>',foo)

// let [x, y = 'b'] = ['a', undefined]; 
// x='a', y='b'
// console.log(y);

// let [x = 1] = [null];

// console.log(x);

// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };


// let obj = {};

// console.log(obj.a);
// console.log(foo2);
// console.log(foo);

// let obj = {bar: 'baz'}
// let {bar} = obj;

// console.log(obj.foo)

// console.log(bar);

// let obj = { foo: 'aaa', bar: 'bbb' };
// let { foo: baz } = obj;

// let baz = obj.foo;

// console.log(baz);

// let obj = {x:5};

// console.log(obj.x);

// let {x = 3} = obj;
// console.log(x)

// let obj = {x: 1};
// let {x, y = 5} = obj;

// console.log(x);
// console.log(y);

// let func  = function(x){

//     return x*x;
// }

// let func = (x) => {
//     return x*x;
// }

// let func = (x,y) => x*y;

// console.log(func(2,3));

// setInterval(()=>{

//     console.log(1);
// },1000)

// global.birth = 1992;

// var obj = {
//     birth: 1992,
//     getAge: function () {
//         var b = this.birth; // 1992
//         var fn = function () { // 如果改成箭头函数呢？

//             console.log(new Date().getFullYear());
//             console.log( this.birth);
//             return new Date().getFullYear() - this.birth; 
//         };
//         return fn();
//     }
// };

// global.birth = 1992;

// var obj = {
//     birth: 1992,
//     getAge: function() {
//         var b = this.birth; // 1992
//         var fn = () => {

//             let fn1 = () => {
//                 return new Date().getFullYear() - this.birth;
//             }

//             return fn1();

//         };
//         return fn();
//     }
// };

// console.log(obj.getAge());


// //拼接字符串
// let name = 'joey';
// let str = `I am ${name}`;
// console.log(str);


// //去重
// //Set:类似于数组，成员中不能出现重复的元素
// let s = new Set();

// let array = [2, 3, 5, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2];

// array.forEach(function(item) {

//     s.add(item)
// })

// console.log(s);

// console.log(s.has(2));

// console.log(s.size);

// s.delete(2)
// console.log(s);

// // array.forEach((item)=>{
// //     console.log(item);
// // })


// //Map
// let map = new Map();

// // let obj = {
// //     {}:'a'
// // }

// let obj = {
//     a: 1
// }

// let a = 1;

// console.log(obj);
// map.set(obj, '1234');
// map.set(a, '1111')

// console.log(map);

// console.log(map.get(obj));

// console.log(map.size);

// console.log(map.values());

// map.delete(obj);

// console.log(map);


//map用于计数
// let map = new Map();
// let array = [2, 3, 5, 4, 5, 2, 2, 2, 2, 2, 2, 2, 3, 9, 8, 7, 5];

// array.forEach((item) => {
//     // console.log(map.get(item));
//     //如果map里面没有
//     if (!map.get(item)) {
//         //新加入一个key-value值(将这个值加入map中，并计这个数出现1次)
//         map.set(item, 1);
//     } else {
//         //如果数字已经存在，获取之前拿到的计算次数，然后加1
//         map.set(item, Number(map.get(item)) + 1);
//     }
// })

// console.log(map);


let numbers = [1, 2, 3, 5];

numbers.map((item) => {
    console.log(item);
    item.b = 2;

    return item;
})