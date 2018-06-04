/**
 * 混合使用构造函数和原型
 * 出处：javascript高级程序设计
 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['Shelby', 'Court']
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name)
  },
}

var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 27, 'Doctor')

person1.friends.push('Van')

console.log(person1.friends) //"Shelby,Court,Van"
console.log(person2.friends) //"Shelby,Court"
console.log(person1.friends === person2.friends) //false
console.log(person1.sayName === person2.sayName) //true