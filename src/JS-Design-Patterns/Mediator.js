// 中介模式
// 来源：https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// 系统的各个组件通过中心联络点进行通信
// 一个例子是DOM事件委托和冒泡，文档充当了中介
// 优点是松耦合
// 缺点：引入单点故障；间接通信可能导致性能下降
// 中介汇集了多向通信

var orgChart = {
    // 这是英文版开源文档中作者给出的例子，可以发现中介起了调度工作流的作用
    // 这也是其和订阅/发布模式（或事件机制）的区别：where the application logic and workflow is coded
    // 事件机制中事件作为模式是核心，中介只是用了事件来方便实现：也可以用回调或者其他方法
    addNewEmployee: function () {

        // getEmployeeDetail provides a view that users interact with
        var employeeDetail = this.getEmployeeDetail();

        // when the employee detail is complete, the mediator (the 'orgchart' object)
        // decides what should happen next
        employeeDetail.on("complete", function (employee) {

            // set up additional objects that have additional events, which are used
            // by the mediator to do additional things
            var managerSelector = this.selectManager(employee);
            managerSelector.on("save", function (employee) {
                employee.save();
            });

        });
    },

    // ...
}
// 什么时候用订阅/发布模式（事件机制），什么时候用中介？
// In general, an event aggregator is used when you either have too many objects to listen to directly, or you have objects that are entirely unrelated.
// A mediator is best applied when two or more objects have an indirect working relationship, and business logic or workflow needs to dictate the interactions and coordination of these objects.
// 我觉得可以这样理解：大量对象、可统一抽象事件、简单流程，用事件机制；两个或多个对象有间接关系，需要处理这些对象间的复杂流程，用中介模式