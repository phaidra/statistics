dojo.declare("topuploadersnew", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
serviceVariable1Success: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varcmodels.setData(obj);
},
svinvtopownersSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varowners.setData(obj);
},
svinvstatesSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//   console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varstates.setData(obj);
},
svuploadsSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//      console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varuploads.setData(obj);
},
svinvaccesscodeSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//  console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varaccesscode.setData(obj);
},
varuploadsSetData: function(inSender) {
},
svgetcreateionmonthSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//  console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varuploadsmonth.setData(obj);
},
dojoGridcmodels1Select: function(inSender) {
var idx = inSender.getSelectedIndex();
var myowner = inSender.getCell(idx, "owner");
this.svtopuploadersobjects.input.setValue("myowner", myowner);
//this.svtopuploadersobjects.input.setValue("myyear", myyearis);
this.svtopuploadersobjects.update();
this.breadcrumbLayers1.setLayer("layerObjects");
//this.layerperMonth.setValue("caption","Month: "+mymonthis+" Year: "+myyearis);
//this.dojoChart2.setValue("chartTitle","Uploads Per Month for "+mymonthis+"-"+myyearis);
},
dojoGridcmodels2Select: function(inSender) {
this.breadcrumbLayers1.setLayer("layerDay");
var idx = inSender.getSelectedIndex();
var valueis = inSender.getCell(idx, "monthis");
valueis = valueis.split("-");
var mydayis = valueis[0];
var mymonthis = valueis[1];
var myyearis = valueis[2];
this.svgetcreationday.input.setValue("myday", mydayis);
this.svgetcreationday.input.setValue("mymonth", mymonthis);
this.svgetcreationday.input.setValue("myyear", myyearis);
this.svgetcreationday.update();
this.layerDay.setValue("caption", "Day: " + mydayis + " Month: " + mymonthis + " Year: " + myyearis);
this.dojoChart3.setValue("chartTitle", "Uploads Per Day for " + mydayis + "-" + mymonthis + "-" + myyearis);
},
dojoGridcmodels3Select: function(inSender) {
},
svgetcreationdaySuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varuploadsperday.setData(obj);
},
svtopuploadersobjectsSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vartopuploadersobjects.setData(obj);
},
varownersSetData: function(inSender) {
var howmany = inSender.getCount();
var whatyear = this.selectYear1.getValue("displayValue");
var yearstr = "";
if (whatyear.length > 0) {
yearstr = " for year " + whatyear;
}
else {
yearstr = " for years 2008-Now ";
}
var tot = 0;
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().count;
// console.log(myamount);
tot = tot + myamount;
}
this.labeltotalmain.setCaption("Total: " + tot);
//this.labeldigitalobjects.setCaption("Top Uploaders" + yearstr + "   Total: " + tot);
//this.labeldigitalobjects.setCaption("Top Uploaders" + yearstr );
},
varuploadsperdaySetData: function(inSender) {
},
vartopuploadersobjectsSetData: function(inSender) {
var howmany = inSender.getCount();
//this.labeltotalobjects.setCaption("Total: "+howmany);
var myusers = [];
var mydatesarr = [];
var cmodels = [];
var tot = 0;
for (i = 0; i < howmany; i++) {
var mydates = inSender.getItem(i).getData().created;
var mycmodel = inSender.getItem(i).getData().cmodel;
// var myuser = inSender.getItem(i).getData().owneris;
// console.log(myamount);
mydatesarr.push(mydates);
cmodels.push(mycmodel);
}
mydatesarr.sort();
// mycmodels.sort();
this.varuploadsperdayforchart2.clearData();
//this.varuploadsforchart2.clearData();
//begin sorting and frequency cmodels
var current = null;
var cnt = 0;
for (i = 0; i < mydatesarr.length; i++) {
if (mydatesarr[i] != current) {
if (cnt > 0) {
console.log(current + ' 1 - comes --> ' + cnt + ' times<br>');
this.varuploadsperdayforchart2.addItem({
cmodel: current,
monthis: cnt
});
}
current = mydatesarr[i];
cnt = 1;
} else {
cnt++;
}
}
if (cnt > 0) {
console.log(current + ' 2 - comes --> ' + cnt + ' times');
this.varuploadsperdayforchart2.addItem({
cmodel: current,
monthis: cnt
});
}
//end
cmodels.sort();
// mycmodels.sort();
this.varuploadsperdayforchart.clearData();
//this.varuploadsforchart2.clearData();
//begin sorting and frequency cmodels
var current = null;
var cnt = 0;
for (i = 0; i < cmodels.length; i++) {
if (cmodels[i] != current) {
if (cnt > 0) {
console.log(current + ' 1 - comes --> ' + cnt + ' times<br>');
this.varuploadsperdayforchart.addItem({
cmodel: current,
monthis: cnt
});
}
current = cmodels[i];
cnt = 1;
} else {
cnt++;
}
}
if (cnt > 0) {
console.log(current + ' 2 - comes --> ' + cnt + ' times');
this.varuploadsperdayforchart.addItem({
cmodel: current,
monthis: cnt
});
}
//end
},
svgetownersinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetownersinit.setData(obj);
},
svgetoidasinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
//this.vargetoidasinit.setData(obj);
},
dojoGridcmodels2CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
var index = inSender.getSelectedIndex();
var oid = inSender.getCell(index, "oid");
var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
window.open(urlis);
},
svinvtopownerobjectspercmodelSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varinvtopownerobjectspercmodel.setData(obj);
},
svinvtopownerobjectsperdateSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varinvtopownerobjectsperdate.setData(obj);
},
dojoGridcmodels2OpeninphaidraFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
if(rowObj.cmodel!="total")
{
return     '<a href="'+
'https://phaidra.univie.ac.at/detail_object/' +rowObj.oid+
'" target="_blank">Open</a>  ';
}
},
layerObjectsShow1: function(inSender) {
var idx=this.dojoGridcmodels1.getSelectedIndex();
var mytot=this.dojoGridcmodels1.getCell(idx,"count");
this.labeltotalobjects.setCaption("Objects uploaded: "+mytot);
},
dojoChart1Click: function(inSender, e, dataObj) {
this.dojoGridcmodels1.selectByQuery({monthis:dataObj.monthis});
},
svinvtopownersSuccess2: function(inSender, inDeprecated) {
},
layer1Show: function(inSender) {
this.dojoGridcmodels1.deselectAll();
},
dojoGridcmodels1RenderData: function(inSender) {
var x=this.varowners.getCount();
if (x==1)
{
this.dojoGridcmodels1.select(0);
}
},
dojoGrid1RenderData: function(inSender) {
},
dojoGrid2RenderData: function(inSender) {
/* if(this.dojoGrid2.getRowCount()==1)
{
this.dojoGrid2.hide();
this.dojoChart4.hide();
}
else
{
this.dojoGrid2.show();
this.dojoChart4.show();
}
*/
},
varinvtopownerobjectspercmodelSetData: function(inSender) {
if(inSender.getCount()==1)
{
this.panelcmodel.hide();
}
else
{
this.panelcmodel.show();
}
},
_end: 0
});

topuploadersnew.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"invgetcmodels"}, {"onSuccess":"serviceVariable1Success"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}]
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
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myownerin"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
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
svuploads: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getcreation"}, {"onSuccess":"svuploadsSuccess","onSuccess1":"layer1"}, {
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
wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}]
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
wire5: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.displayValue","targetProperty":"myowner"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.displayValue","targetProperty":"myday"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectMonth.displayValue","targetProperty":"mymonth"}, {}]
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
wire6: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}]
}]
}]
}],
varuploadsperday: ["wm.Variable", {"isList":true,"json":"[]","type":"getcreationday1"}, {"onSetData":"varuploadsperdaySetData"}],
svtopuploadersobjects: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopownerobjects"}, {"onSuccess":"svtopuploadersobjectsSuccess","onSuccess1":"svinvtopownerobjectspercmodel"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire3: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
wire4: ["wm.Wire", {"expression":"''","targetProperty":"mystate"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
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
wire5: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
wire6: ["wm.Wire", {"expression":"${selectState.dataValue}","targetProperty":"mystate"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGridcmodels1.selectedItem.owner","targetProperty":"myowner"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire4: ["wm.Wire", {"expression":"${selectYear1.displayValue}","targetProperty":"myyear"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
varinvtopownerobjectspercmodel: ["wm.Variable", {"isList":true,"json":"[]","type":"topuploaders"}, {"onSetData":"varinvtopownerobjectspercmodelSetData"}],
svinvtopownerobjectsperdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invtopownerobjectsperdate"}, {"onSuccess":"svinvtopownerobjectsperdateSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire5: ["wm.Wire", {"expression":"''","targetProperty":"mycountry"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGridcmodels1.selectedItem.owner","targetProperty":"myowner"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire4: ["wm.Wire", {"expression":"${selectYear1.displayValue}","targetProperty":"myyear"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
varinvtopownerobjectsperdate: ["wm.Variable", {"isList":true,"json":"[]","type":"topuploaders"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
labeldigitalobjects: ["wm.Label", {"caption":"Uploads per User","height":"39px","padding":"4","styles":{"fontSize":"22px","backgroundColor":"#0099e2","color":"#ffffff"},"width":"100%"}, {}],
panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#dadada"},"verticalAlign":"middle","width":"100%"}, {}, {
selectYear: ["wm.Text", {"caption":"Year","captionSize":"50px","dataValue":"0","displayValue":"0","emptyValue":"zero","height":"30px","showing":false,"width":"158px"}, {}],
selectOida: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"115px"}, {"onchange3":"svinvtopowners"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].vargetoidasinit","targetProperty":"dataSet"}, {}]
}]
}],
selectYear1: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020","restrictValues":false,"width":"124px"}, {"onchange2":"svinvtopowners"}],
selectMonth: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svinvtopowners"}],
selectDay: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svinvtopowners"}],
selectOwner1: ["wm.SelectMenu", {"allowNone":true,"caption":"Owner","captionSize":"60px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","width":"147px"}, {"onchange2":"svinvtopowners"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[inventory].vargetownersinit","targetProperty":"dataSet"}, {}]
}]
}],
selectState: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","width":"152px"}, {"onchange2":"svinvtopowners"}],
selectAccessCode: ["wm.SelectMenu", {"allowNone":true,"caption":"Access Code","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"193px"}, {"onchange4":"svinvtopowners"}],
selectRedCode: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange2":"svinvtopowners"}],
selectContentModel: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","captionSize":"110px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","width":"190px"}, {"onchange2":"svinvtopowners"}],
selectInstance1: ["wm.SelectMenu", {"allowNone":true,"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":"SITE","showing":false,"styles":{},"width":"119px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"247px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
dojoGridcmodels: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Content Models","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"#","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Content Models: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"cmodels","height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"254px"}, {"onHeaderClick":"serviceVariable1"}, {
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
breadcrumbLayers1: ["wm.BreadcrumbLayers", {"styles":{},"transition":"slide"}, {}, {
layer1: ["wm.Layer", {"borderColor":"","caption":"Back to Main","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer1Show"}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"253px"}, {}, {
labeltotalmain: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"","height":"60px","padding":"4","styles":{"fontStyle":"italic","backgroundColor":"green","color":"#ffffff","fontSize":"22px"},"width":"100%"}, {}],
dojoGridcmodels1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Uploads","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"User: \" + ${owner} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Uploads: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20px","align":"right","expression":"\"  >\"","isCustomField":true,"mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"253px"}, {"onRenderData":"dojoGridcmodels1RenderData","onSelect":"dojoGridcmodels1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varowners","targetProperty":"dataSet"}, {}]
}]
}]
}],
dojoChart1: ["wm.DojoChart", {"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"owner","yAxis":"count"}, {"onClick":"dojoChart1Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varowners","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layerObjects: ["wm.Layer", {"borderColor":"","caption":"Objects","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetcreateionmonth","onShow1":"layerObjectsShow1"}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"362px"}, {}, {
labelobjectinfo1: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","height":"45px","margin":"0,0,5,0","padding":"4","styles":{"fontSize":"20px","backgroundColor":"#0099e2","color":"#ffffff"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"User: \"+${dojoGridcmodels1.selectedItem.owner}","targetProperty":"caption"}, {}]
}]
}],
labeltotalobjects: ["wm.Label", {"align":"center","caption":"","height":"60px","padding":"4","styles":{"fontStyle":"italic","backgroundColor":"green","color":"#ffffff","fontSize":"20px"},"width":"100%"}, {}],
dojoGridcmodels2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"monthis","title":"Day","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"count","title":"Uploads","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date Upload: \" + ${created} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Oid: \" + ${oid}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content Model: \" + ${cmodel}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Open in Phaidra: \" + ${wm.runtimeId}.formatCell(\"openinphaidra\", ${openinphaidra}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"created","title":"Date Upload","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"oid","title":"Oid","width":"75px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cmodel","title":"Content Model","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"openinphaidra","title":"Open in Phaidra","width":"68px","align":"left","formatFunc":"dojoGridcmodels2OpeninphaidraFormat","isCustomField":true,"mobileColumn":false}
],"height":"100%","margin":"0,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onCellDblClick":"dojoGridcmodels2CellDblClick","onHeaderClick":"svuploads"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartopuploadersobjects","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer3: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
panelcmodel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
dojoChart2: ["wm.DojoChart", {"chartTitle":"Grouped by Content Model","chartType":"Pie","height":"100%","includeGrid":true,"padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"cmodel","yAxis":"count"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varinvtopownerobjectspercmodel","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Content Model","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"monthis","title":"Total","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"oid","title":"Oid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Content Model: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Count: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"created","title":"Created","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"count","title":"Count","width":"80px","align":"right","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varinvtopownerobjectspercmodel","targetProperty":"dataSet"}, {}]
}]
}]
}],
dojoChart4: ["wm.DojoChart", {"chartTitle":"Grouped by Date","chartType":"Lines","height":"100%","hideLegend":true,"padding":"4","styles":{},"width":"100%","xAxis":"created","yAxis":"count"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varinvtopownerobjectsperdate","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"cmodel","title":"Date","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"monthis","title":"Total","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"oid","title":"Oid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${created} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Count: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"created","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"count","title":"Count","width":"80px","align":"right","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"200px"}, {"onRenderData":"dojoGrid2RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varinvtopownerobjectsperdate","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layerDay: ["wm.Layer", {"borderColor":"","caption":"Day","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetcreationday"}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridcmodels3: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Hour","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Hour: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content Model: \" + ${cmodel}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Oid: \" + ${oid}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"User: \" + ${owner}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"cmodel","title":"Content Model","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"oid","title":"Oid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"414px"}, {"onHeaderClick":"svuploads","onSelect":"dojoGridcmodels3Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperday","targetProperty":"dataSet"}, {}]
}]
}],
dojoChart3: ["wm.DojoChart", {"chartTitle":"Per Content Model","chartType":"Pie","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"cmodel","yAxis":"monthis"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
};

topuploadersnew.prototype._cssText = '';
topuploadersnew.prototype._htmlText = '';