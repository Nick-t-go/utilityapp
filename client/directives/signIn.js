app.directive('signin', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/signIn.html',
        scope: {map:'='},
        controller: 'signInCtrl'
    };

});