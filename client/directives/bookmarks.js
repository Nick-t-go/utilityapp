app.directive('bookmarks', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/bookmarks.html',
        scope: {map:'='},
        controller: 'bookmarksCtrl'
    };

});