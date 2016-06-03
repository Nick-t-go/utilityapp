app.directive('basemapGallery', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/basemapGallery.html',
        scope: {map:'='},
        controller: 'basemapGalleryCtrl'
    };

});