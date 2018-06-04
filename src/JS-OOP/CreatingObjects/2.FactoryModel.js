/**
 * 工厂模式
 * 出处：javascript高级程序设计
 */
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer')
var person2 = createPerson('Greg', 27, 'Doctor')

person1.sayName() //"Nicholas"
person2.sayName() //"Greg"
