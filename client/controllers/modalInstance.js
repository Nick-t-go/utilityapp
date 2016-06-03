app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, coordinates, $timeout) {
	$scope.coordinates = coordinates;


	$uibModalInstance.opened
	.then(function(){
		$scope.map;
        //Map initialization  
        $timeout(function(){
            var latlng = new google.maps.LatLng(coordinates[0], coordinates[1]);
            var myOptions = {
                position: latlng,
                pov: {
					heading: 34,
					pitch: 10
				}
            };
            $scope.map = new google.maps.StreetViewPanorama(document.getElementById("map_canvas"), myOptions); 
        },100);	
	});

	$scope.ok = function () {
    	$uibModalInstance.close();
  	};


});
