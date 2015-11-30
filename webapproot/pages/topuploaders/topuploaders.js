dojo.declare("topuploaders", wm.Page, {
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
        var howmany=this.varuploads.getCount();
        var tot = 0;
        for (i = 0; i < howmany; i++) {
            var myamount = this.varuploads.getItem(i).getData().count;
            // console.log(myamount);
            tot = tot + myamount;
        }
          this.labeltotalmain.setCaption("Total: " + tot);
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
        
 // this.labeltotalmain.setCaption("Total: " + tot);        
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
	_end: 0
});