dojo.declare("Detailpage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
svdetailpageSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vardetailpage.setData(obj);
},
svdetailpageovertimeSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vardetailpageovertime.setData(obj);
},
vardetailpageSetData: function(inSender) {
var howmany=inSender.getCount();
var totxx2 = 0;
for (i = 0; i < howmany; i++) {
var mycount22 = inSender.getItem(i).getData().howmany;
totxx2 = totxx2 + (mycount22 * 1);
}
// this.labeltotalobjectviews.setCaption("Total: " + totxx2);
this.labeltotalobjectviews.setValue("caption", "Objects: " + howmany + "   DPage " + totxx2);
this.varforcharttop.clearData();
if(howmany>11)
{
howmany=10;
}
for (i=0;i<howmany;i++)
{
var myoida=inSender.getItem(i).getData().v4;
var mycount=inSender.getItem(i).getData().howmany;
this.varforcharttop.addItem({count:mycount,monthis:myoida});
}
},
dojoGridDetailPageSelect: function(inSender) {
},
svgetdetailpage2Success: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdetailpage2.setData(obj);
},
button1Click: function(inSender) {
},
vargetdetailpage2SetData: function(inSender) {
this.labeltotal.setCaption("Total found: "+inSender.getCount());
},
svgetdetailpageperdateSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//  console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdetailpageperdate.setData(obj);
var length = 0;
for (var property in obj) {
if (obj.hasOwnProperty(property)) {
length += 1;
}
};
if (length < 2) {
this.panel11.hide();
}
else {
this.panel11.show();
}
},
svgetdetailpagepercountrySuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//  console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdetailpagepercountry.setData(obj);
var length = 0;
for (var property in obj) {
if (obj.hasOwnProperty(property)) {
length += 1;
}
};
if (length < 2) {
// this.panel14.hide();
}
else {
this.panel14.show();
}
},
_end: 0
});

Detailpage.widgets = {
svdetailpage: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"detailpage"}, {"onSuccess":"svdetailpageSuccess","onSuccess1":"svdetailpageovertime","onSuccess2":"layerMainViews"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"'detail page'","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":"${selectYear.dataValue}","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}]
}],
vardetailpage: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vardetailpageSetData"}],
svdetailpageovertime: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"main","service":"detailpageovertime","startUpdate":true}, {"onSuccess":"svdetailpageovertimeSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"${selectAccessCode.displayValue}","targetProperty":"myaccesscode"}, {}],
wire: ["wm.Wire", {"expression":"${selectOwner.displayValue}","targetProperty":"myowner"}, {}],
wire2: ["wm.Wire", {"expression":"${selectContentModel.displayValue}","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"'Detail page'","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectYear.dataValue","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}]
}],
vardetailpageovertime: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
varforcharttop: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
svgetdetailpage2: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpage2"}, {"onSuccess":"svgetdetailpage2Success","onSuccess1":"svgetdetailpageperdate"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Detail page\"","targetProperty":"mytype"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.displayValue","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.displayValue","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectYear.displayValue","targetProperty":"myyear"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectOwner.displayValue","targetProperty":"myowner"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectState.displayValue","targetProperty":"mystate"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"dojoGridDetailPage.selectedItem.v4","targetProperty":"mypid"}, {}]
}]
}]
}],
vargetdetailpage2: ["wm.Variable", {"isList":true,"json":"[]","type":"visitlog1_0"}, {"onSetData":"vargetdetailpage2SetData"}],
svgetdetailpageperdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpageperdate"}, {"onSuccess":"svgetdetailpageperdateSuccess","onSuccess1":"svgetdetailpagepercountry"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":"\"Detail page\"","targetProperty":"mytype"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectYear.dataValue","targetProperty":"myyear"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"dojoGridDetailPage.selectedItem.v4","targetProperty":"mypid"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}]
}],
vargetdetailpageperdate: ["wm.Variable", {"isList":true,"json":"[]","type":"visitlog1_0"}, {}],
svgetdetailpagepercountry: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpagepercountry"}, {"onSuccess":"svgetdetailpagepercountrySuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":"\"Detail page\"","targetProperty":"mytype"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"dojoGridDetailPage.selectedItem.v4","targetProperty":"mypid"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectYear.dataValue","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}]
}],
vargetdetailpagepercountry: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top","width":"819px"}, {}, {
layerMostViewed: ["wm.Panel", {"border":"1","borderColor":"#dddddd","height":"100%","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {"onShow":"svgetviewsovertime"}, {
label5: ["wm.Label", {"align":"left","caption":"Detail Page Objects","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
panelsearch: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#d5d5dc","endColor":"#cfd2dc","colorStop":50}},"verticalAlign":"middle","width":"100%"}, {}, {
selectOida: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange":"svdetailpage"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].vargetoidasinit","targetProperty":"dataSet"}, {}]
}]
}],
selectYear: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2014,2015,2016,2017,2018,2019","restrictValues":false,"styles":{},"width":"119px"}, {"onchange2":"svdetailpage"}],
textType: ["wm.Text", {"caption":"type","dataValue":"Download","displayValue":"Download","height":"30px","showing":false,"width":"201px"}, {}],
selectUser: ["wm.SelectMenu", {"allowNone":true,"caption":"User","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"154px"}, {"onchange":"svretusers","onchange1":"svgetvisitorspercountry","onchange2":"svgetviews","onchange3":"svgettopdownloads","onchange4":"svgetmetadata","onchange5":"svgetos","onchange6":"svgetbrowser"}],
selectMonth: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svdetailpage"}],
selectDay: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svdetailpage"}],
selectPID: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"v1","dataType":"visitlog1_0","dataValue":"","displayField":"v1","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"142px"}, {"onchange":"selectPIDChange","onchange1":"svgetviews","onchange3":"svgettopdownloads","onchange5":"svgetmetadata"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
}]
}],
selectOwner: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"styles":{},"width":"132px"}, {"onchange":"svdetailpage"}],
selectState: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","styles":{},"width":"139px"}, {"onchange4":"svdetailpage"}],
selectAccessCode: ["wm.SelectMenu", {"allowNone":true,"caption":"Access","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"190px"}, {"onchange5":"svdetailpage"}],
selectRedCode: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange5":"svdetailpage"}],
selectContentModel: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"223px"}, {"onchange2":"svdetailpage"}],
selectInstance1: ["wm.SelectMenu", {"allowNone":true,"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":"SITE","showing":false,"styles":{},"width":"119px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
}]
}]
}],
breadcrumbLayersMain: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
layerMainViews: ["wm.Layer", {"borderColor":"","caption":"Main","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label4: ["wm.Label", {"caption":"Click on a row for more detail-only data for 2014 and 2015","padding":"4","showing":false,"styles":{"fontStyle":"italic"},"width":"100%"}, {}],
paneltotalviews: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel19: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"309px"}, {}, {
labeltotalobjectviews: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Total","height":"60px","padding":"4","styles":{"backgroundColor":"green","color":"#ffffff","fontSize":"22px","fontStyle":"italic"},"width":"100%"}, {"onclick":"svdetailpageovertime"}],
dojoGridDetailPage: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owneris","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Owner: \" + ${owneris}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20%","align":"right","expression":"'>'","isCustomField":true,"mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onRenderData":"dojoGridDetailPageRenderData","onSelect":"dojoGridDetailPageSelect","onSelect1":"layerDetailPageDetail"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vardetailpage","targetProperty":"dataSet"}, {}]
}]
}]
}],
dojoGridViews: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
}]
}],
dojoChart1: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
}]
}],
panel27: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel26: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoChartDetailPagePerOwner: ["wm.DojoChart", {"chartTitle":"Top 10","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varforcharttop","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Detail Page: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"monthis","title":"Object","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Detail Page","width":"80px","align":"right","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"212px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varforcharttop","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer2: ["wm.Spacer", {"height":"26px","width":"96px"}, {}],
panedataovertimeviews: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoChartDetailPageovertime: ["wm.DojoChart", {"chartTitle":"Detail Page overtime per Month","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vardetailpageovertime","targetProperty":"dataSet"}, {}]
}]
}],
dojoGridDetailPageovertime: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Month","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vardetailpageovertime","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}],
layerDetailPageDetail: ["wm.Layer", {"borderColor":"","caption":"Detail Page per object","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetdetailpage2"}, {
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"380px"}, {}, {
labelobjectinfo4: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","height":"45px","margin":"0,0,5,0","padding":"4","styles":{"fontSize":"17px","backgroundColor":"#0099e2","color":"#ffffff","fontStyle":"italic"},"width":"375px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"'Object: '+${dojoGridDetailPage.selectedItem.v4}+' Owner: '+${dojoGridDetailPage.selectedItem.owneris}","targetProperty":"caption"}, {}]
}]
}],
labeltotal: ["wm.Label", {"align":"center","caption":"Total:","height":"45px","padding":"4","styles":{"fontSize":"17px","backgroundColor":"green","color":"#ffffff","fontStyle":"italic"},"width":"375px"}, {}],
button1: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#0044cc","caption":"Open in phaidra","desktopHeight":"33px","height":"33px","styles":{},"width":"383px"}, {"onclick":"button1Click"}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"#","width":"20px","align":"left","formatFunc":"list2K1Format","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datevisit","title":"Date viewed","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"timePattern":"HH:mm","formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"howmany","title":"Howmany","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date viewed: \" + ${wm.runtimeId}.formatCell(\"datevisit\", ${datevisit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpage2","targetProperty":"dataSet"}, {}]
}]
}]
}],
paneltotalviews1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
labeltotalobjectviews1: ["wm.Label", {"caption":"Views - Top 15 Objects","height":"26px","padding":"4","showing":false,"styles":{"backgroundColor":"#0088e2","color":"#ffffff","fontSize":"16px"},"width":"100%"}, {"onclick":"svgetviews"}],
dojoGridViews1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
}]
}],
dojoChart5: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoChart6: ["wm.DojoChart", {"chartTitle":"Detail Page grouped by Date ","chartType":"Lines","height":"100%","hideLegend":true,"hint":"vargetviewsperdayforchart","legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageperdate","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid5: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
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
{"show":true,"field":"monthvisit","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","hint":"vargetviewsperdayforchart","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageperdate","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"32px","width":"96px"}, {}],
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoChart15: ["wm.DojoChart", {"chartTitle":"Detail Page grouped by Country","chartType":"Lines","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"v4","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpagepercountry","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid10: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpagepercountry","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}]
}]
}]
};

Detailpage.prototype._cssText = '';
Detailpage.prototype._htmlText = '';