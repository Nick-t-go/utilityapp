app.directive('createEc', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/createEC.html',
        scope: {map:'='},
        controller: 'createECCtrl'
    };

});