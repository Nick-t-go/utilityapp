app.controller('MapCtrl', function($scope, LayerStore, esriLoader, $cookies,  $timeout, LegendRender) {

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
        bookmarks: { name: 'Bookmarks', visible: true, open: false },
        basemapGallery: { name: 'Basemap Gallery', visible: true, open: false },
        streetView: { name: 'Street View', visible: true, open: false },
        search: { name: 'Search', visible: true, open: false },
        print: { name: 'Print', visible: true, open: false }
    };

    $scope.layersOn = [];

    //move to future legend controller
   

    $scope.legendVisible = false;

    

    $scope.onMapLoad = function(map) {
        esriLoader.require(["esri/IdentityManager", "esri/request", "esri/layers/FeatureLayer", "dojo/json",], function(esriId, esriRequest, FeatureLayer, JSON) {
            $scope.$broadcast('map-loaded', map);
            // loadCredentials();

            // function myCallbackFunction(ioArgs) {
            //     if (ioArgs.url.indexOf("FeatureServer") > 0) {
            //         ioArgs.content.token = token.token || "";
            //         return ioArgs;
            //     } else {
            //         return ioArgs;
            //     }
            // }
            // esriId.on("credential-create", function(e) {
            //     credJSON = JSON.stringify(e.credential);
            //     console.log(credJSON);
            //         $cookies.put('GDBToken', credJSON);
            //           $scope.layers.forEach(function(layer) {
            //         $scope.layersOn.push(layer);
            //     });
            // });
            $scope.$on('add-layers', function(evt, token){
                console.log(token);
                    $cookies.put('GDBToken', token);
                   
            });

             $scope.layers.forEach(function(layer) {
                        layer.url = layer.url;
                        $scope.layersOn.push(layer);
                });

            // esriRequest.setRequestPreCallback(myCallbackFunction);

            // function loadCredentials(){
            //     var token = $cookies.getObject('GDBToken') || "";
            //     if (token !== ""){
            //         esriId.initialize(token);
            //     }
            // }
            $scope.showLegend = function() {
                $scope.legendVisible = !$scope.legendVisible;
            };

          
            $scope.loading = false;
            map.on('update-start', (function(evt) {
                $scope.loading = true;
            }));

            map.on('update-end', (function(evt) {
                $scope.loading = false;
                $timeout(function() {
                    $scope.$digest();
                });
            }));

            $scope.toggleLayer = function(layer) {
                if (map.getLayer(layer.options.id).visible === true) {
                    map.getLayer(layer.options.id).hide();
                    layer.options.visible = false;

                } else {
                    map.getLayer(layer.options.id).show();
                    layer.options.visible = true;
                }
            };

            //LegendRender.Init($scope.layers, map);

        });
    };
});
