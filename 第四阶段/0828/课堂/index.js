/*闭包 
 *拿到函数内部变量
 *无论通过哪种方式将内部的函数传递到所在的作用域之外，他都会持有对原始作用域的引用，无论在何处执行这个函数都会使用闭包
 *作用
 *能重复使用局部变量，又不污染全局
 *封装私有变量
*/
// let a=1;
// function main(){
//     let b=2;
//     function getB(){
//         return b;
//     }
//     return getB();
// }
// console.log(main());




// function fn1(){
//     var name='zhang';
//     function fn2(){
//         console.log(name);
//     }
//     fn2();
// }
// fn1();


// function Foo(){
//     let name='zhang';
//     let age=18;
//     this.getName=function(){
    /* 返回的是外部函数的局部变量 */
//         return name;
//     }
//     this.getAge=function(){
//         return age;
//     }
// }

// let foo=new Foo();

// console.log(foo);
// console.log(foo.getName());
// console.log(foo.getAge());


// let array=[];
// for(var i=0;i<10;i++){
//     array[i]=setFunction(i)
// }

// array[2]();

// function setFunction(){
//     let i=arguments[0];
//     return function(){
//         console.log(i);
//     }
// }

// function Dog(name){
//     this.name=name;
//     // this.bark=bark;
// }

// Dog.prototype.bark=function(){
//     console.log(this.name)
// }

// let dog1=new Dog('dog1')
// let dog2=new Dog('dog2')

// // console.log(dog1)
// // /* 实例化之后有一个__proto__属性指向原型对象 , 睡构造你的指向谁*/
// // console.log(dog1.__proto__);
// // /* 每个构造函数都有一个prototype原型对象 */
// // console.log(dog1.__proto__===Dog.prototype);
// // /* prototype原型对象里的constructor指向构造函数本身 */
// // console.log(Dog.prototype.constructor===Dog);

// console.log(dog1.toString())



// function Person(name){
//     this.name=name
// }

// Person.prototype.age=function(age){
//     this.age=age
//     console.log(this.age)
// }

// let person1=new Person('zhang')
// let person2=new Person('lu')


// console.log(Person)
// console.log(person1)
// console.log(Person.prototype)
// console.log(person1.__proto__)
// console.log(Person.prototype.constructor)
// console.log(person1.__proto__.constructor)

// person2.age(22)
// person1.age(23)

// function Parent(){
//     this.name='Mike'
// }

// function Child(){
//     this.age=22
// }

// console.log(Child.prototype)

// Child.prototype=new Parent()//Child继承Parent，通过原型，形成链条

// let child=new Child()

// console.log(child)
// console.log(child.age)
// console.log(child.name)

// function Brother(){
//     this.weight=60
// }

// Brother.prototype=new Child()

// const brother=new Brother()

// console.log(brother)


// function Animal(){
//     this.bark = function(){
//         console.log('叫');
//     }
//     this.obj = { a:1 };
// }
// function Dog(name){

//     this.name = name;
// }

// Dog.prototype = new Animal()

// const dog1 = new Dog('dog1')

// console.log(dog1)
// dog1.bark()
// const dog2 = new Dog('dog2')

// let obj = dog1.obj

// delete obj.a

// console.log(dog1.obj);

// console.log(dog2.obj);

// const a = {
//     test:1
// }
// console.log(a);
// delete a.test
// console.log(a);

function Parent(age){
    this.name=['isen','tom','lily']
    this.age=age
}

Parent.prototype.say=function(){
    console.log('hello')
}

function Child(age){
    /* 改变parent里面的age的指向*/
    Parent.call(this,age)
}

Child.prototype=new Parent()
const child1=new Child(22)
const child2=new Child(19)
child1.name.push('jack')

console.log(child1.name)
console.log(child2)

child1.say()








