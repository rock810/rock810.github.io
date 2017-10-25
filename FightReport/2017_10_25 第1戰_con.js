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
				
				            maximum: 721136,
				            interval: 72113,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 137352},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 168563},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 184328},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 231730},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 369863},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 406073},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 380870},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 425026},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 434986},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 407474},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 356586},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 251348},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 233342},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 190899},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 240685},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 253019},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 388622},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 363799},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 380522},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 329504},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 415899},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 332807},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 292941},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 353130},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 336387},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 541723},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 425082},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 457741},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 421866},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 415593},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 149508},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 153291},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 235959},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 240595},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 222166},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 204548},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 263422},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 253662},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 253285},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 295901},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 246724},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 426682},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 518440},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 721136},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 548038},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 535725},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 395076},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 559256},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 484804},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 566117},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 347484},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 617462},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 627679},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 685772},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 533782},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 621985},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 552320},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 487134},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 468481},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 449750},
]},
],
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
				
				            maximum: 22793944,
				            interval: 2279394,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 137352},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 305915},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 490243},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 721973},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1091836},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1497909},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1878779},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2303805},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2738791},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3146265},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3502851},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3754199},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3987541},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4178440},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4419125},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4672144},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5060766},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5424565},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5805087},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6134591},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6550490},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6883297},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7176238},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7529368},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7865755},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8407478},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8832560},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9290301},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9712167},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10127760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 149508},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 302799},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 538758},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 779353},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1001519},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1206067},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1469489},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1723151},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1976436},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2272337},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2519061},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2945743},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3464183},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4185319},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4733357},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5269082},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5664158},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6223414},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6708218},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7274335},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7621819},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8239281},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8866960},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9552732},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10086514},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10708499},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11260819},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11747953},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12216434},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12666184},
]},
],
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
				
				            maximum: 384384,
				            interval: 38438,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 93750},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 97184},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 114651},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 125147},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 239199},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 280967},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 262817},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 311938},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 352532},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 263191},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 236136},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 141134},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 139872},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 92584},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 117735},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 135996},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 170085},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 142597},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 165903},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 155271},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 169032},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 125258},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 179942},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 187390},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 140861},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 109599},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 98023},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 129059},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 178657},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 225781},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 26477},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18298},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 40052},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 65189},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 44304},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 32105},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 53180},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 81172},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 44553},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 62360},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 42959},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 152495},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 209607},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 202284},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 141287},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 107008},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 58063},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 67513},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 133294},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 127697},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 64248},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 194966},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 153409},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 185914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 170425},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 195772},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 136378},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23842},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 167049},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 119129},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 104824},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 109625},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 156769},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 131026},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 131815},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 124451},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 157170},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 126627},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 168852},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 168191},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 155792},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 191047},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 219574},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 380221},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 323447},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 340916},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 233762},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 384384},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 292858},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 345617},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 193703},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 294842},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 378131},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 346310},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 245436},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 308323},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 323493},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 363104},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 213071},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 243438},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 18207},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25368},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 39138},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 44380},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 46047},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 47992},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 53072},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 45863},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 39880},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 65350},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47973},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 83140},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 89259},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 138631},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 83304},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 87801},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 103251},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 107359},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 58652},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 92803},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 89533},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 127654},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 96139},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 153548},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 117921},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 117890},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 92449},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 100188},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 88361},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 87183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 21055},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 43378},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 44537},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 56154},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 81035},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 68613},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 69817},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 60850},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32732},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 89697},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 73123},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 61760},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 50351},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 46054},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 65256},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 45791},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 128124},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 100701},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 123530},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 93711},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 143352},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 141233},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 36108},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 96832},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 135707},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 319739},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 271347},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 229755},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 85742},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 74950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 22547},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28001},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 25140},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 50429},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 49629},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 56493},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 48236},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 52238},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 49722},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 54586},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47327},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 48454},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43119},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 52261},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 57694},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 71232},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 90413},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 120501},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 91089},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 80522},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 103515},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 66316},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 76891},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 68908},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 59819},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 112385},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 55712},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 98927},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 157467},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 114862},
]},
],
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
				            text: '喵鼠的PT統計(總分832156)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 112242,
				            interval: 11224,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1565},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1723},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6496},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4073},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6957},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5082},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4892},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4813},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11704},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5165},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6775},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11408},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5396},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5861},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5578},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7873},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5024},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3072},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5994},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9290},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3375},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6167},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3051},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7217},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4735},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9299},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10671},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11341},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11611},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14075},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10876},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11664},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 28541},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13360},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16042},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22198},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20262},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 66337},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 34153},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20098},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29877},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30389},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31480},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 112242},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35773},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7377},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9858},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9696},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11288},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10218},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16519},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18186},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27979},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25456},
]},
],
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

                   text: '喵鼠的PT構成(總分832156)',
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


        
{  y: 143286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 136577, name: '強襲', legendMarkerType: 'square'},
{  y: 552293, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分727813)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66435,
				            interval: 6643,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18199},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12637},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14942},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11968},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10730},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37502},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25142},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32731},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27937},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 53048},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35547},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18155},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25949},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35256},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26547},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5538},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7421},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7493},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2110},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4796},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9227},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3015},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11501},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11673},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8841},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4714},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4481},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9187},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5254},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5451},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 81},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4760},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4063},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9270},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7202},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3975},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4263},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2538},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1582},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3487},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10308},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4747},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14129},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10590},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14588},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22265},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24514},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 66435},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31970},
]},
],
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

                   text: '雪歌的PT構成(總分727813)',
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


        
{  y: 141977, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 199546, name: '強襲', legendMarkerType: 'square'},
{  y: 386290, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分591156)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43397,
				            interval: 4339,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5876},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 579},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2641},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16154},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12756},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 20522},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11470},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25599},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 178},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11155},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9987},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7824},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2809},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11254},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9300},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7661},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9841},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12573},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8982},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3113},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15021},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5623},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3718},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7302},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4981},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8055},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13265},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2349},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12907},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12233},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15591},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16125},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16141},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21374},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17274},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1136},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7863},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15716},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 29152},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13343},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2679},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31804},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16355},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16319},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14380},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43397},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25818},
]},
],
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

                   text: '魔法的PT構成(總分591156)',
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


        
{  y: 248286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 217962, name: '強襲', legendMarkerType: 'square'},
{  y: 124908, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分583275)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41575,
				            interval: 4157,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5606},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4424},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8773},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2225},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 20585},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17826},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26461},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18303},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 41575},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 764},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14648},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4796},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3302},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7940},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4164},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13182},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4184},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14938},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11661},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10863},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18177},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9623},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8417},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10838},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15831},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4187},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3255},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7723},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8286},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12807},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3511},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12106},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9219},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10932},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14636},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6094},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6706},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22536},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13920},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38872},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6176},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11251},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13020},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16323},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7485},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17907},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14378},
]},
],
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

                   text: '阿拉的PT構成(總分583275)',
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


        
{  y: 335364, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167547, name: '強襲', legendMarkerType: 'square'},
{  y: 80364, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分574806)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41173,
				            interval: 4117,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9352},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8290},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14071},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22304},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27077},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 41173},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2181},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23326},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26717},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19731},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19825},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3188},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7858},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3347},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6281},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1799},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12159},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8154},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17298},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5796},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17051},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16266},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5782},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5879},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7282},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11006},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10775},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11793},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2479},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19105},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4273},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14567},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6869},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5681},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7298},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10077},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11495},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16320},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11565},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17406},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18054},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16264},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6154},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7730},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5818},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16200},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11690},
]},
],
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

                   text: '嘎喵的PT構成(總分574806)',
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


        
{  y: 387345, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 139869, name: '強襲', legendMarkerType: 'square'},
{  y: 47592, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分567753)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40489,
				            interval: 4048,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 40489},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18081},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21224},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5014},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13169},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4180},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7846},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12141},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24197},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12558},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16721},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10730},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12346},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16589},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16684},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8721},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6055},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6748},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7456},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8587},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 36356},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16574},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22445},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7249},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38227},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20535},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24967},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9815},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2350},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2926},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9381},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6363},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5586},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5197},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4926},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6292},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5764},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16386},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9370},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14091},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12702},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 984},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3928},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15803},
]},
],
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

                   text: '寇內爾緹的PT構成(總分567753)',
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


        
{  y: 335784, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 152175, name: '強襲', legendMarkerType: 'square'},
{  y: 79794, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分558349)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32078,
				            interval: 3207,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8726},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8382},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21710},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18613},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24172},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19486},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15035},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18007},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9541},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13158},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5654},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5830},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8389},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7802},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 32078},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13175},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5530},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20046},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21694},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 24074},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5479},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6107},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9232},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6935},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12201},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17264},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5851},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7014},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14616},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10108},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12921},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11724},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14383},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13118},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5816},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9054},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9947},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10738},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14493},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4381},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10059},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7645},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14738},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10774},
]},
],
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

                   text: '葬月的PT構成(總分558349)',
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


        
{  y: 353922, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 156830, name: '強襲', legendMarkerType: 'square'},
{  y: 47597, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分544352)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37023,
				            interval: 3702,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9276},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2940},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9218},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15074},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9456},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10705},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28938},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14432},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 37023},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 35348},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7690},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23936},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10862},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4050},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1368},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12987},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5575},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9223},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2772},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10624},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4623},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12915},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7240},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1546},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3232},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9799},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23535},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4982},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15848},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5680},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12850},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6480},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8115},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15398},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12389},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14441},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15278},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29097},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11973},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8764},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30430},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13574},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14666},
]},
],
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

                   text: '冰的PT構成(總分544352)',
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


        
{  y: 324387, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 199135, name: '強襲', legendMarkerType: 'square'},
{  y: 20830, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分543894)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34509,
				            interval: 3450,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4222},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7003},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5108},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2171},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10595},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10081},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25134},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9017},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32377},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11951},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10057},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4486},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9551},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10068},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6741},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5451},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9835},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24559},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14954},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31954},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15187},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7560},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6532},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11703},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16398},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10021},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8471},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6755},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 32664},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8338},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13362},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 34509},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16324},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12997},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4780},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11694},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4570},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7007},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13462},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13552},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11747},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17501},
]},
],
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

                   text: '緋煌的PT構成(總分543894)',
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


        
{  y: 312716, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146865, name: '強襲', legendMarkerType: 'square'},
{  y: 84313, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分520394)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45584,
				            interval: 4558,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3988},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7405},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7635},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 20364},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11109},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 25275},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19746},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 37071},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 24997},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4749},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9022},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6106},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5268},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 795},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5179},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1322},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14972},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7018},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18302},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5443},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9138},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9364},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8916},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13715},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6071},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7314},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6661},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5867},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9818},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2784},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8075},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6218},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8820},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10831},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10721},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22277},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12977},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 45584},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5971},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9279},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28036},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13432},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分520394)',
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


        
{  y: 312630, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 151046, name: '強襲', legendMarkerType: 'square'},
{  y: 56718, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分494385)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31193,
				            interval: 3119,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10792},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4443},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10775},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14322},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20400},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13072},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12975},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 30909},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6096},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13958},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 710},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5946},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6320},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5234},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7358},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6625},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2280},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17991},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6660},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 728},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9278},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2087},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7439},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6581},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6285},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12673},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4694},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9834},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7517},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2427},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6858},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7400},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11584},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13654},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13411},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26397},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31193},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8796},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14865},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15221},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4087},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10187},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8819},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4961},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12251},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7829},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7543},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14192},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8703},
]},
],
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

                   text: '土土昕的PT構成(總分494385)',
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


        
{  y: 241962, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 173851, name: '強襲', legendMarkerType: 'square'},
{  y: 78572, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分492948)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46161,
				            interval: 4616,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7566},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7555},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5758},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5426},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 23183},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13566},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5579},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14043},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13901},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8226},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2842},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6257},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5940},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9407},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10438},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6146},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6584},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6282},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3544},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12342},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12960},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9059},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5769},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2325},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1240},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6039},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8585},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4045},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14152},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8897},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9794},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10492},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7575},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5713},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12884},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5813},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15889},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5846},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16876},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2654},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11024},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13487},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4101},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13495},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10886},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17965},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33222},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41634},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1740},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 40853},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21298},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25765},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28169},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6016},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14863},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15187},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13270},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25073},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11741},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21502},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14913},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25760},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15856},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26275},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6587},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19123},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19832},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9605},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8751},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7950},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21434},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13066},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19352},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15173},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8895},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16045},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16586},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8659},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5215},
]},
],
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

                   text: '依司瑪耳的PT構成(總分492948)',
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


        
{  y: 222943, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 212914, name: '強襲', legendMarkerType: 'square'},
{  y: 57091, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分487274)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25788,
				            interval: 2578,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7265},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4411},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8902},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12879},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5048},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17363},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24430},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25788},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20227},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8369},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5787},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6422},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3885},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7175},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12118},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13194},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7330},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16616},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6887},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14842},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13287},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6487},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6492},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3532},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4903},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6002},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7294},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17836},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8304},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4661},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9061},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12635},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23972},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16533},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8144},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24013},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13423},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12176},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4813},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8398},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9480},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9059},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5642},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11045},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11144},
]},
],
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

                   text: '幻想魔術師的PT構成(總分487274)',
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


        
{  y: 294771, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 132922, name: '強襲', legendMarkerType: 'square'},
{  y: 59581, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分477493)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22511,
				            interval: 2251,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3423},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3040},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3144},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4330},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5464},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17900},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12826},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5568},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10476},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22511},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7672},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17941},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8409},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10850},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6495},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14773},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11012},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6673},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11087},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12196},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9508},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7733},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4510},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7360},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6948},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 64},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13079},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7350},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9647},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8820},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14139},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10529},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10912},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14434},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22048},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18546},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20061},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12267},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11983},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10345},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10875},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10653},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15725},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2097},
]},
],
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

                   text: '神隱的PT構成(總分477493)',
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


        
{  y: 250187, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 153361, name: '強襲', legendMarkerType: 'square'},
{  y: 73945, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分475359)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24964,
				            interval: 2496,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2542},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9049},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9920},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9171},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11337},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7113},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7563},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7665},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7481},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7049},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10450},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2646},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2188},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12999},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6796},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16396},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8020},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5749},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5851},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5181},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5571},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6667},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10724},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2954},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10451},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10229},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12859},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7338},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4301},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11763},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20248},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21775},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12990},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19146},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22920},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5473},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11080},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6766},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14451},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20830},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24964},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22019},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20630},
]},
],
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

                   text: '秋風冷月的PT構成(總分475359)',
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


        
{  y: 226260, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 126213, name: '強襲', legendMarkerType: 'square'},
{  y: 122886, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分436587)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37714,
				            interval: 3771,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7822},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8399},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6164},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2695},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12420},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9921},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16708},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12780},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17605},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11036},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5160},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6730},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6412},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1940},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6527},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5938},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7256},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3469},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11756},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11574},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10435},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6084},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4949},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6360},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6482},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11290},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13932},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7280},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10166},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10233},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3899},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6221},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4302},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18496},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22738},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 37714},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4381},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14893},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10230},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7295},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8936},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4766},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9899},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12321},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分436587)',
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


        
{  y: 239124, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 144016, name: '強襲', legendMarkerType: 'square'},
{  y: 53447, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分423187)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35256,
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
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3397},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5999},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7699},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2178},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11559},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8142},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 30715},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17218},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 35256},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11669},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13797},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10132},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3688},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3128},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7683},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11533},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14511},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6195},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2695},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14462},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7256},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2433},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11661},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7744},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 852},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5312},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13871},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7802},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3174},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4181},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4696},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13084},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3217},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8044},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10029},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18353},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9115},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10374},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10278},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8904},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8971},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12857},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9969},
]},
],
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

                   text: '亞歷的PT構成(總分423187)',
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


        
{  y: 287941, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94545, name: '強襲', legendMarkerType: 'square'},
{  y: 40701, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分402235)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26078,
				            interval: 2607,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6355},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4881},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4324},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6312},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9553},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9885},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8198},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12640},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10977},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8993},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14724},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7429},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5360},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3441},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5754},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9991},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21594},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 26078},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18061},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11864},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 20481},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19195},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21501},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3510},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1735},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3700},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10538},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5760},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10289},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 137},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10569},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23349},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 848},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2498},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7146},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14737},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5336},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 780},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3914},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9245},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4436},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3412},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3015},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9690},
]},
],
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

                   text: '藏月的PT構成(總分402235)',
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


        
{  y: 281847, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 104271, name: '強襲', legendMarkerType: 'square'},
{  y: 16117, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分334852)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19751,
				            interval: 1975,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1585},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7848},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1760},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11961},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7807},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8616},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9254},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7960},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6107},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5744},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2560},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6344},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9295},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8511},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12183},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11907},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4183},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7502},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7676},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4924},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5976},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2747},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12266},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8931},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4632},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10163},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2536},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5413},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6915},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5984},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4853},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4247},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6767},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19751},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9093},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7976},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11594},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15180},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10611},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9586},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7356},
]},
],
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

                   text: '阿榮的PT構成(總分334852)',
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


        
{  y: 182067, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81389, name: '強襲', legendMarkerType: 'square'},
{  y: 71396, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分59492)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35981,
				            interval: 3598,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7561},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15950},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35981},
]},
],
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

                   text: '冰紅茶的PT構成(總分59492)',
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


        
{  y: 59492, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: 'Fung的PT統計(總分815557)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54053,
				            interval: 5405,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9257},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6364},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8601},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10380},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8877},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6958},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8681},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7637},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5055},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10131},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3417},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16427},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8300},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10125},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11067},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12463},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8460},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8916},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13481},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8454},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23098},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14760},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 42162},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29693},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8058},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 53352},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28541},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 54053},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21958},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19416},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7175},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4604},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11133},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11684},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13282},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15978},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12442},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26275},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15878},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16309},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FungCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6704},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8593},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9380},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11249},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18762},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14461},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19190},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17893},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14846},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29993},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36026},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15558},
]},
],
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

                   text: 'Fung的PT構成(總分815557)',
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


        
{  y: 478142, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134760, name: '強襲', legendMarkerType: 'square'},
{  y: 202655, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米糕的PT統計(總分805432)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64597,
				            interval: 6459,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米糕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4486},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10366},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9316},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9710},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19372},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8248},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5377},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9520},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14342},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20132},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米糕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5449},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6379},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5849},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2852},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13795},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8533},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5859},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7926},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6605},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3506},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10817},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10745},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12684},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12586},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10092},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9354},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7027},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15207},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11716},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42155},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 50508},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 50229},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 43360},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35493},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 64597},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30848},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10717},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 37427},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米糕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5622},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3372},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11857},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17647},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24246},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14116},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8080},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2773},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28926},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19696},
]},
],
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

                   text: '米糕的PT構成(總分805432)',
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


        
{  y: 532340, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 136335, name: '強襲', legendMarkerType: 'square'},
{  y: 136757, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍之痕的PT統計(總分705788)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46190,
				            interval: 4619,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8394},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8960},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15149},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19371},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 43154},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19555},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17832},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍之痕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10785},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1738},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14873},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5769},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5542},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4605},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10711},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4187},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7870},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6548},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8454},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17771},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6083},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30036},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 32744},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15609},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22275},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40502},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 33437},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25548},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8447},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11471},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2837},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19824},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16797},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6945},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3112},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7093},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍之痕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10067},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7773},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14704},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 46190},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20883},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23540},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20035},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18295},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11849},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18424},
]},
],
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

                   text: '龍之痕的PT構成(總分705788)',
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


        
{  y: 381613, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 132415, name: '強襲', legendMarkerType: 'square'},
{  y: 191760, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑克的PT統計(總分703669)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56909,
				            interval: 5690,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3675},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7486},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8800},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4188},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4374},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4552},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7348},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6585},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10030},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6344},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12019},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5404},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10482},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5626},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11012},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15943},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20496},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18345},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7614},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10427},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14122},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12133},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13379},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6599},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17665},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9817},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7951},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13490},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18174},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 56909},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20503},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 49521},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54040},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25117},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27385},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21872},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28021},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4049},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6284},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5252},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11591},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21016},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12629},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26448},
]},
],
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

                   text: '傑克的PT構成(總分703669)',
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


        
{  y: 275654, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 112983, name: '強襲', legendMarkerType: 'square'},
{  y: 315032, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫電的PT統計(總分678582)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42342,
				            interval: 4234,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4662},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6609},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6687},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9770},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14055},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10606},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10122},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11545},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12410},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18366},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19698},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29952},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19446},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18021},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5865},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3097},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5530},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12471},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6641},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10511},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9270},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10374},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10355},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6844},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16448},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13707},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14972},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10358},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6852},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17231},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3303},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9949},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2629},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8687},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22203},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8667},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30968},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33251},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34542},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25911},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 39197},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42342},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17981},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 36356},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10121},
]},
],
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

                   text: '紫電的PT構成(總分678582)',
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


        
{  y: 476512, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 191949, name: '強襲', legendMarkerType: 'square'},
{  y: 10121, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葛萊斯哈特的PT統計(總分670552)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 62683,
				            interval: 6268,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛萊斯哈特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6178},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8380},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4698},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2131},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3974},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2404},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6695},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5205},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15447},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3369},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7193},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5817},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5986},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14149},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7604},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5891},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14559},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11416},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5435},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13442},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8810},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6503},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1384},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6927},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1939},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 351},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛萊斯哈特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8447},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12833},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11475},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 24361},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14860},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11039},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18474},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25029},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25075},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15478},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19509},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 60603},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 50043},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 62683},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21515},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19404},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛萊斯哈特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3228},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11493},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5856},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11604},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21910},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27284},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9151},
]},
],
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

                   text: '葛萊斯哈特的PT構成(總分670552)',
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


        
{  y: 179198, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90526, name: '強襲', legendMarkerType: 'square'},
{  y: 400828, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分663131)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38335,
				            interval: 3833,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6664},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1784},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6061},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13518},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7438},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7445},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5145},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9900},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12501},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10767},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3719},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2112},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2576},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6690},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14844},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 38335},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26270},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24595},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15209},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6564},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14830},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2204},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6938},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3232},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6541},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15048},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9444},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18639},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14305},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12541},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6982},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10042},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9079},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22662},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 25047},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15986},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17600},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17741},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26593},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22086},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18213},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6970},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8210},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22071},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19076},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 32941},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22760},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33213},
]},
],
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

                   text: '雷克斯的PT構成(總分663131)',
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


        
{  y: 325859, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 192031, name: '強襲', legendMarkerType: 'square'},
{  y: 145241, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西比歐斯的PT統計(總分654119)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46958,
				            interval: 4695,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西比歐斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8410},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9018},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9175},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6539},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3598},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10457},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1299},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14746},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11262},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9264},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6324},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36837},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29054},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9148},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4205},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 43955},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26075},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13711},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10550},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12479},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10543},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11409},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13475},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16086},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11008},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10076},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7472},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西比歐斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3827},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8283},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10508},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 37499},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18801},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14669},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18730},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 46958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西比歐斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1063},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7741},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13169},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7555},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22511},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9835},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22888},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29435},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24454},
]},
],
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

                   text: '西比歐斯的PT構成(總分654119)',
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


        
{  y: 356193, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 159275, name: '強襲', legendMarkerType: 'square'},
{  y: 138651, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑特的PT統計(總分650667)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45902,
				            interval: 4590,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5457},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7125},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9441},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8732},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6708},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10007},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5923},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13465},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3866},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5496},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17881},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7963},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9555},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6046},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7414},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9367},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14995},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13028},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14195},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7780},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30174},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45902},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17992},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18266},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 35501},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 44421},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23722},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34600},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4798},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6050},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6448},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5619},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9660},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11579},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7965},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5247},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12340},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41942},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19834},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 44836},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11050},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4146},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6982},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11575},
]},
],
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

                   text: '傑特的PT構成(總分650667)',
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


        
{  y: 440596, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 187368, name: '強襲', legendMarkerType: 'square'},
{  y: 22703, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '野生的PT統計(總分642033)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41500,
				            interval: 4150,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野生殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3525},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5195},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6516},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2756},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5533},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4751},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16687},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4895},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13265},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10411},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7997},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6974},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6446},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 41500},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19328},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16660},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11288},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39548},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17097},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21702},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6899},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9430},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14131},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5701},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2791},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5896},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9143},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1452},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4336},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野生CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6114},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7496},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10073},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5607},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21388},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22931},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13841},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14269},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19561},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18442},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35921},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "野生強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4528},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10658},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9920},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16935},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17341},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11163},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11747},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28259},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6497},
]},
],
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

                   text: '野生的PT構成(總分642033)',
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


        
{  y: 325868, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 117048, name: '強襲', legendMarkerType: 'square'},
{  y: 199117, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '主角的PT統計(總分615613)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45618,
				            interval: 4561,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主角殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7385},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5687},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12472},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4986},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1115},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8740},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7955},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10000},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10345},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11558},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12440},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13927},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 45618},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23662},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5680},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3856},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32545},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15605},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 39715},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 644},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13638},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8832},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6183},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6762},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5043},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6565},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11192},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主角強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11553},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13622},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13991},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17974},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22408},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 37094},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29884},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3819},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3581},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19293},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主角CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10218},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8131},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17645},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23537},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9465},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31120},
]},
],
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

                   text: '主角的PT構成(總分615613)',
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


        
{  y: 342278, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 173219, name: '強襲', legendMarkerType: 'square'},
{  y: 100116, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分614196)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46161,
				            interval: 4616,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7566},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7555},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5758},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5426},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 23183},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13566},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5579},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14043},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13901},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8226},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2842},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6257},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5940},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9407},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10438},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6146},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6584},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6282},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3544},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12342},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12960},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9059},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5769},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2325},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1240},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6039},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8585},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4045},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14152},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8897},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9794},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10492},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7575},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5713},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12884},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5813},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15889},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5846},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16876},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2654},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11024},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13487},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4101},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13495},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10886},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17965},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33222},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41634},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1740},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 40853},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21298},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25765},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28169},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6016},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14863},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15187},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13270},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25073},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11741},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21502},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14913},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25760},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15856},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26275},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6587},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19123},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19832},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9605},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8751},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7950},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21434},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13066},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19352},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15173},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8895},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16045},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16586},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8659},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5215},
]},
],
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

                   text: '依司瑪耳的PT構成(總分614196)',
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


        
{  y: 463465, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145516, name: '強襲', legendMarkerType: 'square'},
{  y: 5215, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '史迪克的PT統計(總分609345)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46136,
				            interval: 4613,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6147},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9939},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5966},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6147},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21863},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21379},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11347},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21956},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3585},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31656},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11605},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14734},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3478},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7741},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11736},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6438},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8816},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5094},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4572},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5384},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3937},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7842},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13215},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6963},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14376},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7031},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29914},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 46136},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 44728},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5856},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32577},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12515},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4114},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13978},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8085},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10634},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20457},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13363},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6100},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7372},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18287},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7979},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8555},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8983},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14941},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14952},
]},
],
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

                   text: '史迪克的PT構成(總分609345)',
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


        
{  y: 392112, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169802, name: '強襲', legendMarkerType: 'square'},
{  y: 47431, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '悠楓的PT統計(總分587950)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42377,
				            interval: 4237,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠楓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1804},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5594},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12254},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8395},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4728},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6702},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10889},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7843},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2906},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7572},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6382},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2928},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8852},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19324},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27619},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21895},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39534},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16005},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13692},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8823},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42377},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17515},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5561},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8973},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10629},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2326},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7897},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7827},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠楓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3428},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3964},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5748},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5680},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5902},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12270},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14480},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12242},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15127},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15028},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4146},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11394},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠楓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3297},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 627},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5989},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6535},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15736},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9823},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14879},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15691},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11217},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12801},
]},
],
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

                   text: '悠楓的PT構成(總分587950)',
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


        
{  y: 357071, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134284, name: '強襲', legendMarkerType: 'square'},
{  y: 96595, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '北斗白銀聖者多奇的PT統計(總分582329)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46858,
				            interval: 4685,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北斗白銀聖者多奇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5315},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4751},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3501},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2557},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11477},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7372},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9765},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12797},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5681},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11344},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9345},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10556},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4387},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9911},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9728},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5867},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5840},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3003},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 439},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12435},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4061},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14936},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11087},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7396},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6852},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14229},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1330},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4597},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北斗白銀聖者多奇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1032},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7712},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11482},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18737},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17023},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37656},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38120},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27552},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18701},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 46858},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7913},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25503},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "北斗白銀聖者多奇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12069},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8004},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18682},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19375},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12552},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6122},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26568},
]},
],
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

                   text: '北斗白銀聖者多奇的PT構成(總分582329)',
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


        
{  y: 220668, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 258289, name: '強襲', legendMarkerType: 'square'},
{  y: 103372, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷歐斯的PT統計(總分580341)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51537,
				            interval: 5153,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1065},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7668},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6527},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4314},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6971},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12892},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 37882},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28043},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1450},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4718},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5807},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4251},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 45765},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2072},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4402},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3663},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 826},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9695},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8796},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13647},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6908},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12962},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1541},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17186},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18235},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20793},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16310},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27261},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16266},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28312},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 51537},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21167},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24000},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20938},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷歐斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4636},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8569},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22531},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11365},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21326},
]},
],
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

                   text: '雷歐斯的PT構成(總分580341)',
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


        
{  y: 219448, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 292466, name: '強襲', legendMarkerType: 'square'},
{  y: 68427, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '吉爾的PT統計(總分555330)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38286,
				            interval: 3828,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6525},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8327},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9924},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16006},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19397},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6592},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9721},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8296},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8996},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5563},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4963},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 948},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11304},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11962},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25792},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28320},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 38286},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7388},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28343},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25670},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23293},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13732},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21664},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12818},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13535},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8132},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6790},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12069},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22078},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20201},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2390},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8723},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7819},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6994},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14630},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13123},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13790},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20062},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6024},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 25140},
]},
],
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

                   text: '吉爾的PT構成(總分555330)',
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


        
{  y: 378846, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116305, name: '強襲', legendMarkerType: 'square'},
{  y: 60179, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '八龍流永逸的PT統計(總分553139)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58162,
				            interval: 5816,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8124},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8801},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4690},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3272},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8937},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9660},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5903},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10088},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5563},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6362},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12872},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12104},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11168},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6635},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4271},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2746},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19983},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6703},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14443},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13811},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8664},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17424},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34649},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 58162},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16645},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26233},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2469},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "八龍流永逸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6577},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7546},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28320},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12866},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11401},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14309},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19304},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20581},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19224},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26819},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "八龍流永逸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8287},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7839},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8477},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15125},
]},
],
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

                   text: '八龍流永逸的PT構成(總分553139)',
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


        
{  y: 346464, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 166947, name: '強襲', legendMarkerType: 'square'},
{  y: 39728, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藍玉狂風的PT統計(總分518804)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40127,
				            interval: 4012,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍玉狂風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5715},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7333},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5628},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20844},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8739},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7924},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6089},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18325},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28012},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15400},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20401},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍玉狂風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2163},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5850},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14986},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7287},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5476},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5550},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6880},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5839},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 312},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5082},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12181},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2082},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9557},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25109},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16786},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 37062},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1114},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7891},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14723},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7809},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7803},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11727},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12362},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7928},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17152},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18814},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 40127},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18469},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍玉狂風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2630},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8103},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9291},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16013},
]},
],
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

                   text: '藍玉狂風的PT構成(總分518804)',
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


        
{  y: 338357, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 144410, name: '強襲', legendMarkerType: 'square'},
{  y: 36037, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '軒轅恆天的PT統計(總分459607)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41323,
				            interval: 4132,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6834},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 611},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8889},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5123},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6412},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4508},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5779},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10646},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11312},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7341},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9702},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15550},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 41323},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5710},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18777},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12018},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27639},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 39201},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33150},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8473},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7120},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10766},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12819},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13435},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2410},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 587},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軒轅恆天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4542},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4887},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14288},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11870},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29128},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3656},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軒轅恆天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4068},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5706},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6661},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34841},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13825},
]},
],
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

                   text: '軒轅恆天的PT構成(總分459607)',
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


        
{  y: 326135, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 65101, name: '強襲', legendMarkerType: 'square'},
{  y: 68371, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
