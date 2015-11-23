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