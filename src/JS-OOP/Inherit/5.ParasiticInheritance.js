/**
 * 寄生式继承
 * 借助原型式继承对已有对象进行增强
 * 出处：javascript高级程序设计
 */
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(original) {
  var clone = Object.create(original)
  // 增强original
  clone.foo = function() {}
  return clone
}
