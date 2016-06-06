app.controller('signInCtrl', function($scope, esriLoader) {

	$scope.username = "";
	$scope.password = "";


	esriLoader.require(["esri/IdentityManager", "esri/ServerInfo", "esri/config",], function(esriId, serverInfo, config){
		var serverinfo = {
			server: "https://fs-gdb10/arcgis/tokens",
			adminTokenServiceUrl:'https://fs-gdb10/arcgis/tokens/generateToken',
			tokenServiceUrl:'https://fs-gdb10/arcgis/tokens/generateToken',
			currentVersion: 10.3,
			shortLivedTokenValidity: 60,    
            hasServer: true
        };
        esriConfig.defaults.io.corsEnabledServers.push("https://fs-gdb10/arcgis/tokens");
		$scope.signOnIn = function(username, password){
			console.log(username, password);
			esriId.generateToken(serverinfo,{username:username, password:password, f:'json'},{isAdmin: false} )
			.then(function(response){
				console.log(response);
				$scope.$emit('add-layers', response.token);
				$scope.hasToken = true;
			}, function(error){
				console.log(error);
			});
		};
	});

});