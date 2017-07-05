/**
 * Created by admin on 2017/7/3.
 */
module.exports = function($scope){

    $scope.name = 'home';

    function SuperType(){
        this.property = true;
    }

    SuperType.prototype.getSuperValue = function(){
        return this.property;
    };

    function SubType(){
        this.subprototype = false;
    }

    SubType.prototype = new SuperType();

    SubType.prototype.getSubValue = function(){
        return this.subprototype;
    };

    var instance1 = new SubType();
    var instance2 = new SubType();
    console.log(instance1);
    console.log(instance1.getSuperValue());

    var result = [];
    for(var i =0;i<10;i++){
        result[i] = function(num){
            return function(){
                return num;
            }
        }(i);
    }
    console.log(result[6]());

};
