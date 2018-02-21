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
				
				            maximum: 311379,
				            interval: 31137,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 181809},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 191744},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 211329},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 246705},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 210404},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 258203},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 213131},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 215130},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 147526},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 152949},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 176480},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 268147},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 229078},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 281580},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 297227},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 254442},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 311379},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 232062},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 233988},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 230641},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 294936},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 274819},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 268758},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 293474},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 289507},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 168481},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 223308},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 221903},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 269594},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 150023},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15391},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 35902},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 34733},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 64936},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 47473},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 58898},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 51130},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 82518},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 119874},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 85149},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 86028},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 69183},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20271},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31674},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12192},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 53839},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4868},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29491},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21992},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30089},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 887},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10241},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20452},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6168},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28279},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28759},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38080},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10539},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 362},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17696},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
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
				
				            maximum: 8115851,
				            interval: 811585,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 181809},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 373553},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 584882},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 831587},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1041991},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1300194},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1513325},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1728455},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1875981},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2028930},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2205410},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2473557},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2702635},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2984215},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3281442},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3535884},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3847263},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4079325},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4313313},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4543954},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4838890},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5113709},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5382467},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5675941},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5965448},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6133929},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6357237},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6579140},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6848734},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6998757},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 7014148},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 35902},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 70635},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 135571},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 183044},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 241942},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 293072},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 375590},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 495464},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 580613},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 666641},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 735824},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 756095},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 787769},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 799961},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 853800},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 858668},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 888159},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 910151},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 940240},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 941127},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 951368},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 971820},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 977988},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1006267},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1035026},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1073106},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1083645},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1084007},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1101703},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1101703},
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
				
				            maximum: 198096,
				            interval: 19809,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 43813},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31402},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 43121},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19073},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 60162},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 67419},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 53077},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 42277},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 36981},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 33926},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 66785},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 46241},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30131},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19793},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 53759},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 46147},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 97830},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 53402},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23679},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54466},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 52596},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 116399},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31264},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11156},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 47493},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27996},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26986},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11449},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15391},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 112347},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 96629},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 126303},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 131357},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 107283},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 141847},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 101780},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 122506},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 70269},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 85862},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 65632},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 97499},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 164109},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 134735},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 188141},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 169022},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 160256},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 101415},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 126412},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 134731},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 132616},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 166201},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 171243},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 131600},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 95045},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 125722},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 141847},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 104604},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 198096},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 96697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 29844},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24641},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 41799},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 30288},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 44133},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 22450},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 57408},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 69291},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 45280},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 35753},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 58735},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11691},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18032},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8051},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 31042},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4868},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8200},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5146},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15452},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 887},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10241},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13222},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4620},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16372},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14155},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5283},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 965},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 362},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15993},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 25649},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 63713},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 41905},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 96275},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 42959},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 48937},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 58274},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50347},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40276},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 33161},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 44063},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 124407},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 64969},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 116714},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 89293},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31661},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 104976},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32817},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 107576},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42508},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 138641},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54152},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 44919},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 45475},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 163198},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31603},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 33968},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 89303},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44512},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3542},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10092},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11330},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9355},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4410},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17422},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12420},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28508},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25946},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15512},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3447},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1027},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7611},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4141},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8082},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13989},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14637},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7230},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1548},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9188},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13340},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2516},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11807},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7830},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10355},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11258},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12690},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22075},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13923},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 34763},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7001},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7553},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14715},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7302},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16846},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11907},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5416},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19457},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9574},
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
				            text: '雪歌的PT統計(總分818176)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59692,
				            interval: 5969,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9230},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8978},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8143},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4077},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1997},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1407},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7670},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10247},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3452},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5996},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3350},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5406},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5607},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3112},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5651},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11834},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12612},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6271},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5198},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11928},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13129},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17317},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14916},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14939},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24470},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25616},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26849},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41282},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14822},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17325},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17059},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6990},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14139},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 39574},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18913},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18405},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12931},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 36415},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 28717},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34694},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34351},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 59692},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31394},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 48763},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26678},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30447},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16183},
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

                   text: '雪歌的PT構成(總分818176)',
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


        
{  y: 145295, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 214595, name: '強襲', legendMarkerType: 'square'},
{  y: 458286, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分765600)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39772,
				            interval: 3977,
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
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3552},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4826},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6130},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11568},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4637},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16435},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11224},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9808},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21217},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5436},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15448},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18957},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7939},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8564},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9736},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7141},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9961},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17908},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35163},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 31168},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 124},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10221},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6705},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13965},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15076},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17919},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14790},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27875},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2301},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6333},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12240},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19492},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34272},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 39772},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 37986},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13811},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22472},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16494},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20049},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29811},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18665},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9546},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10555},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8187},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6018},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4650},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13579},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10675},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14670},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9542},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9927},
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

                   text: '嘎喵的PT構成(總分765600)',
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


        
{  y: 515053, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97349, name: '強襲', legendMarkerType: 'square'},
{  y: 153198, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'gotice的PT統計(總分687175)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48890,
				            interval: 4889,
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
                                    name: "gotice殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7431},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8382},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5715},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13463},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2746},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15792},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5246},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3347},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12280},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13153},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6570},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11648},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18883},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28911},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40340},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21006},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12535},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16752},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18035},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16271},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31881},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37385},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48890},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32944},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13105},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2583},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13778},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11513},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13825},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3755},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14925},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11062},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11436},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14059},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11156},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10671},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11449},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13712},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13294},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14401},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11114},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15223},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29302},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10989},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6217},
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

                   text: 'gotice的PT構成(總分687175)',
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


        
{  y: 484410, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88513, name: '強襲', legendMarkerType: 'square'},
{  y: 114252, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分551546)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32901,
				            interval: 3290,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7842},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5120},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8697},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4772},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10350},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1567},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7236},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1469},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1692},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1796},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5599},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5278},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 32493},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15689},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6300},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12141},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15768},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8851},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12670},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4583},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6761},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15013},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26075},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26457},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29816},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10618},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14952},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13939},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17037},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3756},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9320},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15646},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32901},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25334},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21253},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8548},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11634},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8844},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16728},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12919},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13426},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21020},
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

                   text: '依司瑪耳的PT構成(總分551546)',
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


        
{  y: 284653, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93119, name: '強襲', legendMarkerType: 'square'},
{  y: 173774, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分506439)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44288,
				            interval: 4428,
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
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6295},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4588},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9588},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4693},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5683},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5159},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9569},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2348},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5643},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27495},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4014},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28943},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16782},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6368},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12461},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16006},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16054},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4185},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5950},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10439},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9830},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11969},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10764},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 44288},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4700},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31042},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 29},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7412},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6133},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7648},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15190},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12696},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8010},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13900},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14842},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2344},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7067},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7311},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9063},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17534},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8664},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6355},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10291},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12682},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12531},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11881},
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

                   text: '無銘的PT構成(總分506439)',
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


        
{  y: 314885, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 105723, name: '強襲', legendMarkerType: 'square'},
{  y: 85831, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分496180)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41588,
				            interval: 4158,
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
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8538},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8839},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10197},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14765},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23679},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14529},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5062},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15391},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7263},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4665},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3131},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8002},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11848},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8707},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10670},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11750},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15608},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22310},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3879},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 947},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12597},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6475},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31391},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28996},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6526},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13001},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13670},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27240},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16532},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 41588},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23814},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10085},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4883},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13945},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21222},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14435},
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

                   text: '葬月的PT構成(總分496180)',
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


        
{  y: 330610, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 101000, name: '強襲', legendMarkerType: 'square'},
{  y: 64570, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分491984)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28982,
				            interval: 2898,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7623},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7037},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3144},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8711},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9749},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6329},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4945},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 548},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12213},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1933},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11441},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8786},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8233},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5944},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11346},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11876},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 59},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8926},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21107},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13890},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5397},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14433},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6367},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13059},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2657},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5954},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6548},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9806},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20230},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16395},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3725},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22355},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17726},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19018},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28982},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18659},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3482},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5145},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13374},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6242},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14967},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10881},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16451},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3336},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16969},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11218},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11770},
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

                   text: '羽龍的PT構成(總分491984)',
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


        
{  y: 214705, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110353, name: '強襲', legendMarkerType: 'square'},
{  y: 166926, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分462815)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26685,
				            interval: 2668,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2118},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2894},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7941},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1816},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6590},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5120},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11270},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9560},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3519},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6362},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3530},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10997},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13898},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12495},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5920},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6050},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12482},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17478},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8698},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9715},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9271},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12125},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 53},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8978},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12811},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10349},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16426},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16561},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14388},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16703},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11600},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16937},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12018},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14928},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3961},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3959},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5589},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7969},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10314},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26685},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13988},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24685},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19493},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2109},
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

                   text: '有生之蓮解鋒鏑的PT構成(總分462815)',
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


        
{  y: 214153, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110832, name: '強襲', legendMarkerType: 'square'},
{  y: 137830, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分426469)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60490,
				            interval: 6049,
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
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3659},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4556},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4340},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8943},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5773},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9377},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2630},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3168},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10773},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8323},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13563},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24366},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17067},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8264},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11419},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6083},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6100},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6049},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3292},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10784},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4428},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5861},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13228},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6255},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19081},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3216},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10368},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13429},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12228},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 60490},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19720},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16761},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4448},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17428},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9579},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23582},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17838},
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

                   text: '西沙斯的PT構成(總分426469)',
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


        
{  y: 220598, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 72875, name: '強襲', legendMarkerType: 'square'},
{  y: 132996, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分270748)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21626,
				            interval: 2162,
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
                                    name: "賽西殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4222},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3100},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 754},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11463},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2579},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2637},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13977},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10691},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12844},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7444},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12211},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11348},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5449},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9961},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14390},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6407},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14569},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10091},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4175},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5718},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2252},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4552},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4123},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10481},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21626},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20149},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4345},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11447},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15929},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11814},
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

                   text: '賽西的PT構成(總分270748)',
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


        
{  y: 170834, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43535, name: '強襲', legendMarkerType: 'square'},
{  y: 56379, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分259093)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29575,
				            interval: 2957,
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
                                    name: "龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10601},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6401},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4126},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15296},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8810},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5284},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9225},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4691},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13706},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5766},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7300},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 72},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14502},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9145},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3146},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23900},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24942},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29575},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21431},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13776},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2700},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3231},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6646},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4826},
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

                   text: '龍的PT構成(總分259093)',
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


        
{  y: 217919, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17403, name: '強襲', legendMarkerType: 'square'},
{  y: 23771, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分225187)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17839,
				            interval: 1783,
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
                                    name: "湖光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7364},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5391},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8135},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9008},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11879},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9825},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8528},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2442},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10196},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13707},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4594},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10309},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17839},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9364},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17494},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11990},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2305},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5800},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6009},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11226},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13106},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5186},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3492},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3465},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7887},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8646},
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

                   text: '湖光的PT構成(總分225187)',
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


        
{  y: 166170, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28676, name: '強襲', legendMarkerType: 'square'},
{  y: 30341, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分158856)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21172,
				            interval: 2117,
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
                                    name: "暗之武者殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7373},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3167},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3785},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4664},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2449},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2628},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3298},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8999},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4265},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8094},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 21172},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11305},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16774},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8093},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7406},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11395},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6138},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5817},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5417},
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

                   text: '暗之武者的PT構成(總分158856)',
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


        
{  y: 45417, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44266, name: '強襲', legendMarkerType: 'square'},
{  y: 69173, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分158026)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27594,
				            interval: 2759,
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
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11378},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8415},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27594},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6517},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5965},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4349},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4075},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5898},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9375},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2606},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9218},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7637},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6724},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4712},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5451},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5324},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10590},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11193},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11005},
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

                   text: '凱爾的PT構成(總分158026)',
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


        
{  y: 72527, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38112, name: '強襲', legendMarkerType: 'square'},
{  y: 47387, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分139281)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20141,
				            interval: 2014,
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
                                    name: "裁風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8030},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6737},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10056},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8015},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5508},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6761},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8306},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3454},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5707},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5607},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5841},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6821},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5615},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5561},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5170},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12497},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9454},
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

                   text: '裁風的PT構成(總分139281)',
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


        
{  y: 86458, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9454, name: '強襲', legendMarkerType: 'square'},
{  y: 43369, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分135666)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20866,
				            interval: 2086,
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
                                    name: "Abbey殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5461},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1632},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4460},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6307},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7792},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5264},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4307},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4963},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7035},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11643},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13775},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10094},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12129},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12817},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20866},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7121},
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

                   text: 'Abbey的PT構成(總分135666)',
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


        
{  y: 40186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7121, name: '強襲', legendMarkerType: 'square'},
{  y: 88359, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分127891)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18127,
				            interval: 1812,
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
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7158},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3417},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5923},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4307},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7768},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6420},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 608},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4261},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10071},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7510},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9317},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13530},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10303},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2338},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8586},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7358},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18127},
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

                   text: '迪克的PT構成(總分127891)',
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


        
{  y: 40751, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36409, name: '強襲', legendMarkerType: 'square'},
{  y: 50731, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分125226)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13919,
				            interval: 1391,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10638},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 166},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 883},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7358},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7932},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13919},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10211},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2662},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11790},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6042},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6175},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3110},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3807},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7062},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6114},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6451},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3016},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7774},
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

                   text: '冰的PT構成(總分125226)',
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


        
{  y: 95410, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17241, name: '強襲', legendMarkerType: 'square'},
{  y: 12575, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分123698)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11539,
				            interval: 1153,
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
                                    name: "卡特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1835},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5217},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10845},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6000},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1631},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6760},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6267},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7779},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4450},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9674},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6845},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6087},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6418},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11539},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6768},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6987},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4710},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6562},
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

                   text: '卡特爾的PT構成(總分123698)',
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


        
{  y: 98671, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13755, name: '強襲', legendMarkerType: 'square'},
{  y: 11272, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分84092)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11890,
				            interval: 1189,
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
                                    name: "紫嫣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7864},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4479},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10955},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4565},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7087},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5571},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3817},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5525},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11890},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5876},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4524},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3330},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6029},
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

                   text: '紫嫣的PT構成(總分84092)',
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


        
{  y: 43101, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13883, name: '強襲', legendMarkerType: 'square'},
{  y: 27108, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '微笑霜雪的PT統計(總分205976)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29095,
				            interval: 2909,
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
                                    name: "微笑霜雪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3510},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "微笑霜雪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4713},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3131},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3365},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17441},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7272},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29095},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23444},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11382},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11001},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16778},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4378},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4244},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4527},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3818},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3018},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1839},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4476},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "微笑霜雪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5153},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11330},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5860},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10689},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15512},
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

                   text: '微笑霜雪的PT構成(總分205976)',
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


        
{  y: 153922, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3510, name: '強襲', legendMarkerType: 'square'},
{  y: 48544, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Lucius的PT統計(總分196017)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15257,
				            interval: 1525,
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
                                    name: "Lucius殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3365},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2650},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4635},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1705},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3311},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4331},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1758},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4372},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4458},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6387},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2763},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7123},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8434},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5042},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3892},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1829},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 505},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Lucius強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5059},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5432},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7271},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13923},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11280},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6825},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3663},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9574},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LuciusCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4939},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12420},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14443},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15257},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13340},
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

                   text: 'Lucius的PT構成(總分196017)',
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


        
{  y: 66560, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69058, name: '強襲', legendMarkerType: 'square'},
{  y: 60399, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嵐的PT統計(總分183491)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16846,
				            interval: 1684,
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
                                    name: "嵐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6959},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7295},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8443},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4313},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6054},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3327},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8840},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4157},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7075},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4863},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 368},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4743},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4868},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3876},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4959},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3889},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 188},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9514},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1785},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11052},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16846},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9504},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7611},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13989},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14637},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9188},
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

                   text: '嵐的PT構成(總分183491)',
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


        
{  y: 100664, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37402, name: '強襲', legendMarkerType: 'square'},
{  y: 45425, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '海法爾的PT統計(總分91368)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20016,
				            interval: 2001,
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
                                    name: "海法爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3236},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3092},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4424},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2277},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 709},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15042},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11184},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15255},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20016},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3492},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海法爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2516},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4923},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海法爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3447},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1027},
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

                   text: '海法爾的PT構成(總分91368)',
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


        
{  y: 78727, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8167, name: '強襲', legendMarkerType: 'square'},
{  y: 4474, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '南宮碗的PT統計(總分89395)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13833,
				            interval: 1383,
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
                                    name: "南宮碗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6134},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5830},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10609},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8675},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8393},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4431},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8817},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4370},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5850},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮碗強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12453},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮碗CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13833},
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

                   text: '南宮碗的PT構成(總分89395)',
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


        
{  y: 63109, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12453, name: '強襲', legendMarkerType: 'square'},
{  y: 13833, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大T的PT統計(總分68313)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9622,
				            interval: 962,
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
                                    name: "大T殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4025},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1310},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4197},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1824},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4612},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 293},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4501},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 457},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3584},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3919},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 800},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5802},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4213},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大T強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3966},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8151},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9622},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大TCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3542},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3495},
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

                   text: '大T的PT構成(總分68313)',
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


        
{  y: 39537, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21739, name: '強襲', legendMarkerType: 'square'},
{  y: 7037, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哈嚕P的PT統計(總分60310)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11907,
				            interval: 1190,
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
                                    name: "哈嚕P殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2071},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8762},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 382},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4432},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1127},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7181},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1978},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈嚕P強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11907},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9953},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈嚕PCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7230},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1548},
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

                   text: '哈嚕P的PT構成(總分60310)',
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


        
{  y: 29672, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21860, name: '強襲', legendMarkerType: 'square'},
{  y: 8778, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '克勞德-歐文的PT統計(總分60161)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11189,
				            interval: 1118,
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
                                    name: "克勞德-歐文殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 489},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 463},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11189},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4801},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5039},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1059},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2612},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2569},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克勞德-歐文CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4410},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克勞德-歐文強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3987},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4539},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6488},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7001},
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

                   text: '克勞德-歐文的PT構成(總分60161)',
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


        
{  y: 29595, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22015, name: '強襲', legendMarkerType: 'square'},
{  y: 8551, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '野火燒不盡的PT統計(總分52045)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14065,
				            interval: 1406,
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
                                    name: "野火燒不盡殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 375},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 618},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 444},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 919},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 312},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1751},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1361},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2409},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1052},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 782},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1675},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 794},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1375},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2783},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 887},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 240},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 406},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 713},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 537},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 439},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 362},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1278},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野火燒不盡CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3589},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14065},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8082},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野火燒不盡強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1188},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1906},
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

                   text: '野火燒不盡的PT構成(總分52045)',
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


        
{  y: 21512, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3094, name: '強襲', legendMarkerType: 'square'},
{  y: 27439, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '基恩的PT統計(總分48904)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7302,
				            interval: 730,
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
                                    name: "基恩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4402},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3847},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3234},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1576},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6465},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1830},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4793},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2121},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 79},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1208},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5527},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 939},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "基恩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5560},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7302},
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

                   text: '基恩的PT構成(總分48904)',
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


        
{  y: 36042, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12862, name: '強襲', legendMarkerType: 'square'},
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
				            text: '麗麗的PT統計(總分21834)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16995,
				            interval: 1699,
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
                                    name: "麗麗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麗麗強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16995},
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

                   text: '麗麗的PT構成(總分21834)',
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


        
{  y: 4839, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16995, name: '強襲', legendMarkerType: 'square'},
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
				            text: '趴趴熊的PT統計(總分17002)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4907,
				            interval: 490,
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
                                    name: "趴趴熊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3820},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4411},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4907},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "趴趴熊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3864},
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

                   text: '趴趴熊的PT構成(總分17002)',
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


        
{  y: 13138, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3864, name: '強襲', legendMarkerType: 'square'},
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
				            text: '傑特的PT統計(總分6887)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6825,
				            interval: 682,
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
                                    name: "傑特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6825},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 62},
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

                   text: '傑特的PT構成(總分6887)',
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


        
{  y: 6887, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart33.render();
}
