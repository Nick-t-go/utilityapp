app.factory('LayerStore', function(esriLoader) {

            return {

            	layers: [
		 {
		 	name: 'FIRM Panels',
		  	url: 'http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/3',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"FIRMPanels",
		  		visible: true,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Flood Hazard Zones',
		  	url: 'http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"FloodHazardZones",
		  		visible: true,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'CBRS',
		  	url: 'http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/21',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"CBRS",
		  		visible: true,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 }
		 ]};
});