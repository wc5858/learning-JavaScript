/**
 * 使用原型链
 * 与原型模式创建对象一样，其问题同样是引用类型会被共享
 * 出处：javascript高级程序设计
 */
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType() {
  this.subproperty = false
}

//inherit from SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue()) //true

console.log(instance instanceof Object) //true
console.log(instance instanceof SuperType) //true
console.log(instance instanceof SubType) //true

console.log(Object.prototype.isPrototypeOf(instance)) //true
console.log(SuperType.prototype.isPrototypeOf(instance)) //true
console.log(SubType.prototype.isPrototypeOf(instance)) //true