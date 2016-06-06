app.directive('print', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/print.html',
        scope: {},
        controller: "printCtrl"
        
    };

});