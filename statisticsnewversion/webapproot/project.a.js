wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['wm.base.widget.themes.Bootstrap'] = {"wm.Button":{"desktopHeight":"30px","margin":"0,.3em,0,6","borderColor":"#bbbbbb","width":"100px","padding":"4,12","mobileHeight":"30px"},"wm.ToggleButton":{"desktopHeight":"30px","margin":"0,.3em,0,6","borderColor":"#bbbbbb","width":"100px","padding":"4,12","mobileHeight":"30px"},"wm.PopupMenuButton":{"desktopHeight":"30px","margin":"0,.3em,0,6","borderColor":"#bbbbbb","width":"100px","padding":"4,12","mobileHeight":"30px"},"wm.TabLayers":{"borderColor":"#dddddd","border":"0","clientBorder":"1","clientBorderColor":"#dddddd","headerHeight":"26px","mobileHeaderHeight":"42px","headerWidth":"80px"},"wm.AccordionLayers":{"border":0,"borderColor":"#ffffff","clientBorder":"1","clientBorderColor":"#e5e5e5","captionHeight":"30px","captionBorder":1,"captionBorderColor":"#e5e5e5","margin":"5","arrowsOnLeft":true},"wm.FancyPanel":{"innerBorder":"1","borderColor":"#e6e6e6","labelHeight":"30"},"wm.Text":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.LargeTextArea":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Number":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Currency":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.SelectMenu":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Lookup":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.FilteringLookup":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Date":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Time":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.DateTime":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Checkbox":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.RadioButton":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.RichText":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.CheckboxSet":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.RadioSet":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.ListSet":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.Slider":{"mobileHeight":"40px","width":"172px","borderColor":"#e6e6e6","border":"0","desktopHeight":"30px","captionAlign":"left","editorBorder":true,"margin":"0"},"wm.AppRoot":{"borderColor":"#e6e6e6"},"wm.DojoGrid":{"border":"1","borderColor":"#e6e6e6","margin":"4"},"wm.List":{"border":"1","borderColor":"#e6e6e6","margin":"4"},"wm.dijit.ProgressBar":{"borderColor":"#e6e6e6","border":0,"desktopHeight":"24px","mobileHeight":"24px","margin":"0","padding":"0","width":"20px"},"wm.Bevel":{"borderColor":"#949494","bevelSize":"3","border":0},"wm.Splitter":{"borderColor":"#949494","bevelSize":"3","border":0},"wm.dijit.Calendar":{"desktopHeight":"260px","borderColor":"#e6e6e6"},"wm.Toast":{"border":"1","borderColor":"#e6e6e6"},"wm.ButtonBarPanel":{"padding":"14,15,15,0"},"wm.Dialog":{"borderColor":"#999999","titleBarButtonsOnRight":true,"titlebarHeight":"40","titlebarBorderColor":"#eeeeee","titlebarBorder":"0,0,1,0","mobileTitlebarHeight":"40","border":1},"wm.PageDialog":{"borderColor":"#999999","titleBarButtonsOnRight":true,"titlebarHeight":"40","titlebarBorderColor":"#eeeeee","titlebarBorder":"0,0,1,0","mobileTitlebarHeight":"40","border":1},"wm.GenericDialog":{"borderColor":"#999999","titleBarButtonsOnRight":true,"titlebarHeight":"40","titlebarBorderColor":"#eeeeee","titlebarBorder":"0,0,1,0","mobileTitlebarHeight":"40","border":1},"wm.DesignableDialog":{"borderColor":"#999999","titleBarButtonsOnRight":true,"titlebarHeight":"40","titlebarBorderColor":"#eeeeee","titlebarBorder":"0,0,1,0","mobileTitlebarHeight":"40","border":1},"wm.DojoMenu":{"border":1,"desktopHeight":"32px","borderColor":"#cccccc","padding":"4"},"wm.Dashboard":{"borderColor":"#e6e6e6"},"wm.ToggleButtonPanel":{}};
wm.componentList['example.GoogleOrgChart'] = ['wm.base.widget.Composite','common.packages.example.GoogleOrgChart'];
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
	"projectSubVersion": "Alpha346", 
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
statisticsnewversion.prototype._css = '.rounded\
{\
background-color: "blue";\
// border-radius:25px 25px 25px 25px;\
}\
';
