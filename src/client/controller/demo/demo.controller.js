/**
 * Created by admin on 2017/7/3.
 */
var Vue = require("vue/dist/vue");
 var demoController= function($scope){
    $scope.name = 'lintianbao';

    var myVue = new Vue({
        el:"#app",
        data:{
            message:"hello world!"
        }
    });

     Vue.component('simple-counter', {
         template: '<div><input type="text" v-model="sub"/></p><br/><button v-on:click="touchConponent">触发</button></div>',
         // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
         // 但是我们返回给每个组件的实例的却引用了同一个data对象
         props:["sub"],
         data: function () {
             return {
                 counter: 0
             }
         },
         methods:{
             touchConponent:function(){
                 this.$emit("touch")
             }
         }
     });
     new Vue({
         el: '#example-2',
         data:{
             userName:"testConponent"
         },
         methods:{
             parentHandler:function(){
                 alert("chileClick")
             },
             yuansheng:function(e){
                 debugger
             }
         }
     })
};
demoController.$inject=['$scope'];
module.exports=demoController;