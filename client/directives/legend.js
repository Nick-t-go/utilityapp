app.directive('legend', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/legend.html',
        scope: false,
        resolve: function($scope){
        	$scope.digest();
        }
    };

});