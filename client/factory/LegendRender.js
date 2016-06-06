app.factory('LegendRender', function(esriLoader, $http) {

            return {
	            Init: function(layers, map) {
                layers.forEach(function(layer, idx) {
                    var singleLayer = map.getLayer(layer.options.id);
                    if (singleLayer.types && singleLayer.types.length > 0 && layer.style.type == 'polygon') {
                        for (var i = 0; i < singleLayer.types.length; i++) {
                            var layerColors = singleLayer.renderer._symbols[i].symbol;
                            var fillColor = layerColors.getStroke().toCss(true);
                            var outlineColor = layerColors.getFill().toCss(true);
                            layer.style.typeIdField = singleLayer.typeIdField;
                            layer.style.tblField.push({ name: singleLayer.renderer._symbols[i].label, fill: fillColor, outline: outlineColor });
                        }
                    }
                    // else if (layer.currentRender) {
                    //     customRenderer[layer.currentRender](singleLayer, layer, map);
                    //     singleLayer.redraw();
                    // } 
                    else if (singleLayer.types && singleLayer.types.length > 0 && layer.style.type == 'polyline') {
                        singleLayer.renderer.infos.forEach(function(subLayer) {
                            var name = subLayer.label;
                            var color = subLayer.symbol.color.toCss(true);
                            layer.style.typeIdField = singleLayer.typeIdField;
                            layer.style.tblField.push({ name: name, fill: color });
                        });
                    } else if (layer.style.type === 'point') {
                        if (singleLayer.renderer.defaultSymbol.type === "picturemarkersymbol") {
                            var defaultImage = singleLayer.renderer.defaultSymbol.url;
                            layer.style.typeIdField = singleLayer.renderer.attributeField;
                            layer.style.tblField.push({ name: singleLayer.renderer.defaultLabel, fill: "url('" + defaultImage + "') no-repeat center" });
                        }
                        for (var k = 0; k < singleLayer.renderer.values.length; k++) {
                            var fieldSymbol = singleLayer.renderer._symbols[singleLayer.renderer.values[k]];
                            if (fieldSymbol.symbol.type === "picturemarkersymbol") {
                                var fieldImage = fieldSymbol.symbol.url;
                                layer.style.tblField.push({ name: fieldSymbol.label, fill: "url('" + fieldImage + "') no-repeat center" });
                            }
                        }
                    } else if (layer.style.type === 'polyline' && singleLayer.renderer.getSymbol().style === 'solid') {
                        var layerStyle = singleLayer.renderer.getSymbol();
                        var fill = layerStyle.color.toCss();
                        layer.style.tblField.push({ name: 'default', fill: fill });
                    } else {
                    	console.log(singleLayer);
                        var layerColors = singleLayer.renderer.getSymbol();
                        var fillColor = layerColors.getFill().toCss(true);
                        var outlineColor = layerColors.getStroke().color.toCss(true);
                        layer.style.tblField.push({ name: 'default', fill: fillColor, outline: outlineColor });
                    }
                });
            }
	};
});