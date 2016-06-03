app.directive('search', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/search.html',
        scope: {},
        controller: 'searchCtrl'
    };

});