dojo.declare("visits1", wm.Page, {
    start: function() {
        this.date1.setDataValue(null);
        this.date1.setDisplayValue(null);

    },
    "preferredDevice": "desktop",

    serviceVariable1Success: function(inSender, inDeprecated) {

        var str = '[' + inSender.data.dataValue + ']';
        console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
       // this.varvisitors.setData(obj);
       this.varstats.setData(obj);
    },
    serviceVariable1Success1: function(inSender, inDeprecated) {

    },
    serviceVariable1SetData: function(inSender) {

    },
    varvisitorsSetData: function(inSender) {
        
       
    },
    varstatsSetData: function(inSender) {
		var tot = inSender.getCount();
        var totrunnung = 0;
        
        for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().visits;
            mytot = mytot * 1;
            console.log(mytot);
            totrunnung = mytot + totrunnung;
        }


        this.labelFound.setCaption("Total Visits: " + totrunnung);
	},
	_end: 0
});