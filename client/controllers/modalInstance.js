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



});


// .then(function(){
// 		var GoogleMapElement = angular.element( document.querySelector( '#GoogleMap' ) );
// 		console.log(GoogleMapElement);
// 		var location = {lat: coordinates[0], lng: coordinates[1]};
// 		var Gmap = new google.maps.Map(GoogleMapElement, {
// 			center: location,
// 			zoom: 14
// 		});
// 		var PanoElement = angular.element( document.querySelector( '#GooglePano' ) );
// 		console.log(PanoElement);
// 		var panorama = new google.maps.StreetViewPanorama(
// 			PanoElement, {
// 				position: location,
// 				pov: {
// 				heading: 34,
// 				pitch: 10
// 			}
// 		});