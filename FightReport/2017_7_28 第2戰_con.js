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
				
				            maximum: 507759,
				            interval: 50775,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 46119},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 41147},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 49144},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 218338},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 149982},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 210997},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 139950},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31395},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28023},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 282576},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 134676},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 287324},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 232100},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 254352},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 127483},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7651},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1680},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 439648},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 285171},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 455274},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 433731},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 308626},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 274842},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 404726},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 266747},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 26496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11335},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21189},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14664},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31649},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38769},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 65240},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5964},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7205},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 232829},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 200250},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 109881},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 88118},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12676},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4394},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6664},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21300},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 149644},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 282207},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 507759},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 188576},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 120197},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 132422},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 138892},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 198580},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 125096},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 236727},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 162533},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 195988},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3123},
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
				
				            maximum: 8452140,
				            interval: 845214,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 46119},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 87266},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 136410},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 136410},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 136410},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 354748},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 504730},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 715727},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 855677},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 887072},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 887117},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 915140},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1197716},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1332392},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1619716},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1851816},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2106168},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2233651},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2241302},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2241328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2241328},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2243008},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2682656},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2967827},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3423101},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3856832},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4165458},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4440300},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4845026},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5111773},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5138269},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11335},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32524},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 47188},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 78837},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 117606},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 182846},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 188810},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 188810},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 196015},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 196015},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 428844},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 629094},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 738975},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 827093},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 839769},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 844163},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 850827},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 872127},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1021771},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1303978},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1811737},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2000313},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2120510},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2252932},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2391824},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2590404},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2715500},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2952227},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3114760},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3310748},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3313871},
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
				
				            maximum: 308565,
				            interval: 30856,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 35695},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31230},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 30898},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 93803},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 69256},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 84215},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 54741},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13168},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28023},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 123720},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 78988},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 121383},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 83475},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 58275},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 53761},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6630},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1680},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 118553},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85229},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 159875},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 190085},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 144794},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 120518},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 136918},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 137873},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 20642},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5709},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 869},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13281},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11949},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19435},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30780},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12202},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2292},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17026},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9471},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6777},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27603},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37192},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7243},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1021},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12530},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21238},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9907},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3194},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8732},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23031},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14418},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5854},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8549},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10450},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22057},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 24307},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16329},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5964},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7205},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 132017},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27397},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 83891},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 39649},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2983},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4394},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6664},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8651},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 69313},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 107911},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 183987},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 67796},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 66172},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 73647},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 51816},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 110591},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 68566},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 119596},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 86649},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 148031},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3123},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4715},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9048},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4965},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 112586},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 61291},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 96002},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 73007},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15935},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 141830},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46217},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 159164},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 121022},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 158885},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 66479},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 308565},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 178704},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 285492},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 240452},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 155100},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 131293},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 253390},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 128874},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2382},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10739},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7635},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5572},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8758},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 48911},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 96090},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 172853},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23569},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 48469},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7816},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12649},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 64146},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 151048},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 303243},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 111221},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 51264},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 55866},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 79036},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 85103},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 54211},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 101961},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 61674},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 47957},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1876},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4020},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5704},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4722},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2421},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1877},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16185},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23248},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20529},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9559},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2761},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2909},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8040},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2886},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2319},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15170},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14210},
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
				            text: '喵鼠的PT統計(總分455844)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 99999,
				            interval: 9999,
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
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 169},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 146},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5320},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3123},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1401},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1282},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7635},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5021},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8758},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3592},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 39612},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 69076},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 76824},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40970},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33448},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18325},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 41109},
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
var PlayerChart2 = new CanvasJS.Chart('PlayerChartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雪歌的PT統計(總分371047)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69347,
				            interval: 6934,
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
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 846},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 221},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5069},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5902},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21001},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 69347},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30732},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14552},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13246},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 50165},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38507},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42589},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56437},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22296},
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
var PlayerChart3 = new CanvasJS.Chart('PlayerChartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '羽龍的PT統計(總分325637)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 188713,
				            interval: 18871,
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1052},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2466},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2049},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5670},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2445},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 35223},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 188713},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33140},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30861},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20763},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1104},
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
var PlayerChart4 = new CanvasJS.Chart('PlayerChartContainer4',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋風冷月的PT統計(總分253240)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61860,
				            interval: 6186,
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
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1169},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 67},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 77},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 253},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24318},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25555},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 61860},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9017},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14531},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27916},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12757},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13277},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43799},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17870},
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
var PlayerChart5 = new CanvasJS.Chart('PlayerChartContainer5',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '土土昕的PT統計(總分232548)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74841,
				            interval: 7484,
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
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1792},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 108},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4188},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 202},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 570},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18766},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18370},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 269},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1325},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4800},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38236},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 62967},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 74841},
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
var PlayerChart6 = new CanvasJS.Chart('PlayerChartContainer6',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎喵的PT統計(總分224792)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41069,
				            interval: 4106,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 440},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 873},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 204},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 726},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5578},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41069},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9598},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16789},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1831},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3601},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4527},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18481},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10074},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1099},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14337},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7850},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9023},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7056},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2461},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28012},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4511},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21712},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 667},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3374},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3389},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2886},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4624},
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
var PlayerChart7 = new CanvasJS.Chart('PlayerChartContainer7',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '葬月的PT統計(總分216519)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28918,
				            interval: 2891,
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
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1145},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 297},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 731},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 922},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 544},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24151},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6813},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9426},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3838},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28557},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21523},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28918},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19414},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3439},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9387},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6225},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16579},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1139},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8194},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3835},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5236},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2371},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7233},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4824},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 551},
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
var PlayerChart8 = new CanvasJS.Chart('PlayerChartContainer8',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿拉的PT統計(總分192467)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29844,
				            interval: 2984,
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
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 728},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6848},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1670},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1859},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4978},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29844},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3252},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25210},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26202},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10462},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26099},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11065},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3010},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11725},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17035},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 366},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4988},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1771},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 772},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4163},
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
var PlayerChart9 = new CanvasJS.Chart('PlayerChartContainer9',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '依司瑪耳的PT統計(總分176905)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38530,
				            interval: 3853,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1502},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4570},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4636},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7860},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2003},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 211},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4069},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12547},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38530},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11071},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6566},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6896},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1044},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18638},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17236},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3802},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7270},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8751},
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
var PlayerChart10 = new CanvasJS.Chart('PlayerChartContainer10',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯的PT統計(總分132285)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21063,
				            interval: 2106,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 487},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2291},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1001},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5444},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4679},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4228},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2632},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2963},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10792},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10039},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5769},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12031},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10429},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13031},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4722},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2947},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2413},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3769},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2212},
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
var PlayerChart11 = new CanvasJS.Chart('PlayerChartContainer11',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '寇內爾緹的PT統計(總分121994)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23102,
				            interval: 2310,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 375},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1693},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 108},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 931},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11046},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2364},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11887},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9490},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23102},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21909},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2942},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 252},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 433},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 66},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2556},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4946},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4324},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9701},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6004},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5065},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2635},
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
var PlayerChart12 = new CanvasJS.Chart('PlayerChartContainer12',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '有生之蓮解鋒鏑的PT統計(總分98075)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27313,
				            interval: 2731,
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1226},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1644},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 722},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 484},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 220},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1004},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 655},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2123},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1157},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16107},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5765},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27313},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6005},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3877},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8773},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7785},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10775},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1222},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1168},
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
var PlayerChart13 = new CanvasJS.Chart('PlayerChartContainer13',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰的PT統計(總分97383)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15521,
				            interval: 1552,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2053},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2078},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4398},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4836},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3616},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7205},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10031},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4372},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1705},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3731},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15521},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6497},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12710},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2026},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10147},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 634},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5823},
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
var PlayerChart14 = new CanvasJS.Chart('PlayerChartContainer14',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞歷的PT統計(總分91337)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10657,
				            interval: 1065,
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
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4620},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 863},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2595},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2176},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5099},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2647},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6968},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7341},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5699},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10657},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2966},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1654},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7004},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3423},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5243},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4504},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4940},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 807},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3280},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3362},
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
var PlayerChart15 = new CanvasJS.Chart('PlayerChartContainer15',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鬼魅魍魎的PT統計(總分80905)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23252,
				            interval: 2325,
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
                                    name: "鬼魅魍魎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 131},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 506},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 199},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 450},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 228},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2342},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1444},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23252},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5862},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17460},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12649},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1179},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13272},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1814},
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
var PlayerChart16 = new CanvasJS.Chart('PlayerChartContainer16',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '藏月的PT統計(總分80357)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18251,
				            interval: 1825,
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
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 626},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 221},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 365},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 463},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2221},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12405},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4868},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1031},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18251},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3481},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3295},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6459},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1693},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1995},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 801},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4530},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2300},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4164},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1348},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2421},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1877},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1564},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2986},
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
var PlayerChart17 = new CanvasJS.Chart('PlayerChartContainer17',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '魔法的PT統計(總分60115)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20054,
				            interval: 2005,
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2425},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 966},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 200},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2348},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20054},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 92},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17953},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2589},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 662},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 952},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4346},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4619},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2909},
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
var PlayerChart18 = new CanvasJS.Chart('PlayerChartContainer18',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿榮的PT統計(總分46614)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7816,
				            interval: 781,
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
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 797},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 123},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 366},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4097},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5618},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7040},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2828},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2876},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6374},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2510},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 692},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 820},
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
var PlayerChart19 = new CanvasJS.Chart('PlayerChartContainer19',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '赤雲天的PT統計(總分38374)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8227,
				            interval: 822,
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
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8195},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5454},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5088},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1222},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2141},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8227},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1725},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3139},
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
var PlayerChart20 = new CanvasJS.Chart('PlayerChartContainer20',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰紅茶的PT統計(總分17433)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6841,
				            interval: 684,
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
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1632},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 153},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 120},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 105},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 429},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 950},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 390},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1188},
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
var PlayerChart21 = new CanvasJS.Chart('PlayerChartContainer21',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Kyouga的PT統計(總分762938)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 174014,
				            interval: 17401,
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
                                    name: "Kyouga殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8780},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8012},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6462},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3631},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5579},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5860},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KyougaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4345},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45552},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39618},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 98999},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31920},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 174014},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 134546},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73796},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 75842},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kyouga強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12685},
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
var PlayerChart22 = new CanvasJS.Chart('PlayerChartContainer22',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞倫的PT統計(總分743537)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 177548,
				            interval: 17754,
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
                                    name: "亞倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1452},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 81683},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14180},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50450},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 33389},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15935},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 59514},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46489},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42815},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34559},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 93536},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 177548},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 80072},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 470},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4184},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2000},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞倫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2445},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1687},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1021},
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
var PlayerChart23 = new CanvasJS.Chart('PlayerChartContainer23',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '小鬼˙ˇ˙的PT統計(總分553211)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111478,
				            interval: 11147,
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
                                    name: "小鬼˙ˇ˙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30903},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 47111},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38565},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 74533},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17071},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111478},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 105906},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 81304},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15505},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鬼˙ˇ˙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 364},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1102},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2140},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8115},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1364},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3153},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 999},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3675},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3457},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 52},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鬼˙ˇ˙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2292},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3479},
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
var PlayerChart24 = new CanvasJS.Chart('PlayerChartContainer24',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '靈玲的PT統計(總分454479)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 176262,
				            interval: 17626,
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
                                    name: "靈玲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 592},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 521},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 210},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5341},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2293},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29557},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10700},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1010},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈玲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3615},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈玲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 99858},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61085},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 176262},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60083},
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
var PlayerChart25 = new CanvasJS.Chart('PlayerChartContainer25',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '凱撒的PT統計(總分390757)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 132303,
				            interval: 13230,
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
                                    name: "凱撒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13174},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5691},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3521},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5215},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱撒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41972},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40333},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 132303},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 118621},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29880},
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
var PlayerChart26 = new CanvasJS.Chart('PlayerChartContainer26',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '闇龍的PT統計(總分270836)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40678,
				            interval: 4067,
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
                                    name: "闇龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1154},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1280},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 218},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9699},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10246},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9485},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4909},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3369},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3182},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15187},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6395},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5426},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9301},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4950},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12598},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14192},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26981},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19977},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40678},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17810},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22139},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "闇龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 882},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2554},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3058},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3759},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3858},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3712},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4435},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "闇龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 529},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 631},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 866},
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
var PlayerChart27 = new CanvasJS.Chart('PlayerChartContainer27',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '諸神的黃昏的PT統計(總分265099)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27244,
				            interval: 2724,
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
                                    name: "諸神的黃昏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4293},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6857},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4406},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7670},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6411},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7942},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3299},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3853},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10415},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4167},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24069},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11238},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10855},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15888},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 271},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8717},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27244},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25909},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14435},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22759},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12269},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10900},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諸神的黃昏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2350},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 941},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7870},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5259},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4812},
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
var PlayerChart28 = new CanvasJS.Chart('PlayerChartContainer28',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '大米粒的PT統計(總分237055)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21366,
				            interval: 2136,
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
                                    name: "大米粒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 308},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5697},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2381},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14806},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3787},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10070},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8052},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15646},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7060},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10696},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6254},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13090},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8143},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14185},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16888},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17726},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11823},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14866},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21366},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大米粒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9460},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3340},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2441},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10800},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7639},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大米粒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 529},
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
var PlayerChart29 = new CanvasJS.Chart('PlayerChartContainer29',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿祖童鞋的PT統計(總分179482)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39788,
				            interval: 3978,
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
                                    name: "阿祖童鞋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 311},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2008},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3152},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2181},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 338},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 637},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 820},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10773},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5402},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 804},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10790},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9598},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1022},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2067},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2105},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39788},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27510},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6547},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12532},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿祖童鞋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 645},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6286},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1817},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6595},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9786},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2344},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13599},
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
var PlayerChart30 = new CanvasJS.Chart('PlayerChartContainer30',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '蝦底迪的PT統計(總分176154)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30349,
				            interval: 3034,
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
                                    name: "蝦底迪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 968},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 445},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 475},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8985},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6092},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3720},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4585},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30349},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13145},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8360},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 779},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2761},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6050},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2058},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1988},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3779},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4273},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1608},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11764},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8556},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1290},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9668},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6131},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1310},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3399},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3194},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2137},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1298},
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
var PlayerChart31 = new CanvasJS.Chart('PlayerChartContainer31',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '(´・ω・`)的PT統計(總分158707)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25190,
				            interval: 2519,
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
                                    name: "(´・ω・`)殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4625},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 916},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4217},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4227},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1916},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4352},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2915},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25190},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15784},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23325},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 204},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3565},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10081},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9333},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2853},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1982},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5498},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2774},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "(´・ω・`)強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4417},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4694},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5651},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5458},
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
var PlayerChart32 = new CanvasJS.Chart('PlayerChartContainer32',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '泡泡妖精的PT統計(總分138257)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13967,
				            interval: 1396,
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
                                    name: "泡泡妖精殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4164},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 397},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2968},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2353},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3857},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2886},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4371},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5138},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9395},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5177},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1400},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8110},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 693},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3510},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8230},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3008},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7003},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13967},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 786},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5321},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10863},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11392},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "泡泡妖精CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1322},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 809},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "泡泡妖精強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2258},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3057},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4730},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3215},
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
var PlayerChart33 = new CanvasJS.Chart('PlayerChartContainer33',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '風魂的PT統計(總分136922)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30937,
				            interval: 3093,
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
                                    name: "風魂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1276},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2748},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2364},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5854},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風魂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1397},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3179},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4750},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5177},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 861},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8341},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6328},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1009},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9169},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2607},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1603},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9255},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1637},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8092},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6982},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14426},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30937},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2581},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風魂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 585},
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
var PlayerChart34 = new CanvasJS.Chart('PlayerChartContainer34',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '仁傑的PT統計(總分133689)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14332,
				            interval: 1433,
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
                                    name: "仁傑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7678},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1032},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5319},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6443},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9214},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9070},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5674},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5494},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14332},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2756},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12755},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5290},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11069},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9907},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12276},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "仁傑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2057},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3531},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5751},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3156},
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
var PlayerChart35 = new CanvasJS.Chart('PlayerChartContainer35',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '克洛克維尼的PT統計(總分132765)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13853,
				            interval: 1385,
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
                                    name: "克洛克維尼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 399},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 653},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 909},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11284},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13853},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10795},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3234},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2741},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3985},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10393},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1030},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4699},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 293},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1680},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6954},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5275},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3731},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8490},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3331},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8905},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7353},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3867},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克洛克維尼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 869},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1398},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6518},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1394},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8732},
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
var PlayerChart36 = new CanvasJS.Chart('PlayerChartContainer36',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '朔夜的PT統計(總分130804)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11626,
				            interval: 1162,
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
                                    name: "朔夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1169},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1944},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2424},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7260},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4781},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10111},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3584},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3978},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 919},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2302},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8280},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3138},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10229},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5704},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10253},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11626},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10882},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 817},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6377},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朔夜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1207},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1199},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3770},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4780},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1258},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朔夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1258},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5884},
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
var PlayerChart37 = new CanvasJS.Chart('PlayerChartContainer37',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '靈的PT統計(總分129208)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14418,
				            interval: 1441,
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
                                    name: "靈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 525},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1047},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10825},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4850},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 435},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3891},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6152},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2241},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10513},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1833},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5273},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6868},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3953},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1530},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10704},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5111},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7737},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8468},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1075},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5334},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5409},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2934},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2918},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14418},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1814},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3290},
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
var PlayerChart38 = new CanvasJS.Chart('PlayerChartContainer38',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '薛丁格的貓的PT統計(總分128174)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26165,
				            interval: 2616,
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
                                    name: "薛丁格的貓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9565},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2676},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4156},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3323},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1132},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3127},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7568},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1886},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11133},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8852},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7780},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2264},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12555},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2694},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26165},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 9653},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薛丁格的貓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 577},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8209},
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
var PlayerChart39 = new CanvasJS.Chart('PlayerChartContainer39',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '主人！那邊不能摸的PT統計(總分16195)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16195,
				            interval: 1619,
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
                                    name: "主人！那邊不能摸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16195},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
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
}
