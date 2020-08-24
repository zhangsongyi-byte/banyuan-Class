```js
const _ = require('lodash');

// console.log(_);

// var users = [
//     { 'user': 'barney', 'active': false },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pepples', 'active': true }

// ]


//返回对应数据的下标(findIndex)
// const result = _.findIndex(users, function(o) { return o.user == 'fred' })
// const result = _.findIndex(users, { 'user': 'fred' })
// console.log(result)
 [0824](../../第四阶段/0824) 

//在数组里面找2这个值，如果有就返回它的下标，没有则返回-1(indexOf)
// console.log(_.indexOf([1, 2, 1, 2], 2))


//连接(join)
// console.log(_.join(['a', 'b', 'c'], '@'))

//传统的连接方式
// console.log([1, 2, 3].join('!'))

//remove函数，最后返回的是被清除的那些数据
// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//     return n % 2 == 0;
// });

// console.log(array);//返回的是[1,3]

//倒序输出数组内容(reverse)
// var array = [1, 2, 3]
// console.log(_.reverse(array));

// var array = ['a', 'b', 'c', 'd'];

// console.log(_.nth(array, 3)) //后面那个值可以是负值，从前往后0，1，2，3，从后往前，-1，-2，-3，-4


//循环遍历数组(forEach)
// _.forEach([1, 2], function(value) {
//     console.log(value);
// });
// => Logs `1` then `2`.

// _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
//     // console.log(key);
//     console.log(`${key}===>${value}`)
// });
// => Logs 'a' then 'b'



//过滤器,把自己需要的数据，过滤出来(filter)
// var users = [
//     { 'user': 'barney', 'age': 36, 'active': true },
//     { 'user': 'fred', 'age': 40, 'active': false }
// ];

// // const result = _.filter(users, function(o) { return !o.active; });
// const result = _.filter(users, { 'age': 36, 'active': true });

// console.log(result)
//     // => objects for ['fred']


//根据数组属性的值来进行分组(groupBy)
// var users = [
//     { 'user': 'barney', 'age': 36, 'active': true },
//     { 'user': 'fred', 'age': 40, 'active': false },
//     { 'user': 'zhang', 'age': 22, 'active': true }

// ];
// console.log(_.groupBy(users, 'age'))



//替换原来数组里的值
// function square(n) {
//     return n * n;
// }
// console.log(_.map([4, 8], square));
// // => [16, 64]

// console.log(_.map({ 'a': 4, 'b': 8 }, square));
// // => [16, 64] 

// var users = [
//     { 'user': 'barney', score: 90 },
//     { 'user': 'fred', score: 85 }
// ];

// console.log(_.map(users, 'user'));
// // => ['barney', 'fred']


//排序(sortBy,orderBy)
// var users = [
//     { 'user': 'barney', 'age': 36, 'active': true },
//     { 'user': 'fred', 'age': 40, 'active': false },
//     { 'user': 'zhang', 'age': 22, 'active': true }

// ];

// // console.log(_.sortBy(users, ['age', 'user'])) //先按age来排序，再按user来排序，都是正序排序

// console.log(_.orderBy(users, ['age', 'user'], ['desc', 'asc'])) //通过最后一个参数可以控制是由小到大还是由大到小排序


//常用到的一些方法
// _.isArray([]);
// _.isBoolean(false);
// _.isEmpty({});
// _.isNaN();
// _.isNull();
// _.isNumber();


//只是比较属性值是否相等(isEqual)
// var object = { 'a': 1 };
// var other = { 'a': 1 };

// console.log(_.isEqual(object, other)); 
// console.log(object === other)


//生成一个随机数，范围可以自己定,加一个true属性，生成的是一个小数
// console.log(_.random(100, 1000, true)); 



//去除属性(omit)
// let object = { 'a': 1, 'b': 2, 'c': 3 }

// console.log(_.omit(object, ['c', 'b']));


//拿到最小年龄的人
// var users = [
//     { 'user': 'lily', 'age': 36 },
//     { 'user': 'lucy', 'age': 28 },
//     { 'user': 'cherry', 'age': 15 }
// ]

// //排序
// let result = _.sortBy(users, 'age');


// result = _.map(result, (item) => {
//     return item.user + ' is ' + item.age
// })

// //输出排序后的头部元素，因为sortBy是默认从小到大排序的
// console.log(_.head(result));


//简化(链式调用)
// var users = [
//     { 'user': 'lily', 'age': 36 },
//     { 'user': 'lucy', 'age': 28 },
//     { 'user': 'cherry', 'age': 15 }
// ]

// //排序
// var youngest =
//     _.chain(users)
//     .sortBy('age')
//     .map(function(o) {
//         return o.user + ' is ' + o.age;
//     })
//     .head()
//     .value() //如果不加这个，那么获取的是一个lodash对象，并不是我们想要获取的值

// console.log(youngest);




// let users = [{
//         name: 'tom',
//         score: 80,
//         class: 'A'
//     },
//     {
//         name: 'lucy',
//         score: 90,
//         class: 'A'
//     },
//     {
//         name: 'nacy',
//         score: 83,
//         class: 'B'
//     },
//     {
//         name: 'jack',
//         score: 84,
//         class: 'A'
//     }, {
//         name: 'lily',
//         score: 91,
//         class: 'A'
//     }
// ]

// var students =
//     _.chain(users)
//     .filter({ 'class': 'A' })
//     .orderBy(['score'], ['desc'])
//     .map(function(o) {
//         return _.omit(o, 'class') //omit操作对象是一个对象，students是一个数组，omit无法去除里面的属性
//     })
//     .value()

// console.log(students);

let users = [
    { name: 'lily', gender: 0 },
    { name: 'tom', gender: 1 },
    { name: 'lucy', gender: 0 }

]

const result =
    _.chain(users)
    .map((item) => {
        if (item.gender === 1) {
            item.gender = '男'
        } else {
            item.gender = '女'
        }
        return item
    })
    .value()

console.log(result)
```

