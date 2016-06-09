app.controller('createECCtrl', function($scope){
	$scope.test = function(test){
		console.log(test || "test");
	};

	$scope.createMethods = [{display:'Draw New', id: 'drawNew'}, {display:'Copy Existing', id: 'copyExisting'}];
});