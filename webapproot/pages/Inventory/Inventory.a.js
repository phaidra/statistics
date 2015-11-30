dojo.declare("Inventory", wm.Page, {
start: function() {
dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.themes.Wetland");
// this.panel2.hide();
//  this.breadcrumbLayers1.hide();
},
"preferredDevice": "desktop",
serviceVariable1Success: function(inSender, inDeprecated) {
this.varforpiwikactivitychart.clearData();
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
var howmany = inSender.getCount();
var tot = 0;
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().count;
//console.log(myamount);
tot = tot + myamount;
}
this.labeldigitalobjects.setCaption("Digital objects uploaded per month: " + tot);
},
selectYear1Change5: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (inDisplayValue.length > 0) {
this.chartcontentmodels.setValue("chartTitle", "Content Models for Year " + inDisplayValue);
//   this.chartstates.setValue("chartTitle","States<br>For Year "+inDisplayValue);
// this.chartaccesscodes.setValue("chartTitle","Access Codes<br>for Year "+inDisplayValue);
} else {
this.chartcontentmodels.setValue("chartTitle", "Content Models For 2008-Now");
//this.chartstates.setValue("chartTitle","States");
////  this.chartaccesscodes.setValue("chartTitle","Access Codes");
}
},
varcmodelsSetData: function(inSender) {
var howmany = inSender.getCount();
this.varcmodelsforchart.clearData();
var tot = 0;
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().count;
var mycmodel = inSender.getItem(i).getData().cmodel;
// console.log(myamount);
// console.log(mycmodel);
if (mycmodel == "Total Objects in Repo") {} else {
this.varcmodelsforchart.addItem({
cmodel: mycmodel,
count: myamount
});
}
}
},
svgetownersinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetownersinit.setData(obj);
},
svgetoidasinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
// this.vargetoidasinit.setData(obj);
},
dojoGridcmodelsSelect: function(inSender) {
var index = inSender.getSelectedIndex();
var mycmodel = inSender.getCell(index, "cmodel");
if (mycmodel == "Total Objects in Repo") {
return;
}
main.tabLayers1.setLayer("layerUploads");
//    this.nav1.update();
main.pageContainer5.uploads.panel2.clearData();
main.pageContainer5.uploads.selectContentModel.setValue("dataValue", mycmodel);
main.pageContainer5.uploads.selectContentModel.setValue("displayValue", mycmodel);
main.pageContainer5.uploads.selectAccessCode.setValue("dataValue", null);
main.pageContainer5.uploads.selectAccessCode.setValue("displayValue", null);
main.pageContainer5.uploads.selectState.setValue("dataValue", null);
main.pageContainer5.uploads.selectState.setValue("displayValue", null);
},
dojoGridAccesscodeSelect: function(inSender) {
var index = inSender.getSelectedIndex();
var mycmodel = inSender.getCell(index, "accesscode");
main.tabLayers1.setLayer("layerUploads");
//    this.nav1.update();
main.pageContainer5.uploads.panel2.clearData();
//   main.pageContainer5.uploads.selectAccessCode.setValue("dataValue",mycmodel);
//  main.pageContainer5.uploads.selectAccessCode.setValue("displayValue",mycmodel);
main.pageContainer5.uploads.selectState.setValue("dataValue", null);
main.pageContainer5.uploads.selectState.setValue("displayValue", null);
main.pageContainer5.uploads.selectContentModel.setValue("dataValue", null);
main.pageContainer5.uploads.selectContentModel.setValue("displayValue", null);
main.pageContainer5.uploads.selectAccessCode.setValue("dataValue", mycmodel);
main.pageContainer5.uploads.selectAccessCode.setValue("displayValue", mycmodel);
},
dojoGridStateSelect: function(inSender) {
var index = inSender.getSelectedIndex();
var mycmodel = inSender.getCell(index, "state");
main.tabLayers1.setLayer("layerUploads");
//    this.nav1.update();
main.pageContainer5.uploads.panel2.clearData();
main.pageContainer5.uploads.selectContentModel.setValue("dataValue", null);
main.pageContainer5.uploads.selectContentModel.setValue("displayValue", null);
main.pageContainer5.uploads.selectAccessCode.setValue("dataValue", null);
main.pageContainer5.uploads.selectAccessCode.setValue("displayValue", null);
main.pageContainer5.uploads.selectState.setValue("dataValue", mycmodel);
main.pageContainer5.uploads.selectState.setValue("displayValue", mycmodel);
},
svgettotalsyearsinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vartotalsyearsforchar.setData(obj);
},
charttotalsyearsReadOnlyNodeFormat: function(inSender, inValue) {
//return ""+inValue+"";
},
getviewsinitSuccess: function(inSender, inDeprecated) {},
svgetdownloadsinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdownloadsinit.setData(obj);
// this.vargetdownloadsinitforchart.setData(obj);
//this.vargetdownloadsinit.removeItem(this.vargetdownloadsinit.getCount());;
},
svgetdetailpageinitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdetailpageinit.setData(obj);
},
vargetdownloadsinitSetData: function(inSender) {
var howmany = this.vargetdownloadsinit.getCount();
this.vargetdownloadsinitforchart.clearData();
var tot = 0;
var myusers = [];
var mydata = [];
var mystring="";
if(howmany>0)
{
for (i = 0; i < howmany; i++) {
var myamount = this.vargetdownloadsinit.getItem(i).getData().howmany;
var mydate = this.vargetdownloadsinit.getItem(i).getData().dayvisit;
tot = tot + (myamount * 1);
if (mydate !== "total") {
this.vargetdownloadsinitforchart.addItem({
dayvisit: mydate,
howmany: myamount
});
}
myusers.push([mydate, myamount]);
//this.varforpiwikactivitychart.addItem({
//       dayvisit: mydate,
//     howmany: myamount,
//   typeis: "Download"
//    });
mystring=mystring+'{"typeis":"Download", "dayvisit":"'+mydate+'","howmany":"'+myamount+'"},';
// alert(tot);
if (tot > 0) {
this.panelpiwik.show();
//this.charttotaldownloads.setValue("chartTitle",tot+ " Downloads");
}
else { //this.panelpiwik.hide();
}
}
mystring='['+mystring+']';
console.log(mystring);
}
},
vargetdetailpageinitSetData: function(inSender) {
var howmany = inSender.getCount();
this.vargetdetailpageinitforchart.clearData();
var tot = 0;
var myusers = [];
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().howmany;
var mydate = inSender.getItem(i).getData().dayvisit;
tot = tot + (myamount * 1);
if (mydate !== "total") {
this.vargetdetailpageinitforchart.addItem({
dayvisit: mydate,
howmany: myamount
});
}
//    myusers.push([mydate, myamount]);
}
// alert(tot);
if (tot > 0) {
this.panelpiwik.show();
//this.charttotaldownloads.setValue("chartTitle",tot+ " Downloads");
}
else { //this.panelpiwik.hide();
}
},
dojoGridAccesscode1Select: function(inSender) {
this.dojoGridAccesscodeSelect(inSender);
},
dojoGridState1Select: function(inSender) {
var index = inSender.getSelectedIndex();
var myyear = inSender.getCell(index, "dayvisit");
if (myyear !== "total") {
main.tabLayers1.setLayer("layerDetailPage");
}
//main.pageContainer5.uploads.panel2.clearData();
main.pageContainer7.detailpage.selectYear.setValue("displayValue", myyear);
},
selectOidaChange7: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (inDisplayValue.length < 1) {
//    this.panesolooida.hide();
//  this.panelcenter.show();
//this.panelcmodels.show();
//this.panelaccessstates.show();
//this.panetotheright.show();
//this.panelaccessinfo.show();
//this.panelstatesinfo.show();
//this.panetotheright.show();
}
else {
this.svgetoidainfo.update();
this.svgetviewsdetail.update();
this.panesolooida.show();
this.svgetoidainfo.update();
this.svgetdownloaddetail.update();
this.svgetviewsdetailforoida.update();
// this.panetotheright.hide();
//this.panelcenter.hide();
//this.panelcmodels.hide();
//this.panelaccessinfo.hide();
//this.panelstatesinfo.hide();
}
},
svgetoidainfoSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//    console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.varoidainfo.setData(obj);
},
svgetdownloaddetailSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
// console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdownloaddetail.setData(obj);
},
dojoGridState2Select: function(inSender) {
this.dojoGridStateSelect(inSender);
},
dojoGridAccesscode2Select: function(inSender) {
this.dojoGridAccesscode1Select(inSender);
},
dojoGridState3Select: function(inSender) {
var index = inSender.getSelectedIndex();
var mydate = inSender.getCell(index, "dayvisit");
if (mydate !== "total") {
main.tabLayers1.setLayer("layerMostShowMetadata");
}
//main.panelsearch3.clearData();
//main.selectYear3.setValue("dataValue", mydate);
},
dojoGriddownloadsinfoSelect: function(inSender) {
var index = inSender.getSelectedIndex();
var mydate = inSender.getCell(index, "dayvisit");
if (mydate !== "total") {
main.tabLayers1.setLayer("layerMostDownloaded2");
main.panelsearch3.clearData();
main.selectYear3.setValue("dataValue", mydate);
}
// main.selectYear3.setValue("displayValue",mydate);
/*
main.pageContainer5.uploads.selectState.setValue("dataValue",null);
main.pageContainer5.uploads.selectState.setValue("displayValue",null);
main.pageContainer5.uploads.selectContentModel.setValue("dataValue",null);
main.pageContainer5.uploads.selectContentModel.setValue("displayValue",null);
main.pageContainer5.uploads.selectAccessCode.setValue("dataValue",mycmodel);
main.pageContainer5.uploads.selectAccessCode.setValue("displayValue",mycmodel);
*/
},
dojoGridViewInfoSelect: function(inSender) {
var index = inSender.getSelectedIndex();
var mydate = inSender.getCell(index, "dayvisit");
if (mydate !== "total") {
main.tabLayers1.setLayer("layerMostViewed");
}
// main.panelsearch.clearData();
main.selectYear.setValue("dataValue", mydate);
},
svgetviewsinitSuccess: function(inSender, inDeprecated) {
},
svgetviewsinit2Success: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetviewsinit.setData(obj);
},
svgetmetadatainitSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetmetadatainit.setData(obj);
},
chartcontentmodelsClick: function(inSender, e, dataObj) {
var typeis = dataObj.cmodel;
this.dojoGridcmodels.selectByQuery({
cmodel: typeis
});
},
chartcontentmodels1Click: function(inSender, e, dataObj) {
var myyear = dataObj.cmodel;
main.tabLayers1.setLayer("layerUploads");
main.pageContainer5.uploads.panel2.clearData();
main.pageContainer5.uploads.selectYear1.setValue("dataValue", myyear);
/*
main.pageContainer5.uploads.selectContentModel.setValue("dataValue",null);
main.pageContainer5.uploads.selectContentModel.setValue("displayValue",null);
main.pageContainer5.uploads.selectAccessCode.setValue("dataValue",null);
main.pageContainer5.uploads.selectAccessCode.setValue("displayValue",null);
main.pageContainer5.uploads.selectState.setValue("dataValue",null);
main.pageContainer5.uploads.selectState.setValue("displayValue",null);
main.pageContainer5.uploads.selectday.setValue("dataValue",null);
main.pageContainer5.uploads.selectday.setValue("displayValue",null);
main.pageContainer5.uploads.selectday.setValue("dataValue",null);
main.pageContainer5.uploads.selectday.setValue("displayValue",null);
*/
},
chartaccesscodesClick: function(inSender, e, dataObj) {
var acode = dataObj.accesscode;
this.dojoGridAccesscode.selectByQuery({
accesscode: acode
});
},
chartstatesClick: function(inSender, e, dataObj) {
var stateis = dataObj.state;
this.dojoGridState.selectByQuery({
state: stateis
});
},
chartviewinfoClick: function(inSender, e, dataObj) {
var mydateis = dataObj.dayvisit;
this.dojoGridViewInfo.selectByQuery({
dayvisit: mydateis
});
},
charttotaldownloadsClick: function(inSender, e, dataObj) {
var mydateis = dataObj.dayvisit;
this.dojoGriddownloadsinfo.selectByQuery({
dayvisit: mydateis
});
},
selectStateChange2: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
},
timermetadataTimerFire: function(inSender) {
},
timergetdownloadsinitTimerFire: function(inSender) {
},
svgetviewsdetailSetData: function(inSender) {
var str = '[' + inSender.data.dataValue + ']';
//console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetviewdetail.setData(obj);
},
chartdetailpage1ReadOnlyNodeFormat: function(inSender, inValue) {
return "";
},
vargetmetadatainitSetData: function(inSender) {
var howmany = inSender.getCount();
this.vargetmetadatainitforchart.clearData();
var tot = 0;
var myusers = [];
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().howmany;
var mydate = inSender.getItem(i).getData().dayvisit;
tot = tot + (myamount * 1);
if (mydate !== "total") {
this.vargetmetadatainitforchart.addItem({
dayvisit: mydate,
howmany: myamount
});
}
//    myusers.push([mydate, myamount]);
}
// alert(tot);
if (tot > 0) {
this.panelpiwik.show();
//this.charttotaldownloads.setValue("chartTitle",tot+ " Downloads");
}
else { //this.panelpiwik.hide();
}
},
vargetviewsinitSetData: function(inSender) {
var howmany = inSender.getCount();
this.vargetviewsinitforchart.clearData();
var tot = 0;
var myusers = [];
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().howmany;
var mydate = inSender.getItem(i).getData().dayvisit;
tot = tot + (myamount * 1);
if (mydate !== "total") {
this.vargetviewsinitforchart.addItem({
dayvisit: mydate,
howmany: myamount
});
}
//    myusers.push([mydate, myamount]);
}
// alert(tot);
if (tot > 0) {
this.panelpiwik.show();
//this.charttotaldownloads.setValue("chartTitle",tot+ " Downloads");
}
else { //this.panelpiwik.hide();
}
},
vargetdownloaddetailSetData: function(inSender) {
//vargetdownloaddetail
var tot = 0;
var howmany = inSender.getCount();
for (i = 0; i < howmany; i++) {
var myamount = inSender.getItem(i).getData().howmany;
// console.log(myamount);
tot = tot + (myamount) * 1;
}
this.dojoChart2.setValue("chartTitle", tot + " Downloads by Date");
},
vargetviewdetailSetData: function(inSender) {
},
dojoGrid3RenderData: function(inSender) {
var tot = 0;
var howmany = this.vargetdownloaddetail.getCount();
for (i = 0; i < howmany; i++) {
var myamount = this.vargetdownloaddetail.getItem(i).getData().howmany;
myamount = myamount * 1;
tot = tot + myamount;
}
// console.log(tot + " Downloads by date");
this.dojoChart2.setValue("chartTitle", tot + " Downloads by date");
},
dojoGrid4RenderData: function(inSender) {
var tot = 0;
var howmany = this.vargetviewdetailforoida.getCount();
for (i = 0; i < howmany; i++) {
var myamount = this.vargetviewdetailforoida.getItem(i).getData().howmany;
// console.log(myamount);
tot = tot + (myamount) * 1;
}
this.dojoChart3.setValue("chartTitle", tot + " Views  by date");
},
svgetviewsdetailforoidaSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetviewdetailforoida.setData(obj);
},
vargetviewdetailforoidaSetData: function(inSender) {
},
dojoGrid11RenderData: function(inSender) {
this.dojoGrid3RenderData(inSender);
},
dojoGrid12RenderData: function(inSender) {
this.dojoGrid4RenderData(inSender);
},
svgettopSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//   console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargettop.setData(obj);
},
svgetmetadatadetailforoidaSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetmetadatadetailforoida.setData(obj);
},
svgetdetailpageforoidaSuccess: function(inSender, inDeprecated) {
var str = '[' + inSender.data.dataValue + ']';
//console.log(str);
var json = inSender.data.dataValue;
var obj = eval("(" + str + ')');
this.vargetdetailpageforoida.setData(obj);
},
timerdownloadsforoidaTimerFire: function(inSender) {
},
dojoGrid5RenderData: function(inSender) {
var tot = 0;
var howmany = this.vargetmetadatadetailforoida.getCount();
for (i = 0; i < howmany; i++) {
var myamount = this.vargetmetadatadetailforoida.getItem(i).getData().howmany;
myamount = myamount * 1;
tot = tot + myamount;
}
this.dojoChart4.setValue("chartTitle", tot + " Show Metadata by date");
},
dojoGrid6RenderData: function(inSender) {
var tot = 0;
var howmany = this.vargetdetailpageforoida.getCount();
for (i = 0; i < howmany; i++) {
var myamount = this.vargetdetailpageforoida.getItem(i).getData().howmany;
myamount = myamount * 1;
tot = tot + myamount;
}
this.dojoChart5.setValue("chartTitle", tot + " DetailPage by date");
},
dojoGrid19Select: function(inSender) {
var myindex = inSender.getSelectedIndex();
var myoida = inSender.getCell(myindex, "oid");
this.selectOida.setValue("displayValue", myoida);
},
label3Click: function(inSender, inEvent) {
},
dojoGrid3Select: function(inSender) {
},
dojoChart2Click: function(inSender, e, dataObj) {
//	view downloads for object
var myoida = this.selectOida.getValue("displayValue");
main.selectOida2.setValue("displayValue", myoida);
var datevisit=dataObj.datevisit;
// console.log("datevisit:",datevisit);
var dateonly=datevisit.split(" ");
dateonly=dateonly[0].split("-");
var yearis=dateonly[0];
var monthis=dateonly[1];
var dayis=dateonly[2];
main.selectYear3.setValue("displayValue", yearis);
main.selectDay3.setValue("displayValue", dayis);
main.selectMonth3.setValue("displayValue", monthis);
main.tabLayers1.setLayer("layerMostDownloaded2");
main.breadcrumbLayersMain1.setLayer("layerMaingetDownloaded");
//main.dojoGriddowloadedobjects.select(0);
},
dojoChart3Click: function(inSender, e, dataObj) {
//	view views for object
var myoida = this.selectOida.getValue("displayValue");
main.tabLayers1.setLayer("layerMostViewed");
main.selectOida.setValue("displayValue", myoida);
//  main.dojoGrid3.select(0);
},
button2Click: function(inSender) {
var myindex = this.dojoGrid19.getSelectedIndex();
var myoida = this.dojoGrid19.getCell(myindex, "oid");
window.open("https://phaidra.univie.ac.at/preview/"+myoida);
},
buttonGoBackClick: function(inSender) {
this.selectOida.setDataValue(null);
//this.panesolooida.hide();
//this.panetotheright.show();
},
buttonshowallClick4: function(inSender) {
this.panel2.clearData();
this.serviceVariable1.update();
this.svinvaccesscode.update();
this.svinvstates.update();
},
buttonshowall1Click4: function(inSender) {
this.panel2.show();
this.panelWelcome.hide();
this.breadcrumbLayers1.show();
this.buttonshowallClick4(inSender);
main.selectInstance.show();
main.paneselectinstance.show();
},
chartdetailpageClick: function(inSender, e, dataObj) {
var mydateis = dataObj.dayvisit;
this.dojoGridState1.selectByQuery({
dayvisit: mydateis
});
},
button3Click: function(inSender) {
var index = this.dojoGrid19.getSelectedIndex();
var oid = this.dojoGrid19.getCell(index, "oid");
var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
window.open(urlis);
},
selectInstanceChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
main.selectInstance.setValue("displayValue",inDisplayValue);
this.buttonshowall1.setValue("disabled",false);
},
layerPIDDeactivate: function(inSender) {
this.selectOida.setValue("displayValue","");
},
charttotaldownloadsReadOnlyNodeFormat: function(inSender, inValue) {
return "";
},
html1RightClick: function(inSender, event) {
},
layerPiwikShow: function(inSender) {
this.dojoGrid19.deselectAll();
},
html2RightClick: function(inSender, event) {
console.log("chart");
var ax=document.getElementById('svg');
var a=document.querySelectorAll('svg');
b=document.getElementById('chartOne');
var c2=a;
while((c2=c2.parentNode)&&c2!==b) //c=!!c;
{
console.log(c2);
}
if(!!c2){ //`if(c)` if `c=!!c;` was used after while-loop above
//do stuff
console.log("it exist already");
}
var c = new dojox.charting.Chart2D("chartOne");
/*
c.addPlot("default", {type: "Lines", tension:3})
.addAxis("x", {fixLower: "major", fixUpper: "major"})
.addAxis("y", {vertical: true, fixLower: "major", fixUpper: "major", min: 0})
.setTheme(dojox.charting.themes.Wetland)
.addSeries("Series A", [1, 2, 0.5, 1.5, 1, 2.8, 0.4])
.addSeries("Series B", [2.6, 1.8, 2, 1, 1.4, 0.7, 2])
.addSeries("Series C", [4.3, 1.8, 3, 0.5, 4.4, 2.7, 2])
.render();
*/
c.addPlot("default", {
type:               "Spider",
labelOffset:         -10,
divisions:           5,
seriesFillAlpha:     0.2,
markerSize:          3,
precision:           0,
spiderType:          "ploygon"
});
c.addSeries("China", {data: {"GDP": 2,"area": 6,"population": 2000,"inflation": 15,"growth": 12}}, { fill: "blue" });
c.addSeries("USA", {data: {"GDP": 3,"area": 20,"population": 1500,"inflation": 10,"growth": 3}}, { fill: "green" });
c.addSeries("Canada", {data: {"GDP": 1,"area": 18,"population": 300,"inflation": 3,"growth": 15}}, { fill: "purple" });
c.render();
var legend = new dc.widget.SelectableLegend({chart: c, horizontal: true}, "legend");
},
_end: 0
});

Inventory.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invgetcmodels"}, {"onSuccess":"serviceVariable1Success","onSuccess1":"svgetdetailpageinit","onSuccess2":"timermetadata","onSuccess3":"svgettop","onSuccess4":"layerOverview"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.displayValue","targetProperty":"myredcode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myownerin"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodelin"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
varcmodels: ["wm.Variable", {"isList":true,"type":"cmodels"}, {"onSetData":"varcmodelsSetData"}],
svinvtopowners: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"dontExecute","operation":"sampleJavaOperation","service":"invtopownerobjects"}, {"onSuccess":"svinvtopownersSuccess"}, {
input: ["wm.ServiceInput", {"type":"sampleJavaOperationInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}]
}]
}]
}],
varowners: ["wm.Variable", {"isList":true,"type":"owners"}, {}],
varstates: ["wm.Variable", {"isList":true,"type":"states"}, {}],
svinvstates: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invgetstate"}, {"onSuccess":"svinvstatesSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myownerin"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodelin"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
svuploads: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"getcreation"}, {"onSuccess":"svuploadsSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
wire: ["wm.Wire", {"expression":"''","targetProperty":"mypid"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}]
}]
}]
}],
varuploads: ["wm.Variable", {"isList":true,"json":"[{\"count\":\"1\",\"monthis\":\"1\"}]","type":"uploads"}, {"onSetData":"varuploadsSetData"}],
svinvaccesscode: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"invaccesscode"}, {"onSuccess":"svinvaccesscodeSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire1: ["wm.Wire", {"expression":"\"\"","targetProperty":"mycountry"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myownerin"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodelin"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
varaccesscode: ["wm.Variable", {"isList":true,"type":"accesscodes"}, {}],
varcmodelsforchart: ["wm.Variable", {"isList":true,"type":"cmodels"}, {}],
svgetownersinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getowners"}, {"onSuccess":"svgetownersinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}]
}],
vargetownersinit: ["wm.Variable", {"isList":true,"json":"[]","type":"uploads"}, {}],
svgetoidasinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getoidas"}, {"onSuccess":"svgetoidasinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}]
}],
vargetoidasinit: ["wm.Variable", {"isList":true,"json":"[]","type":"uploads"}, {}],
nav1: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].layerInventory","targetProperty":"layer"}, {}]
}]
}]
}],
svgettotalsyearsinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"gettotalsyears"}, {"onSuccess":"svgettotalsyearsinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"myoidin"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}],
wire3: ["wm.Wire", {"expression":"\"\"","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":"\"\"","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
vartotalsyearsforchar: ["wm.Variable", {"isList":true,"type":"cmodels"}, {}],
svgetdownloadsinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloadsinit"}, {"onSuccess":"svgetdownloadsinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire6: ["wm.Wire", {"expression":"${selectRedCode.dataValue}","targetProperty":"myredcode"}, {}],
wire7: ["wm.Wire", {"expression":"'download\"","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":"${selectState.dataValue}","targetProperty":"mystate"}, {}],
wire8: ["wm.Wire", {"expression":"${selectYear1.dataValue}","targetProperty":"myyear"}, {}],
wire4: ["wm.Wire", {"expression":"${selectDay.dataValue}","targetProperty":"myday"}, {}],
wire5: ["wm.Wire", {"expression":"${selectMonth.dataValue}","targetProperty":"mymonth"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire3: ["wm.Wire", {"expression":"${selectContentModel.displayValue}","targetProperty":"mycmodel"}, {}],
wire: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}],
wire2: ["wm.Wire", {"expression":"${selectAccessCode.displayValue}","targetProperty":"myaccesscode"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetdownloadsinit: ["wm.Variable", {"isList":true,"json":"[null]","type":"visitlog1_0"}, {"onSetData":"vargetdownloadsinitSetData"}],
svgetdetailpageinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpageinit"}, {"onSuccess":"svgetdetailpageinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire7: ["wm.Wire", {"expression":"'detail page","targetProperty":"mytype"}, {}],
wire8: ["wm.Wire", {"expression":"${selectOida.dataValue}","targetProperty":"mypid"}, {}],
wire9: ["wm.Wire", {"expression":"${selectYear1.dataValue}","targetProperty":"myyear"}, {}],
wire5: ["wm.Wire", {"expression":"${selectDay.dataValue}","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":"${selectMonth.dataValue}","targetProperty":"mymonth"}, {}],
wire6: ["wm.Wire", {"expression":"${selectState.dataValue}","targetProperty":"mystate"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire2: ["wm.Wire", {"expression":"${selectContentModel.displayValue}","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":"${selectRedCode.displayValue}","targetProperty":"myredcode"}, {}],
wire1: ["wm.Wire", {"expression":"${selectAccessCode.displayValue}","targetProperty":"myaccesscode"}, {}],
wire: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetdetailpageinit: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetdetailpageinitSetData"}],
svgetoidainfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getoidainfo"}, {"onSuccess":"svgetoidainfoSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypidin"}, {}]
}]
}]
}],
varoidainfo: ["wm.Variable", {"isList":true,"type":"oidainfo"}, {}],
svgetviewsdetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewsdetail"}, {"onSetData":"svgetviewsdetailSetData"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire4: ["wm.Wire", {"expression":"\n'view'","targetProperty":"mytype"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire5: ["wm.Wire", {"expression":"${selectYear1.dataValue}*1","targetProperty":"myyear"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
svgetdownloaddetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloaddetail"}, {"onSuccess":"svgetdownloaddetailSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"''","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":"''","targetProperty":"myredcode"}, {}],
wire3: ["wm.Wire", {"expression":"''","targetProperty":"mymonth"}, {}],
wire4: ["wm.Wire", {"expression":"''","targetProperty":"myday"}, {}],
wire5: ["wm.Wire", {"expression":"''","targetProperty":"mycmodel"}, {}],
wire6: ["wm.Wire", {"expression":"''","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":"'download'","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"\"\"","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetdownloaddetail: ["wm.Variable", {"isList":true,"json":"[]","type":"visitlog1_0"}, {}],
vargetviewsinit: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetviewsinitSetData"}],
svgetviewsinit: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"dontExecute","operation":"main","service":"getviewsinit"}, {"onSuccess":"svgetviewsinitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"myday"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire9: ["wm.Wire", {"expression":"${selectYear1.displayValue}","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire2: ["wm.Wire", {"expression":"${selectContentModel.displayValue}","targetProperty":"mycmodel"}, {}],
wire1: ["wm.Wire", {"expression":"${selectAccessCode.displayValue}","targetProperty":"myaccesscode"}, {}],
wire: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
svgetviewsinit2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"main","service":"getviewsinit2"}, {"onSuccess":"svgetviewsinit2Success"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":"${selectYear1.dataValue};","targetProperty":"myyear"}, {}],
wire: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstance"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
svgetmetadatainit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getmetadatainit"}, {"onSuccess":"svgetmetadatainitSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":"'show metadata'","targetProperty":"mytype"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire7: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectYear1","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetmetadatainit: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetmetadatainitSetData"}],
timermetadata: ["wm.Timer", {"autoStart":true,"repeating":false}, {"onTimerFire":"svgetmetadatainit","onTimerFire1":"timergetdownloadsinit"}],
timergetviewsinit2: ["wm.Timer", {"repeating":false}, {"onTimerFire":"svgetviewsinit2"}],
timergetdownloadsinit: ["wm.Timer", {"repeating":false}, {"onTimerFire":"svgetdownloadsinit","onTimerFire1":"timergetviewsinit2"}],
vargetviewdetail: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetviewdetailSetData"}],
vargetdownloadsinitforchart: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
vargetmetadatainitforchart: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
vargetdetailpageinitforchart: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
vargetviewsinitforchart: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
vargetviewdetailforoida: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetviewdetailforoidaSetData","onSetData1":"svgetmetadatadetailforoida"}],
svgetviewsdetailforoida: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewdetailforoida"}, {"onSuccess":"svgetviewsdetailforoidaSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"''","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":"''","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":"''","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":"''","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":"''","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":"''","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":"\"\"","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layerPID","targetProperty":"loadingDialog"}, {}]
}]
}],
svgettop: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"gettop"}, {"onSuccess":"svgettopSuccess","onSuccess1":"svgettotalsyearsinit"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire3: ["wm.Wire", {"expression":"\"download\"","targetProperty":"mytype"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mymonth"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectYear1.dataValue","targetProperty":"myyear"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
vargettop: ["wm.Variable", {"isList":true,"type":"gettop1"}, {}],
svgetmetadatadetailforoida: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getmetadatadetailforoida"}, {"onSuccess":"svgetmetadatadetailforoidaSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"''","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":"''","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":"''","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":"''","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":"''","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":"''","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
wire9: ["wm.Wire", {"expression":"\"\"","targetProperty":"myyear"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layerPID","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetmetadatadetailforoida: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"svgetdetailpageforoida"}],
svgetdetailpageforoida: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpageforoida"}, {"onSuccess":"svgetdetailpageforoidaSuccess"}, {
input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"''","targetProperty":"myowner"}, {}],
wire1: ["wm.Wire", {"expression":"''","targetProperty":"myaccesscode"}, {}],
wire2: ["wm.Wire", {"expression":"''","targetProperty":"mycmodel"}, {}],
wire3: ["wm.Wire", {"expression":"''","targetProperty":"myday"}, {}],
wire4: ["wm.Wire", {"expression":"''","targetProperty":"mymonth"}, {}],
wire5: ["wm.Wire", {"expression":"''","targetProperty":"myredcode"}, {}],
wire6: ["wm.Wire", {"expression":"''","targetProperty":"mystate"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
wire8: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"instanceis"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"[main].selectInstance.displayValue","targetProperty":"myinstanceis1"}, {}],
wire9: ["wm.Wire", {"expression":"\"\"","targetProperty":"myyear"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layerPID","targetProperty":"loadingDialog"}, {}]
}]
}],
vargetdetailpageforoida: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
timerdownloadsforoida: ["wm.Timer", {"repeating":false}, {"onTimerFire":"timerdownloadsforoidaTimerFire"}],
navigationCall1: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].layerMostDownloaded2","targetProperty":"layer"}, {}]
}]
}]
}],
navigationCall2: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].layerMostViewed","targetProperty":"layer"}, {}]
}]
}]
}],
notificationCall1: ["wm.NotificationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}]
}],
navigationCall3: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].layerDetailPage","targetProperty":"layer"}, {}]
}]
}]
}],
navigationCall4: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].layerShowMetadata","targetProperty":"layer"}, {}]
}]
}]
}],
varforpiwikactivitychart: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label4: ["wm.Label", {"align":"left","caption":"Overview of Digital  Inventory","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"svgetdetailpageinit"}],
panel2: ["wm.Panel", {"height":"42px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#dadada"},"verticalAlign":"middle","width":"100%"}, {}, {
buttonshowall: ["wm.Button", {"border":"1","caption":"Show All","height":"30px","margin":"4"}, {"onclick4":"buttonshowallClick4"}],
selectOida: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange7":"selectOidaChange7","onchange8":"layerPID"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].vargetoidasinit","targetProperty":"dataSet"}, {}]
}]
}],
selectYear: ["wm.Text", {"caption":"Year","captionSize":"50px","dataValue":"0","displayValue":"0","emptyValue":"zero","height":"30px","showing":false,"width":"158px"}, {}],
selectYear1: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2008,2009,2010,2011,2012,2013,2014,2015,2016","restrictValues":false,"width":"124px"}, {"onchange":"serviceVariable1","onchange1":"svinvstates","onchange4":"svinvaccesscode","onchange5":"selectYear1Change5"}],
selectMonth: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange2":"serviceVariable1","onchange3":"svinvaccesscode","onchange4":"svinvstates"}],
selectDay: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":31,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange2":"serviceVariable1","onchange4":"svinvstates","onchange5":"svinvaccesscode"}],
selectOwner1: ["wm.SelectMenu", {"allowNone":true,"caption":"Owner","captionSize":"70px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","width":"152px"}, {"onchange":"serviceVariable1","onchange1":"svinvstates","onchange4":"svinvaccesscode"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetownersinit","targetProperty":"dataSet"}, {}]
}]
}],
selectState: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","width":"152px"}, {"onchange":"serviceVariable1","onchange1":"svinvstates","onchange4":"svinvaccesscode"}],
selectAccessCode: ["wm.SelectMenu", {"allowNone":true,"caption":"Access","captionSize":"60px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"152px"}, {"onchange":"serviceVariable1","onchange1":"svinvstates","onchange4":"svinvaccesscode"}],
selectRedCode: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange":"serviceVariable1","onchange1":"svinvstates","onchange4":"svinvaccesscode"}],
selectOwner: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"showing":false,"styles":{},"width":"168px"}, {"onchange":"serviceVariable1"}],
selectContentModel: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"223px"}, {"onchange2":"serviceVariable1","onchange3":"svinvstates","onchange4":"svinvaccesscode"}],
selectInstance1: ["wm.SelectMenu", {"allowNone":true,"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":"SITE","showing":false,"styles":{},"width":"119px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
}]
}]
}],
labeldigitalobjects: ["wm.Label", {"caption":"Digital objects uploaded per month","height":"39px","padding":"4","showing":false,"styles":{"fontSize":"22px","backgroundColor":"#0088e2","color":"#ffffff"},"width":"100%"}, {}],
panel3: ["wm.Panel", {"height":"259px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
dojoGridcmodels1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Month","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Uploads","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Uploads: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"width":"253px"}, {"onHeaderClick":"svuploads"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varuploads","targetProperty":"dataSet"}, {}]
}]
}],
dojoChart1: ["wm.DojoChart", {"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varuploads","targetProperty":"dataSet"}, {}]
}]
}]
}],
paneloida: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
labeloidacreated: ["wm.Label", {"align":"left","caption":"Created:","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"280px"}, {"onclick":"svgetoidainfo"}],
labeloidaowner: ["wm.Label", {"align":"left","caption":"Owner:","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"280px"}, {}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"312px"}, {}],
spacer1: ["wm.Spacer", {"height":"48px","showing":false,"width":"35px"}, {}],
dojoGridownwers: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"owner","title":"Owners","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"# Objects","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Owners: \" + ${owner} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"# Objects: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{},"width":"313px"}, {"onHeaderClick":"serviceVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varowners","targetProperty":"dataSet"}, {}]
}]
}],
panelcmodels: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top","width":"255px"}, {}, {
button1: ["wm.Button", {"border":"1","height":"30px","margin":"4","showing":false}, {"onclick":"svgetviewsinit2"}]
}],
spacer8: ["wm.Spacer", {"height":"48px","showing":false,"width":"10px"}, {}],
spacer9: ["wm.Spacer", {"height":"48px","showing":false,"width":"50px"}, {}],
panelpiwikold: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"200px"}, {}, {
panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Cmodel","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Count","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cmodel: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Count: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"cmodels","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{},"width":"150px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartotalsyearsforchar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelWelcome: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"showing":false,"verticalAlign":"top","width":"319px"}, {}, {
label3: ["wm.Label", {"caption":"Welcome to Phaidra Statistics!","height":"40px","padding":"4","styles":{"fontSize":"20px"},"width":"100%"}, {}],
label6: ["wm.Label", {"caption":"","height":"185px","padding":"4","styles":{"fontSize":"20px"},"width":"100%"}, {}],
selectInstance: ["wm.SelectMenu", {"caption":"Select SITE","dataField":"instance","dataType":"getinstances1","dataValue":undefined,"desktopHeight":"35px","displayField":"instance","displayValue":"","height":"35px","mobileHeight":"35%","placeHolder":"SITE","required":true,"styles":{"color":"#ffffff"},"width":"168px"}, {"onchange":"selectInstanceChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
}]
}],
spacer17: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
buttonshowall1: ["wm.Button", {"border":"1","caption":"Show All Objects in Repository","desktopHeight":"86px","disabled":true,"height":"86px","margin":"4","styles":{"fontSize":"22px"},"width":"100%"}, {"onclick4":"buttonshowall1Click4"}]
}],
breadcrumbLayers1: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
layerOverview: ["wm.Layer", {"borderColor":"","caption":"Inventory","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelcontent1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"900px"}, {}, {
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"bottom","width":"100%"}, {}, {
spacer21: ["wm.Spacer", {"height":"48px","showing":false,"width":"43px"}, {}],
panelContentModels: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"277px"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","border":"0,0,0,5","caption":"Content Models","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoGridcmodels: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Content Models","width":"100%","align":"left","formatFunc":"","editorProps":null,"backgroundColor":"if(${cmodel}==\"Total Objects in Repo\")\"green\";","textColor":"if(${cmodel}==\"Total Objects in Repo\")\"white\";","mobileColumn":false},
{"show":true,"field":"count","title":"# Objects","width":"50%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"expression":"","backgroundColor":"if(${cmodel}==\"Total Objects in Repo\")\"green\";","textColor":"if(${cmodel}==\"Total Objects in Repo\")\"white\";","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Content Models: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"# Objects: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20%","align":"right","expression":"if(${cmodel}!=\"total\") {\"  >\"} else {\"\"}","backgroundColor":"if(${cmodel}==\"total\")\"green\";","isCustomField":true,"mobileColumn":false}
],"dsType":"cmodels","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{}}, {"onSelect":"dojoGridcmodelsSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varcmodels","targetProperty":"dataSet"}, {}]
}]
}],
spacer7: ["wm.Spacer", {"height":"48px","showing":false,"width":"71px"}, {}]
}],
html2: ["wm.Html", {"html":"<div id=\"chartOne\"></div>","minDesktopHeight":15,"showing":false,"styles":{}}, {"onRightClick":"html2RightClick"}],
spacer19: ["wm.Spacer", {"height":"48px","width":"68px"}, {}],
panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
chartcontentmodels: ["wm.DojoChart", {"border":"0,0,0,0","chartTitle":"Content Models","chartType":"Pie","height":"100%","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalLegend":true,"width":"100%","xAxis":"cmodel","yAxis":"count"}, {"onClick":"chartcontentmodelsClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varcmodelsforchart","targetProperty":"dataSet"}, {}]
}]
}],
html1: ["wm.Box", {"allowScriptTags":true,"height":"100%","minDesktopHeight":15,"minHeight":15,"showing":false,"width":"427px"}, {}],
spacer20: ["wm.Spacer", {"height":"19px","width":"53px"}, {}],
chartcontentmodels1: ["wm.DojoChart", {"chartTitle":"Digital Objects in Repository per Year","height":"221px","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"cmodel","yAxis":"count"}, {"onClick":"chartcontentmodels1Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartotalsyearsforchar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}]
}]
}],
spacer18: ["wm.Spacer", {"height":"48px","width":"45px"}, {}],
panel22: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"450px"}, {}, {
buttonPiwik: ["wm.Button", {"border":"1","caption":"Show Piwik Activity","desktopHeight":"50px","height":"50px","margin":"4","width":"100%"}, {"onclick":"layerPiwik"}],
panelaccessinfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Access","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
paneaccexscodes: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridAccesscode: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"accesscode","title":"Access codes","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"# Objects","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Access codes: \" + ${accesscode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"# Objects: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20px","align":"right","expression":"\"  >\"","isCustomField":true}
],"height":"119px","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"175px"}, {"onHeaderClick":"svinvaccesscode","onSelect":"dojoGridAccesscodeSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varaccesscode","targetProperty":"dataSet"}, {}]
}]
}],
spacer5: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
chartaccesscodes: ["wm.DojoChart", {"chartTitle":undefined,"chartType":"Pie","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"accesscode","yAxis":"count"}, {"onClick":"chartaccesscodesClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varaccesscode","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelstatesinfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
labelStates: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"States","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridState: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"state","title":"States","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"# Objects","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"States: \" + ${state} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"# Objects: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20px","align":"right","expression":"\"  >\"","isCustomField":true}
],"height":"155px","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{},"width":"175px"}, {"onHeaderClick":"serviceVariable1","onSelect":"dojoGridStateSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varstates","targetProperty":"dataSet"}, {}]
}]
}],
spacer6: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
chartstates: ["wm.DojoChart", {"chartTitle":undefined,"chartType":"Pie","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"state","yAxis":"count"}, {"onClick":"chartstatesClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varstates","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}],
spacer16: ["wm.Spacer", {"height":"48px","showing":false,"width":"5px"}, {}]
}],
layerPiwik: ["wm.Layer", {"borderColor":"","caption":"Piwik","horizontalAlign":"center","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layerPiwikShow"}, {
panelTopObjects: ["wm.Panel", {"height":"231px","horizontalAlign":"left","verticalAlign":"top","width":"274px"}, {}, {
label25: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","border":"0,0,0,0","caption":"Top Objects","height":"30px","margin":"0,0,0,0","padding":"4","styles":{"backgroundColor":"#e21300","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"svgettotalsyearsinit"}],
dojoGrid19: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"oid","title":"PID","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"cmodel","title":"Cmodel","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"created","title":"Created","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"PID: \" + ${oid} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Event: \" + ${typeis}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"typeis","title":"Event","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"#","width":"50px","align":"right","formatFunc":"","editorProps":null,"mobileColumn":true}
],"dsType":"gettop1","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {"onSelect":"dojoGrid19Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargettop","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer22: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
panetotheright: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
panelpiwikandaccess: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
panelaccessstates: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"10px","showing":false,"width":"96px"}, {}],
paneldownloadsinfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label5: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Downloads","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"navigationCall1"}],
panealdownloadsdetail: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGriddownloadsinfo: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Dayvisit: \" + ${dayvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dayvisit","title":"Dayvisit","width":"40px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":true,"field":"arrow","width":"20px","align":"right","formatProps":null,"editorProps":null,"expression":"if(${dayvisit}!=\"total\") {\"  >\"} else {\"\"}","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"145px"}, {"onHeaderClick":"svinvaccesscode","onSelect":"dojoGriddownloadsinfoSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadsinit","targetProperty":"dataSet"}, {}]
}]
}],
spacer10: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
charttotaldownloads: ["wm.DojoChart", {"chartTitle":undefined,"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"dayvisit","yAxis":"howmany","ydisplay":"charttotaldownloadsReadOnlyNodeFormat"}, {"onClick":"charttotaldownloadsClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadsinitforchart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelviewsinfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
labelViews: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Views","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"navigationCall2"}],
panel15: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridViewInfo: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Dayvisit: \" + ${dayvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dayvisit","title":"Dayvisit","width":"40px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"arrow","width":"20px","align":"right","formatProps":null,"editorProps":null,"expression":"if(${dayvisit}!=\"total\") {\"  >\"} else {\"\"}","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{},"width":"145px"}, {"onSelect":"dojoGridViewInfoSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsinit","targetProperty":"dataSet"}, {}]
}]
}],
spacer13: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
chartviewinfo: ["wm.DojoChart", {"chartTitle":undefined,"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"dayvisit","xMinorTicks":true,"yAxis":"howmany"}, {"onClick":"chartviewinfoClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsinitforchart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
spacer3: ["wm.Spacer", {"height":"48px","width":"20px"}, {}],
panelpiwik: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
spacer11: ["wm.Spacer", {"height":"10px","showing":false,"width":"96px"}, {}],
paneldetailpageinfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
labelDetailPage: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Detail Page","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridState1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Dayvisit: \" + ${dayvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dayvisit","title":"Dayvisit","width":"40px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":true,"field":"arrow","width":"20px","align":"right","formatProps":null,"editorProps":null,"expression":"if(${dayvisit}!=\"total\") {\"  >\"} else {\"\"}","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"155px","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{},"width":"145px"}, {"onHeaderClick":"serviceVariable1","onSelect":"dojoGridState1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageinit","targetProperty":"dataSet"}, {}]
}]
}],
spacer12: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
chartdetailpage: ["wm.DojoChart", {"chartTitle":undefined,"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"dayvisit","yAxis":"howmany"}, {"onClick":"chartdetailpageClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageinitforchart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panealmetadatainfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
labelShowMetadata: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Show Metadata","height":"30px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"navigationCall4"}],
panelmetadatadetail: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridState3: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Dayvisit: \" + ${dayvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
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
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dayvisit","title":"Dayvisit","width":"40px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":true,"field":"arrow","width":"20px","align":"right","formatProps":null,"editorProps":null,"expression":"if(${dayvisit}!=\"total\") {\"  >\"} else {\"\"}","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"noHeader":true,"primaryKeyFields":["howmany"],"singleClickEdit":true,"styles":{},"width":"145px"}, {"onHeaderClick":"serviceVariable1","onSelect":"dojoGridState3Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetmetadatainit","targetProperty":"dataSet"}, {}]
}]
}],
spacer15: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
chartdetailpage1: ["wm.DojoChart", {"chartTitle":undefined,"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"dayvisit","yAxis":"howmany","ydisplay":"chartdetailpage1ReadOnlyNodeFormat"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetmetadatainitforchart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerPID: ["wm.Layer", {"borderColor":"","caption":"PID","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onDeactivate":"layerPIDDeactivate"}, {
panesolooida: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
labeloida1: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"300px"}, {"onclick":"svgetdetailpageforoida"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"'Object: '+${selectOida.dataValue}","targetProperty":"caption"}, {}]
}]
}],
dojoGridoidainfo1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"created","title":"Created","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Owner: \" + ${owner} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Created: \" + ${created}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content model: \" + ${contentmodel}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Access: \" + ${accesscode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"State: \" + ${state}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"contentmodel","title":"Content model","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"accesscode","title":"Access","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"oidainfo","height":"100%","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varoidainfo","targetProperty":"dataSet"}, {}]
}]
}],
button2: ["wm.Button", {"border":"1","caption":"View Image","height":"100%","margin":"4"}, {"onclick":"button2Click"}],
button3: ["wm.Button", {"border":"1","caption":"Open in Phaidra","height":"100%","margin":"4"}, {"onclick":"button3Click"}],
buttonGoBack: ["wm.Button", {"border":"1","caption":"<br>Go Back","height":"100%","imageIndex":3,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonGoBackClick","onclick1":"layerPiwik"}]
}],
paneldetailssolooida: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
paneldownloadsviewsovertime: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
paneldonloadsovertime: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label7: ["wm.Label", {"align":"left","caption":"Downloads grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart2: ["wm.DojoChart", {"chartTitle":"Downloads grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {"onClick":"dojoChart2Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid3: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"primaryKeyFields":["v1"],"singleClickEdit":true,"styles":{},"width":"0px"}, {"onRenderData":"dojoGrid3RenderData","onSelect":"dojoGrid3Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelviewsovertime1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label8: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart3: ["wm.DojoChart", {"chartTitle":"Views grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {"onClick":"dojoChart3Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailforoida","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid4: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true,"width":"0px"}, {"onRenderData":"dojoGrid4RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailforoida","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelmetadataviews: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelmetadatavertime2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label9: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart4: ["wm.DojoChart", {"chartTitle":"Metadata grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetmetadatadetailforoida","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid5: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true,"width":"0px"}, {"onRenderData":"dojoGrid5RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetmetadatadetailforoida","targetProperty":"dataSet"}, {}]
}]
}]
}],
paneldetailpagesovertime3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label10: ["wm.Label", {"align":"left","caption":"Show Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart5: ["wm.DojoChart", {"chartTitle":"Detail Page grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageforoida","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid6: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true,"width":"0px"}, {"onRenderData":"dojoGrid6RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageforoida","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
tabLayersSoloOida: ["wm.TabLayers", {"showing":false}, {}, {
layerViewsOida: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Views","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
layerDownload: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Download","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panesolooida1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
paneldonloadsovertime1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label17: ["wm.Label", {"align":"left","caption":"Downloads grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"svgetdownloaddetail"}],
dojoChart10: ["wm.DojoChart", {"chartTitle":"Downloads grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid11: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"primaryKeyFields":["v1"],"singleClickEdit":true,"styles":{}}, {"onRenderData":"dojoGrid11RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelviewsovertime2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
label18: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart11: ["wm.DojoChart", {"chartTitle":"Views grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailforoida","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid12: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {"onRenderData":"dojoGrid12RenderData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailforoida","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelmetadataviews2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panelviewsvertime4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
label19: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart12: ["wm.DojoChart", {"chartTitle":"Downloads grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid13: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelmetadatasovertime5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label20: ["wm.Label", {"align":"left","caption":"Show Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart13: ["wm.DojoChart", {"chartTitle":"Views grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid14: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
panel19: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel20: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelmetadataoida1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label21: ["wm.Label", {"align":"left","caption":"Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"svgetdownloaddetail"}],
dojoChart14: ["wm.DojoChart", {"chartTitle":"Metadata grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid15: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Show Metadata","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Show Metadata: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"primaryKeyFields":["v1"],"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
paneldetailpageoida1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label22: ["wm.Label", {"align":"left","caption":"Detail Page grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart15: ["wm.DojoChart", {"chartTitle":"Detail Page grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid16: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Detail Page","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Detail Page: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetail","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelmetadataviews3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panelviewsvertime5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
label23: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart16: ["wm.DojoChart", {"chartTitle":"Downloads grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid17: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelmetadatasovertime6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label24: ["wm.Label", {"align":"left","caption":"Show Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart17: ["wm.DojoChart", {"chartTitle":"Views grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid18: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"layer2","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"layer3","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelmetadataoida: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label13: ["wm.Label", {"align":"left","caption":"Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {"onclick":"svgetdownloaddetail"}],
dojoChart6: ["wm.DojoChart", {"chartTitle":"Metadata grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid7: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Show Metadata","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Show Metadata: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"primaryKeyFields":["v1"],"singleClickEdit":true,"styles":{},"width":"0px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
paneldetailpageoida: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label14: ["wm.Label", {"align":"left","caption":"Detail Page grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart7: ["wm.DojoChart", {"chartTitle":"Detail Page grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"howmany","yAxis":"monthvisit"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageforoida","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid8: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Detail Page","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Detail Page: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdetailpageforoida","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panelmetadataviews1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panelviewsvertime3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
label15: ["wm.Label", {"align":"left","caption":"Views grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart8: ["wm.DojoChart", {"chartTitle":"Downloads grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid9: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}],
panelmetadatasovertime4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label16: ["wm.Label", {"align":"left","caption":"Show Metadata grouped by date","height":"44px","padding":"4","showing":false,"styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
dojoChart9: ["wm.DojoChart", {"chartTitle":"Views grouped by date","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}],
dojoGrid10: ["wm.DojoGrid", {"columns":[
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
{"show":true,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Monthvisit: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
panelcenter: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"550px"}, {}, {
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"cmodel","title":"Cmodel","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Count","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cmodel: \" + ${cmodel} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Count: \" + ${wm.runtimeId}.formatCell(\"count\", ${count}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"cmodels","height":"100%","minDesktopHeight":60,"noHeader":true,"showing":false,"singleClickEdit":true,"styles":{},"width":"150px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vartotalsyearsforchar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
spacer14: ["wm.Spacer", {"height":"48px","styles":{},"width":"5px"}, {}],
spacer2: ["wm.Spacer", {"height":"48px","width":"10px"}, {}]
}]
}]
};

Inventory.prototype._cssText = '';
Inventory.prototype._htmlText = '';