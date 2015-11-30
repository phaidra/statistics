dojo.declare("uploads", wm.Page, {
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
        // this.labeldigitalobjects.setCaption("Digital objects uploaded - "  + "Found: " + tot);
          this.labeltotalmain.setCaption("Total: " + tot);
       // this.labeldigitalobjects.setCaption("Digital objects uploaded - " + yearstr + "Total: " + tot);
    },
    svgetcreateionmonthSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
            console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varuploadsmonth.setData(obj);
    },
    dojoGridcmodels1Select: function(inSender) {
        var idx = inSender.getSelectedIndex();
        var valueis = inSender.getCell(idx, "monthis");
        valueis = valueis.split("-");
        var mymonthis = valueis[0];
        var myyearis = valueis[1];

        this.svgetcreateionmonth.input.setValue("mymonth", mymonthis);
        this.svgetcreateionmonth.input.setValue("myyear", myyearis);
        this.svgetcreateionmonth.update();
        this.breadcrumbLayers1.setLayer("layerperMonth");
         this.layerperMonth.setValue("caption","Month: "+mymonthis+" Year: "+myyearis);
this.dojoChart2.setValue("chartTitle","Uploads Per Month for "+mymonthis+"-"+myyearis);

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
        
         this.layerDay.setValue("caption","Day: "+mydayis+" Month: "+mymonthis+" Year: "+myyearis);
this.dojoChart3.setValue("chartTitle","Per Content Model<br>Uploads Per Day for "+mydayis+"-"+mymonthis+"-"+myyearis);

	},
	dojoGridcmodels3Select: function(inSender) {
       

	},
  svgetcreationdaySuccess: function(inSender, inDeprecated) {
		var str = '[' + inSender.data.dataValue + ']';
            console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varuploadsperday.setData(obj);
        
	},
	varuploadsperdaySetData: function(inSender) {
		var howmany = inSender.getCount();
        var dateis=this.layerDay.getValue("caption");
        this.labeltotalday.setCaption(dateis+"<br>Total: " + howmany);
        var myusers=[]; 
       var mycmodels=[]; 
        var tot = 0;
        var tot3=0;
        for (i = 0; i < howmany; i++) {
            var mycmodel = inSender.getItem(i).getData().cmodel;
            var myuser = inSender.getItem(i).getData().owner;
           // console.log(myamount);
           mycmodels.push(mycmodel);
           myusers.push(myuser);
           
        }
         
         myusers.sort();
         mycmodels.sort();
         
this.varuploadsperdayforchart.clearData();
this.varuploadsforchart2.clearData();

//begin sorting and frequency cmodels
var current = null;
    var cnt = 0;
    for ( i = 0; i < mycmodels.length; i++) {
        if (mycmodels[i] != current) {
            if (cnt > 0) {
               // console.log(current + ' 1 - comes --> ' + cnt + ' times<br>');
                this.varuploadsperdayforchart.addItem({cmodel:current,monthis:cnt});
            }
            current = mycmodels[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
       // console.log(current + ' 2 - comes --> ' + cnt + ' times');
        this.varuploadsperdayforchart.addItem({cmodel:current,monthis:cnt});
    }
//end sorting and frequency cmodels
//begin sorting and frequency cmodels
 current = null;
     cnt = 0;
    for ( i = 0; i < myusers.length; i++) {
        if (myusers[i] != current) {
            if (cnt > 0) {
               // console.log(current + ' 1 - comes --> ' + cnt + ' times<br>');
                this.varuploadsforchart2.addItem({owner:current,monthis:cnt});
            }
            current = myusers[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
       // console.log(current + ' 2 - comes --> ' + cnt + ' times');
        this.varuploadsforchart2.addItem({owner:current,monthis:cnt});
    }
    if(this.varuploadsforchart2.getCount()>1)
    {this.dojoChartperuser.show();
    }
    else
    {
        this.dojoChartperuser.hide();
        }
        
         if(this.varuploadsperdayforchart.getCount()>1)
    {this.dojoChart3.show();
    }
    else
    {
        this.dojoChart3.hide();
        }
//end sorting and frequency cmodels
//this.dojoChart4.setValue("chartTitle","Per User<br>Uploads Per Day for "+mydayis+"-"+mymonthis+"-"+myyearis);

	},
	svgetoidainitSuccess: function(inSender, inDeprecated) {
		 var str = '[' + inSender.data.dataValue + ']';
      //    console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetoidasinit.setData(obj);
	},
	svgetownersinitSuccess: function(inSender, inDeprecated) {
		var str = '[' + inSender.data.dataValue + ']';
      //    console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetownersinit.setData(obj);
	},
	varuploadsmonthSetData: function(inSender) {
        var howmany = inSender.getCount();
        
        var tot = 0;
        for (i = 0; i < howmany; i++) {
            var myamount = inSender.getItem(i).getData().count;
           // console.log(myamount);
            tot = tot + (myamount*1);
        }
        // this.labeldigitalobjects.setCaption("Digital objects uploaded - "  + "Found: " + tot);
          this.labeltotalmonth.setCaption(this.layerperMonth.getValue("caption")+"<br>Total: " + tot);
          var xx=this.dojoChart1.getValue("chartTitle");
	//	this.dojoChart1.setValue("chartTitle",tot+" "+xx);
	},
	layer1Show: function(inSender) {
		this.dojoGridcmodels1.deselectAll();
	},
	dojoGridcmodels3OpeninphaidraFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
	if(rowObj.cmodel!="total")
    {
        return	 '<a href="'+
        'https://phaidra.univie.ac.at/detail_object/' +rowObj.oid+
        '" target="_blank">Open</a>  ';
       
    }
	},
	dojoChart1Click: function(inSender, e, dataObj) {
		this.dojoGridcmodels1.selectByQuery({monthis:dataObj.monthis});
	},
	dojoChart2Click: function(inSender, e, dataObj) {
		    this.dojoGridcmodels2.selectByQuery({monthis:dataObj.monthis});
	},
	layerperMonthShow: function(inSender) {
		this.dojoGridcmodels2.deselectAll();
	},
	_end: 0
});