Stats1.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"logvisitors"}, {"onSetData":"serviceVariable1SetData","onSuccess":"serviceVariable1Success","onSuccess1":"serviceVariable1Success1"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"searchPid.dataValue","targetProperty":"mypid"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"date1.dataValue","targetProperty":"mydate"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectType.dataValue","targetProperty":"mytype"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectYear.dataValue","targetProperty":"myyear"}, {}]
			}]
		}]
	}],
	varvisitors: ["wm.Variable", {"isList":true,"json":"[null]","type":"visitlog1_0"}, {"onSetData":"varvisitorsSetData"}],
	varforchart: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Downloads\",\"dataValue\":\"1000\"}]","type":"EntryData"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#d7d7d7"},"verticalAlign":"middle","width":"100%"}, {}, {
			searchPid: ["wm.Text", {"caption":"PID","captionSize":"40px","dataValue":"","disabled":true,"displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"140px"}, {}],
			date1: ["wm.Date", {"caption":"Date","dataValue":3600000,"disabled":true,"displayValue":"1/1/1970","emptyValue":"zero","height":"30px","showing":false}, {}],
			selectYear: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"2014","displayField":"dataValue","displayValue":"2014","emptyValue":"zero","height":"30px","options":"2014,2015","width":"154px"}, {}],
			spacer2: ["wm.Spacer", {"height":"48px","width":"65px"}, {}],
			selectType: ["wm.SelectMenu", {"caption":"Type","captionSize":"50px","dataField":"dataValue","dataValue":"Download","displayField":"dataValue","displayValue":"Download","emptyValue":"emptyString","height":"30px","options":"Download, View, Show Metadata, Detail Page","width":"154px"}, {}],
			spacer1: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
			buttonSearch: ["wm.Button", {"border":"1","caption":"Search","height":"30px","styles":{},"width":"80px"}, {"onclick":"serviceVariable1"}],
			label4: ["wm.Label", {"caption":"only data for 2014 and 2015","padding":"4","styles":{"fontStyle":"italic","fontWeight":"bold"}}, {}]
		}],
		panel2: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			labelFound: ["wm.Label", {"align":"left","caption":"Select Year and Type, Click Search","height":"56px","padding":"4","styles":{"fontSize":"33px","backgroundColor":"#0088e2","color":"#ffffff"},"width":"100%"}, {}]
		}],
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"monthvisit","title":"Month","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"left","formatFunc":"dojoGrid1HowmanyFormat","formatProps":{"round":false,"dijits":0},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"field5","title":"Field5","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"visitlog1_0","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varvisitors","targetProperty":"dataSet"}, {}]
				}]
			}],
			dojoChart1: ["wm.DojoChart", {"height":"405px","padding":"4","verticalLegend":true,"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varvisitors","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}