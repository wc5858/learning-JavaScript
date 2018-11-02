// 原型模式
// 基于已有对象通过克隆的方式创建对象
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// 参考JS面向对象之原型继承：src\JS-OOP\Inherit\4.PrototypalInheritance.js，会发现思路基本一致
// 原型模式避免了使用类
// Object.create()

// 不使用Object.create的实现
var vehiclePrototype = {

    init: function (carModel) {
        // init充当构造函数，但这不是原型模式的核心
        this.model = carModel;
    },

    getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
    }
};

function vehicle(model) {

    function F() { };
    F.prototype = vehiclePrototype; // 原型模式的核心工作是绑定新对象的原型到已有对象

    var f = new F();

    f.init(model);
    return f;

}

var car = vehicle("Ford Escort");
car.getModel();