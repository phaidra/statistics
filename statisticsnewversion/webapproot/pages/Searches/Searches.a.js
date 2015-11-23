dojo.declare("Searches", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
svgetsearchesSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//  console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varsearches.setData(obj);
},
varsearchesSetData: function(inSender) {
this.labelfound.setCaption("Found: "+inSender.getCount());
},
svgetpicturesSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//   console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varpictures.setData(obj);
},
varpicturesSetData: function(inSender) {
this.labelpicturesfound.setCaption("Searches for object type Pictures<br> "+inSender.getCount());
},
svallfieldsSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varallfields.setData(obj);
},
varallfieldsSetData: function(inSender) {
this.labelallfields.setCaption("Searches in All Fields <br>"+inSender.getCount());
},
svlanguagesSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varlanguages.setData(obj);
},
varlanguagesSetData: function(inSender) {
this.labelalllanguages.setCaption("Searches in All Languages <br>"+inSender.getCount());
},
svgetsearchesobjectsSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varobjects.setData(obj);
},
varobjectsSetData: function(inSender) {
this.labelpid.setCaption("Searches for specific PIDs <br>"+inSender.getCount());
},
vartopvisitorsSetData: function(inSender) {
},
svtopvisitorsSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//     console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vartopvisitors.setData(obj);
},
dojoGrid2Click: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
},
svtopsearchesSuccess: function(inSender, inDeprecated) {
var str = '[' + (inSender.data.dataValue) + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vartopsearches.setData(obj);
},
vartopsearchesSetData: function(inSender) {
this.vartopsearches.sort("frequency",0);
this.dojoGridtopsearches.setSortField("frequency",false);
this.labeltopsearches.setCaption("Top Searches "+inSender.getCount());
},
_end: 0
});

Searches.widgets = {
svgetsearches: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getsearches"}, {"onSuccess":"svgetsearchesSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"textSearchString.displayValue","targetProperty":"mysearch"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1","targetProperty":"loadingDialog"}, {}]
}]
}],
varsearches: ["wm.Variable", {"isList":true,"json":"[]","type":"searches"}, {"onSetData":"varsearchesSetData"}],
svgetpictures: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getsearchespictures","startUpdate":true}, {"onSuccess":"svgetpicturesSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"'picture'","targetProperty":"mysearch"}, {}],
wire1: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}]
}]
}]
}],
varpictures: ["wm.Variable", {"isList":true,"json":"[]","type":"searches"}, {"onSetData":"varpicturesSetData"}],
svallfields: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getsearchesallfields","startUpdate":true}, {"onSuccess":"svallfieldsSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"'alle feldern'","targetProperty":"mysearch"}, {}]
}]
}]
}],
varallfields: ["wm.Variable", {"isList":true,"type":"searches"}, {"onSetData":"varallfieldsSetData"}],
svlanguages: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getlanguages","startUpdate":true}, {"onSuccess":"svlanguagesSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"'in allen sp'","targetProperty":"mysearch"}, {}]
}]
}]
}],
varlanguages: ["wm.Variable", {"isList":true,"type":"searches"}, {"onSetData":"varlanguagesSetData"}],
svgetsearchesobjects: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getsearchesobjects","startUpdate":true}, {"onSuccess":"svgetsearchesobjectsSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"'o:'","targetProperty":"mysearch"}, {}]
}]
}]
}],
varobjects: ["wm.Variable", {"isList":true,"type":"searches"}, {"onSetData":"varobjectsSetData"}],
svtopvisitors: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"topvisitors","startUpdate":true}, {"onSuccess":"svtopvisitorsSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid2","targetProperty":"loadingDialog"}, {}]
}]
}],
vartopvisitors: ["wm.Variable", {"isList":true,"type":"topvisitors1"}, {"onSetData":"vartopvisitorsSetData"}],
svtopsearches: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"topsearches","startUpdate":true}, {"onSuccess":"svtopsearchesSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"paneltopsearchstirngs","targetProperty":"loadingDialog"}, {}]
}]
}],
vartopsearches: ["wm.Variable", {"isList":true,"type":"topsearches1"}, {"onSetData":"vartopsearchesSetData"}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
paneltopsearches: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontSize":"22px"},"verticalAlign":"top","width":"100%"}, {}, {
panelsearchstrings: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"styles":{"backgroundColor":"#fcfcfc"},"verticalAlign":"top","width":"353px"}, {}, {
label3: ["wm.Label", {"align":"center","caption":"Searches in Phaidra","height":"64px","padding":"4","styles":{"fontSize":"33px"},"width":"100%"}, {"onclick":"svtopvisitors"}],
panelsearch: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
textSearchString: ["wm.Text", {"caption":"Search String","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","placeHolder":"film, berg","width":"224px"}, {"onchange":"svgetsearches"}]
}],
labelfound: ["wm.Label", {"padding":"4"}, {}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"searchstring","title":"Searchstring","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"count","title":"Count","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Searchstring: \" + ${searchstring} +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"searches","height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varsearches","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelpicturessearch: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"172px"}, {}],
spacer1: ["wm.Spacer", {"height":"48px","width":"49px"}, {}],
paneltopsearchstirngs: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"349px"}, {}, {
labeltopsearches: ["wm.Label", {"align":"center","caption":"Top Search Strings","height":"64px","padding":"4","styles":{"fontSize":"33px"},"width":"100%"}, {"onclick":"svtopsearches"}],
dojoGridtopsearches: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Searchstring: \" + ${searchstring} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Frequency: \" + ${wm.runtimeId}.formatCell(\"frequency\", ${frequency}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"searchstring","title":"Searchstring","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"frequency","title":"Frequency","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"field2","title":"Field2","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"primaryKeyFields":["frequency"],"resortOnDataUpdate":false,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartopsearches","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer3: ["wm.Spacer", {"height":"48px","width":"48px"}, {}],
paneltopsearchesobjects: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"288px"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"Summaries","height":"64px","padding":"4","styles":{"fontSize":"33px"},"width":"100%"}, {}],
panel8: ["wm.Panel", {"height":"382px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"288px"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"144px"}, {}, {
labelalllanguages: ["wm.Label", {"align":"center","caption":"Searches in All Languages","height":"100%","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"svlanguages"}],
labelpid: ["wm.Label", {"align":"center","caption":"Objekte (PID)","height":"100%","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"svgetpictures"}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"144px"}, {}, {
labelallfields: ["wm.Label", {"align":"center","caption":"Searches in All Fields","height":"100%","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"svallfields"}],
labelpicturesfound: ["wm.Label", {"align":"center","caption":"Pictures","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svgetpictures"}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"96px"}, {}, {
labeldocs: ["wm.Label", {"align":"center","caption":"Documents","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svlanguages"}],
labelbook: ["wm.Label", {"align":"center","caption":"Book","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svgetpictures"}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"96px"}, {}, {
labelcollections: ["wm.Label", {"align":"center","caption":"Collections","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svlanguages"}],
labelpdf: ["wm.Label", {"align":"center","caption":"PDF","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svgetpictures"}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"96px"}, {}, {
labelvideos: ["wm.Label", {"align":"center","caption":"Videos","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svlanguages"}],
labelaudio: ["wm.Label", {"align":"center","caption":"Audio","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svgetpictures"}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"96px"}, {}, {
labelcollections2: ["wm.Label", {"align":"center","caption":"Collections","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svlanguages"}],
labelpdf2: ["wm.Label", {"align":"center","caption":"PDF","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {"onclick":"svgetpictures"}]
}],
spacer2: ["wm.Spacer", {"height":"48px","width":"46px"}, {}],
paneltopusers: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"400px"}, {}, {
label2: ["wm.Label", {"align":"center","caption":"Top Users","height":"64px","padding":"4","styles":{"fontSize":"33px"},"width":"100%"}, {}],
dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"User: \" + ${user} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Visits: \" + ${visits}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"user","title":"User","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"visits","title":"Visits","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartopvisitors","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

Searches.prototype._cssText = '';
Searches.prototype._htmlText = '';