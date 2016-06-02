app.directive('navbar', function () {

    return {
        restrict: 'E',
        templateUrl: '../views/navbar.html',
        scope: false,
        resolve: function($scope){
        	$scope.digest();
        }
    };

});