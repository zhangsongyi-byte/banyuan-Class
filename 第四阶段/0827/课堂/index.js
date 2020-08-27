const _=require('lodash')

let person={
    name:'isen',
    age:'18',
    sayName:function(){
        console.log('hello,I am '+this.name);
    },
    sayAge:function(){
        console.log('I am '+this.age+' years old')
    }
}

let person2={
    name:'lily',
    age:23
}

let person3={
    name:'tom',
    age:17
}

function fakeName(a,b){
    console.log(this.name+a+b);
}

// person.sayAge.call(person3)

// global.name='zhang'

// fakeName.call(person2,1,2)

// fakeName.apply(person,[2,4])

// fakeName.bind(person3)(3,4)

// fakeName.call(null,3,3)

// let array=[3,6,7,1,2,9,87]

// function FakeMath(){
//     this.sum=function(a,b,c){
//         return a+b+c
//     }
// }

// const fakeMath=new FakeMath()

// console.log(fakeMath.sum.apply(null,array))

// console.log(Math.max.apply(null,array))


var a=1;
var b=2;

var test=function(first,second){
    return first==a&&second===b;
}

function fakeCall(fn){
    
    // return fn(a,b)

    /* arguments是js自带的一个内置类数组对象 */
    console.log(arguments)
    
    // return fn.call(null,a,b)
    let array=[];

    /* 通过arguments将a和b的值存储 */
    for(let i=0;i<arguments.length;i++){
        array.push(arguments[i])
    }
    console.log(array)
    return fn.apply(null,array)
}

console.log(fakeCall(test,a,b))





/* let obj2=obj1是拷贝了obj1的内存地址，所以改变了obj2的值，也会改变obj1的值 */

/* 浅拷贝 */
// let obj1={
//     name:'isen',
//     age:28
// }

// /* obj1和obj2的值全部改变 */
// // let obj2=obj1

// /* 浅拷贝,只拷贝第一层，前面的{}是在obj2里面自动生成一个新的空对象 */
// let obj2=Object.assign({},obj1)

// obj2.age=22

// console.log(obj2)
// console.log(obj1)


// let obj1={
//     name:'isen',
//     age:22,
//     obj:{
//         a:1
//     }
// }

// /* 浅拷贝只拷贝第一层，而a是第二层里的对象，所以obj1和obj2里面a的值都会改变 */
// let obj2=Object.assign({},obj1);

// obj2.obj.a=4;

// console.log(obj1)
// console.log(obj2)


/* 深拷贝 */
let obj1={
    name:'isen',
    age:22,
    obj:{
        a:1
    },
    func:function(){
        console.log(1)
    }
}

/* 
 *将obj1先转化成字符串再解析回一个对象，就会生成一个全新的对象，是将obj1完全拷贝过来，这个时候再修改obj2里的对象，obj1里的对象的值就不会改变 
 *JSON的parse和stringify是不支持转换function的
*/
// let obj2=JSON.parse(JSON.stringify(obj1)) ;

// obj2.age=18

// obj2.obj.a=4

// console.log(obj1)
// console.log(obj2)

/* lodash自带的深拷贝函数 */
// let obj2=_.cloneDeep(obj1);

// obj2.name='jack'

// obj2.age=33

// obj2.obj.a=0

// console.log(obj1)
// console.log(obj2)

// obj2.func=function(){
//     console.log('hi');
// }

// obj1.func()
// obj2.func()


