	window.onload = function () {
var Chart1 = new CanvasJS.Chart('chartContainer1',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '每分鐘Pt'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 2780726,
				            interval: 278072,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 430922},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 659609},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 623738},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 959708},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1030128},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1048843},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1085404},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1203952},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1480120},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1392789},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1296530},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1308981},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1472504},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1409680},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1555883},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1543019},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1569812},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1107837},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1436679},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1344608},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1341461},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1451384},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1498273},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1690967},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1735563},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1725700},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1640231},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1903293},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1756616},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1516131},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 34635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 541234},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 565829},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 635771},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 818378},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 897998},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 837750},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 919027},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 930353},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1008350},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 820224},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 956829},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 925467},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 934829},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 854632},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1009813},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1666506},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1762597},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1677101},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1531640},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2043814},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1804691},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2055838},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1824131},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1853308},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2014221},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2326448},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2011404},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2780726},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2367039},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2234421},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          Chart1.render();
                                        }
                                      }
                                    });
                            Chart1.render();
var Chart2 = new CanvasJS.Chart('chartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'PT成長趨勢'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 82865369,
				            interval: 8286536,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 430922},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1090531},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1714269},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2673977},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3704105},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4752948},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5838352},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7042304},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8522424},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9915213},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11211743},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12520724},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13993228},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15402908},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16958791},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18501810},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20071622},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21179459},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22616138},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23960746},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25302207},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26753591},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28251864},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29942831},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31678394},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33404094},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35044325},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36947618},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 38704234},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40220365},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 40255000},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 541234},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1107063},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1742834},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2561212},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3459210},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4296960},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5215987},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6146340},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7154690},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7974914},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8931743},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9857210},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10792039},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11646671},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12656484},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14322990},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16085587},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17762688},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19294328},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21338142},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23142833},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25198671},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27022802},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28876110},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30890331},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33216779},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35228183},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38008909},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40375948},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42610369},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          Chart2.render();
                                        }
                                      }
                                    });
                            Chart2.render();
var Chart3 = new CanvasJS.Chart('chartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '殲滅、CBC、強襲的PT統計'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 1480996,
				            interval: 148099,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 324084},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 457205},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 447157},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 739680},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 741096},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 746694},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 555143},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 699051},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 973555},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1015100},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 882340},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 783542},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 922601},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 933189},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1071048},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 812552},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 789762},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 603433},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 981412},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 793222},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 760920},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 716304},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 816996},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 862963},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1145826},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1101227},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 955961},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1071422},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 798750},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 780786},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 34635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 105496},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 97700},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 97461},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 178846},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 219471},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 170491},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 266135},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 147576},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 259273},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 196554},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 240674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 201468},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 310200},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 312044},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 340590},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 704541},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 836340},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 929729},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 747799},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 829039},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 828004},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 960383},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 668467},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1017125},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 944046},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1219398},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1004285},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1480996},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1445139},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1371849},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 404215},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 417431},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 488989},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 564769},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 592070},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 600303},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 535373},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 727165},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 645722},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 545480},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 583243},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 665137},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 507204},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 489689},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 593959},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 808387},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 821583},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 560680},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 639425},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1095215},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 820116},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 932240},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1011601},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 761918},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 958846},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 922328},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 814090},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1101092},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 729713},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 721044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31523},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 50698},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 49321},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 74763},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 86457},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 66956},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 117519},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 55612},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 103355},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 78190},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 132912},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 58862},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 117425},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52899},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 75264},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 153578},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 104674},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 186692},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 144416},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 119560},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 156571},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 163215},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 144063},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 74265},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111329},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 184722},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 193029},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 198638},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 192187},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 141528},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 72362},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 162893},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 123915},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 120690},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 229625},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 217257},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 440010},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 351465},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 353549},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 296474},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 327559},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 424667},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 421169},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 345635},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 332930},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 620679},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 611119},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 389202},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 335904},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 402120},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 443757},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 630883},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 546818},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 641516},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 414240},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 454806},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 580037},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 597577},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 825817},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 571721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34476},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 39511},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 52666},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 99338},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 59407},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 84892},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 90251},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 153436},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 153016},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 81215},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 86631},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 100772},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 128734},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 130856},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 151905},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 109788},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 168931},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 115202},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 119363},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 149266},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 136784},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 104197},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 134459},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 186488},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 175497},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 169667},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 104233},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 234294},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 132049},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 163624},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          Chart3.render();
                                        }
                                      }
                                    });
                            Chart3.render();
var PlayerChart1 = new CanvasJS.Chart('PlayerChartContainer1',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雪歌的PT統計(總分3202357)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 302612,
				            interval: 30261,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20989},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13130},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8763},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13327},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16253},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19222},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18897},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18126},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34925},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21176},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 59959},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23642},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 103981},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 113976},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 108453},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 106593},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 123953},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 302612},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 131216},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 162303},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 147889},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 157494},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 180693},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 270801},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 183190},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8376},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2160},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10507},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10755},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12142},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10283},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10944},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1376},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9622},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5888},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8522},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1590},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26695},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22591},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14416},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25759},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25646},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21392},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20257},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 45984},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 44974},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart1.render();
                                        }
                                      }
                                    });
                            PlayerChart1.render();
var PlayerPieChart1 = new CanvasJS.Chart('PlayerPieChartContainer1',

    {

        title:{

                   text: '雪歌的PT構成(總分3202357)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 119780, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2861558, name: '強襲', legendMarkerType: 'square'},
{  y: 221019, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart1.render();
var PlayerChart2 = new CanvasJS.Chart('PlayerChartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '喵鼠的PT統計(總分3102620)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 336595,
				            interval: 33659,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5231},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12833},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4184},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29811},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18924},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24085},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 43179},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42489},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40377},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 46842},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17124},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23622},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25521},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38343},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65218},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 133946},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 85474},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 97511},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 51900},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 299482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 245658},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44583},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 336595},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 90850},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 281385},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 97274},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 272480},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8014},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 334},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2698},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8406},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1690},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3762},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3670},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3413},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4288},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10509},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4144},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2245},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 146},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9137},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12778},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14494},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36085},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 42326},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19713},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11839},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25714},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17510},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25503},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28184},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25731},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39804},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35717},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49655},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28655},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 42187},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30276},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43831},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24080},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart2.render();
                                        }
                                      }
                                    });
                            PlayerChart2.render();
var PlayerPieChart2 = new CanvasJS.Chart('PlayerPieChartContainer2',

    {

        title:{

                   text: '喵鼠的PT構成(總分3102620)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 64480, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2474921, name: '強襲', legendMarkerType: 'square'},
{  y: 563219, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart2.render();
var PlayerChart3 = new CanvasJS.Chart('PlayerChartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '土土昕的PT統計(總分3015416)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 294341,
				            interval: 29434,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12510},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39565},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11852},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17733},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12602},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13207},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 39474},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44346},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 43192},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 64386},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15612},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11442},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23325},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31301},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39445},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12940},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11864},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 45755},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17734},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39557},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23246},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8647},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 41737},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 83636},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 133616},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 181157},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 154542},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 192939},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 220463},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 156209},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 146837},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 213301},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 80547},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 180652},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 294341},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 118390},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3265},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2805},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6338},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1190},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1833},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1331},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1331},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6411},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12744},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart3.render();
                                        }
                                      }
                                    });
                            PlayerChart3.render();
var PlayerPieChart3 = new CanvasJS.Chart('PlayerPieChartContainer3',

    {

        title:{

                   text: '土土昕的PT構成(總分3015416)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37316, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2663621, name: '強襲', legendMarkerType: 'square'},
{  y: 314479, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart3.render();
var PlayerChart4 = new CanvasJS.Chart('PlayerChartContainer4',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿拉的PT統計(總分3009382)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 222682,
				            interval: 22268,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 49164},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 48259},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 58454},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 146985},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 41712},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 121740},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 59651},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 102035},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 114955},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 58339},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 104586},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 65522},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47740},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 95658},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61955},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52813},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 89965},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42714},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 90661},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 149317},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 99661},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 146697},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 119335},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 222682},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 202879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 118125},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 93131},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 120364},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 47343},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 154376},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17289},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18933},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46342},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart4.render();
                                        }
                                      }
                                    });
                            PlayerChart4.render();
var PlayerPieChart4 = new CanvasJS.Chart('PlayerPieChartContainer4',

    {

        title:{

                   text: '阿拉的PT構成(總分3009382)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2926818, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 82564, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart4.render();
var PlayerChart5 = new CanvasJS.Chart('PlayerChartContainer5',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '葬月的PT統計(總分3003375)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 299997,
				            interval: 29999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21562},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23302},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10356},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12900},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 59805},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22829},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 51043},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1603},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 57441},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31975},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 38202},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 68306},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 38486},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 35198},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 71205},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 159491},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 114594},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 89887},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 144841},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 138828},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47186},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 157094},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 137249},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 157144},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 140762},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 179089},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 186986},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 299997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2911},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1962},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2963},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1627},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6007},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7850},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3459},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5509},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8123},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8466},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4128},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8302},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10810},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14705},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17251},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18315},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37910},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 45216},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart5.render();
                                        }
                                      }
                                    });
                            PlayerChart5.render();
var PlayerPieChart5 = new CanvasJS.Chart('PlayerPieChartContainer5',

    {

        title:{

                   text: '葬月的PT構成(總分3003375)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 61810, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2797358, name: '強襲', legendMarkerType: 'square'},
{  y: 144207, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart5.render();
var PlayerChart6 = new CanvasJS.Chart('PlayerChartContainer6',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋風冷月的PT統計(總分2959447)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 269025,
				            interval: 26902,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19324},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 48729},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19819},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 57339},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 41234},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24307},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19236},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17264},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52447},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13713},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21462},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 65559},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 120509},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 269025},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 168548},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 135363},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 167671},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 32147},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 111060},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 74784},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 82990},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 87321},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 156259},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 194102},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183850},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 196663},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12706},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 46679},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47705},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30770},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49072},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36667},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48042},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 74047},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4674},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2098},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1531},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1412},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3149},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2528},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8852},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5213},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3520},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart6.render();
                                        }
                                      }
                                    });
                            PlayerChart6.render();
var PlayerPieChart6 = new CanvasJS.Chart('PlayerPieChartContainer6',

    {

        title:{

                   text: '秋風冷月的PT構成(總分2959447)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 33036, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2580723, name: '強襲', legendMarkerType: 'square'},
{  y: 345688, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart6.render();
var PlayerChart7 = new CanvasJS.Chart('PlayerChartContainer7',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎喵的PT統計(總分2641895)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 193314,
				            interval: 19331,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 62948},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 47521},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 66547},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 64813},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 107592},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58618},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 74096},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 58052},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 79075},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 151555},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 50464},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28684},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 82430},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 63921},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 106532},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 80976},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 89578},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19521},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 109218},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 193314},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 122075},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 163686},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 88947},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20494},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 131140},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 106912},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63603},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32360},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 89762},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 164453},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4646},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7279},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11928},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6644},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19853},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12658},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart7.render();
                                        }
                                      }
                                    });
                            PlayerChart7.render();
var PlayerPieChart7 = new CanvasJS.Chart('PlayerPieChartContainer7',

    {

        title:{

                   text: '嘎喵的PT構成(總分2641895)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2578887, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63008, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart7.render();
var PlayerChart8 = new CanvasJS.Chart('PlayerChartContainer8',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鬼魅魍魎的PT統計(總分2288908)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 198969,
				            interval: 19896,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8058},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9799},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9834},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8677},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10750},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16961},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17198},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19372},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20869},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20742},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18245},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19904},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 44196},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6486},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 61120},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 46839},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45727},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 81072},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23210},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39957},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 80736},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1866},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 66817},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 94292},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 305},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6696},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4884},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8003},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 69314},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 50182},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19332},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 83862},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 81645},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 54517},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 168780},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 138679},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 162068},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 198969},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 170295},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 151658},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 146992},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart8.render();
                                        }
                                      }
                                    });
                            PlayerChart8.render();
var PlayerPieChart8 = new CanvasJS.Chart('PlayerPieChartContainer8',

    {

        title:{

                   text: '鬼魅魍魎的PT構成(總分2288908)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2108499, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180409, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart8.render();
var PlayerChart9 = new CanvasJS.Chart('PlayerChartContainer9',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '羽龍的PT統計(總分2276728)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 148213,
				            interval: 14821,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9974},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2525},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3064},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9452},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4149},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14540},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6157},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34943},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4636},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2253},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8861},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1366},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9307},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9428},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21013},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10919},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38282},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19937},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40742},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 94419},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 55256},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 56606},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 38662},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 54517},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 128579},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 54168},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 57047},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 50542},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 80416},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 148213},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45984},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 88177},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 54294},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56966},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 83612},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 117679},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86453},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 88492},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36678},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 96546},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 131399},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11000},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17639},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13181},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35893},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 39745},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6661},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 40288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 75279},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 80789},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart9.render();
                                        }
                                      }
                                    });
                            PlayerChart9.render();
var PlayerPieChart9 = new CanvasJS.Chart('PlayerPieChartContainer9',

    {

        title:{

                   text: '羽龍的PT構成(總分2276728)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 120655, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1835598, name: '強襲', legendMarkerType: 'square'},
{  y: 320475, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart9.render();
var PlayerChart10 = new CanvasJS.Chart('PlayerChartContainer10',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '依司瑪耳的PT統計(總分2270251)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 153308,
				            interval: 15330,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 79301},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 51855},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 65177},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 49457},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 153308},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5243},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 97937},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 71560},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 72085},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 65659},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 89356},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42016},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 77170},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8100},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18434},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 50525},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 93458},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 63489},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6051},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 68004},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 95597},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 104939},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24770},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 44179},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 113159},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101325},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 151974},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 152640},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7165},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 117847},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16291},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24147},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11492},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15626},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33357},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27558},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart10.render();
                                        }
                                      }
                                    });
                            PlayerChart10.render();
var PlayerPieChart10 = new CanvasJS.Chart('PlayerPieChartContainer10',

    {

        title:{

                   text: '依司瑪耳的PT構成(總分2270251)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2141780, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 128471, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart10.render();
var PlayerChart11 = new CanvasJS.Chart('PlayerChartContainer11',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯的PT統計(總分2120747)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 132703,
				            interval: 13270,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 38693},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 53630},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38668},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58965},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 35132},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 74860},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27356},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 80669},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 57689},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41778},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 63650},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 132703},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 96149},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 64390},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 77054},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 108921},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16819},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19201},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49868},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 102385},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44793},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 62550},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 120340},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 62394},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 49237},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101821},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18642},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 126695},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 119393},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 89526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6705},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12134},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16041},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19020},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10105},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22771},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart11.render();
                                        }
                                      }
                                    });
                            PlayerChart11.render();
var PlayerPieChart11 = new CanvasJS.Chart('PlayerPieChartContainer11',

    {

        title:{

                   text: '雷克斯的PT構成(總分2120747)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2033971, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86776, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart11.render();
var PlayerChart12 = new CanvasJS.Chart('PlayerChartContainer12',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '赤雲天的PT統計(總分2043822)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 165924,
				            interval: 16592,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17386},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 42767},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22899},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 52326},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 29057},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44816},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 97709},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38145},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39050},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31621},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31288},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 53487},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20658},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 71700},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46009},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 68168},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 86654},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 74281},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 149481},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 86601},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 112903},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 104595},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 165924},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99548},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 80424},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24250},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 79620},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 93782},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 96449},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36916},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 993},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9929},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7382},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7946},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19058},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart12.render();
                                        }
                                      }
                                    });
                            PlayerChart12.render();
var PlayerPieChart12 = new CanvasJS.Chart('PlayerPieChartContainer12',

    {

        title:{

                   text: '赤雲天的PT構成(總分2043822)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1998514, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45308, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart12.render();
var PlayerChart13 = new CanvasJS.Chart('PlayerChartContainer13',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '魔法的PT統計(總分1925150)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 166205,
				            interval: 16620,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 47273},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 64466},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 29957},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 35410},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17918},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58827},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22604},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 46458},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 36132},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9301},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9460},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 82703},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 75329},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33725},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 91117},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 110868},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 97364},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 57931},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 91997},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 158454},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48057},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 64421},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 104481},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 47102},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 81604},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 123821},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16654},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 166205},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15687},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4442},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8684},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21830},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24794},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20074},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart13.render();
                                        }
                                      }
                                    });
                            PlayerChart13.render();
var PlayerPieChart13 = new CanvasJS.Chart('PlayerPieChartContainer13',

    {

        title:{

                   text: '魔法的PT構成(總分1925150)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1849768, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 75382, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart13.render();
var PlayerChart14 = new CanvasJS.Chart('PlayerChartContainer14',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞歷的PT統計(總分1924374)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 164560,
				            interval: 16456,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28381},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27484},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58033},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 61419},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 51127},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 40573},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 116323},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31612},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 54496},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26712},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 65404},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 33800},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3678},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 66186},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54489},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 62871},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 52278},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36260},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 125134},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55438},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 164560},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 111367},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27667},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 102413},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 74184},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 113419},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 123712},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 66994},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 51928},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6576},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10271},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19585},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart14.render();
                                        }
                                      }
                                    });
                            PlayerChart14.render();
var PlayerPieChart14 = new CanvasJS.Chart('PlayerPieChartContainer14',

    {

        title:{

                   text: '亞歷的PT構成(總分1924374)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1887942, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36432, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart14.render();
var PlayerChart15 = new CanvasJS.Chart('PlayerChartContainer15',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰的PT統計(總分1712736)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 127805,
				            interval: 12780,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 38117},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28307},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 57325},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1959},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 47646},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16378},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4671},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 62796},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 47752},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 81980},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 76812},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 72531},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20562},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 108707},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 65073},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 73217},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 101736},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 127805},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24188},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 106122},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9102},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39278},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 37276},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 77877},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4393},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 52438},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 84312},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 90831},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 87976},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36746},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9024},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19799},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart15.render();
                                        }
                                      }
                                    });
                            PlayerChart15.render();
var PlayerPieChart15 = new CanvasJS.Chart('PlayerPieChartContainer15',

    {

        title:{

                   text: '冰的PT構成(總分1712736)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1683913, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28823, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart15.render();
var PlayerChart16 = new CanvasJS.Chart('PlayerChartContainer16',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿榮的PT統計(總分1698324)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 155396,
				            interval: 15539,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1843},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12015},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17937},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18878},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24701},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 58109},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20178},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17340},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32666},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 58505},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 66880},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17991},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9704},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2130},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28661},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16954},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23481},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16638},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11881},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14054},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12883},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19926},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29163},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87809},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 64946},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 46449},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19202},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59907},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 74934},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 113460},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37061},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 139842},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 47425},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 82031},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 155396},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 142176},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8805},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1841},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5992},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1643},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 109},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6624},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1058},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 318},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1655},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 538},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2857},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3204},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8730},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart16.render();
                                        }
                                      }
                                    });
                            PlayerChart16.render();
var PlayerPieChart16 = new CanvasJS.Chart('PlayerPieChartContainer16',

    {

        title:{

                   text: '阿榮的PT構成(總分1698324)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 43374, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1312213, name: '強襲', legendMarkerType: 'square'},
{  y: 342737, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart16.render();
var PlayerChart17 = new CanvasJS.Chart('PlayerChartContainer17',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰紅茶的PT統計(總分1524474)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 145384,
				            interval: 14538,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5935},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7119},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23702},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17011},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17239},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44100},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29592},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21404},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 50010},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47202},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 50129},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38599},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 78446},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 145384},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 94946},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 88033},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 135829},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 41082},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 126892},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 116505},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 74592},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4250},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3444},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5017},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2293},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13253},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4198},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1467},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1494},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2351},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4630},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12570},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 825},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33579},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3199},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9395},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3614},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12775},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13953},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22557},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22567},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26547},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 65079},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart17.render();
                                        }
                                      }
                                    });
                            PlayerChart17.render();
var PlayerPieChart17 = new CanvasJS.Chart('PlayerPieChartContainer17',

    {

        title:{

                   text: '冰紅茶的PT構成(總分1524474)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 107245, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1253751, name: '強襲', legendMarkerType: 'square'},
{  y: 163478, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart17.render();
var PlayerChart18 = new CanvasJS.Chart('PlayerChartContainer18',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '有生之蓮解鋒鏑的PT統計(總分1247848)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 167245,
				            interval: 16724,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15045},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38766},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28081},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32049},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 52506},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 60782},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 81095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 70186},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20101},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 50701},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5488},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31503},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6540},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36842},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 167245},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40852},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19699},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45603},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5466},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 130869},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20616},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48630},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12781},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28330},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21074},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36592},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31484},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 55382},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10682},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18396},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21061},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3370},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart18.render();
                                        }
                                      }
                                    });
                            PlayerChart18.render();
var PlayerPieChart18 = new CanvasJS.Chart('PlayerPieChartContainer18',

    {

        title:{

                   text: '有生之蓮解鋒鏑的PT構成(總分1247848)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1194339, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53509, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart18.render();
var PlayerChart19 = new CanvasJS.Chart('PlayerChartContainer19',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '藏月的PT統計(總分620014)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57029,
				            interval: 5702,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14510},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5638},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14606},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11825},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1854},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12299},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9340},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24932},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22955},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4087},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 45350},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15827},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39985},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16828},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18373},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27464},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 57029},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3878},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6041},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13701},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7576},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8157},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8538},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27596},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16091},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12793},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27217},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18603},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11755},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19733},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14874},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21286},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1823},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 988},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 660},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1459},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2320},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 431},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 678},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2243},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1832},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1953},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8181},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8300},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8892},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4306},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 213},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11057},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2639},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart19.render();
                                        }
                                      }
                                    });
                            PlayerChart19.render();
var PlayerPieChart19 = new CanvasJS.Chart('PlayerPieChartContainer19',

    {

        title:{

                   text: '藏月的PT構成(總分620014)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 59273, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 342902, name: '強襲', legendMarkerType: 'square'},
{  y: 217839, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart19.render();
var PlayerChart20 = new CanvasJS.Chart('PlayerChartContainer20',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '寇內爾緹的PT統計(總分22501)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8474,
				            interval: 847,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7627},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6400},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8474},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart20.render();
                                        }
                                      }
                                    });
                            PlayerChart20.render();
var PlayerPieChart20 = new CanvasJS.Chart('PlayerPieChartContainer20',

    {

        title:{

                   text: '寇內爾緹的PT構成(總分22501)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7627, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8474, name: '強襲', legendMarkerType: 'square'},
{  y: 6400, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart20.render();
var PlayerChart21 = new CanvasJS.Chart('PlayerChartContainer21',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '絕の蜜乳大物的PT統計(總分3588119)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 205404,
				            interval: 20540,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "絕の蜜乳大物殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 60226},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 46159},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 49032},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 54378},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 86199},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 79751},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26680},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 89120},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 129088},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 106583},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 126350},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 128932},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 117787},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 63450},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 115039},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 205404},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 126286},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 101967},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 84926},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 163528},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 137035},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 86560},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 142509},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 179546},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 202175},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 158472},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 192534},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 181242},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 75341},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 165570},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 34635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "絕の蜜乳大物CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13552},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14465},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18193},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25405},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart21.render();
                                        }
                                      }
                                    });
                            PlayerChart21.render();
var PlayerPieChart21 = new CanvasJS.Chart('PlayerPieChartContainer21',

    {

        title:{

                   text: '絕の蜜乳大物的PT構成(總分3588119)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3516504, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71615, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart21.render();
var PlayerChart22 = new CanvasJS.Chart('PlayerChartContainer22',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Air的PT統計(總分3453313)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 216652,
				            interval: 21665,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Air殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27941},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 50083},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 28715},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 90827},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 127781},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 69349},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 81522},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 81506},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 179833},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 104356},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 177206},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 88508},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 175015},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 133831},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 142228},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 139236},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 171521},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42547},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 91254},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 191134},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55118},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 100698},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 91757},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 151375},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 188608},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 155742},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 67467},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 216652},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 141135},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 57176},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AirCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18239},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14953},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart22.render();
                                        }
                                      }
                                    });
                            PlayerChart22.render();
var PlayerPieChart22 = new CanvasJS.Chart('PlayerPieChartContainer22',

    {

        title:{

                   text: 'Air的PT構成(總分3453313)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3420121, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33192, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart22.render();
var PlayerChart23 = new CanvasJS.Chart('PlayerChartContainer23',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '神話的PT統計(總分3042794)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 224077,
				            interval: 22407,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神話殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 36256},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 74006},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 24231},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 77669},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 123080},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 125804},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 59701},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 81520},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 224077},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 36530},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 72895},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 67267},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 71677},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 143174},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 197645},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 146737},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 57787},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 106468},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 170716},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51409},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61323},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 117671},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 54574},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 103435},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 148491},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 146827},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 96743},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 123039},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 67162},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 115235},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神話CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5686},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27774},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19785},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6400},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart23.render();
                                        }
                                      }
                                    });
                            PlayerChart23.render();
var PlayerPieChart23 = new CanvasJS.Chart('PlayerPieChartContainer23',

    {

        title:{

                   text: '神話的PT構成(總分3042794)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2983149, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59645, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart23.render();
var PlayerChart24 = new CanvasJS.Chart('PlayerChartContainer24',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Qoo的PT統計(總分2772301)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 140854,
				            interval: 14085,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Qoo殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 49076},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 92220},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35885},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 81307},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 127500},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 99192},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 45378},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 106952},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 94275},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 136550},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 134691},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 86261},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 72386},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 116039},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 79167},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 140854},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 84883},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 93444},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 133008},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 183},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 102930},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91095},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 87989},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 95631},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 105954},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 128775},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 65494},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 108970},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 91604},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 47525},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "QooCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18228},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18855},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart24.render();
                                        }
                                      }
                                    });
                            PlayerChart24.render();
var PlayerPieChart24 = new CanvasJS.Chart('PlayerPieChartContainer24',

    {

        title:{

                   text: 'Qoo的PT構成(總分2772301)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2735218, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37083, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart24.render();
var PlayerChart25 = new CanvasJS.Chart('PlayerChartContainer25',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '綠灣包裝工的PT統計(總分2741023)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 188485,
				            interval: 18848,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "綠灣包裝工殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6246},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 93},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8619},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7099},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1815},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6737},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3127},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11021},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3144},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1447},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3564},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2617},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10984},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7058},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24093},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "綠灣包裝工強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10433},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 51571},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 57703},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32422},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25939},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 126466},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 98498},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 87951},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42894},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45914},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 48335},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 76365},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 98453},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 67034},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 64139},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19050},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13437},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 134466},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 174935},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 188485},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 171153},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 61928},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 109146},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 101006},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "綠灣包裝工CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36987},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32683},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10316},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34461},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40274},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 74788},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 33043},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9407},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33984},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52326},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 54410},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 42704},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 133995},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 39971},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart25.render();
                                        }
                                      }
                                    });
                            PlayerChart25.render();
var PlayerPieChart25 = new CanvasJS.Chart('PlayerPieChartContainer25',

    {

        title:{

                   text: '綠灣包裝工的PT構成(總分2741023)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 97664, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2014010, name: '強襲', legendMarkerType: 'square'},
{  y: 629349, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart25.render();
var PlayerChart26 = new CanvasJS.Chart('PlayerChartContainer26',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '萊恩的PT統計(總分2644025)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 169821,
				            interval: 16982,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊恩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 45209},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 33458},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 62211},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 110266},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 130678},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 121131},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 95689},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 51668},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 164224},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 30799},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 78061},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 115777},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74701},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 142326},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 86431},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 51662},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 90265},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 73850},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 99031},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 144850},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 91255},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42963},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 105265},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 63910},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 120181},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 169821},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 76119},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊恩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6024},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13981},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17900},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27027},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22758},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16210},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17884},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26009},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19883},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart26.render();
                                        }
                                      }
                                    });
                            PlayerChart26.render();
var PlayerPieChart26 = new CanvasJS.Chart('PlayerPieChartContainer26',

    {

        title:{

                   text: '萊恩的PT構成(總分2644025)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2476349, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167676, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart26.render();
var PlayerChart27 = new CanvasJS.Chart('PlayerChartContainer27',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '二重埔宋仲基的PT統計(總分2607477)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 185458,
				            interval: 18545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "二重埔宋仲基殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 39114},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 40583},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40635},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 53715},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 102348},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46802},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 70384},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 110733},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35414},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 132205},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 66432},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 112065},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 140710},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 179533},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94081},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38347},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31995},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5246},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 140370},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20588},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55898},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22629},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 94135},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 63210},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37127},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 137364},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92808},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99631},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34970},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 185458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "二重埔宋仲基CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25991},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35965},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 70097},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41815},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36504},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24233},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7800},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18647},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21895},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart27.render();
                                        }
                                      }
                                    });
                            PlayerChart27.render();
var PlayerPieChart27 = new CanvasJS.Chart('PlayerPieChartContainer27',

    {

        title:{

                   text: '二重埔宋仲基的PT構成(總分2607477)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2324530, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 282947, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart27.render();
var PlayerChart28 = new CanvasJS.Chart('PlayerChartContainer28',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '輕妝上陣的PT統計(總分2490228)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 221752,
				            interval: 22175,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "輕妝上陣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17416},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18988},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19126},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42417},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34418},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21816},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 36215},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 89117},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 84685},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 105805},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 51071},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61477},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 103298},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 55639},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61821},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51141},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 153949},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 77070},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 74741},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 166727},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 86931},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199277},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 221752},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 164950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "輕妝上陣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4458},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2503},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6474},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7085},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2025},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7430},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7221},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1397},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34901},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9391},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1898},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8668},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4995},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "輕妝上陣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16104},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 40730},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19225},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35663},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33694},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32948},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37081},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29829},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 35477},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42897},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 54133},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart28.render();
                                        }
                                      }
                                    });
                            PlayerChart28.render();
var PlayerPieChart28 = new CanvasJS.Chart('PlayerPieChartContainer28',

    {

        title:{

                   text: '輕妝上陣的PT構成(總分2490228)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 112600, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1999847, name: '強襲', legendMarkerType: 'square'},
{  y: 377781, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart28.render();
var PlayerChart29 = new CanvasJS.Chart('PlayerChartContainer29',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Kururu2的PT統計(總分2366692)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 212635,
				            interval: 21263,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kururu2殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18086},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 59035},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 72791},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 117642},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23819},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 63780},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 50672},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 58186},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 87524},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 112301},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29539},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31938},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 67276},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74762},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 146716},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24227},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 63383},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 61967},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 60889},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 114218},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61655},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 83394},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 115961},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 136139},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 93737},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 79081},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 86843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 76487},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 212635},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 67869},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kururu2CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14140},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart29.render();
                                        }
                                      }
                                    });
                            PlayerChart29.render();
var PlayerPieChart29 = new CanvasJS.Chart('PlayerPieChartContainer29',

    {

        title:{

                   text: 'Kururu2的PT構成(總分2366692)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2352552, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14140, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart29.render();
var PlayerChart30 = new CanvasJS.Chart('PlayerChartContainer30',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '不離不棄的PT統計(總分1879233)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 140255,
				            interval: 14025,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不離不棄殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8955},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8356},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22236},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31192},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8898},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28331},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11315},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12447},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26530},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13111},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23184},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34028},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17723},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16621},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1032},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2677},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14468},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不離不棄強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5513},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13161},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37162},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 25034},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17410},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 75685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23659},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 63029},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 131075},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 84066},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15460},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10497},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 79704},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 74686},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 126586},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44858},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20590},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21074},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 113480},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 133921},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 140255},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不離不棄CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12473},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9426},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12462},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30732},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20840},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25485},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33108},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25519},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39529},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 77119},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14948},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14164},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25419},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart30.render();
                                        }
                                      }
                                    });
                            PlayerChart30.render();
var PlayerPieChart30 = new CanvasJS.Chart('PlayerPieChartContainer30',

    {

        title:{

                   text: '不離不棄的PT構成(總分1879233)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 281104, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1256905, name: '強襲', legendMarkerType: 'square'},
{  y: 341224, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart30.render();
var PlayerChart31 = new CanvasJS.Chart('PlayerChartContainer31',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '梅迪翁的PT統計(總分1780406)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 137119,
				            interval: 13711,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅迪翁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5146},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 27259},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 53844},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 49926},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 118004},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 74443},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40884},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 38627},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13392},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22854},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 45729},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36635},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 71672},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44479},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32444},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 103988},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 106333},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 88147},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 47815},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3530},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 124621},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 119919},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 137119},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 116201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅迪翁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4822},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5734},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3575},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7058},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6777},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4182},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12220},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8199},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8090},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10035},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26868},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅迪翁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9266},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15312},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6772},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2504},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18809},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9458},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11488},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27976},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22055},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36168},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart31.render();
                                        }
                                      }
                                    });
                            PlayerChart31.render();
var PlayerPieChart31 = new CanvasJS.Chart('PlayerPieChartContainer31',

    {

        title:{

                   text: '梅迪翁的PT構成(總分1780406)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 97587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1523011, name: '強襲', legendMarkerType: 'square'},
{  y: 159808, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart31.render();
var PlayerChart32 = new CanvasJS.Chart('PlayerChartContainer32',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Oldy的PT統計(總分1726937)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 129727,
				            interval: 12972,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Oldy殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 29916},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38733},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 49575},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 64502},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 73132},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 56849},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39187},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 88644},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 129727},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 71840},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 49939},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54114},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 63950},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 56079},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 62006},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 63076},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31740},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 91006},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 78623},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 50008},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26562},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41988},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56956},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 81545},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 79444},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63096},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33211},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 71477},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30012},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart32.render();
                                        }
                                      }
                                    });
                            PlayerChart32.render();
var PlayerPieChart32 = new CanvasJS.Chart('PlayerPieChartContainer32',

    {

        title:{

                   text: 'Oldy的PT構成(總分1726937)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1726937, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart32.render();
var PlayerChart33 = new CanvasJS.Chart('PlayerChartContainer33',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '朱里安的PT統計(總分1511045)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 100617,
				            interval: 10061,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朱里安CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14020},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34835},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16461},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 34606},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50386},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18254},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16698},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15176},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38024},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 76952},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6615},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朱里安殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14590},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20040},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 40938},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 42800},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 604},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11007},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13113},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29792},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 97228},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 67291},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53912},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23825},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 72516},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27777},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 77831},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44082},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45785},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 39928},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44183},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6266},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 66958},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 100617},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 68043},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 78751},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6552},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20239},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 41224},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart33.render();
                                        }
                                      }
                                    });
                            PlayerChart33.render();
var PlayerPieChart33 = new CanvasJS.Chart('PlayerPieChartContainer33',

    {

        title:{

                   text: '朱里安的PT構成(總分1511045)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1155892, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 355153, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart33.render();
var PlayerChart34 = new CanvasJS.Chart('PlayerChartContainer34',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'BabyFat的PT統計(總分1502553)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 133324,
				            interval: 13332,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFat殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5345},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4468},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5640},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6668},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7055},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6315},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7042},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9482},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12718},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21844},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4284},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFat強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12123},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6011},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4004},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16562},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30767},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17413},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40779},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 84088},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 35477},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10696},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 60162},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54448},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 61302},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33039},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40851},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21947},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 62469},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51093},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 102599},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 115225},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 43411},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12503},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45708},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19122},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 133324},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14698},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 95272},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFatCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10293},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5300},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25809},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11503},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31112},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35145},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23549},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 43888},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart34.render();
                                        }
                                      }
                                    });
                            PlayerChart34.render();
var PlayerPieChart34 = new CanvasJS.Chart('PlayerPieChartContainer34',

    {

        title:{

                   text: 'BabyFat的PT構成(總分1502553)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 90861, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1225093, name: '強襲', legendMarkerType: 'square'},
{  y: 186599, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart34.render();
var PlayerChart35 = new CanvasJS.Chart('PlayerChartContainer35',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'アルフレッド的PT統計(總分1472248)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 134708,
				            interval: 13470,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッド強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13736},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18941},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26146},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 31873},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9292},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 74484},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35258},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 36187},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 67294},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42549},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40823},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17015},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 114039},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 74247},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49341},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 134708},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 42270},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 81114},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 87320},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17362},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39180},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21118},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 34045},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッドCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27941},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 32866},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31100},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27169},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19300},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40969},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッド殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4044},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6436},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6088},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20434},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6941},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4741},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6918},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5021},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8328},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 713},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35657},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 38700},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart35.render();
                                        }
                                      }
                                    });
                            PlayerChart35.render();
var PlayerPieChart35 = new CanvasJS.Chart('PlayerPieChartContainer35',

    {

        title:{

                   text: 'アルフレッド的PT構成(總分1472248)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144042, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1148861, name: '強襲', legendMarkerType: 'square'},
{  y: 179345, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart35.render();
var PlayerChart36 = new CanvasJS.Chart('PlayerChartContainer36',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '諾雅的PT統計(總分1377744)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 93941,
				            interval: 9394,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4868},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1556},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20541},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2910},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6570},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6011},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1238},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1843},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18596},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14554},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18996},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8479},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5927},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6346},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21999},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1442},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7231},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12787},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18629},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32246},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5245},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9834},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 43266},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23987},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5518},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44099},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33227},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30576},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 70007},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33911},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35413},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38405},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17873},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15525},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 47786},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45475},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 38444},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 29528},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 72701},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14397},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12246},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26104},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 42675},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 79283},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 93941},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46959},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32695},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 56671},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25865},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 58815},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34504},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart36.render();
                                        }
                                      }
                                    });
                            PlayerChart36.render();
var PlayerPieChart36 = new CanvasJS.Chart('PlayerPieChartContainer36',

    {

        title:{

                   text: '諾雅的PT構成(總分1377744)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 227848, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 791487, name: '強襲', legendMarkerType: 'square'},
{  y: 358409, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart36.render();
var PlayerChart37 = new CanvasJS.Chart('PlayerChartContainer37',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Rerex的PT統計(總分1149176)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 123442,
				            interval: 12344,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Rerex強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26236},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11580},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20472},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 32063},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26109},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18997},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 50245},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 51643},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 82319},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 123442},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39467},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 45579},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 60034},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33335},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20027},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15679},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14707},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19611},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31521},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14020},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27439},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "RerexCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2798},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27914},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22863},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13911},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15654},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6564},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Rerex殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9116},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2987},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8519},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5870},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 812},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6685},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 779},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6415},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7023},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7073},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5102},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32475},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22807},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11369},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11261},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8031},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8593},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18368},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 50754},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7530},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16087},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15769},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4936},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19455},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7100},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart37.render();
                                        }
                                      }
                                    });
                            PlayerChart37.render();
var PlayerPieChart37 = new CanvasJS.Chart('PlayerPieChartContainer37',

    {

        title:{

                   text: 'Rerex的PT構成(總分1149176)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 294947, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 764525, name: '強襲', legendMarkerType: 'square'},
{  y: 89704, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart37.render();
var PlayerChart38 = new CanvasJS.Chart('PlayerChartContainer38',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '藍✨的PT統計(總分1082970)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 94892,
				            interval: 9489,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍✨強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 37869},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23460},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16454},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 46001},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 33690},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41263},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 56320},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 94892},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47120},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 51005},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 74103},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13451},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56337},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4162},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 50386},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39633},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16682},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44097},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21870},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍✨殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1715},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 602},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5536},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8113},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6659},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9584},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7259},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3618},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15266},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8106},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 129},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29049},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6559},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3245},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8042},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2237},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8810},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3578},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9926},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 144},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16471},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 146},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍✨CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10528},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20481},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3797},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22737},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20606},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24358},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21569},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26358},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart38.render();
                                        }
                                      }
                                    });
                            PlayerChart38.render();
var PlayerPieChart38 = new CanvasJS.Chart('PlayerPieChartContainer38',

    {

        title:{

                   text: '藍✨的PT構成(總分1082970)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 163741, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 768795, name: '強襲', legendMarkerType: 'square'},
{  y: 150434, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart38.render();
var PlayerChart39 = new CanvasJS.Chart('PlayerChartContainer39',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '小紅包的PT統計(總分1066716)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 103493,
				            interval: 10349,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小紅包CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28831},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30832},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5121},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49287},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24696},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18077},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小紅包殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4366},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8647},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8141},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2420},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4010},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8704},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8875},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9975},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12679},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9355},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4712},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29545},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4543},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小紅包強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15981},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10530},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22134},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16518},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41330},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9242},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16831},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 96436},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6761},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 103493},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49676},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37713},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12216},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 76409},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 59572},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 49297},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 71797},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 67955},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29971},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart39.render();
                                        }
                                      }
                                    });
                            PlayerChart39.render();
var PlayerPieChart39 = new CanvasJS.Chart('PlayerPieChartContainer39',

    {

        title:{

                   text: '小紅包的PT構成(總分1066716)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116010, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 793862, name: '強襲', legendMarkerType: 'square'},
{  y: 156844, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
