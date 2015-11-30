dojo.declare("statisticsnewversion", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha348", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "wm.base.widget.themes.Bootstrap", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		accesscodes: ["wm.TypeDefinition", {}, {}, {
			accesscode: ["wm.TypeDefinitionField", {"fieldName":"accesscode"}, {}],
			count: ["wm.TypeDefinitionField", {"fieldName":"count"}, {}]
		}], 
		browser: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"browser_0"}, {}]
		}], 
		browser_0: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			browser: ["wm.TypeDefinitionField", {"fieldName":"browser"}, {}]
		}], 
		cmodels: ["wm.TypeDefinition", {}, {}, {
			count: ["wm.TypeDefinitionField", {"fieldName":"count","fieldType":"Number"}, {}],
			cmodel: ["wm.TypeDefinitionField", {"fieldName":"cmodel"}, {}]
		}], 
		getcreationday1: ["wm.TypeDefinition", {}, {}, {
			monthis: ["wm.TypeDefinitionField", {"fieldName":"monthis"}, {}],
			oid: ["wm.TypeDefinitionField", {"fieldName":"oid"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"cmodel"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"cmodel"}, {}],
			field3: ["wm.TypeDefinitionField", {"fieldName":"owner"}, {}]
		}], 
		getinstances1: ["wm.TypeDefinition", {}, {}, {
			instance: ["wm.TypeDefinitionField", {"fieldName":"instance","fieldType":"Number"}, {}]
		}], 
		gettop1: ["wm.TypeDefinition", {}, {}, {
			oid: ["wm.TypeDefinitionField", {"fieldName":"oid"}, {}],
			owneris: ["wm.TypeDefinitionField", {"fieldName":"owneris"}, {}],
			howmany: ["wm.TypeDefinitionField", {"fieldName":"howmany","fieldType":"Number"}, {}],
			cmodel: ["wm.TypeDefinitionField", {"fieldName":"cmodel"}, {}],
			created: ["wm.TypeDefinitionField", {"fieldName":"created"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"typeis"}, {}]
		}], 
		myvisiperc: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			country: ["wm.TypeDefinitionField", {"fieldName":"country"}, {}],
			latitude: ["wm.TypeDefinitionField", {"fieldName":"latitude"}, {}],
			longitude: ["wm.TypeDefinitionField", {"fieldName":"longitude"}, {}]
		}], 
		oidainfo: ["wm.TypeDefinition", {}, {}, {
			owner: ["wm.TypeDefinitionField", {"fieldName":"owner"}, {}],
			created: ["wm.TypeDefinitionField", {"fieldName":"created"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"contentmodel"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"accesscode"}, {}],
			field3: ["wm.TypeDefinitionField", {"fieldName":"state"}, {}]
		}], 
		os: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"os_0"}, {}]
		}], 
		os_0: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			os: ["wm.TypeDefinitionField", {"fieldName":"os"}, {}]
		}], 
		owners: ["wm.TypeDefinition", {}, {}, {
			count: ["wm.TypeDefinitionField", {"fieldName":"count"}, {}],
			owner: ["wm.TypeDefinitionField", {"fieldName":"owner"}, {}]
		}], 
		returningusers: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"returningusers_0"}, {}]
		}], 
		returningusers_0: ["wm.TypeDefinition", {}, {}, {
			total: ["wm.TypeDefinitionField", {"fieldName":"total"}, {}],
			returninguser: ["wm.TypeDefinitionField", {"fieldName":"returninguser"}, {}]
		}], 
		searches: ["wm.TypeDefinition", {}, {}, {
			searchstring: ["wm.TypeDefinitionField", {"fieldName":"searchstring"}, {}],
			count: ["wm.TypeDefinitionField", {"fieldName":"count"}, {}]
		}], 
		states: ["wm.TypeDefinition", {}, {}, {
			count: ["wm.TypeDefinitionField", {"fieldName":"count"}, {}],
			state: ["wm.TypeDefinitionField", {"fieldName":"state"}, {}]
		}], 
		stats1: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"stats1_0"}, {}]
		}], 
		stats1_0: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			month: ["wm.TypeDefinitionField", {"fieldName":"month"}, {}],
			year: ["wm.TypeDefinitionField", {"fieldName":"year"}, {}]
		}], 
		topsearches1: ["wm.TypeDefinition", {}, {}, {
			searchstring: ["wm.TypeDefinitionField", {"fieldName":"searchstring"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"frequency","fieldType":"Number"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"field2"}, {}]
		}], 
		topuploaders: ["wm.TypeDefinition", {}, {}, {
			monthis: ["wm.TypeDefinitionField", {"fieldName":"monthis"}, {}],
			oid: ["wm.TypeDefinitionField", {"fieldName":"oid"}, {}],
			owner: ["wm.TypeDefinitionField", {"fieldName":"owner"}, {}],
			created: ["wm.TypeDefinitionField", {"fieldName":"created"}, {}],
			count: ["wm.TypeDefinitionField", {"fieldName":"count","fieldType":"Number"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"cmodel"}, {}]
		}], 
		topvisitors1: ["wm.TypeDefinition", {}, {}, {
			user: ["wm.TypeDefinitionField", {"fieldName":"user"}, {}],
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}]
		}], 
		uploads: ["wm.TypeDefinition", {}, {}, {
			count: ["wm.TypeDefinitionField", {"fieldName":"count","fieldType":"Number"}, {}],
			monthis: ["wm.TypeDefinitionField", {"fieldName":"monthis"}, {}]
		}], 
		visitlog1: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"visitlog1_0"}, {}]
		}], 
		visitlog1_0: ["wm.TypeDefinition", {}, {}, {
			k1: ["wm.TypeDefinitionField", {"fieldName":"k1"}, {}],
			v1: ["wm.TypeDefinitionField", {"fieldName":"v1"}, {}],
			k2: ["wm.TypeDefinitionField", {"fieldName":"k2"}, {}],
			v2: ["wm.TypeDefinitionField", {"fieldName":"v2"}, {}],
			k3: ["wm.TypeDefinitionField", {"fieldName":"k3"}, {}],
			v3: ["wm.TypeDefinitionField", {"fieldName":"v3"}, {}],
			k4: ["wm.TypeDefinitionField", {"fieldName":"k4"}, {}],
			v4: ["wm.TypeDefinitionField", {"fieldName":"v4"}, {}],
			datevisit: ["wm.TypeDefinitionField", {"fieldName":"datevisit"}, {}],
			timevisit: ["wm.TypeDefinitionField", {"fieldName":"timevisit"}, {}],
			k5: ["wm.TypeDefinitionField", {"fieldName":"k5"}, {}],
			v5: ["wm.TypeDefinitionField", {"fieldName":"v5"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"monthvisit"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"dayvisit"}, {}],
			field3: ["wm.TypeDefinitionField", {"fieldName":"howmany","fieldType":"Number"}, {}],
			field4: ["wm.TypeDefinitionField", {"fieldName":"typeis"}, {}],
			field5: ["wm.TypeDefinitionField", {"fieldName":"owneris"}, {}],
			field6: ["wm.TypeDefinitionField", {"fieldName":"owner"}, {}]
		}], 
		visitorspercount: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			country: ["wm.TypeDefinitionField", {"fieldName":"country"}, {}],
			latitude: ["wm.TypeDefinitionField", {"fieldName":"latitude"}, {}],
			longitude: ["wm.TypeDefinitionField", {"fieldName":"longitude"}, {}]
		}], 
		visitorspercountry: ["wm.TypeDefinition", {}, {}, {
			0: ["wm.TypeDefinitionField", {"fieldName":"0","fieldType":"visitorspercountry_0"}, {}]
		}], 
		visitorspercountry2: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			country: ["wm.TypeDefinitionField", {"fieldName":"country"}, {}],
			latitude: ["wm.TypeDefinitionField", {"fieldName":"latitude"}, {}],
			longitude: ["wm.TypeDefinitionField", {"fieldName":"longitude"}, {}]
		}], 
		visitorspercountry_0: ["wm.TypeDefinition", {}, {}, {
			visits: ["wm.TypeDefinitionField", {"fieldName":"visits"}, {}],
			country: ["wm.TypeDefinitionField", {"fieldName":"country"}, {}]
		}], 
		svgetinstances: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"main","service":"getinstances","startUpdate":true}, {"onSuccess":"svgetinstancesSuccess"}, {
			input: ["wm.ServiceInput", {"type":"mainInputs"}, {}]
		}], 
		vargetinstances: ["wm.Variable", {"type":"getinstances1"}, {"onSetData":"vargetinstancesSetData"}]
	},
	_end: 0
});

statisticsnewversion.extend({

	svgetinstancesSuccess: function(inSender, inDeprecated) {
		var str = '[' + inSender.data.dataValue + ']';
          console.log("instances-"+str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        app.vargetinstances.setData(obj);    
	},
	vargetinstancesSetData: function(inSender) {
		    var myinstance=inSender.getItem(0).getData().instance;
        main.selectInstance.setValue("displayValue",myinstance);
	},
	svgetinstancesSuccess3: function(inSender, inDeprecated) {
		
	},
	_end: 0
});