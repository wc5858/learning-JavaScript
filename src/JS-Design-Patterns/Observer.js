// 单例模式
// 主体持有一系列依赖于它的对象（观察者），主体状态变化时通知观察者
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// 略去不重要的部分并用es6重写迭代
function ObserverList() {
  this.observerList = []
}
function Subject() {
  this.observers = new ObserverList()
}
Subject.prototype.notify = function(context) {
  for (let i of this.observers) {
    i.update(context)
  }
}
// The Observer
function Observer() {
  this.update = function() {
    // ...
  }
}
