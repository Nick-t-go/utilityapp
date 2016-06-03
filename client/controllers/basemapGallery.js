app.controller('basemapGalleryCtrl', function($scope, esriLoader, $timeout) {

    $scope.$on('map-loaded', function(evt, esriMapObject) {

        esriLoader.require([
                "esri/basemaps", "esri/config", "esri/urlUtils"
            ],
            function(
                esriBasemaps, esriConfig, urlUtils) {

                esriBasemaps.NYS = {
                    baseMapLayers: [{ url: "http://www.orthos.dhses.ny.gov/ArcGIS/rest/services/2013/MapServer/" }],
                    title: "NYS"
                };

                esriConfig.defaults.io.proxyUrl = "https://portal.gayrondebruin.com/DotNet/proxy.ashx?";
                esriConfig.defaults.io.alwaysUseProxy = false;

                urlUtils.addProxyRule({
                    urlPrefix: "http://www.orthos.dhses.ny.gov/ArcGIS/rest/services",
                    proxyUrl: "https://portal.gayrondebruin.com/DotNet/proxy.ashx"
                });

                urlUtils.addProxyRule({
                    urlPrefix: "http://gis.ny.gov/gateway/orthoprogram/",
                    proxyUrl: "https://portal.gayrondebruin.com/DotNet/proxy.ashx"
                });

                esriConfig.defaults.io.corsEnabledServers.push("https://gisimages.suffolkcountyny.gov/arcgis/rest/services/");
                esriConfig.defaults.io.corsEnabledServers.push('http://gis.ny.gov/gateway/orthoprogram/');
            });

        $scope.activeBase = 'esri';
        $scope.currentSelection = 'topo';

        $scope.basemapChange = function(basemap, type) {
            $scope.map.basemap = basemap;
            $scope.currentSelection = basemap;
        };


        $scope.hoverImage = 'none';

        $scope.showpreview = function(image) {
            $scope.hoverImage = image;
        };

        $scope.basemapOptions = [{
            name: "NYS",
            displayName: "NYS Orthoimagery",
            show: false,
            imagery: "url('http://gis.ny.gov/gateway/orthoprogram/sample/images/color_half_foot_zoom.jpg')"
        }, {
            name: "gray",
            displayName: "Light-Gray",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/8b3b470883a744aeb60e5fff0a319ce7/info/thumbnail/light_gray_canvas.jpg')"
        }, {
            name: "dark-gray",
            displayName: "Dark-Gray",
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/25869b8718c0419db87dad07de5b02d8/info/thumbnail/DGCanvasBase.png')"
        }, {
            name: "topo",
            displayName: "Topo",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/931d892ac7a843d7ba29d085e0433465/info/thumbnail/usa_topo.jpg')"
        }, {
            name: "streets",
            displayName: "Streets",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/d8855ee4d3d74413babfb0f41203b168/info/thumbnail/world_street_map.jpg')"
        }, {
            name: "satellite",
            displayName: "Satellite",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/86de95d4e0244cba80f0fa2c9403a7b2/info/thumbnail/tempimagery.jpg')"
        }, {
            name: "hybrid",
            displayName: "Hybrid",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/413fd05bbd7342f5991d5ec96f4f8b18/info/thumbnail/imagery_labels.jpg')"
        }, {
            name: "oceans",
            displayName: "Oceans",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/48b8cec7ebf04b5fbdcaf70d09daff21/info/thumbnail/tempoceans.jpg')"
        }, {
            name: "national-geographic",
            displayName: "National Geographic",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/509e2d6b034246d692a461724ae2d62c/info/thumbnail/natgeo.jpg')"
        }, {
            name: "terrain",
            displayName: "Terrain",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/aab054ab883c4a4094c72e949566ad40/info/thumbnail/terrain_labels.jpg')"
        }, {
            name: "osm",
            displayName: "Open Street Map",
            show: false,
            imagery: "url('https://www.arcgis.com/sharing/rest/content/items/5d2bfa736f8448b3a1708e1f6be23eed/info/thumbnail/temposm.jpg')"
        }];
    });

});
