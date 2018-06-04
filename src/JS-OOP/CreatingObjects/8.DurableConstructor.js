/**
 * 稳妥构造函数
 * 稳妥对象：
 * 1.新创建对象的实例方法不引用this
 * 2.不使用new操作符调用构造函数
 * 出处：javascript高级程序设计
 */
function Person(name, age, job) {
  var o = new Object()
  o.sayName = function() {
    console.log(name)
  }
  return o
}

var friend = Person('Nicholas', 29, 'Software Engineer')
friend.sayName() //"Nicholas"
/**
 * 高程三认为这种方式与寄生构造比较接近
 * 但私以为这种方式若描述为带闭包属性的工厂方法更贴近其实质
 * 出处：wc5858
 */