/**
 * 借用构造函数
 * 出处：javascript高级程序设计
 */
function SuperType(){
  this.colors = ["red", "blue", "green"];
}

function SubType(){  
  //inherit from SuperType
  SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);    //"red,blue,green,black"

var instance2 = new SubType();
console.log(instance2.colors);    //"red,blue,green"

/**
 * 本质上是在子类型中调用父类型的构造函数，利用this关键字的特性，为子类型添加属性
 * 通过这种方法，还可以向超类型的构造函数传递参数
 * 与用构造函数创建对象时相似，这种方式也没法复用函数
 */