dojo.declare("Main", wm.Page, {
    start: function() {
        this.vargetviews.clearData();
        var map = new Datamap({
            element: document.getElementById('container')
        });
            app.svgetinstances.update();
            this.tabLayers1.hide();
    },
    "preferredDevice": "desktop",

    svretusersSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.verretunrningusers.setData(obj);

    },
    verretunrningusersSetData: function(inSender) {
        var totis = (inSender.getItem(0).getData().total) * 1 + (inSender.getItem(1).getData().total) * 1;
        this.labeltotalvisits.setCaption("Total visits: " + totis);
    },
    svgetvisitorspercountrySuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varvisitorspercountry.setData(obj);
        this.varvisitorspercountry2.setData(obj);
    },
    varosSetData: function(inSender) {

    },
    svgetosSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varos.setData(obj);
    },
    svgetbrowserSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varbrowser.setData(obj);
    },
    varbrowserSetData: function(inSender) {

    },
    svgettopdownloadsSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vartopdownloads.setData(obj);
    },
    svgetmetadataSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.varmetadata.setData(obj);
    },
    svgetviewsSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetviews.setData(obj);
    },
    dojoGrid6Click: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {


    },
    dojoGridTopDownloadsSelect: function(inSender) {

    },
    dojoGrid6Select: function(inSender) {

    },
    dojoGrid5Select: function(inSender) {

    },
    dojoGrid6CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        var index = inSender.getSelectedIndex();
        var oid = inSender.getCell(index, "v1");
        var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
        window.open(urlis);
    },
    dojoGridTopDownloadsCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        var index = inSender.getSelectedIndex();
        var oid = inSender.getCell(index, "v1");
        var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
        window.open(urlis);
    },
    dojoGrid5CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        var index = inSender.getSelectedIndex();
        var oid = inSender.getCell(index, "v1");
        var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
        window.open(urlis);
    },
    searchOIDChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        //  console.log(inDisplayValue);
        this.dojoGridViews.setQuery({
            v1: inDisplayValue
        });
        // this.vargetviews.update();
    },
    selectPIDChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        //	console.log(inDisplayValue);
        if (inDisplayValue.length < 1) {
            this.dojoGridViews.setQuery(null);
            this.dojoGridTopDownloads.setQuery(null);
            this.dojoGridMetadata.setQuery(null);

        }
        else {
            //	this.dojoGridViews.setQuery({v1:inDisplayValue});
            // this.dojoGridTopDownloads.setQuery({v1:inDisplayValue});
            //    this.dojoGridMetadata.setQuery({v1:inDisplayValue});
        }
    },
    vargetviewsSetData: function(inSender) {
        this.varuploadsperdayforchart.clearData();
        // var tot = inSender.getCount();
        // console.log(tot);
        var totrunnung = 0;
/* for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //  console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        */

        //this.labeltotalobjectviews.setValue("caption","Objects-Views- "+totrunnung);
        var howmany = inSender.getCount();
        
        //this.labeltotalobjectviews.setValue("caption","Objects: "+howmany+"  Views- "+totrunnung);
        var totxx2 = 0;
        for (i = 0; i < howmany; i++) {
            var mycount22 = inSender.getItem(i).getData().howmany;
            totxx2 = totxx2 + (mycount22 * 1);

        }
        // this.labeltotalobjectviews.setCaption("Total: " + totxx2);
        this.labeltotalobjectviews.setValue("caption", "Objects: " + howmany + "   Views " + totxx2);
     //   var howmany=inSender.getCount();
        if(howmany>11)
        {
            howmany=10;
            }
            
            for (i=0;i<howmany;i++)
            {
                var myoida=inSender.getItem(i).getData().v1;
                var mycount=inSender.getItem(i).getData().howmany;
                this.varuploadsperdayforchart.addItem({count:mycount,monthis:myoida});
                
                }
        /*
        if (howmany > 24) {
            howmany = 25;
        }
        var myusers = [];
        var mycmodels = [];
        var tot = 0;
        var totxx = 0;

        for (i = 0; i < howmany; i++) {
            var mycount = inSender.getItem(i).getData().howmany;
            totxx = totxx + (mycount * 1);
            var myuser = inSender.getItem(i).getData().owneris;
            //     console.log(myuser+" - "+mycount);
            // mycmodels.push(mycmodel);
            //myusers.push({monthis:myuser,count:mycount});
            myusers.push([myuser, mycount]);
        }
        //this.labeltotalobjectviews.setCaption("Total: " + totxx);
        myusers.sort();
        myusers.sort(function(element_a, element_b) {
            return element_b[0] - element_a[0];
        });
        // console.log(myusers);
        //mycmodels.sort();
        this.varuploadsperdayforchart.clearData();


        //this.varuploadsforchart2.clearData();
        //begin sorting and frequency cmodels
        var current = null;
        var cnt = 0;
        var cnt2 = 0;
        //  console.log("myusers.length:"+myusers.length);
        for (i = 0; i < myusers.length; i++) {

            if (myusers[i][0] != current) {

                if (cnt > 0) {

                    //   console.log(current + ' 1 - comes --> ' + cnt + ' times' +' cnt2:'+cnt2+'<br>');
                    this.varuploadsperdayforchart.addItem({
                        count: cnt2,
                        monthis: current
                    });
                }
                current = myusers[i][0];
                cnt = 1;
                cnt2 = (myusers[i][1]) * 1;
            } else {
                cnt++;
                cnt2 = cnt2 + (myusers[i][1]) * 1;
            }
        }
        if (cnt > 0) {
            //cnt2=cnt2+(myusers[i][1]*1);
            //   console.log(current + ' 2 - comes --> ' + cnt + ' times'+ ' cnt2:'+cnt2);
            this.varuploadsperdayforchart.addItem({
                monthis: current,
                count: cnt2
            });
        }
         this.varuploadsperdayforchart.sort("count:desc");
        this.dojoGrid2.setSortField("count", false);

*/
    },
    varmetadataSetData: function(inSender) {
        var tot = inSender.getCount();
        //console.log(tot);
        var totrunnung = 0;
        for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        this.labeltotalmetadata.setValue("caption", "Objects-Medatadata- " + totrunnung);
    },
    vartopdownloadsSetData: function(inSender) {
        var tot = inSender.getCount();
        //console.log(tot);
        var totrunnung = 0;
        for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        this.labeltotaldownloads.setValue("caption", "Objects-Downloads- " + totrunnung);
    },
    selectPID1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.selectPIDChange(inSender, inDisplayValue, inDataValue, inSetByCode);
    },
    selectPID2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.selectPID1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
    },
    svgetoidasinitSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        // console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetoidasinit.setData(obj);

    },
    list2Select: function(inSender, inItem) {

    },
    list1Select: function(inSender, inItem) {

    },
    svgetviewsdetailSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetviewsdetail.setData(obj);
        
        
    },
    list2K1Format: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        return rowId + 1;
    },
    vargetviewsdetailSetData: function(inSender) {


    },
    layerInventoryShow: function(inSender) {
        main.pageContainer4.inventory.dojoGridState.deselectAll();
        main.pageContainer4.inventory.dojoGridAccesscode.deselectAll();
        main.pageContainer4.inventory.dojoGridcmodels.deselectAll();
    },
    button1Click: function(inSender) {
        var index = this.list1.getSelectedIndex();
        var oid = this.list1.getCell(index, "v1");
        var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
        window.open(urlis);
    },
    selectPID3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.selectPIDChange(inSender, inDisplayValue, inDataValue, inSetByCode);
    },
    list3Select: function(inSender, inItem) {},
    button2Click: function(inSender) {
        var index = this.dojoGriddowloadedobjects.getSelectedIndex();
        
        var oid = this.dojoGriddowloadedobjects.getCell(index, "v2");
        var urlis = "https://phaidra.univie.ac.at/detail_object/" + oid;
        window.open(urlis);
    },
    svgetdownloadedSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetdownloaded.setData(obj);
    },
    selectPID4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.selectPID3Change(inSender, inDisplayValue, inDataValue, inSetByCode);
    },
    list5Select: function(inSender, inItem) {
        this.list3Select(inSender, inItem);
    },
    button3Click: function(inSender) {
        this.button2Click(inSender);
    },
    vargetdownloadedSetData: function(inSender) {
        var totrunnung = 0;
/* for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //  console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        */

        // this.labeltotalobjectviews.setValue("caption","Objects-Views- "+totrunnung);
        //var howmany = inSender.getCount();
        var howmany = 10;

        var myusers = [];
        var mycmodels = [];
        var tot = 0;
        var totxx = 0;
        this.vargetdownloadedforchart.clearData();
        this.vargetdownloadedforchart2.clearData();
        if(this.vargetdownloaded.getCount()>0)
        {
            if(this.vargetdownloaded.getCount()<howmany)
            {
                howmany=this.vargetdownloaded.getCount();
                }
        for (i = 0; i < howmany; i++) {
            var mycount = this.vargetdownloaded.getItem(i).getData().howmany;
            totxx = totxx + (mycount * 1);
           // var myowneris = this.svgetdownloaded.getItem(i).getData().owneris;
            var myoida = this.vargetdownloaded.getItem(i).getData().v2;
           
            //  myusers.push([myowneris, mycount]);
            this.vargetdownloadedforchart2.addItem({
                count: mycount,
                monthis: myoida
            });
        }
        }
        tot = 0;
        totxx = 0;

        howmany = this.vargetdownloaded.getCount();
       
        if(howmany>0)
        {
        for (i = 0; i < howmany; i++) {
            var mycount = this.vargetdownloaded.getItem(i).getData().howmany;
            totxx = totxx + (mycount * 1);
            var myowneris = this.vargetdownloaded.getItem(i).getData().owneris;
            var myoida = this.vargetdownloaded.getItem(i).getData().v2;
            myusers.push([myowneris, mycount]);

        }
        this.labeltotalobjectviews2.setCaption("Objects: " + inSender.getCount() + "  Downloads: " + totxx);
        }
        else
        {
           
           this.labeltotalobjectviews2.setCaption("Nothing found"); }
 //this.labeltotalobjectviews5.setCaption("Objects: " + inSender.getCount() + "  Downloads: " + totxx);

/*
       //  myusers.sort();
        myusers.sort(function(element_a, element_b) {
            return element_b[0] - element_a[0];
        });
        
        var current = null;
        var cnt = 0;
        var cnt2 = 0;
     
       // var tilwhen= myusers.length;
        tilwhen=0;
        for (i = 0; i < myusers.length; i++) {

            if (myusers[i][0] != current) {

                if (cnt > 0) {

                    //   console.log(current + ' 1 - comes --> ' + cnt + ' times' +' cnt2:'+cnt2+'<br>');
                    this.vargetdownloadedforchart.addItem({
                        count: cnt2,
                        monthis: current
                    });
                }
                current = myusers[i][0];
                cnt = 1;
                cnt2 = (myusers[i][1]) * 1;
            } else {
                cnt++;
                cnt2 = cnt2 + (myusers[i][1]) * 1;
            }
        }
        if (cnt > 0) {
            //cnt2=cnt2+(myusers[i][1]*1);
            //   console.log(current + ' 2 - comes --> ' + cnt + ' times'+ ' cnt2:'+cnt2);
            this.vargetdownloadedforchart.addItem({
                monthis: current,
                count: cnt2
            });
        }

        this.dojoGrid6.setSortField("count", false);
*/

        //        this.vargetdownloadedforchart.setData(myusers);
    },
    list2RenderData: function(inSender) {


    },
    dojoGrid1RenderData: function(inSender) {
        return;
        var totrunnung = 0;
/* for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //  console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        */

        // this.labeltotalobjectviews.setValue("caption","Objects-Views- "+totrunnung);
        var howmany = this.vargetviewsdetail.getCount();


/*
      var totxx2=0;
       for (i = 0; i < howmany; i++) {
            var mycount22 = inSender.getItem(i).getData().howmany;
            totxx2 = totxx2 + (mycount22 * 1);
          
        }
        this.labeltotalobjectviews.setCaption("Total: " + totxx2);
        */
        // howmany=25;
        var myusers = [];
        var mycmodels = [];
        var tot = 0;
        var totxx = 0;

        for (i = 0; i < howmany; i++) {
            var mycount = this.vargetviewsdetail.getItem(i).getData().howmany;
            totxx = totxx + (mycount * 1);
            var myuser = this.vargetviewsdetail.getItem(i).getData().monthvisit;
            //     console.log(myuser+" - "+mycount);
            // mycmodels.push(mycmodel);
            //myusers.push({monthis:myuser,count:mycount});
            myusers.push([myuser, mycount]);
        }
        //this.labeltotalobjectviews.setCaption("Total: " + totxx);
        myusers.sort();
        myusers.sort(function(element_a, element_b) {
            return element_b[0] - element_a[0];
        });
        // console.log(myusers);
        //mycmodels.sort();
        this.vargetviewsperdayforchart.clearData();


        //this.varuploadsforchart2.clearData();
        //begin sorting and frequency cmodels
        var current = null;
        var cnt = 0;
        var cnt2 = 0;
        //  console.log("myusers.length:"+myusers.length);
        for (i = 0; i < myusers.length; i++) {

            if (myusers[i][0] != current) {

                if (cnt > 0) {

                    //    console.log(current + ' 1 - comes --> ' + cnt + ' times' +' cnt2:'+cnt2+'<br>');
                    this.vargetviewsperdayforchart.addItem({
                        count: cnt,
                        monthis: current
                    });
                }
                current = myusers[i][0];
                cnt = 1;
                cnt2 = (myusers[i][1]) * 1;
            } else {
                cnt++;
                cnt2 = cnt2 + (myusers[i][1]) * 1;
            }
        }
        if (cnt > 0) {
            //cnt2=cnt2+(myusers[i][1]*1);
            //   console.log(current + ' 2 - comes --> ' + cnt + ' times'+ ' cnt2:'+cnt2);
            this.vargetviewsperdayforchart.addItem({
                monthis: current,
                count: cnt
            });
        }
        // this.dojoGrid5.setSortField("count", false);

    },
    dojoGrid3Select: function(inSender) {
        var index = inSender.getSelectedIndex();
        var oid = inSender.getCell(index, "v1");
        var myowner = inSender.getCell(index, "owneris");
        var mycount = inSender.getCell(index, "howmany");
        var myoida = inSender.getCell(index, "v1");
        
        this.breadcrumbLayersMain.setLayer("layerViewsDetail");
        this.labelobjectinfo1.setCaption("Views: " + mycount );
        this.labelobjectinfo4.setCaption("Object " + oid + " Owner: " + myowner);
        this.dojoChart6.setValue("chartTitle", myoida + " - " + mycount + " Views grouped by date");
this.svgetviewsdetail.input.setValue("mypid", oid);
        this.svgetviewdetailsperdate.input.setValue("mypid", oid);
        this.svgetviewdetailsperdate.update();
        this.svgetviewsdetail.update();
    },
    svgetdownloadeddetail2Success: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetdownloadeddetail2.setData(obj);
    },
    vargetdownloadeddetail2SetData: function(inSender) {
        return;
        // var tot = inSender.getCount();
        // console.log(tot);
        var totrunnung = 0;
/* for (i = 0; i < tot; i++) {
            var mytot = inSender.getItem(i).getData().howmany;
            mytot = mytot * 1;
            //  console.log(mytot);
            totrunnung = mytot + totrunnung;
        }
        */

        //this.labeltotalobjectviews.setValue("caption","Objects-Views- "+totrunnung);
        var howmany = inSender.getCount();
        //this.labeltotalobjectviews.setValue("caption","Objects: "+howmany+"  Views- "+totrunnung);
        var totxx2 = 0;
        for (i = 0; i < howmany; i++) {
            var mycount22 = inSender.getItem(i).getData().howmany;
            totxx2 = totxx2 + (mycount22 * 1);

        }
        // this.labeltotalobjectviews.setCaption("Total: " + totxx2);
        // this.labeltotalobjectviews.setValue("caption","Objects: "+howmany+"   Views "+totxx2);
        // howmany = 25;
        var myusers = [];
        var mycmodels = [];
        var tot = 0;
        var totxx = 0;

        for (i = 0; i < howmany; i++) {
            var mycount = inSender.getItem(i).getData().howmany;
            totxx = totxx + (mycount * 1);
            var myuser = inSender.getItem(i).getData().monthvisit;
            //var myuser2=myuser.split(" ");
            //myuser=myuser2[0]
            //     console.log(myuser+" - "+mycount);
            // mycmodels.push(mycmodel);
            //myusers.push({monthis:myuser,count:mycount});
            myusers.push([myuser, mycount]);
        }
        //this.labeltotalobjectviews.setCaption("Total: " + totxx);
        myusers.sort();
        myusers.sort(function(element_a, element_b) {
            return element_b[0] - element_a[0];
        });
        // console.log(myusers);
        //mycmodels.sort();
        this.vargetdownloadeddetail2forchart.clearData();


        //this.varuploadsforchart2.clearData();
        //begin sorting and frequency cmodels
        var current = null;
        var cnt = 0;
        var cnt2 = 0;
        //  console.log("myusers.length:"+myusers.length);
        for (i = 0; i < myusers.length; i++) {

            if (myusers[i][0] != current) {

                if (cnt > 0) {

                    //   console.log(current + ' 1 - comes --> ' + cnt + ' times' +' cnt2:'+cnt2+'<br>');
/*
                   this.vargetdownloadeddetail2forchart.addItem({
                        count: cnt,
                        monthis: current
                    });
                    */
                }
                current = myusers[i][0];
                cnt = 1;
                cnt2 = (myusers[i][1]) * 1;
            } else {
                cnt++;
                cnt2 = cnt2 + (myusers[i][1]) * 1;
            }
        }
        if (cnt > 0) {
            //cnt2=cnt2+(myusers[i][1]*1);
            //   console.log(current + ' 2 - comes --> ' + cnt + ' times'+ ' cnt2:'+cnt2);
            this.vargetdownloadeddetail2forchart.addItem({
                monthis: current,
                count: cnt
            });
        }
        // this.dojoGrid7.setSortField("count", false);
    },
    dojoGriddowloadedobjectsSelect: function(inSender) {
        this.breadcrumbLayersMain1.setLayer("layerDownloadsPerObject");
        var index = inSender.getSelectedIndex();
        var oid = inSender.getCell(index, "v2");
        var myowner = inSender.getCell(index, "owneris");
        var mycount = inSender.getCell(index, "howmany");
         this.labelobjectinfo5.setCaption("Object " + oid + " Owner: " + myowner);
        this.labelobjectinfo2.setCaption("Downloads: " + mycount );
       
        // var myoida = inSender.getCell(index, "v2");
        this.svgetdownloadeddetail2.input.setValue("mypid", oid);
        this.svgetdownloadeddetail2.update();

    },
    labeltotalobjectviewsClick: function(inSender, inEvent) {

    },
    vargetdownloadedovertimeSetData: function(inSender) {

    },
    svgetdownloadedovertimeSuccess: function(inSender, inDeprecated) {
       this.vargetdownloadedovertime.clearData();
       var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetdownloadedovertime.setData(obj);

    },
    svgetviewsovertimeSuccess: function(inSender, inDeprecated) {
       this.vargetviewsovertime.clearData();
       var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetviewsovertime.setData(obj);

    },
    svgetviewdetailsperdateSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetviewdetailsperdate.setData(obj);
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
    svgetviewsdetailpercountrySuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetviewdetailspercountry.setData(obj);
        var length = 0;

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                length += 1;
            }
        };

        if (length < 2) {
            this.panel14.hide();
        }
        else {
            this.panel14.show();
        }
    },
    svgetdownloaddetail2percountrySuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetdownloaddetail2percountry.setData(obj);
        var length = 0;

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                length += 1;
            }
        };

        if (length < 2) {
            this.panel21.hide();
        }
        else {
            this.panel21.show();
        }
    },
    svgetdownloaddetail2perdateSuccess: function(inSender, inDeprecated) {
        var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        this.vargetdownloaddetail2perdate.setData(obj);
        var length = 0;

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                length += 1;
            }
        };

        if (length < 2) {
            this.panel8.hide();
        }
        else {
            this.panel8.show();
        }

    },
    dojoGrid3RenderData: function(inSender) {
		var howmany=this.dojoGrid3.getRowCount();
        if (howmany==1)
        {
           inSender.select(0);
        }
	},
	svgetinstancesSuccess: function(inSender, inDeprecated) {
	var str = '[' + inSender.data.dataValue + ']';
        //  console.log(str);
        var json = inSender.data.dataValue;
        var obj = eval("(" + str + ')');
        app.vargetinstances.setData(obj);	
	},
	vargetinstancesSetData: function(inSender) {
		var myinstance=inSender.getItem(0).getData().instance;
        //this.selectInstance.setValue("displayValue",myinstance);
	},
	picture1Click: function(inSender) {
		//app.svgetinstances.update();
	},
	selectInstance3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.selectInstance.setValue("displayValue",inDisplayValue);
        this.buttonshowall1.setValue("disabled",false);
        
	},
	buttonshowall1Click4: function(inSender) {
	this.selectInstance.show();
    this.paneselectinstance.show();
    this.panelWelcome.hide();
    this.tabLayers1.show();
    main.pageContainer4.inventory.buttonshowall.click();
    this.panelWelcome.hide();
	},
	_end: 0
});