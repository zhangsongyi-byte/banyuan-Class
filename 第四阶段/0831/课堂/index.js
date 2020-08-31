// function main(){
//     console.log('main');
//     a();
// }

// function a(){
//     console.log('a');
//     b();
// }

// function b(){
    
//     console.log('b')
// }

// main();

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 0);

// console.log("Welcome to loupe.");
// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 2000);
// setTimeout(function timeout() {
//     console.log("setTimeout1");
// }, 1000);
// setTimeout(function timeout() {
//     console.log("setTimeout2");
// }, 3000);


// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");

// function getPromise(){

//     return new Promise((resolve,reject)=>{

//         fs.readFile('..',(error,content)=>{
            
//             if(error){ reject(error) }

//             else{
//                 resolve(content)
//             }
//         })
//     })
// }

// getPromise().then((data)=>{

//     console.log(data);
// }).catch((error)=>{

//     console.log(error);
// })

// async function main(){

//     try {
//         let content = await getPromise();
//     } catch (error) {
//         console.log(error)
//     }
    
// }

/* 异步在同步之后，宏任务在微任务之后，回调在主线任务之后 */

/* 宏任务，执行在微任务之后 */
// setTimeout(function () {
//     console.log(1);
// },0);

// /* 微任务 */
// new Promise(function(resolve,reject){
//     console.log(2)
//     resolve(3)
// /* .then是一个回调函数，是等主线上的所有线程都执行结束之后再执行的，这个程序中，是要等到执行完下面的四条console.log再执行的 */
// }).then(function(val){
//     console.log(val);
// })

// new Promise(function(resolve,reject){
//     console.log(22)
//     resolve(33)
// }).then(function(val){
//     console.log(val);
// })

// console.log(1111)
// console.log(2222)
// console.log(3333)
// console.log(4444)


/* 返回的是一个promise对象 */
// async function async1(){
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }

// async function async2(){
//     console.log('async2')
// }

// console.log('script start')

// setTimeout(function(){
//     console.log('setTimeout')
// },0)

// async1()

// new Promise(function(resolve,reject){
//     console.log('primise1')
//     resolve()
// }).then(function(){
//     console.log('promise2');
// })
// console.log('script end')


// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// })

// new Promise(function(resolve,reject){
//     return console.log(3)
// }).then(()=>{
//     console.log(4);
// })

// console.log(5)

