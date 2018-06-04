/**
 * 原型模式
 * 原型即调用构造函数时创建的对象实例的原型对象
 * 出处：javascript高级程序设计
 */
function Person() {}

Person.prototype.name = 'Nicholas'
Person.prototype.age = 29
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function() {
  console.log(this.name)
}

var person1 = new Person()
person1.sayName() //"Nicholas"

var person2 = new Person()
person2.sayName() //"Nicholas"

console.log(person1.sayName == person2.sayName) //true

console.log(Person.prototype.isPrototypeOf(person1)) //true
console.log(Person.prototype.isPrototypeOf(person2)) //true

//only works if Object.getPrototypeOf() is available
if (Object.getPrototypeOf) {
  console.log(Object.getPrototypeOf(person1) == Person.prototype) //true
  console.log(Object.getPrototypeOf(person1).name) //"Nicholas"
}

person1.name = 'Greg'
console.log(person1.name) //"Greg" - from instance

delete person1.name
console.log(person1.name) //"Nicholas" - from the prototype

/**
 * 在上面的例子中，Person实例person1和person2存在内部属性（在大多数浏览器中一般为__proto__,尽管这是非标准的）指向Person的原型
 * 当我们试图访问一个属性时，会现在对象自身所拥有的属性中查找，若没有找到，则上溯其原型对象
 * 进一步地，不难想象还可以构成原型链
 * Person的原型中还有一个constructor属性指向Person，用于指明对象类型
 * 总结：wc5858
 */

/**
 * 另一种更简洁的原型模式的语法
 * 注意这样做覆盖了前面定义的原型，也无法影响已经实例化的person1和person2的原型对象（“切断了连续”）
 * 出处：javascript高级程序设计
 */

Person.prototype = {
  constructor: Person, //
  /**
   * 如不需要进行类型检查，可以不设置constructor属性
   * 因为这样创建的constructor是可枚举的
   * 当然也可以通过defineProperty创建，但这样就有些背离我们追求简洁的初衷了
   */
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function() {
    console.log(this.name)
  },
}
/**
 * 其实可以用es6的语法
 * 总结：wc5858
 */
function Human() {}
Object.assign(Human.prototype, {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function() {
    console.log(this.name)
  },
})
var h1 = new Human()
h1.sayName() //"Nicholas"

var h2 = new Human()
h2.sayName() //"Nicholas"

/**
 * 原型模式的问题
 * 引用类型会的修改会跨实例提现
 * 出处：javascript高级程序设计
 */