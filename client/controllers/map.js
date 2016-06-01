app.controller('MapCtrl', function($scope) {
        $scope.map = {
            options: {
                basemap: 'topo',
                center: [-122.45,37.75],
                zoom: 13,
            }
        };
    });