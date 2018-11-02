// 命令模式
// 将方法调用、请求和操作封装到单独的对象中，以参数的方式灵活地控制执行过程
// 将调用操作的对象与实现操作的对象分离，交换具体类时更灵活（具体类：与抽象类相对）
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// 其实就是间接调用，使耦合更松散
// js没有接口这种东西，回头看看四人组的书是什么描述这种模式的
carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

carManager.execute( "buyVehicle", "Ford Escort", "34232" );