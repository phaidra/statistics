visits1.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getstats2","startUpdate":true}, {"onSetData":"serviceVariable1SetData","onSuccess":"serviceVariable1Success","onSuccess1":"serviceVariable1Success1"}, {
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
	varstats: ["wm.Variable", {"isList":true,"json":"[]","type":"stats1_0"}, {"onSetData":"varstatsSetData"}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}],
		panel1: ["wm.Panel", {"height":"59px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
			searchPid: ["wm.Text", {"caption":"PID","captionSize":"40px","dataValue":"","disabled":true,"displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"140px"}, {}],
			date1: ["wm.Date", {"caption":"Date","dataValue":3600000,"disabled":true,"displayValue":"1/1/1970","emptyValue":"zero","height":"30px","showing":false}, {}],
			spacer2: ["wm.Spacer", {"height":"48px","showing":false,"width":"65px"}, {}],
			selectType: ["wm.SelectMenu", {"caption":"Type","captionSize":"50px","dataField":"dataValue","dataValue":"Download","displayField":"dataValue","displayValue":"Download","emptyValue":"emptyString","height":"30px","options":"Download, View, Metadata, Detail Page","showing":false,"width":"154px"}, {}],
			spacer1: ["wm.Spacer", {"height":"48px","showing":false,"width":"96px"}, {}],
			buttonSearch: ["wm.Button", {"border":"1","caption":"Search","height":"30px","showing":false,"styles":{},"width":"80px"}, {"onclick":"serviceVariable1"}]
		}],
		panel5: ["wm.Panel", {"height":"43px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#dfdfdf"},"verticalAlign":"middle","width":"100%"}, {}, {
			selectYear: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"zero","height":"30px","options":"2014,2015","styles":{},"width":"154px"}, {"onchange":"serviceVariable1"}],
			label4: ["wm.Label", {"caption":"only data for 2014 and 2015","padding":"4","styles":{"fontStyle":"italic","fontWeight":"bold"}}, {}]
		}],
		panel4: ["wm.Panel", {"height":"47px","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			labelFound: ["wm.Label", {"align":"left","caption":"Select Year and Type, Click Search","height":"100%","padding":"4","styles":{"fontSize":"33px","backgroundColor":"#0088e2","color":"#ffffff"},"width":"100%"}, {}]
		}],
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${month} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Visits: \" + ${visits}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"month","title":"Month","width":"100%","align":"left","editorProps":null,"mobileColumn":false},
{"show":true,"field":"visits","title":"Visits","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"year","title":"Year","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false,"styles":{}}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varstats","targetProperty":"dataSet"}, {}]
				}]
			}],
			dojoChart1: ["wm.DojoChart", {"height":"100%","hideLegend":true,"padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"month","yAxis":"visits"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varstats","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}