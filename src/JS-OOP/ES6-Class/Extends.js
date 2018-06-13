/**
 * 使用extends关键字
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错
 * ES5 的继承（寄生组合继承），实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
 * ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
 * babel编译后的polyfill则还是es5继承的实现
 * 更多语法细节参看阮老师的博客
 * 出处：ECMAScript 6 入门（阮一峰）
 */
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }

  toString() {
    return this.color + ' ' + super.toString() // 调用父类的toString()
  }
}
