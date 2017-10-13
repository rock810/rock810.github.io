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
				
				            maximum: 512382,
				            interval: 51238,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3760},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10517},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6881},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7890},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15537},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 72175},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 75902},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 110636},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14109},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 43230},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34570},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 111372},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 119748},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 62749},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 93759},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 103240},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 148343},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 173370},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 124344},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 171139},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 188663},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 58827},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 152657},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 105410},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 124516},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 186209},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 281620},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 217252},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 93979},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 136546},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 28467},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 39059},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 28356},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 122337},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 155011},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 116126},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 237268},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 141696},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 145338},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5697},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 330691},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 341961},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 314361},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 343881},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 408544},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 114760},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9633},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 512382},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 318410},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 288832},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 409501},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 405002},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 224830},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 503693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 449515},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 420434},
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
				
				            maximum: 9464766,
				            interval: 946476,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3760},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14277},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21158},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29048},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44585},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 116760},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 192662},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 303298},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 317407},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 360637},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 395207},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 506579},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 626327},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 689076},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 782835},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 886075},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1034418},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1207788},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1332132},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1503271},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1691934},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1750761},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1903418},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2008828},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2133344},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2319553},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2601173},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2818425},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2912404},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3048950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 28467},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 67526},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 95882},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 218219},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 373230},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 489356},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 726624},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 868320},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1013658},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1013658},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1019355},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1019355},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1019357},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1350048},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1692009},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2006370},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2350251},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2758795},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2873555},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2883188},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2883217},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3395599},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3714009},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4002841},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4412342},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4817344},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5042174},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5545867},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5995382},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6415816},
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
				
				            maximum: 367505,
				            interval: 36750,
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
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 604},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5992},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2846},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2926},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6451},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 53043},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39594},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 44224},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3125},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6058},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27421},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23667},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30282},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52335},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 51578},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 45086},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 94330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 71016},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 84639},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 85557},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77076},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37406},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 74271},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60669},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 90576},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86015},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 132442},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 128728},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 64694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 62567},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2282},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4525},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3429},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4105},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 721},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18729},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 36308},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 65041},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10984},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31325},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3962},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 71646},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 68852},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10414},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 37468},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 41755},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 48302},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 101811},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39705},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27207},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77984},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21421},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 70246},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35822},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26883},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 56281},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 144280},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 67024},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17801},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 45583},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17590},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28809},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21245},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 60706},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 105917},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 48227},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 144972},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 73306},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 73237},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5697},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 97382},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 190017},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 186014},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 227090},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 112975},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35883},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3194},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 128614},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 135664},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 149434},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 113593},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 209841},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 121210},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 246556},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 182112},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 259871},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 874},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 606},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 859},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8365},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 403},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1371},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5847},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3187},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16059},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20614},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16399},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5711},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 543},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 58375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33603},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8140},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8919},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7057},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 43913},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4898},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21500},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11484},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28396},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4027},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3031},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1569},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3231},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2844},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8119},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13120},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14152},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21909},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9527},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18617},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31498},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29486},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17819},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6439},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16263},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35794},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15178},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16851},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23652},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27194},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20736},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 65659},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23494},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6850},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7219},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5542},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58400},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 46250},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 59780},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 79176},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 54238},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50192},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 223782},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 133327},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 96849},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 116791},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 266083},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61058},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 367505},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 146952},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 124220},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 279057},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 171509},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 76426},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 236401},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 201744},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 137069},
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
				            text: '喵鼠的PT統計(總分408743)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70246,
				            interval: 7024,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 390},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 117},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2499},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3091},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7089},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1190},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 800},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1406},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17162},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 65041},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29732},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21472},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30569},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46090},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41386},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 70246},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36678},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7538},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26243},
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

                   text: '喵鼠的PT構成(總分408743)',
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


        
{  y: 14380, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 394363, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雪歌的PT統計(總分354506)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120788,
				            interval: 12078,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 208},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3446},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9956},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10200},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2282},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2495},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14501},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19146},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30187},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 43102},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 60425},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 120788},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35931},
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

                   text: '雪歌的PT構成(總分354506)',
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


        
{  y: 25649, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 328857, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '葬月的PT統計(總分346854)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69586,
				            interval: 6958,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 905},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 518},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5754},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1755},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2564},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5293},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4353},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1811},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1230},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41459},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25750},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7759},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39705},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 69586},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8029},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15725},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16893},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15582},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25687},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 49435},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3367},
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

                   text: '葬月的PT構成(總分346854)',
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


        
{  y: 26647, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52802, name: '強襲', legendMarkerType: 'square'},
{  y: 267405, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分292372)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29687,
				            interval: 2968,
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
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2452},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1860},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11061},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11205},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20971},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4313},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5693},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 241},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 382},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18599},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8449},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14902},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20695},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9949},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8974},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 158},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19847},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20915},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22822},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1160},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29687},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25982},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12779},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11168},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3603},
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

                   text: '阿拉的PT構成(總分292372)',
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


        
{  y: 229712, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59057, name: '強襲', legendMarkerType: 'square'},
{  y: 3603, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分289702)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30046,
				            interval: 3004,
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 134},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18140},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21250},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22991},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1549},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1924},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19815},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30046},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11066},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22389},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25237},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22415},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13055},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4547},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10545},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13173},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1010},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6133},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8020},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9118},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3928},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8276},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 713},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 721},
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

                   text: '嘎喵的PT構成(總分289702)',
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


        
{  y: 271351, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16917, name: '強襲', legendMarkerType: 'square'},
{  y: 1434, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分224699)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26752,
				            interval: 2675,
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
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3198},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1593},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8398},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9990},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2581},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1371},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 833},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6757},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7058},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5148},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5539},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5065},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9020},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10092},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 154},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2788},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1230},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 679},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 809},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 277},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7469},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19709},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6595},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11284},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3191},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26752},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12177},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14288},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5159},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2702},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1058},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17615},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3873},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10202},
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

                   text: '魔法的PT構成(總分224699)',
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


        
{  y: 148056, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50883, name: '強襲', legendMarkerType: 'square'},
{  y: 25760, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分207802)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47962,
				            interval: 4796,
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 201},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 178},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3815},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10799},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10871},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4817},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13481},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1945},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7750},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4600},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 47962},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14339},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21263},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6424},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4592},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5434},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 181},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8157},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15996},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11801},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 403},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 145},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12469},
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

                   text: '依司瑪耳的PT構成(總分207802)',
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


        
{  y: 158782, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13017, name: '強襲', legendMarkerType: 'square'},
{  y: 36003, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分154313)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21313,
				            interval: 2131,
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
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2192},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2231},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1851},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4149},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2086},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1515},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4436},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3579},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8440},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21313},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13552},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5049},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5689},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17269},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8301},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9368},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6388},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2827},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2212},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5357},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3323},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 881},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 563},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7772},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8192},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4898},
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

                   text: '赤雲天的PT構成(總分154313)',
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


        
{  y: 118288, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25629, name: '強襲', legendMarkerType: 'square'},
{  y: 10396, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分151000)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36167,
				            interval: 3616,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 485},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1757},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 557},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5645},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12921},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1967},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 107},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1161},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1906},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 355},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 848},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11746},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36167},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16963},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 605},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 393},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9089},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1505},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10000},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6012},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10714},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6953},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1030},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4036},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 570},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5913},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 744},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 800},
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

                   text: '寇內爾緹的PT構成(總分151000)',
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


        
{  y: 137907, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8027, name: '強襲', legendMarkerType: 'square'},
{  y: 5066, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分139836)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21421,
				            interval: 2142,
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
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 690},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7057},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11651},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4727},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4796},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11186},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21421},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13392},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12448},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5358},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 679},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4566},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 746},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1242},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5361},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17004},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 677},
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

                   text: '阿榮的PT構成(總分139836)',
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


        
{  y: 30351, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28921, name: '強襲', legendMarkerType: 'square'},
{  y: 80564, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分138659)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30368,
				            interval: 3036,
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
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1292},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 702},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 523},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 264},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3935},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6062},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1063},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29493},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13006},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24789},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30368},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 595},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3248},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5268},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2601},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3549},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7815},
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

                   text: '有生之蓮解鋒鏑的PT構成(總分138659)',
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


        
{  y: 116178, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22481, name: '強襲', legendMarkerType: 'square'},
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
				            text: '亞歷的PT統計(總分113636)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19383,
				            interval: 1938,
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 898},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5321},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6883},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3376},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5245},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2318},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19383},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1706},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15083},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8077},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8957},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10125},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6871},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 771},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1276},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3753},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2599},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2655},
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

                   text: '亞歷的PT構成(總分113636)',
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


        
{  y: 102582, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8399, name: '強襲', legendMarkerType: 'square'},
{  y: 2655, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分90679)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23416,
				            interval: 2341,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 353},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 314},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 600},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 358},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 269},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 370},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6162},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12858},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23416},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4510},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19435},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3356},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2123},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 54},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6723},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 158},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 606},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 869},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 577},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3440},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3731},
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

                   text: '藏月的PT構成(總分90679)',
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


        
{  y: 81456, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9223, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分59979)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9895,
				            interval: 989,
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2115},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2961},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8751},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5401},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9895},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6106},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3354},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8928},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3392},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4905},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4171},
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

                   text: '冰的PT構成(總分59979)',
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


        
{  y: 47511, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4171, name: '強襲', legendMarkerType: 'square'},
{  y: 8297, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分42786)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7802,
				            interval: 780,
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1749},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 75},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 540},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2499},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1777},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 908},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 201},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 89},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4351},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3553},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2453},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2604},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 359},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7649},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7802},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 508},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1001},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1168},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2115},
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

                   text: '鬼魅魍魎的PT構成(總分42786)',
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


        
{  y: 22184, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4792, name: '強襲', legendMarkerType: 'square'},
{  y: 15810, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分33384)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7910,
				            interval: 791,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 970},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 315},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 140},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1748},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 824},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 324},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 430},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 197},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4809},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 994},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 304},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 351},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 583},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1852},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 543},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1780},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 499},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1605},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2023},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1750},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7910},
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

                   text: '冰紅茶的PT構成(總分33384)',
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


        
{  y: 14184, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7517, name: '強襲', legendMarkerType: 'square'},
{  y: 11683, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '永恆fung的PT統計(總分647175)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 180677,
				            interval: 18067,
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
                                    name: "永恆fung殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 239},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 943},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 446},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1354},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3191},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1270},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16770},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4517},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37482},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fungCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 104009},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 73808},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 50355},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3047},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 180677},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 120218},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36516},
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

                   text: '永恆fung的PT構成(總分647175)',
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


        
{  y: 41063, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37482, name: '強襲', legendMarkerType: 'square'},
{  y: 568630, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哈哈哈哈佛大學的PT統計(總分604500)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 116683,
				            interval: 11668,
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
                                    name: "哈哈哈哈佛大學CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6774},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 58466},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 116683},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28003},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 115367},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 78939},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 97652},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈哈哈佛大學殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 266},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3384},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1215},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10495},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23308},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12698},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21991},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1024},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1649},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2302},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈哈哈佛大學強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4027},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2664},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11150},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6439},
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

                   text: '哈哈哈哈佛大學的PT構成(總分604500)',
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


        
{  y: 78336, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24280, name: '強襲', legendMarkerType: 'square'},
{  y: 501884, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '白川的PT統計(總分563556)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 119773,
				            interval: 11977,
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
                                    name: "白川殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 114},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2882},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7446},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 986},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1043},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9507},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2461},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28972},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14220},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 691},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14233},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21114},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 832},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 119773},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 51422},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46494},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2315},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58484},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 98380},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 51291},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30894},
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

                   text: '白川的PT構成(總分563556)',
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


        
{  y: 67633, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36038, name: '強襲', legendMarkerType: 'square'},
{  y: 459885, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Yuikit的PT統計(總分545353)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 246739,
				            interval: 24673,
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
                                    name: "Yuikit殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 215},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1764},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1724},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2027},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 248},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11270},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12277},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6125},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23423},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28264},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Yuikit強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1493},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11935},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "YuikitCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 49356},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26215},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34766},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 246739},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29868},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30829},
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

                   text: 'Yuikit的PT構成(總分545353)',
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


        
{  y: 114152, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13428, name: '強襲', legendMarkerType: 'square'},
{  y: 417773, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '從裏Man到外的PT統計(總分521687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 149400,
				            interval: 14940,
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
                                    name: "從裏Man到外CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1352},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1729},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 52963},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 149400},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33055},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 121034},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 122805},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1202},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1972},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1716},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1391},
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

                   text: '從裏Man到外的PT構成(總分521687)',
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


        
{  y: 5822, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1391, name: '強襲', legendMarkerType: 'square'},
{  y: 514474, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '黃天航祿的PT統計(總分458412)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120766,
				            interval: 12076,
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
                                    name: "黃天航祿殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 141},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1044},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2466},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 467},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26168},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27262},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 217},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11173},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23728},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17955},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8515},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 494},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 29820},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 28023},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15426},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 120766},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 108263},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34907},
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

                   text: '黃天航祿的PT構成(總分458412)',
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


        
{  y: 110621, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10092, name: '強襲', legendMarkerType: 'square'},
{  y: 337699, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '劍御犬的PT統計(總分386533)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37221,
				            interval: 3722,
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
                                    name: "劍御犬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 624},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 768},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2201},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23104},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6080},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17851},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11417},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9834},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26874},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25841},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 33466},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12548},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2918},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37221},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33476},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7900},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3458},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15729},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33245},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26249},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27025},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1923},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3078},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2442},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1587},
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

                   text: '劍御犬的PT構成(總分386533)',
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


        
{  y: 371215, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13731, name: '強襲', legendMarkerType: 'square'},
{  y: 1587, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '董香的PT統計(總分315530)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40390,
				            interval: 4039,
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
                                    name: "董香殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3477},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1701},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 190},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11311},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3298},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4297},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19136},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36474},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24815},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6787},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6100},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5539},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5346},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13389},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1269},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1812},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10767},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6238},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14881},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1147},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 30168},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16664},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40390},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7281},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7710},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9771},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4477},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10025},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11070},
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

                   text: '董香的PT構成(總分315530)',
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


        
{  y: 176827, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43053, name: '強襲', legendMarkerType: 'square'},
{  y: 95650, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙利昂的PT統計(總分290746)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43456,
				            interval: 4345,
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
                                    name: "沙利昂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 365},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1244},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1312},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1244},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 316},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3200},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21869},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28744},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35613},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1765},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3242},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1564},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 41396},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 744},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43456},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6429},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙利昂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5683},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5579},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙利昂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 886},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 706},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26323},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15557},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19390},
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

                   text: '沙利昂的PT構成(總分290746)',
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


        
{  y: 209123, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18761, name: '強襲', legendMarkerType: 'square'},
{  y: 62862, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙撒比的PT統計(總分264761)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49599,
				            interval: 4959,
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
                                    name: "沙撒比殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1328},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1295},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 774},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4268},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1443},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4500},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1986},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 919},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25119},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33347},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27180},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7695},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7965},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 710},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11155},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11693},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9677},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49599},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12803},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23246},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5458},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12736},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6091},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2695},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1075},
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

                   text: '沙撒比的PT構成(總分264761)',
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


        
{  y: 254900, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8786, name: '強襲', legendMarkerType: 'square'},
{  y: 1075, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小本本的PT統計(總分242810)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30880,
				            interval: 3088,
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
                                    name: "小本本殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 472},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1691},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 845},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2377},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4316},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4789},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 29900},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7364},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21885},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2437},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17027},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 459},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30880},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6369},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 963},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7674},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10796},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8785},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11324},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5545},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9194},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6994},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12054},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10003},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小本本強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 602},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1831},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9094},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6967},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9275},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小本本CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 898},
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

                   text: '小本本的PT構成(總分242810)',
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


        
{  y: 214143, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27769, name: '強襲', legendMarkerType: 'square'},
{  y: 898, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '啊斯的PT統計(總分241028)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35255,
				            interval: 3525,
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
                                    name: "啊斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 238},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6898},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4132},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8987},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 428},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 687},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5223},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3908},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5549},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27505},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35255},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1448},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22174},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6128},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26817},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4199},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5707},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9226},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21857},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7452},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1322},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5056},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10381},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4789},
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

                   text: '啊斯的PT構成(總分241028)',
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


        
{  y: 219480, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21548, name: '強襲', legendMarkerType: 'square'},
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
				            text: '神靈的陪伴的PT統計(總分228210)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28342,
				            interval: 2834,
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
                                    name: "神靈的陪伴殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 131},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2220},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1048},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1269},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2357},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2155},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2290},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1633},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 275},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1166},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5541},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16306},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27300},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28342},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13312},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2613},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27485},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18367},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14763},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2538},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2775},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8492},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3084},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13693},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1301},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4545},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7760},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5607},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 826},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9016},
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

                   text: '神靈的陪伴的PT構成(總分228210)',
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


        
{  y: 199155, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19213, name: '強襲', legendMarkerType: 'square'},
{  y: 9842, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '費爾南多。夜禮布的PT統計(總分211990)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28205,
				            interval: 2820,
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
                                    name: "費爾南多。夜禮布殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 580},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 608},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1161},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3039},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1251},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2697},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 384},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 691},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16618},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27854},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25709},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4530},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 306},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2100},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4369},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6111},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7123},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14512},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1944},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28205},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1654},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1351},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11457},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13138},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1722},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6762},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 802},
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

                   text: '費爾南多。夜禮布的PT構成(總分211990)',
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


        
{  y: 171060, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40128, name: '強襲', legendMarkerType: 'square'},
{  y: 802, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '剪小偉的PT統計(總分194437)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23843,
				            interval: 2384,
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
                                    name: "剪小偉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 988},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9266},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1698},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6396},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6503},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2667},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2380},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "剪小偉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 173},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 430},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4541},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22276},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19096},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19745},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 862},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 450},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8324},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 72},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1013},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1484},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18021},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16371},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15353},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1352},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5356},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "剪小偉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1077},
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

                   text: '剪小偉的PT構成(總分194437)',
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


        
{  y: 162584, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30776, name: '強襲', legendMarkerType: 'square'},
{  y: 1077, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '麵包點心的PT統計(總分183192)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19296,
				            interval: 1929,
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
                                    name: "麵包點心殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1767},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19296},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6789},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9405},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4947},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1763},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5697},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13049},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7651},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14747},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14059},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 907},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 466},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7618},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6057},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8547},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4815},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11456},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1910},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1038},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1855},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7255},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8097},
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

                   text: '麵包點心的PT構成(總分183192)',
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


        
{  y: 155865, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10980, name: '強襲', legendMarkerType: 'square'},
{  y: 16347, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼眼@團戰優先的PT統計(總分174514)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15922,
				            interval: 1592,
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
                                    name: "鬼眼@團戰優先殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 522},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 191},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1107},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3650},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3679},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4166},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4815},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 831},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5431},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6399},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10172},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1539},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 403},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15444},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13632},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15922},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14766},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2491},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1569},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6508},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7948},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8471},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼眼@團戰優先強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5986},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10914},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8211},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4418},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼眼@團戰優先CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8821},
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

                   text: '鬼眼@團戰優先的PT構成(總分174514)',
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


        
{  y: 133812, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29529, name: '強襲', legendMarkerType: 'square'},
{  y: 11173, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '希的PT統計(總分170751)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35827,
				            interval: 3582,
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
                                    name: "希殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 740},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 731},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 962},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18449},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5520},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20395},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5052},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 458},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2618},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7383},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3695},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6079},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2177},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3632},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6335},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1528},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 865},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5671},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2854},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13261},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14504},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35827},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2106},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2104},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 697},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1177},
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

                   text: '希的PT構成(總分170751)',
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


        
{  y: 158834, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10043, name: '強襲', legendMarkerType: 'square'},
{  y: 1874, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ouch的PT統計(總分170631)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19178,
				            interval: 1917,
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
                                    name: "Ouch殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7191},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6718},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12991},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3246},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8665},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15832},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4213},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8025},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1981},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5119},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10666},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8861},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11128},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 399},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6946},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3403},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19178},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ouch強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6099},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3459},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14741},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8882},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "OuchCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2888},
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

                   text: 'Ouch的PT構成(總分170631)',
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


        
{  y: 134562, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33181, name: '強襲', legendMarkerType: 'square'},
{  y: 2888, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart35.render();
}
