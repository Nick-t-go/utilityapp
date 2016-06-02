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



	    $scope.layersOn = [];

	    $scope.layers.forEach(function(layer) {
	        $scope.layersOn.push({ url: layer.url, options: layer.options });
	    });

	    $scope.toggleLayer = function(layer) {
	        if ($scope.esriMapObject.getLayer(layer.options.id).visible === true) {
	            $scope.esriMapObject.getLayer(layer.options.id).hide();
	            layer.options.visible = false;
	           
	        } else {
	            $scope.esriMapObject.getLayer(layer.options.id).show();
	            layer.options.visible = true;
	        }
	    };



	    $scope.onMapLoad = function(map) {
        	esriLoader.require(["esri/IdentityManager"], function(esriId) {
        		$scope.$broadcast('map-loaded', map);

    			var token = $cookies.getObject('GDBToken');
    			console.log(token);
    			esriId.initialize(token);
      

				esriId.on("credential-create", function(e) {
					credJSON = JSON.stringify(e.credential);
					console.log(credJSON);
					$cookies.put('GDBToken', credJSON);
				});
			});
        };




    });