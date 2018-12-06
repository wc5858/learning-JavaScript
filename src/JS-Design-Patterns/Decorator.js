// 装饰者模式
// 将行为动态添加到系统的现有类
// 注意装饰者模式和策略模式的区别
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// The constructor to decorate
function MacBook() {

    this.cost = function () { return 997; };
    this.screenSize = function () { return 11.6; };

}

// Decorator 1
function memory(macbook) {

    var v = macbook.cost();
    macbook.cost = function () {
        return v + 75;
    };

}

// Decorator 2
function engraving(macbook) {

    var v = macbook.cost();
    macbook.cost = function () {
        return v + 200;
    };

}

// Decorator 3
function insurance(macbook) {

    var v = macbook.cost();
    macbook.cost = function () {
        return v + 250;
    };

}

var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb);

// Outputs: 1522
console.log(mb.cost());

// Outputs: 11.6
console.log(mb.screenSize());



// 注意：这里调用装饰器的时候会先执行cost，如果希望cost最后统一执行
// 我觉得可以这样写
// 这种技巧也可以用于给callback函数注入代码
// 注释：wc5858
{
    function memory(macbook) {

        var v = macbook.cost;
        macbook.cost = function () {
            return v() + 75;
        };
    
    }
}
// Js中不支持接口，作者介绍了一个模拟实现
// 此外还有抽象装饰者：即对装饰器再做一层抽象，由此定制各种不同的装饰器