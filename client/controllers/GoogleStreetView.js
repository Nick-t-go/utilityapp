app.controller('streetViewCtrl', function($scope, esriLoader, $timeout, $uibModal) {

	$scope.$on('map-loaded', function(evt, esriMapObject){
		esriLoader.require(["esri/symbols/PictureMarkerSymbol","esri/geometry/Point","esri/layers/GraphicsLayer",
			 'esri/graphic'], function(PictureMarkerSymbol, Point, GraphicsLayer, Graphic) {

			var googleGLayer = new GraphicsLayer({id: "googleGraphic"});


			$scope.fetchStreetMap = googleGLayer.on('click', function(evt){
				//get lat long
				var lat = evt.mapPoint.getLatitude();
				var long = evt.mapPoint.getLongitude();
				//pass it to gMaps

				//open Modal with Gmaps inside
				var modalInstance = $uibModal.open({
			      animation: $scope.animationsEnabled,
			      templateUrl: '../views/modalTemplate.html',
			      backdrop: 'static',
			      controller: 'ModalInstanceCtrl',
			      resolve: {
			        coordinates: function () {
			          return [lat,long];
			        }
			      }
			    });

			});


			esriMapObject.addLayer(googleGLayer);

			$scope.initTool = function(){
				$scope.googleClickEvent = esriMapObject.on('click', function(evt){
					googleGLayer.clear();
					var markerSymbol = new PictureMarkerSymbol('https://lh3.googleusercontent.com/F1uGl5YHIYqc101T3ZjZkvnNgUpxaNGKH_96L4TzlxqkAREr5gBplEZIOHOb9N_8r5KYfdsN8KXARQ=s224-p-no',  50, 50);
					console.log(evt);
					var point = new Point(evt.mapPoint.x, evt.mapPoint.y, esriMapObject.spatialReference);
					var markerGraphic = new Graphic(point,markerSymbol);
					googleGLayer.add(markerGraphic);
					$scope.googleClickEvent.remove();
				});
			};
		});

	});

});
