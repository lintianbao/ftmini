/**
 * Created by admin on 2017/7/3.
 */
var $ = require('jquery');
module.exports = function(){

    var angular = require('angular');
    var router = require('angular-route');
    var config = require('./config');

    window.jQuery = $;

    var app = angular.module('app',[router]);

    //手动启动angularjs，不用写ng-app
    // angular.element(document).ready(function(){
    //     angular.bootstrap(document,['app']);
    // });
    app.config(config);
};