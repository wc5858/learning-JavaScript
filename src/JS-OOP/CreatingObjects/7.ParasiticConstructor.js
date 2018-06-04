/**
 * 寄生构造函数
 * 出处：javascript高级程序设计
 */
function Person(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}

var friend = new Person('Nicholas', 29, 'Software Engineer')
friend.sayName() //"Nicholas"

/**
 * 要理解这种方式，请回顾new运算符做的事情：
 * 当构造函数有返回值时，这个值将取代先前创建的继承自 Foo.prototype 的新对象，成为new表达式的结果
 * 
 * 这种方式与工厂模式非常接近，不过却是借用了js语法中new运算符的特性
 * 不过，返回对象与构造函数的原型属性间并无联系，因为可能产生理解上的障碍，故不推荐使用
 */