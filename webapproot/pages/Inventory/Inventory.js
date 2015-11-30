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