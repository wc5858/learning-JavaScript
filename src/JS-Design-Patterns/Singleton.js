// 单例模式
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// 对源码进行了简化
// 分析：核心思路其实很简单，实例已存在就直接返回，不存在时进行创建
// 对象创建也可以用别的方式，这里用的是字面量语法
var mySingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance
  function init() {
    // 私有方法和变量
    var privateRandomNumber = Math.random()
    return {
      // Public methods and variables
      getRandomNumber: function() {
        return privateRandomNumber
      },
    }
  }
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init()
      }
      return instance
    },
  }
})()