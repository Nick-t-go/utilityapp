app.controller('searchCtrl', function($scope, esriLoader, FindLocal, $timeout) {
    $scope.$on('map-loaded', function(evt, map) {
        esriLoader.require([
                "esri/tasks/locator", "esri/geometry/Extent", "esri/SpatialReference", "esri/tasks/query",
                "esri/layers/GraphicsLayer", 'esri/graphic', "esri/geometry/Point", 'esri/symbols/SimpleMarkerSymbol',
                'esri/Color'
            ],
            function(
                Locator, Extent, SpatialReference, Query,
                GraphicsLayer, Graphic, Point, SimpleMarkerSymbol,
                Color) {
                var locator = new Locator("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
                locator.countryCode = "USA";
                locator.outSpatialReference = map.spatialReference;
                var categories = ['Address', 'Postal'];
                var mapRef = map.spatialReference;
                var distance = 10000;

                $scope.searchChoices = [
                    { name: "Address", fieldDisplay: "Location", field: "local" }, { name: "Projects", fieldDisplay: "Order Number", field:"OrderNum" },
                    { name: "Subdivision Maps", fieldDisplay: "Subdivision Name", field: "subName" }, { name: "Gdb Drawings", fieldDisplay: "Drawing Number", field:"drawNumber" }
                ];

                $scope.inputChange = function(searchString, searchLayer, searchField) {
                    if (searchLayer === "Address") {
                        $scope.searchWait = true;
                        $scope.suggestions = "";
                        var text = searchString;
                        var maxSuggestions = 5;
                        $scope.count = -1;
                        var location = map.extent.getCenter().normalize();
                        var params = { text: text, categories: categories, maxSuggestions: maxSuggestions, location: location, distance: distance, region: 'New York' };
                        locator.suggestLocations(params)
                            .then(function(suggestions, error) {
                                $scope.suggestions = suggestions;
                                $timeout(function() {
                                    $scope.$digest();
                                });
                            });
                    } else{
                    	queryLayer(searchString, searchLayer, searchField);
                    }
                };

                function queryLayer(searchString, searchLayer, searchField){
                	var query = new Query();
                	query.where = searchField + " LIKE '" + searchString + "%'";
                	query.outFields = ['*'];
                	var mapLayer = map.getLayer(searchLayer);
                	console.log(query);
                	mapLayer.queryFeatures(query, function(featureSet, error){
                		
                		$scope.features = featureSet.features;
                		console.log($scope.features);
                		$timeout(function() {
                            $scope.$digest();
                        });
                	});
                }

                $scope.test = function(value) {
                    console.log(value);
                };

                var searchResultGraphic = new GraphicsLayer({
                    infoTemplate: {
                        title: '<b>${Match_addr}</b>',
                        content: 'Address: ${StAddr} <br>City: ${City}<br>County: ${Subregion}<br> Longitude: ${X} <br> Latitude: ${Y}'
                    },
                    id: "searchResult"
                });

                map.addLayer(searchResultGraphic);

                var markerSymbol = new SimpleMarkerSymbol();
                markerSymbol.setPath('M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z');
                markerSymbol.setColor(new Color('#00FFFF'));

                $scope.zoomToAddress = function(local) {
                    searchResultGraphic.clear();
                    var SingleLine = local.text;
                    //.slice(0, local.text.indexOf(', USA'));
                    var f = 'json';
                    var outSR = new SpatialReference(102100);
                    var outFields = '*';
                    var countryCode = "USA";
                    // var location = map.extent.getCenter().normalize();
                    // var distance = 50000;
                    var maxLocations = 6;
                    var params = { SingleLine: SingleLine, f: f, outSR: outSR, outFields: outFields, magicKey: local.magicKey, countryCode: countryCode, maxLocations: maxLocations };
                    FindLocal.find(params)
                        .then(function(response) {
                            var firstHit = response.data.candidates[0];
                            var pt = new Point(firstHit.location.x, firstHit.location.y, map.spatialReference);
                            var attr = { "StAddr": firstHit.attributes.StAddr, "Match_addr": firstHit.attributes.Match_addr, "City": firstHit.attributes.City, Subregion: firstHit.attributes.Subregion, X: firstHit.attributes.X, Y: firstHit.attributes.Y };
                            var pinGraphic = new Graphic(pt, markerSymbol, attr);
                            console.log(pinGraphic);
                            searchResultGraphic.add(pinGraphic);
                            $timeout(function() {
                                map.centerAndZoom(pt, 16);
                            });
                            searchResultGraphic.refresh();
                        });
                };

                $scope.searchContracts = function(contract) {
                    $scope.$emit('searchQuery', { search: contract });
                };

                $scope.$on('selectionResults', function(evt, data) {
                    $scope.count = data.featureCount;
                    $scope.searchWait = false;
                });
                $scope.$on('hideMenu', function(evt, data) {
                    $scope.count = -1;
                    $scope.$digest();
                });

                $scope.resetSearch = function() {
                    $scope.suggestions = "";
                    $scope.input = "";
                    searchResultGraphic.clear();
                };



            });

    });

});
