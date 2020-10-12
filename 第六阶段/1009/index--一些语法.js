/* 箭头函数的this指向问题 */
// this.x = 1990;
module.exports.x=1990;
let obj1 = {
    x: 22,
    say2: () => { console.log(this.x) }
}

obj1.say2();//====>1990


// const obj = {
//     a:{
//         a:1,
//         b:{
//             a:1,
//             b:1
//         }
//     }
//     }
    
//   // 是否相同呢？
//   // const obj1 = { ...obj }
//   // console.log(obj);
//   // console.log(obj1);
//   // console.log(obj1 === obj);
//   // console.log(obj1.b === obj.b);
    
//   // const obj1 = { ...obj, b:{ test: 1} };
    
//   // console.log(obj1.b === obj.b);