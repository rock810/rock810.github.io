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
				
				            maximum: 706553,
				            interval: 70655,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 133535},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 140526},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 164642},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 216501},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 253636},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 258891},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 363583},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 345148},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 382221},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 453753},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 369458},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 360614},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 440960},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 466382},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 273485},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 395279},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 449012},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 599173},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 548296},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 476158},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 500685},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 594760},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 595523},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 645679},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 596703},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 706553},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 563921},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 520102},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 519403},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 550437},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 4836},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 50587},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 74773},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 84645},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 162710},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 173706},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 242934},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 222986},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 235591},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 278835},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 283952},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 333632},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 301927},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 306572},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 332895},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 349461},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 223279},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 291943},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 318859},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 288669},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 318739},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 420301},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 334092},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 278213},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 241568},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 349803},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 300009},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 302369},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 322863},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 274666},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 199474},
]},
],
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
				
				            maximum: 20789908,
				            interval: 2078990,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 133535},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 274061},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 438703},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 655204},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 908840},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1167731},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1531314},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1876462},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2258683},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2712436},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3081894},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3442508},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3883468},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4349850},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4623335},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5018614},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5467626},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6066799},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6615095},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7091253},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7591938},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8186698},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8782221},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9427900},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10024603},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10731156},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11295077},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11815179},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12334582},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12885019},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 12889855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 50587},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 125360},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 210005},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 372715},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 546421},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 789355},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1012341},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1247932},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1526767},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1810719},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2144351},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2446278},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2752850},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3085745},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3435206},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3658485},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3950428},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4269287},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4557956},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4876695},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5296996},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5631088},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5909301},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6150869},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6500672},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6800681},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7103050},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7425913},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7700579},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7900053},
]},
],
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
				
				            maximum: 467712,
				            interval: 46771,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10022},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10163},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 26908},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 36367},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13988},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28136},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26702},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 44335},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32210},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10312},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 58075},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 48630},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17561},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17137},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55277},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 65343},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 99560},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 47545},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 70807},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 56148},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 48317},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 47719},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 86075},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 58439},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 114440},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 142591},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 92528},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 60706},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 43840},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 52790},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 4836},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 18730},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28374},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 26038},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 44752},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 43657},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 44209},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 39895},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 41543},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 64326},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 70875},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 61638},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 72069},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 70666},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 98300},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 46209},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 69001},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 75845},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 121250},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 137627},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 58907},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 131467},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 79329},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 120456},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 171426},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 91201},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 158428},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 94777},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 79974},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 137368},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 176497},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 104783},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 101989},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 111696},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 135382},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 195991},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 186546},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 296986},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 259270},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 285685},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 372566},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 249745},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 239915},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 352733},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 350945},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 171999},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 260935},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 273607},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 430378},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 339862},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 361103},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 320901},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 467712},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 388992},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 415814},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 391062},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 405534},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 376616},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 379422},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 338195},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 321150},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 40029},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 63143},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 64621},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 129285},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 152113},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 192312},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 164524},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 155064},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 244271},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 217703},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 245114},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 227951},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 211044},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 223149},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 252522},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 188336},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 220809},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 256244},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 245106},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 275759},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 352981},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 268630},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 181349},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 179530},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 271946},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 241542},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 241151},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 218001},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 202710},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 137903},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7606},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11046},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20024},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 24230},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21593},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 44296},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29026},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 38774},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 34564},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 36068},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 70888},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 55263},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 82728},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 71460},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 70463},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 34943},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34563},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 62615},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 41530},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42980},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 57880},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 49575},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 80400},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43312},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 65463},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58467},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 47383},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 79555},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 71956},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 27983},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2952},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 584},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9195},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6326},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29436},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 41753},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30181},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17630},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18713},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12800},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 38286},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26476},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 36571},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2033},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9440},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15887},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16464},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18726},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12394},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13835},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25307},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33588},
]},
],
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
				            text: '喵鼠的PT統計(總分998173)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 99150,
				            interval: 9915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10167},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9875},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3047},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2267},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3966},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3155},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10688},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3784},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 28542},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7686},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6718},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7439},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9604},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7901},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6915},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1773},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4542},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12866},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6524},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12029},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18955},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15939},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11882},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15399},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 39706},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 26560},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31930},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 26560},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 39109},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30061},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 79924},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 65298},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51284},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23554},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 33619},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 99150},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 41333},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 52876},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32869},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 61463},
]},
],
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

                   text: '喵鼠的PT構成(總分998173)',
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


        
{  y: 159539, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 744302, name: 'CBC', legendMarkerType: 'square'},
{  y: 94332, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分943596)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 91627,
				            interval: 9162,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5763},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8260},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26975},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19178},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15309},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18912},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23716},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33974},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25038},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27436},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 50292},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 91627},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4329},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5074},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8303},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 521},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5925},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1454},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 23045},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30314},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6008},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 47057},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2661},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8686},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6663},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16690},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7339},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28127},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20516},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 54689},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4153},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6359},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35698},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 36742},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24028},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1480},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33621},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8177},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10333},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1546},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8432},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10848},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22273},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27860},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8272},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 48708},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31185},
]},
],
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

                   text: '雪歌的PT構成(總分943596)',
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


        
{  y: 346480, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 439538, name: '殲滅', legendMarkerType: 'square'},
{  y: 157578, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分938687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54331,
				            interval: 5433,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10878},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10140},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23206},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4024},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27760},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 33281},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 23715},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13928},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12865},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12844},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9427},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34837},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4125},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13217},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1505},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2423},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13857},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13936},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 34208},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14803},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17473},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30639},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30398},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 54331},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 32857},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 40508},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19551},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16767},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17011},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15265},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7249},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16472},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19740},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4103},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25789},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 30521},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11581},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15085},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14142},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11095},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17561},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22097},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23723},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20525},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15172},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18621},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17250},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26161},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32021},
]},
],
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

                   text: '葬月的PT構成(總分938687)',
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


        
{  y: 574514, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119139, name: 'CBC', legendMarkerType: 'square'},
{  y: 245034, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分880294)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54337,
				            interval: 5433,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7736},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14702},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13257},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 34165},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 52058},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1706},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 22300},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13987},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21713},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 29351},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33736},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 51710},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 35626},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15395},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41882},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 43939},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38512},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17064},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37242},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16691},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54337},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26876},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 47388},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25249},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30594},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17453},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25402},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19988},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6663},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10223},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13362},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4831},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6303},
]},
],
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

                   text: '嘎喵的PT構成(總分880294)',
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


        
{  y: 838912, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30248, name: '強襲', legendMarkerType: 'square'},
{  y: 11134, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分844503)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68007,
				            interval: 6800,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10910},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7249},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19948},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18938},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 32140},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 31848},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 28160},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38473},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23741},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8796},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 47835},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21830},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13255},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 50683},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 41731},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38251},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26455},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 39514},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7698},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20508},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 47382},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16323},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 68007},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16822},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 33737},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19187},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 61551},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19106},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2988},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8349},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12852},
]},
],
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

                   text: '雷克斯的PT構成(總分844503)',
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


        
{  y: 820314, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24189, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '秋風冷月的PT統計(總分763457)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 113898,
				            interval: 11389,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7050},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1835},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9944},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7623},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1345},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3376},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11801},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29652},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8761},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11840},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13184},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3844},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6330},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4565},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1432},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9905},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30323},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7554},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13042},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8414},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10013},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8138},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12400},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 40957},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7131},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14777},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3635},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4867},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7619},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9858},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8133},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16953},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7563},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24043},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 39378},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12208},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16423},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20479},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16723},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21993},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25976},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7367},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38647},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 113898},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 44032},
]},
],
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

                   text: '秋風冷月的PT構成(總分763457)',
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


        
{  y: 297285, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 85005, name: '強襲', legendMarkerType: 'square'},
{  y: 381167, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分719044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59222,
				            interval: 5922,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5211},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8534},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11250},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7264},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 33673},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 58809},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 43025},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18582},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 39799},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18556},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31115},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 59222},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15330},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18152},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8220},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11815},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 44006},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14004},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19192},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 55},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9784},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 43254},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19671},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42631},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17471},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14028},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12607},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12518},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15253},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15995},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9732},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2857},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8488},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3089},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13989},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11863},
]},
],
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

                   text: '阿拉的PT構成(總分719044)',
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


        
{  y: 612653, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 66105, name: '強襲', legendMarkerType: 'square'},
{  y: 40286, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分701554)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49323,
				            interval: 4932,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5596},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4836},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5133},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21478},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4661},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15737},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30340},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 39784},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14252},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12396},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3960},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27016},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21564},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 4836},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3174},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6296},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5487},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6798},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 31425},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13638},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17773},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43211},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12351},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2240},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23789},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11643},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20286},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14187},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30151},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33531},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11853},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 49323},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9997},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26528},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12784},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14494},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10002},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 43588},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27596},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 88},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7732},
]},
],
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

                   text: '寇內爾緹的PT構成(總分701554)',
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


        
{  y: 211589, name: '強襲', legendMarkerType: 'triangle'},
{  y: 482233, name: '殲滅', legendMarkerType: 'square'},
{  y: 7732, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分693762)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59046,
				            interval: 5904,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 15459},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3268},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7147},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 20370},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7309},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20934},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4974},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 36795},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13386},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14026},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13514},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3824},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9467},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20182},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5090},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 35577},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18700},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23297},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21769},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23824},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 48545},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 47956},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16428},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15334},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10445},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17901},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 59046},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29760},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18532},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28625},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5038},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2203},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23888},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11969},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13384},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16578},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9218},
]},
],
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

                   text: '羽龍的PT構成(總分693762)',
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


        
{  y: 611484, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 73060, name: 'CBC', legendMarkerType: 'square'},
{  y: 9218, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分693701)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44516,
				            interval: 4451,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14294},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1143},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7063},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4519},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3399},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9641},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21110},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29286},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9579},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6368},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8596},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9882},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1343},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10686},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5746},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7023},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2980},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9376},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7777},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26865},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3418},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2056},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3198},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15825},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27320},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18134},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5546},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10190},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14067},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16149},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27874},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34237},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24908},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18508},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23095},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20264},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 44516},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18477},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17940},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2544},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8855},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13051},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15970},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 24937},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24062},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26928},
]},
],
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

                   text: '土土昕的PT構成(總分693701)',
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


        
{  y: 301583, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 275771, name: 'CBC', legendMarkerType: 'square'},
{  y: 116347, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分619791)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64033,
				            interval: 6403,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12821},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7881},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8221},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5881},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14720},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8583},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 20898},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14350},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3600},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25038},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21894},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8820},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14491},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34965},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16979},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23563},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17488},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 64033},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17342},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50711},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7876},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17343},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25670},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11615},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 32450},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15535},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10011},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 40771},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18451},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10646},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7253},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8708},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4976},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6949},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9258},
]},
],
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

                   text: '冰的PT構成(總分619791)',
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


        
{  y: 582647, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15961, name: '強襲', legendMarkerType: 'square'},
{  y: 21183, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分548841)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73824,
				            interval: 7382,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7867},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9564},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5073},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2438},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2202},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2718},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25068},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2524},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 20954},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28462},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6541},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15068},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7802},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 35787},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11925},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13345},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7577},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4959},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8057},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30188},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1790},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11073},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 73824},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31713},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33579},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 40501},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12605},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24118},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7357},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8501},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7804},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11654},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17592},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4427},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4306},
]},
],
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

                   text: '魔法的PT構成(總分548841)',
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


        
{  y: 487200, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57335, name: 'CBC', legendMarkerType: 'square'},
{  y: 4306, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分542528)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60774,
				            interval: 6077,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 676},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2768},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 407},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 40},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21117},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13307},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 21541},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 27757},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14770},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 60774},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1381},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26607},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13753},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7301},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11119},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8627},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16679},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31644},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17063},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22833},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19116},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7934},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31870},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14130},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20088},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 49489},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8663},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8421},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15592},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17700},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17298},
]},
],
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

                   text: '依司瑪耳的PT構成(總分542528)',
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


        
{  y: 465850, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76678, name: '強襲', legendMarkerType: 'square'},
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
				            text: '藏月的PT統計(總分477949)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50606,
				            interval: 5060,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6474},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11708},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5428},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16040},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12718},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8090},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5450},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4786},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12011},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12939},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11106},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7735},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 44102},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11556},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15054},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1274},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13859},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12475},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 42294},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26246},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6096},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 103},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16637},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14692},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10710},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12686},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20126},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 50606},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 70},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21180},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8760},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10501},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9355},
]},
],
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

                   text: '藏月的PT構成(總分477949)',
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


        
{  y: 434251, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15082, name: 'CBC', legendMarkerType: 'square'},
{  y: 28616, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分473404)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54007,
				            interval: 5400,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9979},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9530},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4880},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 23837},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11474},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16342},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13999},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36617},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25428},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6670},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18575},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 45006},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22996},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14054},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4858},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3822},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2279},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5424},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3537},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6822},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1192},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2328},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7907},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54007},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9767},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21705},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3167},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8936},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7378},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3280},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1311},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26835},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18447},
]},
],
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

                   text: '阿榮的PT構成(總分473404)',
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


        
{  y: 259387, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 167424, name: '殲滅', legendMarkerType: 'square'},
{  y: 46593, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分444741)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111444,
				            interval: 11144,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20030},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13787},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24070},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28155},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 87874},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 111444},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15587},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42978},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 30425},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13048},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12501},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16500},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14070},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14272},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分444741)',
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


        
{  y: 387398, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43071, name: '強襲', legendMarkerType: 'square'},
{  y: 14272, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分439042)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37306,
				            interval: 3730,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7032},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3052},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1643},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7961},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5411},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10722},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13739},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17307},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6974},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26844},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1047},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1942},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1278},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9936},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3007},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7481},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6366},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6463},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2217},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9640},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7886},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8361},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2714},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37306},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8313},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5155},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10143},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11518},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10732},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12009},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11405},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9207},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5882},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14676},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12710},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12361},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26924},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28111},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14565},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11387},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14960},
]},
],
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

                   text: '冰紅茶的PT構成(總分439042)',
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


        
{  y: 214642, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 209440, name: '強襲', legendMarkerType: 'square'},
{  y: 14960, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分427007)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45467,
				            interval: 4546,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10809},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13005},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12030},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21153},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9289},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28431},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 37157},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11395},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18720},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 40948},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35726},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45467},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19522},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15393},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17778},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8053},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4214},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17179},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 37142},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7696},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15900},
]},
],
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

                   text: '亞歷的PT構成(總分427007)',
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


        
{  y: 403411, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23596, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分388044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36429,
				            interval: 3642,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7114},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1465},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16307},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22594},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29320},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17374},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11457},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 36411},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36429},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23160},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33248},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17047},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 32306},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6638},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1205},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1348},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16346},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2310},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2086},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10312},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9327},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3660},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17783},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16593},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16202},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分388044)',
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


        
{  y: 314167, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41082, name: '強襲', legendMarkerType: 'square'},
{  y: 32795, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分351737)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58074,
				            interval: 5807,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2745},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10447},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8678},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13307},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10630},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5731},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 58074},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 24129},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14464},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18114},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7108},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10449},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12995},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30414},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4204},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10111},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11994},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6413},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19176},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8907},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9112},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8170},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12269},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7780},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5183},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7781},
]},
],
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

                   text: '赤雲天的PT構成(總分351737)',
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


        
{  y: 292469, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46304, name: '強襲', legendMarkerType: 'square'},
{  y: 12964, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夏日萍緣的PT統計(總分736844)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58436,
				            interval: 5843,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏日萍緣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8933},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14879},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10413},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 21776},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 54769},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 52447},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 38720},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22499},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3435},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7363},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 43731},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24506},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 42257},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27237},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 58436},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9636},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8086},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13965},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 39926},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37595},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39175},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 46725},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1514},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10095},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6526},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6720},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13573},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2291},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9603},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4019},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏日萍緣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8770},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8738},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏日萍緣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12256},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11792},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14438},
]},
],
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

                   text: '夏日萍緣的PT構成(總分736844)',
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


        
{  y: 680850, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17508, name: 'CBC', legendMarkerType: 'square'},
{  y: 38486, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '小小Q的PT統計(總分687933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60382,
				            interval: 6038,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小小Q殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12714},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4975},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6098},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 784},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5948},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13547},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8790},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3814},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9290},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6758},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 32892},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8669},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小小Q強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16571},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小小QCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15994},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25975},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 45778},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 60382},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 45545},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 53886},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10134},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18590},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15721},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32663},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30467},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16474},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 52575},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20480},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19342},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19756},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6349},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29206},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37743},
]},
],
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

                   text: '小小Q的PT構成(總分687933)',
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


        
{  y: 114302, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16571, name: '強襲', legendMarkerType: 'square'},
{  y: 557060, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '顆顆的PT統計(總分645381)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65040,
				            interval: 6504,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "顆顆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3540},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7503},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 29399},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5173},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 18242},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 28030},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9273},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 41494},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20900},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 36992},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 25220},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23144},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6248},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 57365},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28304},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21639},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19176},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30084},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 65040},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38268},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16345},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15187},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4089},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8588},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 39703},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6286},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17147},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "顆顆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3351},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4135},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8509},
]},
],
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

                   text: '顆顆的PT構成(總分645381)',
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


        
{  y: 629386, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15995, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '嵐風的PT統計(總分591130)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43440,
				            interval: 4344,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10348},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17122},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17017},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1806},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3809},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 16647},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15106},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8249},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7039},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16742},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 19592},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 30798},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4158},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3688},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10894},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14060},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23011},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19944},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1278},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 43440},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12952},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26130},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30936},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18556},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21750},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2508},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5443},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 39350},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1472},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8304},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8781},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8026},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6019},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6209},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7509},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15364},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17406},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6669},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11337},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20175},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19937},
]},
],
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

                   text: '嵐風的PT構成(總分591130)',
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


        
{  y: 44487, name: '強襲', legendMarkerType: 'triangle'},
{  y: 436018, name: '殲滅', legendMarkerType: 'square'},
{  y: 110625, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '北行鳥的PT統計(總分553850)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41286,
				            interval: 4128,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北行鳥CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10214},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7813},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11131},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24167},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14856},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4138},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12805},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17756},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22346},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24809},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8867},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13719},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17583},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12135},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8237},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37351},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20602},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22792},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 41286},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12175},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北行鳥殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1295},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5229},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5850},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 907},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5765},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3069},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 33},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12268},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4031},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5140},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2858},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1279},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8112},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 842},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26957},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6843},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7664},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5007},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7492},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6827},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5518},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3178},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北行鳥強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17925},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26476},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22616},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15887},
]},
],
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

                   text: '北行鳥的PT構成(總分553850)',
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


        
{  y: 344782, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 126164, name: '殲滅', legendMarkerType: 'square'},
{  y: 82904, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '賴料布的PT統計(總分541366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40358,
				            interval: 4035,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賴料布殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 16},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 211},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9207},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23090},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 27990},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11781},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6293},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40358},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 27177},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14048},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19275},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23671},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1653},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26795},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19265},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39468},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19405},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 37718},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7523},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34483},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6819},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21795},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37061},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6729},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4690},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10672},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賴料布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 832},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7697},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23899},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13728},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8690},
]},
],
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

                   text: '賴料布的PT構成(總分541366)',
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


        
{  y: 486520, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54846, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '斯克爾的PT統計(總分506506)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38979,
				            interval: 3897,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斯克爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4721},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9134},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3310},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14088},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10210},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16269},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38979},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 27662},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28937},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16146},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25888},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 612},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7670},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5790},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 28740},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13048},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33814},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19007},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30698},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19404},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7454},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11507},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36870},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9683},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29049},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斯克爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12211},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19342},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9239},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11713},
]},
],
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

                   text: '斯克爾的PT構成(總分506506)',
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


        
{  y: 454001, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52505, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '王不留行的PT統計(總分485286)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53544,
				            interval: 5354,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "王不留行殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5804},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3916},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11582},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24827},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19133},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11853},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29860},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6375},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17576},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6304},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7390},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14323},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9439},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 29955},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6843},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17857},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2720},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31838},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18617},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51559},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7624},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10649},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23470},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14375},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6139},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35185},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 53544},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "王不留行CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6529},
]},
],
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

                   text: '王不留行的PT構成(總分485286)',
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


        
{  y: 478757, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6529, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '招財黑貓的PT統計(總分454304)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36532,
				            interval: 3653,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "招財黑貓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2841},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 983},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11423},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15810},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5554},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13535},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17625},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10950},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10739},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33357},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13186},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7841},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14732},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17233},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23389},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8180},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 36532},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9702},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22104},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22516},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8722},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21234},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36035},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8410},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16567},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14557},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10578},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "招財黑貓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7197},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9746},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15808},
]},
],
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

                   text: '招財黑貓的PT構成(總分454304)',
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


        
{  y: 421553, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32751, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '凱洛的PT統計(總分435217)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33325,
				            interval: 3332,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱洛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8970},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5134},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10537},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8702},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6115},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8574},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16561},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30754},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6883},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13405},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11177},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5314},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9875},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13552},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 564},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33325},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10294},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7295},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6882},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26272},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16876},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1522},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10858},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3356},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱洛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9195},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6326},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12346},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29858},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2452},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13355},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13955},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2033},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16464},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18726},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13835},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8185},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱洛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15690},
]},
],
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

                   text: '凱洛的PT構成(總分435217)',
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


        
{  y: 272797, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146730, name: '強襲', legendMarkerType: 'square'},
{  y: 15690, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '巴芙曼的PT統計(總分398519)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46056,
				            interval: 4605,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴芙曼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2500},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5922},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5269},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8504},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5076},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6371},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11203},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22349},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9206},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32745},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5004},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10512},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3183},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13118},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16032},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1385},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 46056},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5946},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9626},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 500},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19036},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10867},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14317},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9919},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 43354},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10022},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6589},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12880},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20337},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴芙曼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8661},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16215},
]},
],
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

                   text: '巴芙曼的PT構成(總分398519)',
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


        
{  y: 373643, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24876, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '比利·海靈頓的PT統計(總分351527)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36113,
				            interval: 3611,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "比利·海靈頓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9890},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4042},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1674},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12806},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2207},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6107},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15540},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24630},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14065},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10450},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 36113},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12026},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32388},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3887},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31385},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6699},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5312},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7232},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7185},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15299},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11701},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26519},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13338},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 924},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "比利·海靈頓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7961},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5066},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12926},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "比利·海靈頓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6921},
]},
],
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

                   text: '比利·海靈頓的PT構成(總分351527)',
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


        
{  y: 318653, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25953, name: 'CBC', legendMarkerType: 'square'},
{  y: 6921, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '費爾狄奧的PT統計(總分347688)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39638,
				            interval: 3963,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾狄奧殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27964},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11893},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22135},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27532},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16197},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17714},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 39638},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33416},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4969},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4844},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21430},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17588},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27271},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11062},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾狄奧CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2849},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9371},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾狄奧強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9440},
]},
],
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

                   text: '費爾狄奧的PT構成(總分347688)',
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


        
{  y: 326028, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12220, name: 'CBC', legendMarkerType: 'square'},
{  y: 9440, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '湊莉久的PT統計(總分327955)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45568,
				            interval: 4556,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湊莉久殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3401},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17441},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13437},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6005},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9833},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10156},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 244},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7722},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11044},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 41788},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13774},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13839},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21569},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18045},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9881},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4552},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 45568},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12326},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22774},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11196},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11358},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11509},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湊莉久強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10493},
]},
],
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

                   text: '湊莉久的PT構成(總分327955)',
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


        
{  y: 317462, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10493, name: '強襲', legendMarkerType: 'square'},
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
				            text: '小月兒的PT統計(總分307894)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38946,
				            interval: 3894,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小月兒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2273},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2727},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6339},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8161},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8394},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12292},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10797},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27039},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8961},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2775},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12269},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8763},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15754},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2712},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3049},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34900},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11750},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2540},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9107},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6346},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9830},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7833},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 946},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7155},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38946},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6235},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小月兒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8523},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9304},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11332},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9830},
]},
],
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

                   text: '小月兒的PT構成(總分307894)',
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


        
{  y: 268905, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38989, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '花散華的PT統計(總分248771)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32320,
				            interval: 3232,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "花散華CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10079},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8996},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20036},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13608},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14595},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14276},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "花散華殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3476},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7521},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12346},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2815},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6614},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9995},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3131},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3281},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6353},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7835},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32320},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12485},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "花散華強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17090},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11895},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17630},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12394},
]},
],
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

                   text: '花散華的PT構成(總分248771)',
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


        
{  y: 81590, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 108172, name: '殲滅', legendMarkerType: 'square'},
{  y: 59009, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '夜祤的PT統計(總分158218)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35302,
				            interval: 3530,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜祤殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 329},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 897},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1312},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19524},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14445},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7696},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10444},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4991},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9009},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11291},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3141},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2220},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10109},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3864},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35302},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14361},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9283},
]},
],
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

                   text: '夜祤的PT構成(總分158218)',
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


        
{  y: 158218, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '一劍西來的PT統計(總分65933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11051,
				            interval: 1105,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一劍西來CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4255},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一劍西來殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5022},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8501},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6082},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10499},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5172},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11051},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6288},
]},
],
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

                   text: '一劍西來的PT構成(總分65933)',
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


        
{  y: 13318, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 52615, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '王蟲的PT統計(總分41280)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7299,
				            interval: 729,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "王蟲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5878},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7242},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2238},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3997},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7299},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3229},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "王蟲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7080},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4317},
]},
],
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

                   text: '王蟲的PT構成(總分41280)',
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


        
{  y: 29883, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11397, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart39.render();
var PlayerChart40 = new CanvasJS.Chart('PlayerChartContainer40',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '一憂子的PT統計(總分14451)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10915,
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
                                    name: "一憂子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10915},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一憂子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2952},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 584},
]},
],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          PlayerChart40.render();
                                        }
                                      }
                                    });
                            PlayerChart40.render();
var PlayerPieChart40 = new CanvasJS.Chart('PlayerPieChartContainer40',

    {

        title:{

                   text: '一憂子的PT構成(總分14451)',
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


        
{  y: 10915, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3536, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
