/**
 * 原型式继承
 * 本质上是将已有对象（而不是类）作为新对象的原型
 * 这与原型方式创建对象相类似
 * es5原生提供了Object.create()方法支持这种操作
 * 出处：javascript高级程序设计
 */
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van'],
}

var anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')

var yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')

console.log(person.friends) //"Shelby,Court,Van,Rob,Barbie"
