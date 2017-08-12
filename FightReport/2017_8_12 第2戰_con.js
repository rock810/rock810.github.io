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
				
				            maximum: 2375354,
				            interval: 237535,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 664819},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 580700},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 798694},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 754412},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 995192},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 984126},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1174361},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1249101},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1312579},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1122107},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1393450},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 989189},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1378449},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1303306},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1328216},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1412958},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1583435},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2346382},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2040685},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2069225},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2150603},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1907118},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2268702},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1856638},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2149654},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1930208},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1971992},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2022493},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2126750},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2375354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 317436},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 444719},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 472597},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 570248},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 482027},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 833044},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 689400},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 898848},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 814271},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 905035},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1209096},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1064398},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1021852},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 918090},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 878859},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1448781},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1313020},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1059060},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1318466},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1229165},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1467114},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1228754},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1461676},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1873749},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1824187},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1529236},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1832980},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1580799},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1415489},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1046211},
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
				
				            maximum: 79389505,
				            interval: 7938950,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 664819},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1245519},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2044213},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2798625},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3793817},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4777943},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5952304},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7201405},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8513984},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9636091},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11029541},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12018730},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13397179},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14700485},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16028701},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17441659},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19025094},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21371476},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23412161},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25481386},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27631989},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29539107},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31807809},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33664447},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35814101},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37744309},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39716301},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 41738794},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 43865544},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46240898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 317436},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 762155},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1234752},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1805000},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2287027},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3120071},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3809471},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4708319},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5522590},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6427625},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7636721},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8701119},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9722971},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10641061},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11519920},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12968701},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14281721},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15340781},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16659247},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17888412},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19355526},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20584280},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22045956},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23919705},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25743892},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27273128},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29106108},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30686907},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 32102396},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33148607},
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
				
				            maximum: 1380989,
				            interval: 138098,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 441764},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 367264},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 559284},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 509032},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 656997},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 622709},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 832878},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 773680},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 929593},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 731714},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 925851},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 614540},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 961743},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 784555},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 811446},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 855520},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 561992},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1150185},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1002252},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 917582},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 856784},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 938267},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1380989},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 747047},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 853686},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 722329},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 981653},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 876496},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 973654},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1156908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 207363},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 301171},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 309730},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 268520},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 262755},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 556773},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 371460},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 471893},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 456002},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 445337},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 521833},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 513562},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 504844},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 479837},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 449784},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 774998},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 486594},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 532957},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 595262},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 631106},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 565063},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 576103},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 520593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 597413},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 723843},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 635941},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 656583},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 668228},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 539540},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 446954},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 183673},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 155340},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 196450},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 167919},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 256267},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 288340},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 242994},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 376280},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 309527},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 291575},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 362838},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 267283},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 313041},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 377157},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 393080},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 454941},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 851171},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1010335},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 860484},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1025350},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1055612},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 786633},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 697191},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 975960},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1024994},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1120888},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 796637},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 949080},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1020889},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1011881},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 93312},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 118464},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 123790},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 240975},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 174609},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 217192},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 266222},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 371431},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 288266},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 393622},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 442576},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 367628},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 424866},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 325871},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 345526},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 493004},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 692079},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 418529},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 602800},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 497480},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 772131},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 537721},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 782256},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1116188},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 895237},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 753064},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 928448},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 788788},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 718020},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 505662},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 39382},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 58096},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 42960},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 77461},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 81928},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 73077},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 98489},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 99141},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 73459},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 98818},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 104761},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 107366},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 103665},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 141594},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 123690},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 102497},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 170272},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 185862},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 177949},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 126293},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 238207},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 182218},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 190522},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 133631},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 270974},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86991},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 193702},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 196917},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 132207},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 206565},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16761},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 25084},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 39077},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 60753},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44663},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 59079},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 51718},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 55524},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 70003},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 66076},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 244687},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 183208},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 92142},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 112382},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83549},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 180779},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 134347},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 107574},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 120404},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 100579},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 129920},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 114930},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 158827},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 160148},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 205107},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 140231},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 247949},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 123783},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 157929},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 93595},
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
				            text: '喵鼠的PT統計(總分3563993)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 249098,
				            interval: 24909,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 32852},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10479},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32752},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26593},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 57666},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42642},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 46257},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 52393},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14549},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41683},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41964},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 48550},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24397},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 72664},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44026},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64960},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 98842},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 175533},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 245216},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 249098},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 210941},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 95544},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 217194},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 166701},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 210194},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 175797},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 72278},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 143426},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15177},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18723},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22389},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30613},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16585},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29413},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 58833},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 49626},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45140},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29499},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 129161},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 61211},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4354},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2239},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1748},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6484},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4271},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 596},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 552},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7209},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1980},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7618},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2623},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2761},
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

                   text: '喵鼠的PT構成(總分3563993)',
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


        
{  y: 42435, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3015188, name: '強襲', legendMarkerType: 'square'},
{  y: 506370, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分3123549)'
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
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21513},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 22360},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 31148},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 47750},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26435},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18160},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 51517},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 67765},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18352},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12342},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14381},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31334},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24524},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20246},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20043},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 44389},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 149240},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 178616},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 152953},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 177138},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 183691},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20320},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 86306},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 148734},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 198397},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 190339},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 162418},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 218972},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4472},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5218},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6372},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8932},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6813},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3513},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7864},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1697},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10439},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34930},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6008},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12884},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9065},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 45065},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7608},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23419},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24126},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23849},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 50994},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 48884},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 39054},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 57267},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45696},
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

                   text: '雪歌的PT構成(總分3123549)',
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


        
{  y: 96258, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2639380, name: '強襲', legendMarkerType: 'square'},
{  y: 387911, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分2949512)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 204418,
				            interval: 20441,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 58901},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 34341},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 79723},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 100182},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 126560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 55238},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 160179},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 52957},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 56020},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 171114},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 68002},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 97523},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 105767},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70352},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6156},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 75548},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39190},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 60034},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 132171},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 91880},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 127010},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 125300},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41846},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 204418},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 124724},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 137785},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 80385},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 165180},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 60674},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 124344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8554},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19334},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19584},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11937},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16437},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20564},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19598},
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

                   text: '阿拉的PT構成(總分2949512)',
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


        
{  y: 2833504, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116008, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '土土昕的PT統計(總分2947014)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 213016,
				            interval: 21301,
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
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24533},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28006},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 52705},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22512},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32786},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11360},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39001},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48786},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 57404},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 59881},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 76211},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 52017},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74142},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53046},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28647},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 143842},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 213016},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 89463},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 156564},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91468},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 100479},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58390},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 96348},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 96275},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63943},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11071},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 118318},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 181032},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11333},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20039},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17671},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27361},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14477},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29331},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38771},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 46309},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 70597},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 53468},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 59248},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 36623},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 142917},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99987},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14907},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 53660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5435},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1288},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 502},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11080},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3126},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7639},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
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
                                          PlayerChart4.render();
                                        }
                                      }
                                    });
                            PlayerChart4.render();
var PlayerPieChart4 = new CanvasJS.Chart('PlayerPieChartContainer4',

    {

        title:{

                   text: '土土昕的PT構成(總分2947014)',
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


        
{  y: 29070, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2181245, name: '強襲', legendMarkerType: 'square'},
{  y: 736699, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分2885701)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 198844,
				            interval: 19884,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 89060},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 45053},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 92499},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 105034},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 81583},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36355},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 107240},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 118902},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 119931},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 65711},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 188762},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 88891},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 96484},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 93447},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83424},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5821},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 164711},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 198844},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 142280},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 93734},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 101406},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 77648},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 146036},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25601},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 79216},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 60975},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43235},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 61600},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33465},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 140163},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11160},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5478},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12427},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18321},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8149},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17172},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3034},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3549},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19300},
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

                   text: '嘎喵的PT構成(總分2885701)',
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


        
{  y: 2787111, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98590, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '秋風冷月的PT統計(總分2854893)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 236550,
				            interval: 23655,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 26215},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26608},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15407},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26018},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 45283},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 51236},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 54649},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 55756},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27294},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34367},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 53258},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 102725},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13889},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 58754},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 203212},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 118822},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 166980},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 161241},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 74633},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 236550},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 138507},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 186288},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 82164},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 59003},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 188146},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 63111},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16073},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31761},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16304},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27524},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23739},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29978},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 42619},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18055},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30380},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 72094},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 41513},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33809},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40190},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4715},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5206},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1162},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3556},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6604},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3453},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 880},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8675},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7388},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1598},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8563},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8907},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32},
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

                   text: '秋風冷月的PT構成(總分2854893)',
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


        
{  y: 60739, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2370115, name: '強襲', legendMarkerType: 'square'},
{  y: 424039, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分2657218)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 248490,
				            interval: 24849,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 66080},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 65770},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 66240},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58731},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 121898},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 31831},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 90219},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 88763},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 129218},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 76028},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20902},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34847},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41366},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 36614},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 90525},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 114398},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46911},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 43052},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38142},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 177562},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 90324},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 248490},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 181083},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 88038},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 115794},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 144916},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 51028},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3310},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 102519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10830},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11384},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9080},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31245},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19920},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23654},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 66324},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20182},
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

                   text: '鬼魅魍魎的PT構成(總分2657218)',
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


        
{  y: 2464599, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 192619, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '葬月的PT統計(總分2523628)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 255601,
				            interval: 25560,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4355},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6771},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2386},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1280},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 635},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8597},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8921},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1969},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13619},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16041},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26009},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11577},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14413},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 53245},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 65093},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22505},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 64328},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 45806},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18766},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 40838},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42311},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19965},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 45362},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 64588},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 141421},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 127595},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 138426},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 143558},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 52466},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 85090},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 55286},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 135990},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 120013},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 255601},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 94540},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 227504},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 125457},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 107630},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35513},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6791},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3606},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26308},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20844},
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

                   text: '葬月的PT構成(總分2523628)',
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


        
{  y: 50823, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2396937, name: '強襲', legendMarkerType: 'square'},
{  y: 75868, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分2497278)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 293280,
				            interval: 29328,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29973},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23757},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17687},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3767},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26427},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 47637},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34391},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 52655},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 108815},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6246},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 169084},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 102800},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 104158},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 69343},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 112573},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38513},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1618},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 76200},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 110834},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2898},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 124774},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7923},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 113085},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25361},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 144282},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 111933},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 94888},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 98188},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 293280},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 189754},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8374},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15283},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17201},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17522},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22034},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18909},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27749},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27362},
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

                   text: '依司瑪耳的PT構成(總分2497278)',
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


        
{  y: 2342844, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 154434, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '羽龍的PT統計(總分2459267)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 213360,
				            interval: 21336,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5016},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 92},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1418},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7053},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4435},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6807},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1324},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7093},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7479},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 118},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2712},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11325},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5209},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9119},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22147},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15473},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9996},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32909},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 53990},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 40374},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21591},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 80975},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44335},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 86289},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 112841},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24871},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 74323},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 97446},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 119952},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23873},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 147648},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 150902},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 213360},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 130311},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 91587},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 66850},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 66356},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18986},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 94383},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 149831},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 78346},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13486},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16246},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 24834},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35589},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33432},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29217},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44349},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39994},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8938},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 44567},
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

                   text: '羽龍的PT構成(總分2459267)',
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


        
{  y: 69301, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2099314, name: '強襲', legendMarkerType: 'square'},
{  y: 290652, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分2314635)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 186432,
				            interval: 18643,
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 22423},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 46714},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36156},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32510},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 66771},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 146596},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 57977},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 102013},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 63922},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 107519},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 71791},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 90354},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 59212},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 74515},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 145753},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 48986},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 76708},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 53648},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 93035},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 110904},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 50326},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 118715},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 47073},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 67252},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 51370},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 186432},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52074},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 81127},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 52603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10085},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16308},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20914},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52849},
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

                   text: '雷克斯的PT構成(總分2314635)',
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


        
{  y: 2214479, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100156, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分2222252)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 174595,
				            interval: 17459,
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6870},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9138},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24748},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 48365},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4032},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35492},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 65919},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 59960},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 113994},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4531},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45296},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 120066},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46145},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23998},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42451},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 92975},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 66268},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47448},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 58744},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 93829},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 119527},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 62741},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 157210},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55688},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 35929},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 174595},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35439},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 68392},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 69955},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 108929},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 127376},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 118917},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 59499},
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

                   text: '魔法的PT構成(總分2222252)',
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


        
{  y: 2163710, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58542, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '亞歷的PT統計(總分2178662)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 174979,
				            interval: 17497,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27726},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28677},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 53623},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 56203},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 122486},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 81051},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 43953},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 91624},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50051},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 81806},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 110050},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 78617},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 75777},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52776},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 70802},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 98007},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 134612},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 104967},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 65144},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38007},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 90641},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 174979},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9336},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3882},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37133},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46328},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 137583},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 149277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4560},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11233},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7870},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11995},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23209},
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

                   text: '亞歷的PT構成(總分2178662)',
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


        
{  y: 2119795, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58867, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分2043452)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 160063,
				            interval: 16006,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18603},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 24778},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 45732},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20034},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 24343},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29492},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 83660},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 109434},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 84060},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 61300},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 160063},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41875},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 67943},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 109635},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 89347},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 133489},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36453},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 63217},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 81254},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 39052},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 39066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 65327},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 147904},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 104679},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34457},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14919},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14911},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 93181},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16964},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 133810},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14312},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20377},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19781},
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

                   text: '冰的PT構成(總分2043452)',
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


        
{  y: 1988982, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54470, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '赤雲天的PT統計(總分1989753)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 151266,
				            interval: 15126,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 44212},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 49436},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 49055},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 60223},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21074},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23357},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 62513},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 78769},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5471},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3831},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 134570},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 51167},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 109354},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 60764},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34807},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 151266},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 73568},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 56382},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 69687},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91625},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 137524},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41175},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 72635},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11029},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 101209},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 115253},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 77627},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 67188},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8104},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9941},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10774},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4863},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11842},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10449},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15909},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17398},
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

                   text: '赤雲天的PT構成(總分1989753)',
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


        
{  y: 1900473, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 89280, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '藏月的PT統計(總分1853271)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 147954,
				            interval: 14795,
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
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10885},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8662},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21244},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19602},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 44271},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 49530},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 59207},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 51301},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6194},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 67509},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 70412},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 48918},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 55624},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32888},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55781},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2826},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 96597},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 38120},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 37007},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52217},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46060},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 147954},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 60113},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 90317},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 73090},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33215},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 49169},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 80885},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6656},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 140076},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 127014},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48295},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 85512},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36120},
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

                   text: '藏月的PT構成(總分1853271)',
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


        
{  y: 1792878, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60393, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分1811878)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 143428,
				            interval: 14342,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15882},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8538},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22233},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10465},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16780},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28783},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 54273},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 58543},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 46410},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27027},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 44849},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28863},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30958},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30200},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12849},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33973},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65253},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 53936},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 90454},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51882},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36595},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 70898},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 73928},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 103492},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 89488},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 122730},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 132354},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54954},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 143428},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13220},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1101},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 691},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8134},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6574},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2140},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3262},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2478},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2893},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10036},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20522},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38880},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30164},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 40900},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34434},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 36431},
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

                   text: '冰紅茶的PT構成(總分1811878)',
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


        
{  y: 40493, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1560018, name: '強襲', legendMarkerType: 'square'},
{  y: 211367, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分1747895)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 167314,
				            interval: 16731,
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24490},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17867},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20632},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16817},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10428},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34389},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12486},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21423},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34262},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 47342},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 40014},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13972},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 56414},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21480},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30216},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 87693},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 99257},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 82673},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 84021},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32431},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24361},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 102590},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77750},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 57394},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 141865},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 167314},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 131813},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4842},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2625},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2447},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4784},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6972},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6210},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 774},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12436},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13648},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16461},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24223},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37768},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22322},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 54156},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29693},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17118},
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

                   text: '阿榮的PT構成(總分1747895)',
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


        
{  y: 28676, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1491394, name: '強襲', legendMarkerType: 'square'},
{  y: 227825, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分1270528)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 124487,
				            interval: 12448,
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1317},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5149},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 53024},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 63422},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22951},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 36421},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6694},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23905},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23795},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 98485},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27338},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56731},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27655},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 56710},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 99379},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29973},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10673},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 73398},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 84906},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 72844},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 124487},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 56263},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 46530},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5684},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 62434},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6882},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25465},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19742},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17979},
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

                   text: '有生之蓮解鋒鏑的PT構成(總分1270528)',
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


        
{  y: 1200460, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70068, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '寇內爾緹的PT統計(總分346519)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48601,
				            interval: 4860,
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
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7270},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7250},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5761},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1521},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22460},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33797},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13833},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14968},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34558},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3995},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7439},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2741},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8254},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10111},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9197},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19566},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10457},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9985},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48601},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4222},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7028},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23918},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18811},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16240},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4536},
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

                   text: '寇內爾緹的PT構成(總分346519)',
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


        
{  y: 271764, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70219, name: '強襲', legendMarkerType: 'square'},
{  y: 4536, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '漆黑之牙的PT統計(總分2724293)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 171894,
				            interval: 17189,
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
                                    name: "漆黑之牙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 56273},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 42035},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32719},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 47760},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 103529},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 79495},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 90850},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 136486},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 73471},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 67691},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 82402},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 128680},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 83618},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52578},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 76698},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 98096},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67617},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 49143},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61903},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 61580},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 141197},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 63144},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 136959},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 72343},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 156560},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 161388},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 84107},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 47886},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 171894},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 62454},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "漆黑之牙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10021},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13891},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15422},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25091},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20558},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26415},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22339},
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

                   text: '漆黑之牙的PT構成(總分2724293)',
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


        
{  y: 2590556, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 133737, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '紫電的PT統計(總分2714978)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 191237,
				            interval: 19123,
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
                                    name: "紫電殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 23883},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55341},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 53263},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 53421},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 25387},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 125006},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 50206},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 73412},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 72529},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 91712},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 128620},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 85608},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53808},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41864},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 84145},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 165353},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 119329},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 66892},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 147111},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 59242},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 41411},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 84403},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 82622},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 169983},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 84729},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 137681},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 97150},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 191237},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 119645},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 119891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10094},
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

                   text: '紫電的PT構成(總分2714978)',
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


        
{  y: 2704884, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10094, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Fung的PT統計(總分2712957)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 258032,
				            interval: 25803,
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
                                    name: "Fung殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5694},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1308},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2691},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7606},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4297},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 89},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8145},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16309},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23572},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 31477},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 49857},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28251},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36418},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7962},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33964},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 62249},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 36697},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 75307},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 96376},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 143740},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 37059},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 64965},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 62600},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 56708},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 98222},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 116718},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 94517},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88146},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 110270},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58973},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 258032},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 167800},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 129774},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 187868},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 97480},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 118257},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27767},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FungCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8587},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10938},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28598},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26313},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14352},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 37728},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6052},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25409},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26639},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 81176},
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

                   text: 'Fung的PT構成(總分2712957)',
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


        
{  y: 29830, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2417335, name: '強襲', legendMarkerType: 'square'},
{  y: 265792, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依斯瑪爾的PT統計(總分2673812)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 184666,
				            interval: 18466,
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
                                    name: "依斯瑪爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 40431},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 41013},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 26504},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42806},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27518},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 110372},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 71128},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 88541},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 69985},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 123163},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 77529},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 87564},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 90277},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 155172},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 41281},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 103313},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 77244},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 127520},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 137957},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 94048},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 101170},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 102493},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 79697},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 87742},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 130898},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 88584},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 103291},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 184666},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 67884},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 94021},
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

                   text: '依斯瑪爾的PT構成(總分2673812)',
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


        
{  y: 2673812, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '龍之痕的PT統計(總分2467615)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 224272,
				            interval: 22427,
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
                                    name: "龍之痕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13288},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8355},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 57317},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46218},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 89154},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22703},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 64860},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 102605},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 83956},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27395},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 102637},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 99207},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20354},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 71766},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 151857},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 83456},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37715},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 58645},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 87701},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 103878},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22608},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 224272},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 141510},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 97080},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 117500},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 61166},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 51246},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 53390},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍之痕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11500},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 24800},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38280},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29860},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26778},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25600},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34683},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38638},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48876},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19781},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31679},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍之痕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6008},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6032},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2592},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3972},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5928},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2834},
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

                   text: '龍之痕的PT構成(總分2467615)',
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


        
{  y: 27419, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2109721, name: '強襲', legendMarkerType: 'square'},
{  y: 330475, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西比歐斯的PT統計(總分2346333)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 195790,
				            interval: 19579,
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
                                    name: "西比歐斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24024},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19230},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 58167},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32669},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 48226},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37378},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28068},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 51507},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 78732},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34485},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西比歐斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 26289},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31468},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 31802},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 50589},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 41741},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 47888},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 49383},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 73583},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 44101},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32849},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45962},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 71070},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70277},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 62216},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52358},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35516},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 54603},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 120930},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 69397},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59214},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 51129},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 113580},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17256},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 112527},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 100552},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 195790},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 165439},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 45158},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西比歐斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
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
                                          PlayerChart26.render();
                                        }
                                      }
                                    });
                            PlayerChart26.render();
var PlayerPieChart26 = new CanvasJS.Chart('PlayerPieChartContainer26',

    {

        title:{

                   text: '西比歐斯的PT構成(總分2346333)',
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
{  y: 1904054, name: '強襲', legendMarkerType: 'square'},
{  y: 442279, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藍玉狂風的PT統計(總分2343590)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 161162,
				            interval: 16116,
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
                                    name: "藍玉狂風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10404},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11430},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20574},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23659},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍玉狂風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22967},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55566},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 71314},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28162},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34944},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 99340},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 57859},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43610},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63560},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34787},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 134147},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 44930},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 63033},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 82594},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 66485},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 161162},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 84029},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 115306},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 98208},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 135910},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 100742},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 133699},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 54225},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 45827},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 152002},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 83912},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92495},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 63616},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16327},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36765},
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

                   text: '藍玉狂風的PT構成(總分2343590)',
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


        
{  y: 2277523, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 66067, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '喬的PT統計(總分2215957)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 240223,
				            interval: 24022,
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
                                    name: "喬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29174},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 25586},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16862},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26668},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23192},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22074},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 33490},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14326},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4672},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 49787},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23790},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 55264},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 160477},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26535},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 132764},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 47990},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 83555},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44958},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 95028},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 68279},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 71325},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 71779},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 173362},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 223177},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 240223},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 66179},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4217},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5002},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8669},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5984},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5291},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6715},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10658},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4272},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3841},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3620},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24121},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7082},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7465},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6510},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8257},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8325},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4032},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 57},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45323},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13898},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 35033},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19278},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32115},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31684},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26970},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13102},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28365},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15555},
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

                   text: '喬的PT構成(總分2215957)',
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


        
{  y: 124118, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1830516, name: '強襲', legendMarkerType: 'square'},
{  y: 261323, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '月騎士莘西亞的PT統計(總分2151990)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 117292,
				            interval: 11729,
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
                                    name: "月騎士莘西亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 26170},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15829},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 56348},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 46463},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2143},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22263},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 56721},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 69122},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25302},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 100337},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52299},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 108510},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53979},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 103314},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 89814},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 90765},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 71743},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42878},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39044},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 88612},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45257},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 90823},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 69385},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 92851},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 92902},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 78458},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 117292},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 72945},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 59513},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 75929},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月騎士莘西亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4256},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6383},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6465},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21982},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42852},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29230},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33118},
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

                   text: '月騎士莘西亞的PT構成(總分2151990)',
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


        
{  y: 1957011, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 194979, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '史迪克的PT統計(總分1998384)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 258937,
				            interval: 25893,
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
                                    name: "史迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5621},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7402},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6295},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6692},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7505},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7991},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7463},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14563},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26268},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8336},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3509},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3802},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7823},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8772},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16493},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5679},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35113},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 81863},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34628},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 107691},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33297},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33835},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34192},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 79427},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22758},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 60551},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22735},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 72450},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 120271},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 96971},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 152946},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 258937},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 113753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 79489},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 44850},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25957},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 80033},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10201},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21621},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32397},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26986},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44385},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52214},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31803},
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

                   text: '史迪克的PT構成(總分1998384)',
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


        
{  y: 105447, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1673330, name: '強襲', legendMarkerType: 'square'},
{  y: 219607, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊勒斯的PT統計(總分1849413)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 200029,
				            interval: 20002,
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
                                    name: "萊勒斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6843},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16727},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 26522},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22860},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 25213},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43397},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24803},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38646},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 49296},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 60416},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 61512},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33478},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15767},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30513},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21897},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25821},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 90530},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 85701},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 102272},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 61141},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55631},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 35604},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56361},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 51712},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 89353},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 104914},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 200029},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1695},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2253},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1502},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7105},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7214},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7515},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2589},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8072},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 962},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8696},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17825},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21280},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26150},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26543},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39013},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 53861},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 65682},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 41525},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46098},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26844},
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

                   text: '萊勒斯的PT構成(總分1849413)',
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


        
{  y: 47633, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1436959, name: '強襲', legendMarkerType: 'square'},
{  y: 364821, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '林貝蒂的PT統計(總分1593231)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 125013,
				            interval: 12501,
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
                                    name: "林貝蒂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17191},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 56212},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15518},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26317},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 59576},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18806},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14291},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 58395},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 50916},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 64178},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 48311},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42855},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 76324},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36059},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 47277},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 69649},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28720},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47487},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 102306},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 65209},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 107826},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 124396},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 59521},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 88362},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 125013},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29893},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "林貝蒂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1945},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7686},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4575},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4917},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1404},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15273},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8584},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "林貝蒂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17652},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13211},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37330},
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

                   text: '林貝蒂的PT構成(總分1593231)',
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


        
{  y: 44430, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1480608, name: '強襲', legendMarkerType: 'square'},
{  y: 68193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '野生的PT統計(總分1232582)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 180490,
				            interval: 18049,
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
                                    name: "野生強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20182},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40504},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30211},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5128},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35743},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 158533},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 87266},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 161202},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 180490},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 64081},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 60641},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 44643},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 87815},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 58090},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野生殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7119},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1414},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2496},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15537},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5712},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2923},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2474},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 933},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野生CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40878},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27642},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 61406},
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

                   text: '野生的PT構成(總分1232582)',
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


        
{  y: 38608, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1064048, name: '強襲', legendMarkerType: 'square'},
{  y: 129926, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '八龍流永逸的PT統計(總分1163602)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 86052,
				            interval: 8605,
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
                                    name: "八龍流永逸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20623},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 62095},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 46846},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 36598},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 33018},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 78305},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 39040},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37748},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1723},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31294},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64607},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24163},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32104},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3208},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 74122},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 86052},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 42672},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20993},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 43024},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 69095},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 51524},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 78394},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46449},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48390},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "八龍流永逸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3999},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20077},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14290},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16446},
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

                   text: '八龍流永逸的PT構成(總分1163602)',
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


        
{  y: 1108790, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54812, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雪莉月光巴潔麗絲的PT統計(總分812800)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70602,
				            interval: 7060,
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
                                    name: "雪莉月光巴潔麗絲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11150},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3473},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23446},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23360},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 70458},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28233},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 48996},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50728},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28767},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2175},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 70048},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6570},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28153},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 47619},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1673},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29164},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 70602},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34462},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35708},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1068},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 57183},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56543},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8295},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪莉月光巴潔麗絲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2050},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21888},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24949},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22862},
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

                   text: '雪莉月光巴潔麗絲的PT構成(總分812800)',
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


        
{  y: 741051, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71749, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雷歐斯的PT統計(總分772406)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 195597,
				            interval: 19559,
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
                                    name: "雷歐斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24886},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65942},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24682},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4739},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1458},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6899},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7188},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8494},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3787},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5921},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1665},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7818},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7474},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34192},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7016},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3171},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11617},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10516},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8417},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10122},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10816},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31252},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6830},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10110},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 195597},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 98348},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24037},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15581},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34581},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10250},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12236},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43479},
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

                   text: '雷歐斯的PT構成(總分772406)',
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


        
{  y: 185467, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 135890, name: '強襲', legendMarkerType: 'square'},
{  y: 451049, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米糕的PT統計(總分748324)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69418,
				            interval: 6941,
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
                                    name: "米糕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4574},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10214},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4973},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10065},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 372},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4542},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9656},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6402},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26585},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6107},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7912},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3369},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13990},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4189},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17347},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1264},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10499},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2204},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米糕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1344},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1424},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18431},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21449},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16038},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29790},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 56091},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28426},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40143},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米糕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6815},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36080},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21117},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 69418},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4771},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21524},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56330},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29311},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22752},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36428},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7645},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32851},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39392},
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

                   text: '米糕的PT構成(總分748324)',
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


        
{  y: 150754, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 384434, name: '強襲', legendMarkerType: 'square'},
{  y: 213136, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '軒轅恆天的PT統計(總分626340)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64703,
				            interval: 6470,
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
                                    name: "軒轅恆天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4636},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5751},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7929},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3754},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6000},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32245},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34213},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5508},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13141},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31100},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30148},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36991},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 34221},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14106},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軒轅恆天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23120},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17775},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 61874},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軒轅恆天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 25016},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17956},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10057},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32288},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14686},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28877},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35165},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19252},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10862},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 64703},
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

                   text: '軒轅恆天的PT構成(總分626340)',
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


        
{  y: 264709, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 258862, name: '強襲', legendMarkerType: 'square'},
{  y: 102769, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart38.render();
}
