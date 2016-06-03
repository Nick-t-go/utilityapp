app.controller('MapCtrl', function($scope, LayerStore, esriLoader, $cookies) {

    $scope.map = {
        options: {
            basemap: 'topo',
            center: [-73.1350, 40.7891],
            zoom: 11,
            sliderStyle: 'small'
        }
    };

    $scope.test = function(test) {
        console.log((test || 'test'));
    };

    $scope.layers = LayerStore.layers;

    $scope.tools = {
        bookmarks: { name: 'Bookmarks', visible: false, open: false },
        basemapGallery: { name: 'Basemap Gallery', visible: false, open: false },
        streetView: { name: 'Street View', visible: false, open: false },
        search: { name: 'Search', visible: true, open: false }
    };

    $scope.layersOn = [];

    //move to future legend controller
    $scope.toggleLayer = function(layer) {
        if ($scope.esriMapObject.getLayer(layer.options.id).visible === true) {
            $scope.esriMapObject.getLayer(layer.options.id).hide();
            layer.options.visible = false;

        } else {
            $scope.esriMapObject.getLayer(layer.options.id).show();
            layer.options.visible = true;
        }
    };

    var token = $cookies.getObject('GDBToken');

    $scope.onMapLoad = function(map) {
        esriLoader.require(["esri/IdentityManager", "esri/request"], function(esriId, esriRequest) {
            $scope.$broadcast('map-loaded', map);
            esriId.initialize(token);

            function myCallbackFunction(ioArgs) {
                if (ioArgs.url.indexOf("FeatureServer") > 0) {
                    ioArgs.content.token = token.token || "";
                    return ioArgs;
                } else {
                    return ioArgs;
                }
            }

            esriId.on("credential-create", function(e) {
                credJSON = JSON.stringify(e.credential);
                console.log(credJSON);
                $cookies.put('GDBToken', credJSON);
            });

            esriRequest.setRequestPreCallback(myCallbackFunction);

            $scope.layers.forEach(function(layer) {
                $scope.layersOn.push({ url: layer.url, options: layer.options });
            });

            $scope.$broadcast('map-loaded', map);
        });
    };
});
