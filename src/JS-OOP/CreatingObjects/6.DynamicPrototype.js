/**
 * 动态原型模式
 * 其实和混用原型和构造函数的方式没有本质上的区别
 * 但是代码联系更紧密，给人一种“封装”的感觉
 * 出处：javascript高级程序设计
 */
function Person(name, age, job) {
  //properties
  this.name = name
  this.age = age
  this.job = job

  //methods
  if (typeof this.sayName != 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name)
    }
  }
}

var friend = new Person('Nicholas', 29, 'Software Engineer')
friend.sayName()
