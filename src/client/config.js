/**
 * Created by admin on 2017/7/3.
 */

var DemoController = require('./controller/demo/demo.controller');
var HomeController = require('./controller/home/home.controller');
var route = function($routeProvider,$locationProvider){
    $routeProvider
        .when('/',{
            template:require('./controller/demo/index.html'),
            controller:DemoController,
            controllerAs:'app.demo'
        })
        .when('/home',{
            template:require('./controller/home/index.html'),
            controller:HomeController,
            controllerAs:'app.home'
        })
        .otherwise('/');

};
//声明式注入
//route.$inject = ['$routeProvider','$locationProvider'];
module.exports = route;