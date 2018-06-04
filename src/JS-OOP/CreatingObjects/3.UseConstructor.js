/**
 * 使用构造函数
 * 有点在于constructor能正确指示对象类型
 * 出处：javascript高级程序设计
 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    console.log(this.name)
  }
}

var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 27, 'Doctor')

person1.sayName() //"Nicholas"
person2.sayName() //"Greg"

console.log(person1 instanceof Object) //true
console.log(person1 instanceof Person) //true
console.log(person2 instanceof Object) //true
console.log(person2 instanceof Person) //true

console.log(person1.constructor == Person) //true
console.log(person2.constructor == Person) //true

console.log(person1.sayName == person2.sayName) //false

/**
 * 补充：需要明白的是new操作符到底做了什么事情
 * 1.一个继承自 Foo.prototype 的新对象被创建。
 * 2.使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。
 *   new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
 * 3.由构造函数返回的对象就是 new 表达式的结果。
 *   如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
 *  （一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）
 * 出处：MDN
 */

 /**
  * 额外需要注意的地方：
  * 1.由于构造函数本身也是对象，也可以被添加属性，但以这种方式添加的属性与构造过程无关
  * 总结：wc5858
  */
 Person.foo = 'bar'
 /**
  * 2.构造函数中提供的方法会在每个对象中创建一次，这很可能是不必要的
  *   解决方案之一是在外部定义函数，在构造函数中引用之；另一种方式则是使用原型模式
  * 出处：javascript高级程序设计
  */