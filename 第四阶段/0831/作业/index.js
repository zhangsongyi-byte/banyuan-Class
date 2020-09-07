// async function async() {
//     console.log('1');
//     await new Promise(function (resolve) {
//     setTimeout(function () {
//          resolve(888);
//          console.log('2');
//             },1000)
//     });
//     console.log('3');
//   }
//   async()


// async function async1() {
//     console.log(1);
//     await async2();
//     console.log(3);
// }
// async function async2() {
//     console.log(2);
// }
// async1();
// new Promise(function (resolved) {
//     console.log(4);
// })

// async function async1() {
//     console.log(1);
//     new Promise((resolved)=>{
//         async2()
//         resolved();
//     }).then(()=>{
//         console.log(3);
//     })
// }
// async function async2() {
//     console.log(2);
// }

// async1();


// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
            /* .then的时候才会执行resolve   */
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });
// promise.then((res) => {
//     console.log(res);
// });
// console.log(4);


Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
});
const timer1 = setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)
console.log('start');