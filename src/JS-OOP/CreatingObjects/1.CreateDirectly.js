/**
 * 使用new关键字创建对象
 * 出处：javascript高级程序设计
 */
var person = new Object()
person.name = 'Nicholas'
person.age = 29
person.job = 'Software Engineer'
person.sayName = function() {
  console.log(this.name)
}

person.sayName()
/**
 * 方括号语法定义属性
 * 总结：wc5858
 */

person['foo bar'] = false

/**
 * 使用对象字面量语法创建对象
 * 总结：wc5858
 */
var data = {}
var obj = {
  bar: 'bar foo',
  foo: function() {},
  data, // es6简洁表示法
}

/**
 * 除了点语法和方括号语法外使用defineProperty或defineProperties定义对象属性，从而定制其特性
 * 通过此方式还可以定义访问器属性
 * 更多细节参考相关文档
 * 出处：javascript高级程序设计
 */
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas',
})

/**
 * 直接创建对象的问题：不利于代码复用
 */
