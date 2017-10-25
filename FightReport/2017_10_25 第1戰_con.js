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
{ x: new Date(0, 0, 