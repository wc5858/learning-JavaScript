{
  /**
   * es6类的语法本质上是语法糖
   * 出处：ECMAScript 6 入门（阮一峰）
   */

  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ')'
    }
  }

  typeof Point // "function"
  Point === Point.prototype.constructor // true

  // 使用类
  let point = new Point(0,0)
}

{
  /**
   * babel编译后的代码
   * 可以发现这里面用了安全工厂模式&混合构造函数与原型
   * 安全工厂的作用是禁止Point被当作普通function调用
   * 出处：https://babeljs.io/
   * 分析：wc5858
   */
  ;('use strict')

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  var Point = (function() {
    function Point(x, y) {
      _classCallCheck(this, Point)

      this.x = x
      this.y = y
    }

    Point.prototype.toString = function toString() {
      return '(' + this.x + ', ' + this.y + ')'
    }

    return Point
  })()
  
  // 理论上讲类内部所有定义的方法，都是不可枚举的；但是babel的编译结果会有一定的差异
  console.log(Object.keys(Point.prototype))
}

// 关于es6的class更多细节参考请移步阮老师的博客