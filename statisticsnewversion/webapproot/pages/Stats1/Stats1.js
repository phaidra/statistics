dojo.declare("Stats1", wm.Page, {
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
        this.varvisitors.setData(obj);
    },
    serviceVariable1Success1: function(inSender, inDeprecated) {

    },
    serviceVariable1SetData: function(inSender) {

    },
    varvisitorsSetData: function(inSender) {
        var tot = inSender.getCount();
        var totrunnung = 0;
        for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            console.log(mytot);
            totrunnung = mytot + totrunnung;
        }

        this.labelFound.setCaption("Total " + this.selectType.getValue("displayValue") + ": " + totrunnung);
        this.varforchart.addItem({
            name: "Downloads",
            dataValue: totrunnung
        });
    },
    dojoGrid1HowmanyFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        var n = inValue.toString().replace(/\B(?=(\d{3})+\b)/g, ",");
        console.log(n);
        return n;
    },
    _end: 0
});