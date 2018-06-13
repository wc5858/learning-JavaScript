/**
 * 使用extends关键字
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错
 * 本质上是对组合继承做的语法糖，更多语法细节参看阮老师的博客
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
