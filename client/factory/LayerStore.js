app.factory('LayerStore', function(esriLoader) {

            return {

            	layers: [
		{
		 	name: 'Projects',
		  	url: 'https://fs-gdb10:6443/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/0',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Projects",
		  		visible: true,
		  		outFields: ['*'],
		  		infoTemplate: {
		  			title: '<b>Projects Info</b>',
		  			content: 'OBJECTID: ${OBJECTID}<br>OrderNum: ${OrderNum}<br>Acreage: ${Acreage}<br>Entered By: ${EnteredBy}<br>'+
		  			'Enter Date: ${EnterDate}<br> Last Edit By: ${LastEditBy}<br> Last Edit:${LastEdDate} by ${LastEditBy}'
		  		}
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 }
	]};
});