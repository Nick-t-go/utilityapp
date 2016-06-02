app.directive('streetView', function () {

    return {
        restrict: 'E',
        templateUrl: '../views/streetview.html',
        scope: false,
        controller: 'streetViewCtrl'
    };

});