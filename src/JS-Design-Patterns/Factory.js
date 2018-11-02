// 工厂模式
// 通过工厂对象实例化对象或组件
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// Types.js - Constructors used behind the scenes
 
// A constructor for defining new cars
// 适用场景：对象设置涉及高复杂性；需要根据不同情况生成不同对象；产物对象共享一些相同属性或能满足相同api
// 工厂模式会带来复杂性，应避免滥用
function Car( options ) {
 
    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
   
  }
   
  // A constructor for defining new trucks
  function Truck( options){
   
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }
   
   
  // FactoryExample.js
   
  // Define a skeleton vehicle factory
  function VehicleFactory() {}
   
  // Define the prototypes and utilities for this factory
   
  // Our default vehicleClass is Car
  // 这个属性指定了工厂返回什么类的对象
  VehicleFactory.prototype.vehicleClass = Car;
   
  // Our Factory method for creating new Vehicle instances
  VehicleFactory.prototype.createVehicle = function ( options ) {
   
    switch(options.vehicleType){
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
      //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }
    
    return new this.vehicleClass( options );
   
  };
   
  // Create an instance of our factory that makes cars
  var carFactory = new VehicleFactory();
  var car = carFactory.createVehicle( {
              vehicleType: "car",
              color: "yellow",
              doors: 6 } );
   
  // Test to confirm our car was created using the vehicleClass/prototype Car
   
  // Outputs: true
  console.log( car instanceof Car );
   
  // Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
  console.log( car );




// 抽象工厂
// 允许定义产品类
// 应用场景：An Abstract Factory should be used where a system must be 
// independent from the way the objects it creates are generated or 
// it needs to work with multiple types of objects.
var abstractVehicleFactory = (function () {
 
    // Storage for our vehicle types
    var types = {};
   
    return {
        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];
   
            return (Vehicle ? new Vehicle(customizations) : null);
        },
   
        registerVehicle: function ( type, Vehicle ) {
            var proto = Vehicle.prototype;
   
            // only register classes that fulfill the vehicle contract
            if ( proto.drive && proto.breakDown ) {
                types[type] = Vehicle;
            }
   
            return abstractVehicleFactory;
        }
    };
  })();