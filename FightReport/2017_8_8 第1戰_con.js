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
				
				            maximum: 448691,
				            interval: 44869,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 118803},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 93750},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 140410},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 164824},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 214561},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 235796},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 329800},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 245082},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 284032},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 275009},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 237898},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 290294},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 285919},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 270663},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 313502},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 280264},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 389089},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 387048},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 328691},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 314199},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 396431},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 356462},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 297372},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 349483},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 363598},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 246689},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 247505},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 307544},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 361466},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 260328},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 69600},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 146102},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 161495},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 189935},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 203519},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 278285},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 221137},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 287678},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 251156},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 362491},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 304981},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 377744},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 325221},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 421303},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 315503},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 187807},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 314348},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 412139},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 253301},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 397838},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 291556},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 331142},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 325855},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 448691},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 409971},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 363980},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 370940},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 365995},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 307287},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 357167},
]},
],
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
				
				            maximum: 17440679,
				            interval: 1744067,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 118803},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 212553},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 352963},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 517787},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 732348},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 968144},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1297944},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1543026},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1827058},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2102067},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2339965},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2630259},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2916178},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3186841},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3500343},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3780607},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4169696},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4556744},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4885435},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5199634},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5596065},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5952527},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6249899},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6599382},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6962980},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7209669},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7457174},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7764718},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8126184},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8386512},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 69600},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 215702},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 377197},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 567132},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 770651},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1048936},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1270073},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1557751},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1808907},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2171398},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2476379},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2854123},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3179344},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3600647},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3916150},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4103957},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4418305},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4830444},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5083745},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5481583},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5773139},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6104281},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6430136},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6878827},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7288798},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7652778},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8023718},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8389713},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8697000},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9054167},
]},
],
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
				
				            maximum: 299596,
				            interval: 29959,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 97015},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 71864},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 100345},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 127813},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 153149},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 186598},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 244763},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 184352},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 177180},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 163570},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 143598},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 220818},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 235210},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 211627},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 200816},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 155050},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 223601},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 299596},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 222872},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 243132},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 289101},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 251318},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 155828},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 203431},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 228342},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 142137},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 125639},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 200459},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 288753},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 173321},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12341},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 19534},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9335},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 34929},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 48727},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 50477},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 24969},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16974},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 82699},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 97010},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 60507},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 69034},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 104081},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 65289},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23993},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 38984},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 81856},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 31561},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 44317},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 122785},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 44250},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 89348},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 89264},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 130942},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 113536},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 102785},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23240},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 75402},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 121332},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 166950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14099},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18306},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20686},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 24000},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 32004},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 36807},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 59748},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 45890},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 49257},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 83984},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 44267},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 35676},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22219},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 59036},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 76054},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 57389},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 85424},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 69970},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 68965},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 38096},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 72680},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 91487},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 73422},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 68509},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 98725},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38957},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 54604},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 72929},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 72713},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 38080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 42447},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 98476},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 115758},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 128444},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 139220},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 162347},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 129319},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 190672},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 90239},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 199636},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 197169},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 218417},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 134309},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 236107},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 239932},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 94395},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 156525},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 278191},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 160720},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 203258},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 199485},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 180650},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 168551},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 196558},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 214114},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 172160},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 235658},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 204245},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 129765},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 121669},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14812},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28092},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36402},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 26562},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15572},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 65461},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 66849},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 80032},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 78218},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 65845},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47305},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 90293},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 86831},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 119907},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 51578},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 54428},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 75967},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 102387},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 48264},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 71795},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47821},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 61144},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 68040},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 121191},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 82321},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 89035},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 112042},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 86348},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 56190},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 68548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7689},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3580},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19379},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13011},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 29408},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12391},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25289},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14840},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 57595},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27455},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 50033},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33800},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 28490},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 36632},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 67825},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 80064},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17482},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 36854},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32971},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 34650},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13657},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 68122},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 77543},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36531},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 65595},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 67262},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34156},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 48927},
]},
],
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
				            text: '喵鼠的PT統計(總分946212)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 83692,
				            interval: 8369,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5433},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 26693},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8205},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15214},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 49372},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20911},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27028},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28735},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 43612},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34856},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 54029},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 53021},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 83692},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 36110},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 59510},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 80965},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29486},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42727},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35597},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 40561},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4401},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3047},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6305},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4752},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2038},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6459},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2472},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1174},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6326},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3283},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6999},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8869},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24615},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6997},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9054},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8613},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10180},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11294},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2641},
]},
],
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

                   text: '喵鼠的PT構成(總分946212)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 809118, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 104366, name: '殲滅', legendMarkerType: 'square'},
{  y: 32728, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分807053)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66148,
				            interval: 6614,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10345},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12952},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 25244},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12473},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 66148},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 47672},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16546},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3679},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13177},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8646},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13889},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 35565},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19834},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25025},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31620},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32365},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 57462},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31171},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37366},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 37661},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20483},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 42182},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 34516},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13479},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16029},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14111},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16633},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44101},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12711},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3669},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7128},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8999},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11877},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13239},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9056},
]},
],
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

                   text: '阿拉的PT構成(總分807053)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 753085, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44912, name: 'CBC', legendMarkerType: 'square'},
{  y: 9056, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分783394)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53865,
				            interval: 5386,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4101},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 211},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5108},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4484},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8069},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 43},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6123},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10347},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16924},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7781},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 53865},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12906},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14353},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2038},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2149},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30016},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22342},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8333},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19508},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39985},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29056},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4363},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35975},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37636},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15448},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 810},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7942},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37660},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7689},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19098},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31538},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8943},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 51080},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27369},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26510},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28030},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5744},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14165},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15486},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22349},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12614},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 41016},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6380},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24093},
]},
],
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

                   text: '雪歌的PT構成(總分783394)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 441290, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 200257, name: '強襲', legendMarkerType: 'square'},
{  y: 141847, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分717687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59319,
				            interval: 5931,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13334},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1776},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5557},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5086},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 25884},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8641},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 46194},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21080},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 27273},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3136},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 819},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12194},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13446},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8184},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 31851},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14129},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6607},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15291},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32695},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 59319},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17294},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4297},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26169},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9362},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9585},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11249},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 40271},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14475},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9294},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6342},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12391},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13779},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10922},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22847},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16592},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23423},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17042},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14276},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24816},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11555},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10351},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7494},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7346},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24019},
]},
],
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

                   text: '葬月的PT構成(總分717687)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 494492, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 173985, name: '強襲', legendMarkerType: 'square'},
{  y: 49210, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分688342)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53888,
				            interval: 5388,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7045},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11347},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9647},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 830},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24462},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17103},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 23664},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1188},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9025},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 56},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 42858},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22797},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 44086},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11733},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40246},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12081},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 35717},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10618},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23585},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15095},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30506},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19118},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15558},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17009},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 53888},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25824},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6058},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5555},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 42897},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 32468},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4093},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5789},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6207},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7535},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6558},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8107},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7503},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8056},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4381},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6382},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11667},
]},
],
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

                   text: '嘎喵的PT構成(總分688342)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 612064, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53848, name: '強襲', legendMarkerType: 'square'},
{  y: 22430, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分617627)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45523,
				            interval: 4552,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8593},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7871},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17331},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3429},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14041},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 22257},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 45523},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 35000},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13862},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43339},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16312},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34798},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43572},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25821},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7189},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7473},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10374},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15319},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13464},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10680},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38326},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10338},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18676},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8179},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8401},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8588},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5029},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32611},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14550},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16480},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4686},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15173},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7674},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8433},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7239},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2214},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5311},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9471},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分617627)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 557426, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43205, name: '強襲', legendMarkerType: 'square'},
{  y: 16996, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分547232)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39841,
				            interval: 3984,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9204},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5945},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10272},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12176},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23008},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13764},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 33008},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18519},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22522},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14846},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14671},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8037},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7740},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30088},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14186},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10579},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22381},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16281},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14012},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32908},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 39841},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10903},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17458},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11102},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10805},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11217},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1161},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16375},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9051},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7657},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9375},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12411},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10779},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12591},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21606},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6366},
]},
],
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

                   text: '寇內爾緹的PT構成(總分547232)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 457396, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49273, name: '強襲', legendMarkerType: 'square'},
{  y: 40563, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分515641)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52850,
				            interval: 5285,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3593},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16631},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9848},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20980},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12995},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10414},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4719},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 15966},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11686},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 297},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18758},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14859},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3398},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6966},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30870},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14193},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28170},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16593},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6242},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10910},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11126},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 290},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21979},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 52850},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3636},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8470},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10869},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23821},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 356},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8805},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 165},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7964},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11642},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18351},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39189},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10882},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4185},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22973},
]},
],
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

                   text: '羽龍的PT構成(總分515641)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 79180, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 409303, name: '殲滅', legendMarkerType: 'square'},
{  y: 27158, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分454401)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38655,
				            interval: 3865,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5150},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6242},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1632},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5690},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6346},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15629},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19964},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14320},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13076},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23614},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1349},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14913},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18573},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10760},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5934},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2148},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9207},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2808},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12626},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 38655},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17504},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6998},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 33510},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16813},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25303},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11322},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10326},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10334},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22293},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16505},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22331},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13080},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19394},
]},
],
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

                   text: '依司瑪耳的PT構成(總分454401)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 328816, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93111, name: '強襲', legendMarkerType: 'square'},
{  y: 32474, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分418668)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37608,
				            interval: 3760,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9317},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 622},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4786},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1857},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11264},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 557},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14079},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6435},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3585},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16280},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30046},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12477},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4098},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2884},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8028},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4301},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6878},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4965},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15656},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4340},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2508},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 37608},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 16305},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12057},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13415},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18384},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19045},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23472},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14936},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12650},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8133},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5499},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14739},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13994},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16200},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24442},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2826},
]},
],
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

                   text: '土土昕的PT構成(總分418668)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 202571, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 138397, name: 'CBC', legendMarkerType: 'square'},
{  y: 77700, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分308089)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29166,
				            interval: 2916,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4428},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 892},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20432},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8655},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13021},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8576},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3052},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14878},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13881},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13283},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1441},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1318},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29166},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10275},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6885},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9887},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4810},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20304},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3965},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3941},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8396},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16281},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2394},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16540},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6228},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6365},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4159},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7275},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3419},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9317},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5800},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6803},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5308},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7220},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5256},
]},
],
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

                   text: '藏月的PT構成(總分308089)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 264966, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43123, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分304616)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32352,
				            interval: 3235,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7838},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8502},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4345},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19886},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9051},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13729},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10926},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5916},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26797},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11119},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7184},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19788},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28353},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 265},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20279},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6818},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32352},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9942},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2609},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9161},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2583},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3580},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4166},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4426},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6685},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8263},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4058},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8349},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1379},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6267},
]},
],
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

                   text: '冰的PT構成(總分304616)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 257443, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39527, name: '強襲', legendMarkerType: 'square'},
{  y: 7646, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分300198)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46680,
				            interval: 4668,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7638},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 501},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 702},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6759},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4011},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7112},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8699},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1319},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13669},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17402},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5846},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 46680},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7650},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9489},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15905},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2933},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30893},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18226},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16143},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3674},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12500},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2986},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4464},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9407},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8973},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10511},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13769},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2211},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10126},
]},
],
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

                   text: '雷克斯的PT構成(總分300198)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 240737, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47124, name: '強襲', legendMarkerType: 'square'},
{  y: 12337, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分261917)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51873,
				            interval: 5187,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3675},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7711},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18113},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 51873},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 93},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31379},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11126},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27215},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7067},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4779},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11489},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11728},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23379},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12641},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7340},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7237},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7955},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7775},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9342},
]},
],
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

                   text: '亞歷的PT構成(總分261917)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 222268, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39649, name: '強襲', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分230174)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31746,
				            interval: 3174,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18618},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13860},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23346},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9045},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7658},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12506},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10498},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31746},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15783},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4676},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9733},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3226},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9675},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5729},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11595},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3748},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7979},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12251},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12435},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分230174)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 170422, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47317, name: '強襲', legendMarkerType: 'square'},
{  y: 12435, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分176803)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28131,
				            interval: 2813,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2877},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1111},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1796},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 40},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3297},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4655},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3178},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5886},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4234},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 405},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 949},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1998},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2289},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1403},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14437},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11566},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16063},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19529},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10750},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19659},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7795},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13622},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28131},
]},
],
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

                   text: '阿榮的PT構成(總分176803)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 35251, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99799, name: 'CBC', legendMarkerType: 'square'},
{  y: 41753, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分155097)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34612,
				            interval: 3461,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14099},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8859},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16991},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29795},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 34612},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12283},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4654},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5482},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 78},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 42},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1457},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1499},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5446},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12250},
]},
],
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

                   text: '秋風冷月的PT構成(總分155097)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116639, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 26208, name: '殲滅', legendMarkerType: 'square'},
{  y: 12250, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分153361)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25143,
				            interval: 2514,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2402},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4200},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 629},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19742},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7128},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8758},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25143},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10105},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15340},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24196},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21956},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3595},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7589},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2578},
]},
],
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

                   text: '冰紅茶的PT構成(總分153361)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 143194, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10167, name: '強襲', legendMarkerType: 'square'},
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
				            text: '蓋瑞的PT統計(總分864047)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71795,
				            interval: 7179,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蓋瑞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11252},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9933},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2105},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 56973},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 29291},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22850},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14490},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13830},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2038},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10598},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18938},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22808},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25309},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4636},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 61536},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 64538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蓋瑞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6284},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9965},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19844},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 32521},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 42512},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9115},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1377},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16560},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2736},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12822},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6810},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6284},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29842},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11370},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4282},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6589},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13515},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4951},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10460},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 39253},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 46091},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2285},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9182},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10014},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12787},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8358},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蓋瑞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5087},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22315},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 71795},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17916},
]},
],
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

                   text: '蓋瑞的PT構成(總分864047)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 371125, name: '強襲', legendMarkerType: 'triangle'},
{  y: 375809, name: '殲滅', legendMarkerType: 'square'},
{  y: 117113, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小葉子的PT統計(總分797601)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66977,
				            interval: 6697,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5515},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8953},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2756},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10113},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5347},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1053},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14271},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25753},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7723},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9959},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14690},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9996},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14784},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7311},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27051},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12261},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12340},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17381},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7756},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8598},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7753},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7154},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26552},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10767},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8302},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11194},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12383},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29565},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 40185},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 53543},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18807},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18371},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 66977},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21907},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25930},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22183},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28583},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24196},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 61673},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20906},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1373},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9969},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11015},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9328},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19389},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5959},
]},
],
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

                   text: '小葉子的PT構成(總分797601)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 284165, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 456403, name: 'CBC', legendMarkerType: 'square'},
{  y: 57033, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '哈利的PT統計(總分763287)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49778,
				            interval: 4977,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈利殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9443},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1937},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1665},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4563},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1232},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9770},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8690},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8768},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38542},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1336},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1928},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6791},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16227},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 34993},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18050},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39668},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9498},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7780},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14928},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7908},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7982},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33880},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20170},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9046},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15138},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5741},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈利強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7226},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9335},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 23107},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 27862},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17424},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 34294},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18017},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20963},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21316},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19833},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 49778},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41218},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29629},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26589},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈利CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3328},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7906},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18453},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 35621},
]},
],
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

                   text: '哈利的PT構成(總分763287)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 351388, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 346591, name: '強襲', legendMarkerType: 'square'},
{  y: 65308, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '趴地恐龍的PT統計(總分694901)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49991,
				            interval: 4999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "趴地恐龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 24420},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16655},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 33710},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17812},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20562},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18680},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10973},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 49991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18579},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8945},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32838},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28559},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "趴地恐龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3090},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1920},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8082},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6244},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11691},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12160},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6686},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19136},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10553},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20090},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39846},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3515},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13283},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12697},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15199},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29469},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31496},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26698},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6157},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8449},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14460},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17761},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5364},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7232},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "趴地恐龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5115},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17089},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8765},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5667},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8389},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29104},
]},
],
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

                   text: '趴地恐龍的PT構成(總分694901)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 281724, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 339048, name: '殲滅', legendMarkerType: 'square'},
{  y: 74129, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '晴天的PT統計(總分645565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44901,
				            interval: 4490,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "晴天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 27009},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5028},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14092},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16336},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12065},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 37151},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5100},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 33479},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 28772},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24035},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10611},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 44901},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15329},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5356},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16177},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23853},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23017},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 41574},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32437},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14601},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5406},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10324},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10525},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22244},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2201},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3294},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 38696},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "晴天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10803},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14343},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15620},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16093},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12636},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12299},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17319},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8199},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14640},
]},
],
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

                   text: '晴天的PT構成(總分645565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 523613, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121952, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿貝聽我指令的PT統計(總分609556)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50369,
				            interval: 5036,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿貝聽我指令殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 16},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2832},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9586},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3505},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 521},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 162},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2268},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 696},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 818},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 578},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5056},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 869},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 657},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 261},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 498},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7787},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1504},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1160},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿貝聽我指令CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11484},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14880},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11982},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13344},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5223},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28143},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 50194},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17600},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28569},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8290},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31428},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 46152},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1587},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30088},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33650},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25656},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25303},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 50369},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16971},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10021},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿貝聽我指令強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25726},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22469},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2267},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28888},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16033},
]},
],
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

                   text: '阿貝聽我指令的PT構成(總分609556)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 53239, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 460934, name: 'CBC', legendMarkerType: 'square'},
{  y: 95383, name: '強襲', legendMarkerType: 'circle'},
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
				            text: 'Fung的PT統計(總分602000)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47396,
				            interval: 4739,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4620},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9238},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6928},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6842},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8404},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9817},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7711},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8373},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10813},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13089},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11865},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12418},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6144},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fung殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2433},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5701},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13029},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9539},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15031},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 30926},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13749},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10228},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6070},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30427},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8115},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 47396},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3271},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 44234},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4386},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5899},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8644},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 31980},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9961},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14903},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5154},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19448},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17179},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29705},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22799},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33452},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23814},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18265},
]},
],
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

                   text: 'Fung的PT構成(總分602000)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116262, name: '強襲', legendMarkerType: 'triangle'},
{  y: 485738, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '彧的PT統計(總分583183)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54246,
				            interval: 5424,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彧強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3085},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3450},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7098},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9602},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10028},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9269},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8652},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8909},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彧殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7872},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5536},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10044},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6107},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11560},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 37111},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1666},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14943},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25378},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25560},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 54246},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17333},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2223},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17879},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15158},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13561},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34934},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7572},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15201},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27896},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15591},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15075},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19299},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35042},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13549},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21230},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19394},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3152},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彧CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9149},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13938},
]},
],
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

                   text: '彧的PT構成(總分583183)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 60093, name: '強襲', legendMarkerType: 'triangle'},
{  y: 500003, name: '殲滅', legendMarkerType: 'square'},
{  y: 23087, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Rios的PT統計(總分543974)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55165,
				            interval: 5516,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Rios殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9217},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9949},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9681},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6532},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15556},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3586},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 39891},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10704},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3544},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13018},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23879},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11779},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17088},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55165},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 36460},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22010},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26462},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13272},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 38031},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24039},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15142},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5727},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1432},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10259},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14422},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3210},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Rios強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11094},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15215},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9530},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12502},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7813},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4063},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9612},
]},
],
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

                   text: 'Rios的PT構成(總分543974)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 474145, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69829, name: '強襲', legendMarkerType: 'square'},
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
				            text: '悠的PT統計(總分532410)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48739,
				            interval: 4873,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2149},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20723},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14839},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6748},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10295},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13356},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26459},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 43220},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20617},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9462},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21376},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27574},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 45401},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 39289},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 48739},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36325},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22535},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14393},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10686},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17306},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8402},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6477},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12088},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12240},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5806},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10146},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25759},
]},
],
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

                   text: '悠的PT構成(總分532410)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 409107, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42385, name: 'CBC', legendMarkerType: 'square'},
{  y: 80918, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '艾莉絲的PT統計(總分498675)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50829,
				            interval: 5082,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾莉絲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50829},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39580},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27082},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3952},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17643},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31907},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14475},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24643},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾莉絲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4112},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10459},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5721},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4170},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10322},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10571},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8094},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1946},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10123},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 512},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33334},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10966},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5483},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 37791},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15879},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 30790},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7980},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾莉絲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14377},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35410},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23200},
]},
],
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

                   text: '艾莉絲的PT構成(總分498675)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 217435, name: '強襲', legendMarkerType: 'triangle'},
{  y: 208253, name: '殲滅', legendMarkerType: 'square'},
{  y: 72987, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '一爪裂天的PT統計(總分447558)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53632,
				            interval: 5363,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一爪裂天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28722},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 48653},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一爪裂天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3708},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3561},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5455},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5858},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12596},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6359},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6930},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2989},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8963},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 53632},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21155},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11649},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20772},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11141},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12518},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9113},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 874},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 604},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一爪裂天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 44100},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14674},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11037},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12101},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13109},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31362},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23240},
]},
],
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

                   text: '一爪裂天的PT構成(總分447558)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100058, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 197877, name: '殲滅', legendMarkerType: 'square'},
{  y: 149623, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '過勞上班族的PT統計(總分360738)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42271,
				            interval: 4227,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "過勞上班族強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9705},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19810},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 42271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "過勞上班族殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6727},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19693},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4585},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 47},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6983},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2931},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4295},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11025},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9576},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35585},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5616},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2433},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16033},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10405},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "過勞上班族CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27960},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32177},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28082},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 39536},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25263},
]},
],
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

                   text: '過勞上班族的PT構成(總分360738)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 71786, name: '強襲', legendMarkerType: 'triangle'},
{  y: 135934, name: '殲滅', legendMarkerType: 'square'},
{  y: 153018, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風之翼的PT統計(總分312662)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49373,
				            interval: 4937,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風之翼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8206},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5429},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 27188},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 24543},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 25272},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 49373},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5231},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12447},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5075},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 24519},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 48122},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29265},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7210},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10174},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風之翼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5197},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 25411},
]},
],
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

                   text: '風之翼的PT構成(總分312662)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 282054, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30608, name: '強襲', legendMarkerType: 'square'},
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
				            text: '來一份火車便當R的PT統計(總分229951)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24479,
				            interval: 2447,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來一份火車便當R殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 641},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3438},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1173},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2583},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4634},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4658},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4550},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1853},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9740},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2931},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2336},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9368},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6089},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3643},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6269},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 842},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4460},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4234},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6396},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3095},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2341},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來一份火車便當R強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7005},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13166},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15068},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 24479},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8813},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22826},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17430},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來一份火車便當RCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5306},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10349},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10274},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9933},
]},
],
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

                   text: '來一份火車便當R的PT構成(總分229951)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 85302, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 108787, name: '強襲', legendMarkerType: 'square'},
{  y: 35862, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '馬可的PT統計(總分176217)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40593,
				            interval: 4059,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "馬可殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2904},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11900},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1293},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4609},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11615},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5981},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11064},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 35806},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5937},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7100},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13444},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6448},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 621},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6641},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40593},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "馬可強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3752},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6484},
]},
],
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

                   text: '馬可的PT構成(總分176217)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 165981, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10236, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Seelai的PT統計(總分174581)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73755,
				            interval: 7375,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Seelai殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2296},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 33},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 38},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3938},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4746},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1452},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3464},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7582},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SeelaiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 893},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24935},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 73755},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 51420},
]},
],
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

                   text: 'Seelai的PT構成(總分174581)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23578, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 151003, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '星火的PT統計(總分142514)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43203,
				            interval: 4320,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星火殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8319},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1772},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6452},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4055},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6422},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10381},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2288},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7273},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7681},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5410},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29395},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3856},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星火CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 43203},
]},
],
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

                   text: '星火的PT構成(總分142514)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 99311, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43203, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'winson的PT統計(總分49430)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15990,
				            interval: 1599,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winson殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5597},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4578},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winson強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9926},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winsonCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13339},
]},
],
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

                   text: 'winson的PT構成(總分49430)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 26165, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9926, name: '強襲', legendMarkerType: 'square'},
{  y: 13339, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾佛烈的PT統計(總分25317)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 3571,
				            interval: 357,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 799},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2316},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 483},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1727},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 714},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 664},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 515},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 689},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 657},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3300},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3571},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2248},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2332},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2403},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1131},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1725},
]},
],
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

                   text: '艾佛烈的PT構成(總分25317)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17726, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4735, name: '強襲', legendMarkerType: 'square'},
{  y: 2856, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart38.render();
}
