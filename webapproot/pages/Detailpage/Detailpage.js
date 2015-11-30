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