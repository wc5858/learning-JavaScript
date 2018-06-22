// 这里指比较原始的模块形式
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// 使用es6改写

let testModule = (function() {
  let counter = 0
  return {
    // 这里也可以放公有变量
    incrementCounter: () => counter++,
    resetCounter() {
      console.log('counter value prior to reset: ' + counter)
      counter = 0
    },
  }
})()

console.log(testModule)

// 这种模式本质上是利用了立即执行函数&闭包
// 有一些变化形式，此处略
// 对模块内部进行优化：揭示模块模式
// 缺点：私有函数引用公有函数时，公有函数无法被覆盖
// 其实混用就好了

var myRevealingModule = (function() {
  var privateVar = 'Ben Cherry',
    publicVar = 'Hey there!'

  function privateFunction() {
    console.log('Name:' + privateVar)
  }
  function publicSetName(strName) {
    privateVar = strName
  }
  function publicGetName() {
    privateFunction()
  }
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  }
})()

// 核心思想其实就是用返回对象的形式封装“模块”，从而形成命名空间
