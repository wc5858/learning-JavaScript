// 发布/订阅模式
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// js的事件模型本身就类似于Publish/Subscribe（只不过不提供DOM之外的自定义事件系统）
// 和观察者模式相比，耦合更松散

var pubsub = {}

;(function(myObject) {
  // Storage for topics that can be broadcast or listened to
  var topics = {}
  // A topic identifier
  var subUid = -1
  // Publish or broadcast events of interest
  // with a specific topic name and arguments
  // such as the data to pass along
  myObject.publish = function(topic, args) {
    if (!topics[topic]) {
      // 注意从这里可以看到，实际上是先存在“订阅（严格地讲，主题）”，发布才有意义
      // 因此用 事件/触发器 可能更容易理解一些
      return false
    }
    var subscribers = topics[topic],
      len = subscribers ? subscribers.length : 0
    // 触发订阅者回调
    while (len--) {
      subscribers[len].func(topic, args)
    }
    return this
  }
  // Subscribe to events of interest
  // with a specific topic name and a
  // callback function, to be executed
  // when the topic/event is observed
  myObject.subscribe = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = []
    }
    var token = (++subUid).toString()
    // 这里通过token的形式来标志订阅者，方便取消订阅
    // 当然也有其他方案
    topics[topic].push({
      token: token,
      func: func,
    })
    return token
  }

  // Unsubscribe from a specific
  // topic, based on a tokenized reference
  // to the subscription
  myObject.unsubscribe = function(token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1)
            return token
          }
        }
      }
    }
    return this
  }
})(pubsub)
