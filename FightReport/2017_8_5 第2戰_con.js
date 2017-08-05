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
				
				            maximum: 298085,
				            interval: 29808,
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
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15285},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26579},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 24540},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27986},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16953},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 60465},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 32728},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 343},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 103072},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 77880},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 130562},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 143334},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 45007},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5651},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3202},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 186005},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 186371},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 163346},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 212194},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 82503},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 174767},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 124200},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 128188},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 195039},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 196253},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 203600},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 298085},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10602},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 36742},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 30011},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19370},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 46298},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 67498},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28931},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39940},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 34980},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 80823},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 62392},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 115570},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 64217},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 73688},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 71216},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 98144},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 102129},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 134540},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 84203},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 93460},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 54731},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 111533},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 100661},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 121522},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 128090},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 153040},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 224561},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 209585},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 194421},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 171968},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 195718},
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
				
				            maximum: 5826870,
				            interval: 582687,
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
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15285},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 41864},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 66404},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 94390},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 111343},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 171808},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 204536},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 204536},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 204553},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 204896},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 307968},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 385848},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 516410},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 659744},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 704751},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 710402},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 713604},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 715735},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 901740},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1088111},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1251457},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1463651},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1546154},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1720921},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1845121},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1973309},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2168348},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2364601},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2568201},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2866286},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2876888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 36742},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 66753},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 86123},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 132421},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 199919},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 228850},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 268790},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 303770},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 384593},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 446985},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 562555},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 626772},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 700460},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 771676},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 869820},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 971949},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1106489},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1190692},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1284152},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1338883},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1450416},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1551077},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1672599},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1800689},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1953729},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2178290},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2387875},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2582296},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2754264},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2949982},
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
				
				            maximum: 139834,
				            interval: 13983,
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
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 296},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 693},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2100},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11323},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6543},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6214},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 870},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5651},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9076},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13798},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12558},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30732},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2693},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9936},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11494},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9644},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18795},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23824},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 96902},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10602},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11552},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12893},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18410},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14571},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13371},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11695},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7782},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 343},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 73010},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 67170},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 81694},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46073},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1005},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3202},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 43240},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 83468},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 123540},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 128510},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 72922},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 79419},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 53819},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77768},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45561},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 84438},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 115703},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 136907},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18955},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17354},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7276},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25282},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 50109},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17834},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19123},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16720},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48540},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23021},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55994},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26031},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 32009},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14414},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38480},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 43168},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 82862},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 39632},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29450},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30764},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38216},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 77392},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 64756},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 81998},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111474},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 72040},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 104813},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 117680},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 97841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 101651},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2715},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13390},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5437},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13415},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3582},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46670},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24946},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18739},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4167},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 42654},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 96391},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44002},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 133689},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 89105},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27248},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52952},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6888},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85412},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 70381},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38926},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 139834},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 93020},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 64073},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 64276},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14279},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12274},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6429},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10193},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17389},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11097},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16650},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15394},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30605},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20569},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41129},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31681},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25054},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55053},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53629},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54176},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30669},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 30622},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44481},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22969},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 54950},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18152},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41379},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18326},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36944},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 112144},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 93772},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 62558},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 69673},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 87945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3508},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5665},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10823},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4167},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2866},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1678},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18802},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18447},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6505},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16625},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1749},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4785},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21009},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13949},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19529},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 998},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18367},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5117},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15387},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27766},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4622},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40377},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11000},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14183},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4454},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6122},
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
				            text: '土土昕的PT統計(總分368044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 133689,
				            interval: 13368,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 671},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 817},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 802},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 719},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4384},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3193},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 296},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46670},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24946},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 133689},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 76418},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16411},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24685},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17477},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3980},
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

                   text: '土土昕的PT構成(總分368044)',
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


        
{  y: 14620, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9148, name: '強襲', legendMarkerType: 'square'},
{  y: 344276, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分367601)'
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
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4538},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70590},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44002},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 60824},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 52205},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25961},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 734},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1614},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2497},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 216},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4421},
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

                   text: '羽龍的PT構成(總分367601)',
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


        
{  y: 358119, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 9482, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '雪歌的PT統計(總分305157)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65294,
				            interval: 6529,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 292},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 298},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4959},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8533},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2391},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32948},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4877},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3488},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16446},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37125},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25801},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58006},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 65294},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32616},
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

                   text: '雪歌的PT構成(總分305157)',
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


        
{  y: 23454, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35339, name: '強襲', legendMarkerType: 'square'},
{  y: 246364, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分283128)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37400,
				            interval: 3740,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 865},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2753},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2129},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 722},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 677},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 37400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32266},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16330},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1737},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 244},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13368},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18975},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27111},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4940},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 167},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7864},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37295},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3703},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15364},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13215},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6214},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3878},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3392},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3975},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1999},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 832},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 871},
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

                   text: '嘎喵的PT構成(總分283128)',
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


        
{  y: 246857, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32569, name: '強襲', legendMarkerType: 'square'},
{  y: 3702, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分228736)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23217,
				            interval: 2321,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 208},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2370},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 386},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 208},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1377},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 619},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5769},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10972},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12710},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19660},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 761},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15250},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17442},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23217},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9346},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7630},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10799},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10453},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5253},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4482},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5318},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6798},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4348},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4684},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10615},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5168},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7253},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 967},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5529},
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

                   text: '葬月的PT構成(總分228736)',
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


        
{  y: 185067, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37173, name: '強襲', legendMarkerType: 'square'},
{  y: 6496, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分220156)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48484,
				            interval: 4848,
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 870},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3833},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1288},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9328},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13012},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 156},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 612},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 658},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 795},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1146},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 317},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 924},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1974},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 168},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8790},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33629},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47932},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48484},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 542},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 711},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11460},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12236},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8509},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6102},
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

                   text: '魔法的PT構成(總分220156)',
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


        
{  y: 30397, name: '強襲', legendMarkerType: 'triangle'},
{  y: 189759, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '喵鼠的PT統計(總分200902)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31111,
				            interval: 3111,
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
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31111},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8536},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12687},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10837},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26901},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22563},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6310},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22358},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25238},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24237},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2078},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8046},
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

                   text: '喵鼠的PT構成(總分200902)',
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


        
{  y: 39647, name: '強襲', legendMarkerType: 'triangle'},
{  y: 151131, name: 'CBC', legendMarkerType: 'square'},
{  y: 10124, name: '殲滅', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分186048)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32823,
				            interval: 3282,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 195},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11333},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2707},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8702},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16187},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1233},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32823},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22611},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 98},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6804},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17489},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25231},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18051},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7131},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 346},
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

                   text: '依司瑪耳的PT構成(總分186048)',
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


        
{  y: 178571, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7477, name: '強襲', legendMarkerType: 'square'},
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
				            text: '寇內爾緹的PT統計(總分162943)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22929,
				            interval: 2292,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1774},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1120},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 161},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1194},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1180},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22145},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11919},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22929},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7212},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20730},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19607},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 169},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4969},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7541},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5578},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4802},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1195},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3806},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6058},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5130},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4584},
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

                   text: '寇內爾緹的PT構成(總分162943)',
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


        
{  y: 142170, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20773, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿榮的PT統計(總分104302)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11458,
				            interval: 1145,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 99},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 193},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1593},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1016},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6610},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4550},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3202},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11458},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8835},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6377},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5259},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6990},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9984},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10320},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8020},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8960},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5087},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5749},
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

                   text: '阿榮的PT構成(總分104302)',
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


        
{  y: 76486, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27816, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分98122)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12071,
				            interval: 1207,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6806},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4180},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4753},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4866},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6070},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11588},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9312},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6123},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12071},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6044},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4827},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5651},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5812},
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

                   text: '冰的PT構成(總分98122)',
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


        
{  y: 67900, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7888, name: 'CBC', legendMarkerType: 'square'},
{  y: 22334, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分92094)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22611,
				            interval: 2261,
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 840},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1650},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 238},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3576},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4944},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22611},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11304},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8295},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9650},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5354},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7063},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9395},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7174},
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

                   text: '有生之蓮解鋒鏑的PT構成(總分92094)',
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


        
{  y: 84920, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7174, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分80072)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13738,
				            interval: 1373,
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2658},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4524},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 111},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 338},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2084},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8063},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5960},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1228},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7958},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5590},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7090},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13738},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 693},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 905},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6851},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6326},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5896},
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

                   text: '冰紅茶的PT構成(總分80072)',
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


        
{  y: 59401, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20671, name: '強襲', legendMarkerType: 'square'},
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
				            text: '亞歷的PT統計(總分75791)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10916,
				            interval: 1091,
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
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5852},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6958},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8329},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6438},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6918},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 592},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10211},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6269},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8463},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10916},
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

                   text: '亞歷的PT構成(總分75791)',
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


        
{  y: 25982, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 49809, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '阿拉的PT統計(總分54139)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10492,
				            interval: 1049,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 191},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 195},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 971},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 283},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1280},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1322},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 286},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 342},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 215},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1858},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1177},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1305},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 179},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10492},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1614},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 880},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 82},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 330},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 293},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8733},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1473},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1716},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1365},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1023},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1405},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4806},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1059},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5083},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 716},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 560},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1426},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1366},
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

                   text: '阿拉的PT構成(總分54139)',
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


        
{  y: 32141, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17930, name: '強襲', legendMarkerType: 'square'},
{  y: 4068, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分47574)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7961,
				            interval: 796,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 201},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 752},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 54},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4139},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 240},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4671},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2290},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1077},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2739},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1901},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 359},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 334},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3764},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 363},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5813},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 980},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 715},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 660},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7961},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4130},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 596},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2741},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1036},
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

                   text: '藏月的PT構成(總分47574)',
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


        
{  y: 39071, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4130, name: '強襲', legendMarkerType: 'square'},
{  y: 4373, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分2079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 1697,
				            interval: 169,
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 323},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 42},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1697},
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

                   text: '秋風冷月的PT構成(總分2079)',
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


        
{  y: 382, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1697, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '紫彪的PT統計(總分311062)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54176,
				            interval: 5417,
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
                                    name: "紫彪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9316},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3206},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1771},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8764},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 24587},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7372},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8773},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5401},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1551},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4867},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6406},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3295},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24885},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8550},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12619},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11710},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13395},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7980},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3080},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 503},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫彪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6528},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3047},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18363},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫彪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3678},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11097},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3132},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24639},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54176},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12538},
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

                   text: '紫彪的PT構成(總分311062)',
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


        
{  y: 168031, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33771, name: '強襲', legendMarkerType: 'square'},
{  y: 109260, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '慈霒的PT統計(總分272926)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22247,
				            interval: 2224,
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
                                    name: "慈霒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3323},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7676},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1358},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3031},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19258},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20945},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 394},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2260},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 447},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11363},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7370},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1824},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4081},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3109},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11941},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22247},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13353},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9274},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8239},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13531},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9532},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8826},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "慈霒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5001},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16323},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9248},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "慈霒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4990},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13731},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1922},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1749},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14717},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19432},
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

                   text: '慈霒的PT構成(總分272926)',
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


        
{  y: 185813, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30572, name: 'CBC', legendMarkerType: 'square'},
{  y: 56541, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '約瑟夫的PT統計(總分266186)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 112144,
				            interval: 11214,
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
                                    name: "約瑟夫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 243},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 297},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1032},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4219},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10277},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4606},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5121},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11531},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "約瑟夫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1295},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55053},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28990},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 112144},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12486},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13204},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "約瑟夫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5665},
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

                   text: '約瑟夫的PT構成(總分266186)',
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


        
{  y: 37349, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 223172, name: 'CBC', legendMarkerType: 'square'},
{  y: 5665, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雷歐尼斯特的PT統計(總分241992)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44481,
				            interval: 4448,
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
                                    name: "雷歐尼斯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2207},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2135},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 480},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 358},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1516},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 805},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 685},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7388},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1850},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3397},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐尼斯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4157},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7301},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5938},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14912},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15772},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22852},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7400},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18277},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44481},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28841},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21564},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29629},
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

                   text: '雷歐尼斯特的PT構成(總分241992)',
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


        
{  y: 20868, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 221124, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冬日黎明的PT統計(總分240385)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24324,
				            interval: 2432,
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
                                    name: "冬日黎明殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 776},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2858},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5700},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4462},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5106},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6642},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9791},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7046},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5816},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1937},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8312},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16258},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16940},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8993},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24324},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4670},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16175},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16396},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9539},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20067},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13328},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1363},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13630},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冬日黎明強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4986},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3157},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4109},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4299},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3686},
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

                   text: '冬日黎明的PT構成(總分240385)',
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


        
{  y: 220148, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20237, name: '強襲', legendMarkerType: 'square'},
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
				            text: '愛月光兒的PT統計(總分204978)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38242,
				            interval: 3824,
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
                                    name: "愛月光兒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 104},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 227},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4120},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16671},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5071},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6721},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4542},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 433},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21443},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4628},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38242},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2650},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 67},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 935},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12418},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17600},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15344},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6204},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6452},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11600},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "愛月光兒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4144},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4586},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4816},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4556},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 998},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5058},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1430},
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

                   text: '愛月光兒的PT構成(總分204978)',
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


        
{  y: 179390, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25588, name: '強襲', legendMarkerType: 'square'},
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
				            text: '佛羅倫斯特的PT統計(總分192322)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58316,
				            interval: 5831,
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
                                    name: "佛羅倫斯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13518},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15394},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15693},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30669},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12345},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3384},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 38861},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 58316},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "佛羅倫斯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 215},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1178},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 77},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 191},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 476},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
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

                   text: '佛羅倫斯特的PT構成(總分192322)',
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


        
{  y: 188180, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 4142, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '黎各的PT統計(總分184725)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49354,
				            interval: 4935,
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
                                    name: "黎各殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7136},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 384},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3489},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8399},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10921},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黎各CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10122},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6429},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4255},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18277},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31681},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18045},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14768},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1124},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49354},
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

                   text: '黎各的PT構成(總分184725)',
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


        
{  y: 30670, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 154055, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '月夜凝兒的PT統計(總分175331)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29203,
				            interval: 2920,
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
                                    name: "月夜凝兒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 927},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9393},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1960},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7339},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月夜凝兒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6912},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 63},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 526},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3981},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4943},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 897},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 313},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5908},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5677},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5612},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2740},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6122},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5622},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12174},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7878},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19336},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29203},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18886},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12570},
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

                   text: '月夜凝兒的PT構成(總分175331)',
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


        
{  y: 25741, name: '強襲', legendMarkerType: 'triangle'},
{  y: 149590, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '特洛伊的PT統計(總分171241)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36905,
				            interval: 3690,
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
                                    name: "特洛伊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3854},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 574},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3671},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1494},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4719},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5581},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2317},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1983},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3065},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7031},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特洛伊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15577},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 703},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1636},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7314},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7862},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特洛伊CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22969},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17202},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20621},
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

                   text: '特洛伊的PT構成(總分171241)',
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


        
{  y: 40452, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33092, name: '強襲', legendMarkerType: 'square'},
{  y: 97697, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夜貓子的PT統計(總分161614)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14845,
				            interval: 1484,
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
                                    name: "夜貓子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5764},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9394},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1699},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7629},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4024},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5004},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5136},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9019},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2600},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8329},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9951},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3893},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1032},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6275},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2466},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14095},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7932},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4891},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11018},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14845},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜貓子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2816},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2866},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3491},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3878},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3503},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4345},
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

                   text: '夜貓子的PT構成(總分161614)',
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


        
{  y: 140715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20899, name: '強襲', legendMarkerType: 'square'},
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
				            text: '星野的PT統計(總分147355)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81286,
				            interval: 8128,
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
                                    name: "星野殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 304},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 393},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 311},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4052},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 540},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 95},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2939},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9927},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4156},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10361},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6022},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星野CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17654},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 81286},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星野強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9295},
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

                   text: '星野的PT構成(總分147355)',
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


        
{  y: 39120, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98940, name: 'CBC', legendMarkerType: 'square'},
{  y: 9295, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '千東歲的PT統計(總分128817)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11477,
				            interval: 1147,
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
                                    name: "千東歲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4512},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2098},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1817},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2607},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 255},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1899},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2619},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2484},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9375},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1377},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2981},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 252},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5355},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10610},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1695},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4910},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2609},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2681},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5799},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3289},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1770},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11477},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2027},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7070},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "千東歲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3508},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3056},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4812},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8336},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6321},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4454},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "千東歲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4797},
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

                   text: '千東歲的PT構成(總分128817)',
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


        
{  y: 93150, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30870, name: '強襲', legendMarkerType: 'square'},
{  y: 4797, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '時崎  狂三的PT統計(總分89962)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12758,
				            interval: 1275,
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
                                    name: "時崎  狂三殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 217},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 361},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 786},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 218},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 78},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 175},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 164},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2222},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 617},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 706},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 144},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 815},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6336},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10013},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12552},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12758},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7499},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 273},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4372},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3202},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11709},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "時崎  狂三強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1351},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1678},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1527},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1048},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1449},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1399},
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

                   text: '時崎  狂三的PT構成(總分89962)',
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


        
{  y: 81510, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8452, name: '強襲', legendMarkerType: 'square'},
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
				            text: '玥夜舞的PT統計(總分88485)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22169,
				            interval: 2216,
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
                                    name: "玥夜舞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5224},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3983},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2419},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5863},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2475},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8185},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5148},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2291},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3382},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22169},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17495},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "玥夜舞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5227},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4622},
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

                   text: '玥夜舞的PT構成(總分88485)',
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


        
{  y: 78636, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9849, name: '強襲', legendMarkerType: 'square'},
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
				            text: '巴特的PT統計(總分72601)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12388,
				            interval: 1238,
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
                                    name: "巴特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1372},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 370},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1897},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1923},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4037},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3542},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 553},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4315},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4481},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1336},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4204},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1296},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 665},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4118},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5661},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4785},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8231},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6241},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12388},
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

                   text: '巴特的PT構成(總分72601)',
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


        
{  y: 35295, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24918, name: '強襲', legendMarkerType: 'square'},
{  y: 12388, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart33.render();
}
