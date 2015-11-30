topuploaders.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"invgetcmodels"}, {"onSuccess":"serviceVariable1Success"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.displayValue","targetProperty":"mycmodelin"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.displayValue","targetProperty":"mypidin"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.displayValue","targetProperty":"myownerin"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varcmodels: ["wm.Variable", {"isList":true,"type":"cmodels"}, {}],
	svinvtopowners: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopowners"}, {"onSuccess":"svinvtopownersSuccess","onSuccess1":"layer1","onSuccess2":"svinvtopownersSuccess2"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectDay.displayValue","targetProperty":"myday"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectMonth.displayValue","targetProperty":"mymonth"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.displayValue","targetProperty":"mypidin"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.displayValue","targetProperty":"myownerin"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.displayValue","targetProperty":"mycontentmodel"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.displayValue","targetProperty":"myaccesscode"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.displayValue","targetProperty":"myyear"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.displayValue","targetProperty":"mystate"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varowners: ["wm.Variable", {"isList":true,"type":"owners"}, {"onSetData":"varownersSetData"}],
	varstates: ["wm.Variable", {"isList":true,"type":"states"}, {}],
	svinvstates: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"invgetstate"}, {"onSuccess":"svinvstatesSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}]
			}]
		}]
	}],
	svuploads: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getcreation","startUpdate":true}, {"onSuccess":"svuploadsSuccess","onSuccess1":"layer1"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
				wire: ["wm.Wire", {"expression":"''","targetProperty":"mypid"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"myoidin"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}]
			}]
		}]
	}],
	varuploads: ["wm.Variable", {"isList":true,"json":"[{\"count\":\"1\",\"monthis\":\"1\"}]","type":"uploads"}, {"onSetData":"varuploadsSetData"}],
	svinvaccesscode: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"invaccesscode"}, {"onSuccess":"svinvaccesscodeSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}]
			}]
		}]
	}],
	varaccesscode: ["wm.Variable", {"isList":true,"type":"accesscodes"}, {}],
	svgetcreateionmonth: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getcreationmonth"}, {"onSuccess":"svgetcreateionmonthSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectOida.displayValue","targetProperty":"mypidin"}, {}],
				wire7: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}]
			}]
		}]
	}],
	varuploadsmonth: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	svgetcreationday: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getcreationday"}, {"onSuccess":"svgetcreationdaySuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myownerin"}, {}]
			}]
		}]
	}],
	varuploadsperday: ["wm.Variable", {"isList":true,"json":"[]","type":"getcreationday1"}, {"onSetData":"varuploadsperdaySetData"}],
	svtopuploadersobjects: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopownerobjects"}, {"onSuccess":"svtopuploadersobjectsSuccess","onSuccess1":"svinvtopownerobjectspercmodel"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
				wire3: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire4: ["wm.Wire", {"expression":"${selectState.displayValue}","targetProperty":"mystate"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.displayValue","targetProperty":"mycontentmodel"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.displayValue","targetProperty":"myaccesscode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectDay.displayValue","targetProperty":"myday"}, {}],
				wire9: ["wm.Wire", {"expression":"\"\"","targetProperty":"myowner"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vartopuploadersobjects: ["wm.Variable", {"isList":true,"type":"topuploaders"}, {}],
	varuploadsperdayforchart: ["wm.Variable", {"isList":true,"type":"getcreationday1"}, {}],
	svgetownersinit: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"dontExecute","operation":"main","service":"getowners"}, {"onSuccess":"svgetownersinitSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}]
	}],
	vargetownersinit: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	svgetoidasinit: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"getoidas"}, {"onSuccess":"svgetoidasinitSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}]
	}],
	vargetoidasinit: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	varuploadsperdayforchart2: ["wm.Variable", {"isList":true,"type":"getcreationday1"}, {}],
	notificationCall1: ["wm.NotificationCall", {"operation":"toast"}, {}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Open in Phaidra: Double Click\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Info\"","targetProperty":"cssClasses"}, {}]
			}]
		}]
	}],
	svinvtopownerobjectspercmodel: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopownerobjectspercmodel"}, {"onSuccess":"svinvtopownerobjectspercmodelSuccess","onSuccess1":"svinvtopownerobjectsperdate"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire4: ["wm.Wire", {"expression":"${selectYear1.dataValue}*1","targetProperty":"myyear"}, {}],
				wire5: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
				wire6: ["wm.Wire", {"expression":"${selectState.dataValue}","targetProperty":"mystate"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGridcmodels1.selectedItem.owner","targetProperty":"myowner"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varinvtopownerobjectspercmodel: ["wm.Variable", {"isList":true,"json":"[]","type":"topuploaders"}, {}],
	svinvtopownerobjectsperdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopownerobjectsperdate"}, {"onSuccess":"svinvtopownerobjectsperdateSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire4: ["wm.Wire", {"expression":"${selectYear1.dataValue}*1","targetProperty":"myyear"}, {}],
				wire5: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGridcmodels1.selectedItem.owner","targetProperty":"myowner"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varinvtopownerobjectsperdate: ["wm.Variable", {"isList":true,"json":"[]","type":"topuploaders"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		labeldigitalobjects: ["wm.Label", {"caption":"Uploads per User","height":"39px","padding":"4","styles":{"fontSize":"22px","backgroundColor":"#0099e2","color":"#ffffff"},"width":"100%"}, {"onclick":"svtopuploadersobjects"}],
		panel1: ["wm.Panel", {"height":"247px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
			dojoGridcmodels: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Content Models","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"#","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Content Models: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"cmodels","height":"100%","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"254px"}, {"onHeaderClick":"serviceVariable1"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varcmodels","targetProperty":"dataSet"}, {}]
				}]
			}],
			spacer1: ["wm.Spacer", {"height":"48px","width":"35px"}, {}],
			dojoGridownwers: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"owner","title":"Owners","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"#","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Owners: \" + ${owner} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"313px"}, {"onHeaderClick":"serviceVariable1"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varowners","targetProperty":"dataSet"}, {}]
				}]
			}],
			spacer2: ["wm.Spacer", {"height":"48px","width":"101px"}, {}],
			dojoGridAccesscode: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"accesscode","title":"Access codes","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"#","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Access codes: \" + ${accesscode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"244px"}, {"onHeaderClick":"svinvaccesscode"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varaccesscode","targetProperty":"dataSet"}, {}]
				}]
			}],
			dojoGridState: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"state","title":"States","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"#","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"States: \" + ${state} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"313px"}, {"onHeaderClick":"serviceVariable1"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varstates","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		panel2: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#dadada"},"verticalAlign":"middle","width":"100%"}, {}, {
			selectOida: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange3":"svuploads"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"[main].vargetoidasinit","targetProperty":"dataSet"}, {}]
				}]
			}],
			selectYear1: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2008,2009,2010,2011,2012,2013,2014,2015,2016","width":"125px"}, {"onchange3":"svuploads","onchange5":"layer1"}],
			selectMonth: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svuploads"}],
			selectDay: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":31,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svuploads"}],
			selectOwner: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"showing":false,"styles":{},"width":"168px"}, {"onchange":"svuploads"}],
			selectYear: ["wm.Text", {"caption":"Year","captionSize":"50px","dataValue":"0","displayValue":"0","emptyValue":"emptyString","height":"30px","showing":false,"width":"158px"}, {}],
			selectOwner1: ["wm.SelectMenu", {"allowNone":true,"caption":"Owner","captionSize":"60px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"164px"}, {"onchange":"serviceVariable1","onchange2":"svinvtopowners","onchange3":"svuploads"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"[inventory].vargetownersinit","targetProperty":"dataSet"}, {}]
				}]
			}],
			selectState: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","width":"135px"}, {"onchange3":"svuploads"}],
			selectAccessCode: ["wm.SelectMenu", {"allowNone":true,"caption":"Access","captionSize":"60px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"152px"}, {"onchange3":"svuploads","onchange5":"layer1"}],
			selectRedCode: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"100px"}, {"onchange3":"svuploads","onchange5":"layer1"}],
			selectContentModel: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","captionSize":"110px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","restrictValues":false,"width":"200px"}, {"onchange3":"svuploads","onchange5":"layer1"}],
			selectInstance1: ["wm.SelectMenu", {"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":undefined,"showing":false,"styles":{},"width":"119px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		breadcrumbLayers1: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
			layer1: ["wm.Layer", {"borderColor":"","caption":"Back to Main","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer1Show"}, {
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"253px"}, {}, {
						labeltotalmain: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Click on row ","height":"60px","padding":"4","styles":{"fontStyle":"italic","fontSize":"22px","backgroundColor":"green","color":"white"},"width":"100%"}, {}],
						dojoGridcmodels1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Month","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Uploads","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Uploads: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20px","align":"right","expression":"\"  >\"","isCustomField":true,"mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"primaryKeyFields":["count"],"singleClickEdit":true,"styles":{}}, {"onSelect":"dojoGridcmodels1Select"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varuploads","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					dojoChart1: ["wm.DojoChart", {"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthis","yAxis":"count"}, {"onClick":"dojoChart1Click"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varuploads","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}],
			layerperMonth: ["wm.Layer", {"borderColor":"","caption":"Month","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"253px"}, {}, {
						labeltotalmonth: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Click on row for more detail","height":"60px","padding":"4","singleLine":false,"styles":{"fontStyle":"italic","backgroundColor":"green","color":"#ffffff","fontSize":"22px"},"width":"100%"}, {}],
						dojoGridcmodels2: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Day","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Uploads","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Day: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Uploads: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20px","align":"right","expression":"\"  >\"","isCustomField":true,"mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"253px"}, {"onSelect":"dojoGridcmodels2Select"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsmonth","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					dojoChart2: ["wm.DojoChart", {"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthis","yAxis":"count"}, {"onClick":"dojoChart2Click"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsmonth","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}],
			layerDay: ["wm.Layer", {"borderColor":"","caption":"Day","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"414px"}, {}, {
						labeltotalday: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Click on row for more detail","height":"58px","padding":"4","singleLine":false,"styles":{"fontStyle":"italic","fontSize":"22px","color":"#ffffff","backgroundColor":"green"},"width":"100%"}, {}],
						dojoGridcmodels3: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Hour Uploaded","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Hour Uploaded: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Oid: \" + ${oid}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content model: \" + ${cmodel}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"User: \" + ${owner}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Openin Phaidra: \" + ${wm.runtimeId}.formatCell(\"openinphaidra\", ${openinphaidra}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"oid","title":"Oid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cmodel","title":"Content model","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"openinphaidra","title":"Openin Phaidra","width":"100%","align":"left","formatFunc":"dojoGridcmodels3OpeninphaidraFormat","expression":"","isCustomField":true,"mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"414px"}, {"onHeaderClick":"svuploads","onSelect":"dojoGridcmodels3Select"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperday","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					dojoChart3: ["wm.DojoChart", {"chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"cmodel","yAxis":"monthis"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
						}]
					}],
					dojoChartperuser: ["wm.DojoChart", {"chartTitle":"Per User","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"owner","yAxis":"monthis"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsforchart2","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}