//所有引用的模块都写在文件的最前面
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// console.log(__dirname);

// console.log(__dirname, '1.txt');


//写入文件
// fs.readFile(path.join(__dirname, './1.txt'), function(error, data) {
//     if (error) {
//         console.log('=======>', error);
//     } else {
//         console.log(data.toString()); //原本拿到的数据是二进制的，需要通过toString函数获取真实的内容
//     }
// })

// console.log(path.join(__dirname, '../HTML/7.7/0707.md'));

//写入一个新的文件并读取它的内容
// fs.writeFile(path.join(__dirname, './2.txt'), '2234', function(error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('write success');
//         fs.readFile(path.join(__dirname, './2.txt'), function(error, data) {
//             if (error) {
//                 console.log('=======>', error);
//             } else {
//                 console.log(data.toString()); //原本拿到的数据是二进制的，需要通过toString函数获取真实的内容
//             }
//         })
//     }
// })


//回调地狱
// fs.writeFile(path.join(__dirname, './1.txt'), 'say', function(error) {
//     if (error) { console.log(error); } 
//     else {
//         fs.writeFile(path.join(__dirname, './2.txt'), 'hello', function(error) {
//             if (error) { console.log(error); } 
//             else {
//                 fs.readFile(path.join(__dirname, './1.txt'), function(error, data) {
//                     if (error) { console.log(error); } 
//                     else {
//                         fs.readFile(path.join(__dirname, './2.txt'), function(error, content) {
//                             if (error) { console.log(error); } 
//                             else {
//                                 fs.writeFile(path.join(__dirname, './3.txt'), `${data.toString()}${content.toString()}`, function(error) {
//                                     if (error) { console.log(error); } 
//                                     else {
//                                         fs.readFile(path.join(__dirname, './3.txt'), function(error, content1) {
//                                             if (error) { console.log(error); } else {
//                                                 console.log(content1.toString());
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// let promise = new Promise();

function getPromise() {

    return new Promise((resolve, reject) => {

        fs.readFile(path.join(__dirname, './11.txt'), function(error, content) {
            if (error) {
                reject('www');
            } else {
                resolve(content.toString());
            }
        })

    })
}
let promise = getPromise();

promise.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})