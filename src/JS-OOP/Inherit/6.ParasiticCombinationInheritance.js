/**
 * 寄生组合继承
 * 解决组合继承调用两次超类型构造函数的问题
 * 出处：javascript高级程序设计
 */

function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype) //create object
  prototype.constructor = subType //augment object
  subType.prototype = prototype //assign object
}

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)

  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function() {
  console.log(this.age)
}

var instance1 = new SubType('Nicholas', 29)
instance1.colors.push('black')
console.log(instance1.colors) //"red,blue,green,black"
instance1.sayName() //"Nicholas";
instance1.sayAge() //29

var instance2 = new SubType('Greg', 27)
console.log(instance2.colors) //"red,blue,green"
instance2.sayName() //"Greg";
instance2.sayAge() //27
/**
 * 与组合继承相比，唯一的区别是绑定字类原型的方式不同：
 * 寄生组合继承方式中，将父类的原型进行增强后作为子类的原型
 * 这样就无需通过构造函数来创建字类原型，避免了由此引入的不必要的属性
 * 总结：wc5858
 */