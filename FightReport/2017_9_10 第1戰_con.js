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
				
				            maximum: 307346,
				            interval: 30734,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7379},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 13366},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 32985},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 10140},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 9515},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 54092},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 77055},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 119786},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 131652},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 133146},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 101781},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 87336},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 62238},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 146785},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 168821},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 149928},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 66513},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 41120},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 52851},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 91093},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 51762},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 85652},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 102512},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 76322},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 185291},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 303953},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 232812},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 307346},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 166603},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 61925},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 14901},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 3930},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6116},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9667},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5633},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7674},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 31382},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 45560},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 41458},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 98360},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 100739},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 179624},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 163834},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 124567},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 169498},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 73011},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 101857},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 133925},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 62956},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 78128},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 48910},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 39472},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 56870},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 94412},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 161969},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 114172},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 141176},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 56243},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 40375},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 42771},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 122871},
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
				
				            maximum: 5503821,
				            interval: 550382,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7379},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 20745},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 53730},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 63870},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 73385},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 127477},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 204532},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 324318},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 455970},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 589116},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 690897},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 778233},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 840471},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 987256},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1156077},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1306005},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1372518},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1413638},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1466489},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1557582},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1609344},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1694996},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1797508},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1873830},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2059121},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2363074},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2595886},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 2903232},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3069835},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3131760},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 3146661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 3930},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10046},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 19713},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 25346},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 33020},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 64402},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 109962},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 151420},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 249780},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 350519},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 530143},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 693977},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 818544},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 988042},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1061053},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1162910},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1296835},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1359791},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1437919},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1486829},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1526301},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1583171},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1677583},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1839552},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1953724},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2094900},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2151143},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 2191518},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2234289},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2357160},
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
				
				            maximum: 156385,
				            interval: 15638,
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
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 371},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2805},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1931},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11005},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6678},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 15596},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 30863},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 7939},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 6168},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1261},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2632},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 30794},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 27400},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 13182},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 6920},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6071},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11230},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 15531},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 9004},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 14199},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 11412},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 28928},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 30375},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 84234},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 20338},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 14523},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 14901},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4368},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9732},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 25055},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 4687},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 5404},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 31412},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 46804},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 70924},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 91148},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 97851},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 80425},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 53617},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 44469},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 97631},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 103964},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 113109},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 51542},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 21312},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 37435},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 68682},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 25452},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 57230},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 74978},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 51715},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 126899},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 156385},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 101058},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 136340},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 97260},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 30519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1501},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2229},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3763},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5013},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1980},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 27554},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 25885},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 28568},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 65228},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 53783},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 117901},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 82028},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 87071},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 95574},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 54893},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 59392},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 69687},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 44613},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 44482},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 21525},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 27365},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 17754},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 57785},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 74614},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 87324},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 65055},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 28984},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 14994},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4525},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 40562},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 536},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 617},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 729},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1097},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 6711},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1685},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4906},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 20116},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22746},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 9068},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11904},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 11163},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1016},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3728},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12107},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 8929},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 10668},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 17983},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8137},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 931},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1020},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9814},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 30740},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2429},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3351},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5287},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 620},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 4965},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3828},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 18578},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 12890},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 33132},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 40245},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 60038},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 76900},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 17380},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 51178},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 9050},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 30561},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 64238},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7180},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 32630},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 23657},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 39116},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 27698},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 76687},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8865},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 67984},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 26328},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 24361},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 28432},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 51569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2640},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3634},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5125},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3522},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 4111},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11675},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 23573},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 33266},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 9641},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 27356},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 15188},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 32458},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 15137},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 18360},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 37457},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 23637},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8051},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 13737},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 4186},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 6880},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 17306},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 14223},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 27534},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 13195},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 29464},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 147568},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 101379},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 86772},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 49005},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 16883},
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
				            text: '雪歌的PT統計(總分327631)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60038,
				            interval: 6003,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 48},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 52},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 193},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1313},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 653},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 48},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 225},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4935},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4316},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 71},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 4812},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 16441},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 60038},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 40140},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 11633},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 39116},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 27698},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 51627},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 28432},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 34019},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 729},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1090},
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

                   text: '雪歌的PT構成(總分327631)',
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


        
{  y: 11856, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1819, name: '強襲', legendMarkerType: 'square'},
{  y: 313956, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分306319)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64471,
				            interval: 6447,
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
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2429},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2686},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3268},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 18578},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 20842},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 36760},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 30360},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 29752},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 31605},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 23657},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 64471},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 24361},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 17550},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
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

                   text: '喵鼠的PT構成(總分306319)',
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


        
{  y: 0, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 306319, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '嘎喵的PT統計(總分306157)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37968,
				            interval: 3796,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 811},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 837},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 17},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 675},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 502},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 14916},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 23007},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 30749},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 36197},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 43},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 37968},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 9510},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10279},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 23},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 24518},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 14702},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 25209},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7408},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 24691},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15532},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2843},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2401},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 665},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3513},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 3328},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3618},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3667},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1092},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3728},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3708},
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

                   text: '嘎喵的PT構成(總分306157)',
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


        
{  y: 282838, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19141, name: '強襲', legendMarkerType: 'square'},
{  y: 4178, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分244504)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34486,
				            interval: 3448,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 211},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8341},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5070},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2099},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 205},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 4455},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 12890},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 16691},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 19403},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 20818},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 9050},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 30502},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 34486},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 25060},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 26328},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16788},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12107},
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

                   text: '土土昕的PT構成(總分244504)',
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


        
{  y: 15926, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28895, name: '強襲', legendMarkerType: 'square'},
{  y: 199683, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分224998)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42172,
				            interval: 4217,
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
{ x: new Date(0, 0, 0, 13, 01, 0), y: 292},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 530},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2575},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 110},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 702},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 14401},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 38468},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 26336},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 42172},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7792},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 118},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2719},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4833},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 20235},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 30661},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8466},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4077},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 617},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1097},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1685},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5705},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3058},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3339},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4370},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 620},
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

                   text: '阿拉的PT構成(總分224998)',
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


        
{  y: 204507, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19871, name: '強襲', legendMarkerType: 'square'},
{  y: 620, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分196004)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30516,
				            interval: 3051,
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 625},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 394},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 549},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 487},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11341},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 22698},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 16921},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 14036},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8141},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 25162},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 30516},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16621},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9462},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 3675},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 66},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8276},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 9815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 536},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 4924},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5330},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5444},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 475},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 510},
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

                   text: '鬼魅魍魎的PT構成(總分196004)',
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


        
{  y: 178785, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16234, name: '強襲', legendMarkerType: 'square'},
{  y: 985, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分181203)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35759,
				            interval: 3575,
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
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5336},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 58},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5401},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 8929},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 10570},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4791},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 16},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2560},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 696},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1013},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 30076},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 35759},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 28411},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3502},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7004},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7378},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1279},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2393},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4365},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3021},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7146},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4605},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3438},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2837},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 560},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 59},
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

                   text: '依司瑪耳的PT構成(總分181203)',
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


        
{  y: 145499, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35085, name: '強襲', legendMarkerType: 'square'},
{  y: 619, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分151433)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36021,
				            interval: 3602,
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
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8897},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11904},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1890},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1020},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 953},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 15},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 208},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 595},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 427},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1177},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 782},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 787},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1861},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 126},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16041},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 16513},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 9099},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 46},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 334},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7662},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8177},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 36021},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17913},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 46},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 24},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 22},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 17, 0), y: 921},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7909},
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

                   text: '魔法的PT構成(總分151433)',
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


        
{  y: 117939, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24664, name: '強襲', legendMarkerType: 'square'},
{  y: 8830, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分139594)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22576,
				            interval: 2257,
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
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4126},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2089},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1016},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 19683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 446},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1879},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 22576},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 20755},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9771},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 269},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 5371},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22443},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 6251},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 529},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1973},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 121},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5198},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4150},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3318},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 786},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 22},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 5747},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1025},
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

                   text: '寇內爾緹的PT構成(總分139594)',
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


        
{  y: 105908, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26914, name: '強襲', legendMarkerType: 'square'},
{  y: 6772, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分100649)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30750,
				            interval: 3075,
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
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1873},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 251},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 14563},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 30750},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 27150},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7620},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7979},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5197},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1375},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 400},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3448},
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

                   text: '有生之蓮解鋒鏑的PT構成(總分100649)',
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


        
{  y: 95426, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5223, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分80333)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16798,
				            interval: 1679,
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
{ x: new Date(0, 0, 0, 13, 06, 0), y: 3944},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 61},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 10868},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4897},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3037},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 4571},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3816},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2369},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 16798},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8760},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5963},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 3677},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5313},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6259},
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

                   text: '冰的PT構成(總分80333)',
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


        
{  y: 65084, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8990, name: '強襲', legendMarkerType: 'square'},
{  y: 6259, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分75984)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26575,
				            interval: 2657,
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
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1134},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 490},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2105},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 315},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1104},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 18},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 378},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1364},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2481},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2038},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12642},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 26575},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 6586},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3890},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1171},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7413},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 931},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 24, 0), y: 956},
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

                   text: '冰紅茶的PT構成(總分75984)',
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


        
{  y: 65513, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9515, name: '強襲', legendMarkerType: 'square'},
{  y: 956, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分18958)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13258,
				            interval: 1325,
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
{ x: new Date(0, 0, 0, 13, 23, 0), y: 47},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 66},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 768},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4798},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 13258},
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

                   text: '葬月的PT構成(總分18958)',
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


        
{  y: 18958, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '亞歷的PT統計(總分3393)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 3393,
				            interval: 339,
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
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3393},
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

                   text: '亞歷的PT構成(總分3393)',
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


        
{  y: 3393, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '艾爾的PT統計(總分321484)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31183,
				            interval: 3118,
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
                                    name: "艾爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 168},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 803},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1395},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10571},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 21940},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 20789},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1612},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 518},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2501},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22743},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 15994},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 22452},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11696},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 89},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1758},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 205},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 22827},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8785},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 26712},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 31183},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 20986},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 17887},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 21286},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 500},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1263},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 948},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 7097},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 775},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5405},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4147},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4174},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 867},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 6533},
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

                   text: '艾爾的PT構成(總分321484)',
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


        
{  y: 285400, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28998, name: '強襲', legendMarkerType: 'square'},
{  y: 7086, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '格斯·雷的PT統計(總分297790)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 143434,
				            interval: 14343,
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
                                    name: "格斯·雷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3526},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 143434},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 76685},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 32952},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格斯·雷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 983},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 54},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 532},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 226},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1722},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 162},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 2593},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格斯·雷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 27, 0), y: 34921},
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

                   text: '格斯·雷的PT構成(總分297790)',
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


        
{  y: 6272, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34921, name: '強襲', legendMarkerType: 'square'},
{  y: 256597, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神經失常的PT統計(總分282939)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30799,
				            interval: 3079,
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
                                    name: "神經失常強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 750},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 12060},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 6792},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1838},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1070},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1056},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 14901},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神經失常CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1786},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11675},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 12102},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 30799},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 12409},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8850},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 10479},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 6677},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6410},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15192},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 14910},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神經失常殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2468},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 18},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9774},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 840},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3923},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 195},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3129},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 750},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 915},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4786},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 284},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1877},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8492},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 18119},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 29459},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 23073},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 203},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 885},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3974},
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

                   text: '神經失常的PT構成(總分282939)',
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


        
{  y: 113183, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38467, name: '強襲', legendMarkerType: 'square'},
{  y: 131289, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '不正常的丹尼斯的PT統計(總分274068)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38665,
				            interval: 3866,
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
                                    name: "不正常的丹尼斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 11471},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 33266},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 9641},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2728},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 9510},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 21606},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8291},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3510},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8189},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 12053},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 952},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不正常的丹尼斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1208},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 736},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2761},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10553},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8237},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 21410},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4824},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3838},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不正常的丹尼斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1097},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 669},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 189},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 872},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 10204},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 918},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 4138},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2268},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 20354},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 38665},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 10821},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3215},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3876},
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

                   text: '不正常的丹尼斯的PT構成(總分274068)',
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


        
{  y: 97311, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53567, name: '強襲', legendMarkerType: 'square'},
{  y: 123190, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'TAT的PT統計(總分261267)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38860,
				            interval: 3886,
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
                                    name: "TAT強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 915},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3972},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 771},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1403},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 5801},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5709},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 985},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 16689},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9306},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2621},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TAT殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 949},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 1695},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1244},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1759},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 461},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 537},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21712},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 19432},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 22518},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 21521},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 6885},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8015},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 911},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1363},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 4854},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 5818},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5549},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 3660},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 467},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2402},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2415},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4254},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 38860},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 21639},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TATCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1293},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 585},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1374},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5689},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2219},
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

                   text: 'TAT的PT構成(總分261267)',
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


        
{  y: 201935, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48172, name: '強襲', legendMarkerType: 'square'},
{  y: 11160, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '瑞爾萊斯的PT統計(總分256079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33516,
				            interval: 3351,
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
                                    name: "瑞爾萊斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 45},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 720},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 947},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1837},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10203},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2536},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4631},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9463},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 9374},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 8333},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 56},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 21459},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 28839},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1808},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2168},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 14219},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3230},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 33516},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 6376},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 24014},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 23568},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 14857},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 66},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "瑞爾萊斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 723},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3304},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 928},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5969},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4296},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3790},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3773},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9274},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1042},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "瑞爾萊斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 715},
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

                   text: '瑞爾萊斯的PT構成(總分256079)',
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


        
{  y: 222265, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33099, name: '強襲', legendMarkerType: 'square'},
{  y: 715, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '火雲邪神的PT統計(總分215120)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26452,
				            interval: 2645,
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
                                    name: "火雲邪神殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7485},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 9055},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 239},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4333},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7506},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 9293},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 4555},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8245},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 216},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 19727},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 14123},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2779},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 4597},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8442},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 155},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 951},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 26452},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 11720},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 7587},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10798},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2637},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8418},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "火雲邪神強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3172},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1412},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3941},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 4650},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4194},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 6658},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4325},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4633},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "火雲邪神CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2589},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2230},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7327},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 676},
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

                   text: '火雲邪神的PT構成(總分215120)',
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


        
{  y: 169313, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32985, name: '強襲', legendMarkerType: 'square'},
{  y: 12822, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '烏杜恩的PT統計(總分186932)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40516,
				            interval: 4051,
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
                                    name: "烏杜恩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4631},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 8365},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2214},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1361},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5710},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9588},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2514},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 40516},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 21340},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 274},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 605},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4540},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 20168},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 21467},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 11516},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "烏杜恩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5890},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3807},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2531},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1438},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 7166},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 964},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5460},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "烏杜恩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4867},
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

                   text: '烏杜恩的PT構成(總分186932)',
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


        
{  y: 154809, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27256, name: '強襲', legendMarkerType: 'square'},
{  y: 4867, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '游騎士的PT統計(總分178565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30584,
				            interval: 3058,
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
                                    name: "游騎士殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 447},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 671},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1997},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1061},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2574},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 848},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6736},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 30584},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 10907},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3397},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 886},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2332},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7200},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 22771},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11375},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6805},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 5045},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12088},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2051},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15015},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1762},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1475},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 11173},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5564},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "游騎士CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 790},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4134},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "游騎士強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 371},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 619},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 784},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1261},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 2904},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2938},
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

                   text: '游騎士的PT構成(總分178565)',
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


        
{  y: 164764, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8877, name: '強襲', legendMarkerType: 'square'},
{  y: 4924, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '永恆之夜的PT統計(總分177944)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27534,
				            interval: 2753,
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
                                    name: "永恆之夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2231},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 1244},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7516},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 163},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1223},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5400},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4294},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4978},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6725},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11892},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 686},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3616},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1578},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5563},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3359},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆之夜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8358},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 13890},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4035},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆之夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 7787},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3243},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 15851},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 5932},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 17306},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8534},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 27534},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5006},
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

                   text: '永恆之夜的PT構成(總分177944)',
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


        
{  y: 60468, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26283, name: '強襲', legendMarkerType: 'square'},
{  y: 91193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藍巴勒彩虹的PT統計(總分172516)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23815,
				            interval: 2381,
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
                                    name: "藍巴勒彩虹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 674},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1515},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 893},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6453},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6071},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3890},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 5259},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 8111},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍巴勒彩虹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 408},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 738},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1769},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1572},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 196},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1994},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 391},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2016},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 360},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 6358},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 22782},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 23815},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 16361},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 5119},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 520},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11415},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1555},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 9910},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 5564},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 194},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 5915},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3443},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5044},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍巴勒彩虹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1241},
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

                   text: '藍巴勒彩虹的PT構成(總分172516)',
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


        
{  y: 132436, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38839, name: '強襲', legendMarkerType: 'square'},
{  y: 1241, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天楓的PT統計(總分153384)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25136,
				            interval: 2513,
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
                                    name: "天楓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 15},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 728},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 389},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 378},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 607},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4557},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 25136},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 15575},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 16452},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 11038},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4172},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2855},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1670},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1596},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 4589},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 5123},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 2078},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 943},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7613},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8959},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3886},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3330},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2537},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 321},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天楓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 762},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 5763},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 8529},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4102},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 2879},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2389},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天楓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 854},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2267},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1292},
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

                   text: '天楓的PT構成(總分153384)',
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


        
{  y: 124547, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24424, name: '強襲', legendMarkerType: 'square'},
{  y: 4413, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裘莉傑司的PT統計(總分131856)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25202,
				            interval: 2520,
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
                                    name: "裘莉傑司殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 150},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 357},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1371},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1100},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3934},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1220},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2198},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 11439},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 25202},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5186},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 18070},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4347},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 6197},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1648},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 7916},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4231},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1707},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2028},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裘莉傑司強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 712},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 5302},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3734},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 4389},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裘莉傑司CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 577},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 528},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 18306},
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

                   text: '裘莉傑司的PT構成(總分131856)',
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


        
{  y: 98308, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14137, name: '強襲', legendMarkerType: 'square'},
{  y: 19411, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'I.M.S.A.的PT統計(總分112836)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63077,
				            interval: 6307,
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
                                    name: "I.M.S.A.殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1319},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3019},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1909},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2740},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "I.M.S.A.CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 26, 0), y: 24694},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 63077},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 16053},
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

                   text: 'I.M.S.A.的PT構成(總分112836)',
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


        
{  y: 9012, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103824, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '月的PT統計(總分52772)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17868,
				            interval: 1786,
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
                                    name: "月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 415},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 177},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 805},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 718},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1925},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10500},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 7274},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 27, 0), y: 17868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1435},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 2951},
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

                   text: '月的PT構成(總分52772)',
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


        
{  y: 30518, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4386, name: '強襲', legendMarkerType: 'square'},
{  y: 17868, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天倫的PT統計(總分46109)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10704,
				            interval: 1070,
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
                                    name: "天倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4628},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2546},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3960},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 6325},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 190},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 2178},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天倫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6044},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4132},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1704},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 10704},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1659},
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

                   text: '天倫的PT構成(總分46109)',
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


        
{  y: 21866, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11880, name: '強襲', legendMarkerType: 'square'},
{  y: 12363, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '猴仔的PT統計(總分25000)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 3963,
				            interval: 396,
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
                                    name: "猴仔殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3690},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2660},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2302},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2412},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 287},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1738},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 796},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 2841},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2523},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3963},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1788},
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

                   text: '猴仔的PT構成(總分25000)',
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


        
{  y: 25000, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart31.render();
}
