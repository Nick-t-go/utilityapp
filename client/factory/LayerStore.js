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
		  			'Enter Date: ${EnterDate}<br> Last Edit:${LastEdDate} by ${LastEditBy}'
		  		}
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'NC Subdivision Maps',
		  	url: 'http://fs-gdb10/arcgis/rest/services/NassauCounty/NC_DPW_Subdivision_with_Tax_Parcels_v103/MapServer/0',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"SubdivisionMaps",
		  		visible: false,
		  		outFields: ['SubdivName', 'DPWFileNo', 'ClerkFileNo','DPWlogNo','imagePath','CADFileDesktopRelativeImagePath', 'EnterDate' ],
		  		infoTemplate: {
		  			title: '<b>NC Subdivision Maps</b>',
		  			content: 'Subdivision Name: ${SubdivName}<br>DPW File #: ${DPWFileNo}<br>Clerk File #: ${ClerkFileNo}<br>DPW Log #: ${DPWlogNo}<br>'+
		  			'Enter Date: ${EnterDate}<br>'
		  		}
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'GdB Drawings',
		  	url: 'http://fs-gdb10/arcgis/rest/services/NassauCounty/NC_DPW_Subdivision_with_Tax_Parcels_v103/MapServer/0',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"GdBDrawings",
		  		visible: false,
		  		outFields: ['*' ],
		  		infoTemplate: {
		  			title: '<b>GdB Drawings</b>',
		  			content: 'OBJECTID: ${SubdivName}<br>Drawing Number : ${DrawingNumber}<br>'
		  		}
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		  {
		 	name: 'Utility Locating Notes',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/13',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"UtilityLocatingNotes",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Water',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/12',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Water",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Traffic',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/11',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Traffic",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Telephone',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/10',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Telephone",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Steam',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/9',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Steam",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Sanitary',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/8',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Sanitary",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Gas',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/7',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Gas",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Fire',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/6',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Fire",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Field Notes',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/5',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"FieldNotes",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Electric - Low Tension',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/4',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"LowTension",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Electric - Conduit',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/3',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Conduit",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Electric - Other',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/2',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Other",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Cable',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/1',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"Cable",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'Section Maps',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/14',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"SectionMaps",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 },
		 {
		 	name: 'NYSDOT Contract Sheet',
		  	url: 'http://fs-gdb10/arcgis/rest/services/GdBUtilities/GdBProjectsAndSubdivisions/FeatureServer/15',
		  	visible: true,
		  	renderOptions: [],
		  	currentRender: "",	
		  	options: {
		  		id:"ContractSheet",
		  		visible: false,
		  		outFields: ['*' ],
		  	},
		  	style: {
	  			type: "polygon",
	  			tblField: []
	  		}
		 }
		 ]};
});