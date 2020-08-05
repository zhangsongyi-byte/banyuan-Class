const path = require('path');
const fs = require('fs');
const { createUnzip } = require('zlib');


//promise
function readFile(address) {
    return new Promise((resolve, reject) => {
        fs.readFile(address, 'utf-8', (error, content) => {
            if (error) {
                reject(error);
            } else {
                resolve(content.toString());
            }
        })
    })
}


function writeFile(address, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(address, content, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(content.toString());
            }
        })
    })
}

let content = '';
writeFile(path.join(__dirname, './1.txt'), '这是第一个文件')
    .then((data) => {
        return writeFile(path.join(__dirname, './2.txt'), '这是第二个文件');
    })
    .then((data) => {
        return readFile(path.join(__dirname, './1.txt'));
    })
    .then((data) => {
        content += data;
        return readFile(path.join(__dirname, './2.txt'));
    })
    .then((data) => {
        content += '\n' + data;
        return writeFile(path.join(__dirname, './3.txt'), content);
    })
    .then((data) => {
        // console.log(data);
        console.log(content);
    })
    .catch((e) => {
        console.log(e);
    })


// async语法糖
// async function main() {
//     try {
//         let result = await Promise.all([readFile(path.join(__dirname, './1.txt')), readFile(path.join(__dirname, './2.txt'))]);

//         console.log(await writeFile(path.join(__dirname, './3.txt'), result[0] + '\n' + result[1]));
//     } catch (error) {
//         throw error;
//     }
// }

// async function test() {
//     try {
//         await main();
//     } catch (error) {
//         console.log(error);
//     }
// }

// test();