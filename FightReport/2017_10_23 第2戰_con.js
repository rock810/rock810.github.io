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
				
				            maximum: 727899,
				            interval: 72789,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 140730},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 140553},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 152281},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 186173},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 219680},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 236607},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 261570},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 246040},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 222472},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 315781},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 309674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 522584},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 422441},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 333816},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 364562},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 385357},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 272859},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 475591},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 392976},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 452290},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 340525},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 523648},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 353525},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 414912},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 364697},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 445806},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 394271},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 418266},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 462759},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 481672},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 151900},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 210417},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 217956},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 241419},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 248767},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 233635},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 274814},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 249200},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 289647},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 265518},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 313763},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 252033},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 320940},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 346268},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 378374},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 542978},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 651099},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 562621},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 663933},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 553504},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 727899},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 658758},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 524205},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 525829},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 643076},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 471107},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 548628},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 511303},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 645991},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 523879},
]},
],
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
				
				            maximum: 23003579,
				            interval: 2300357,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 140730},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 281283},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 433564},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 619737},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 839417},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1076024},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1337594},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1583634},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1806106},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2121887},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2431561},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2954145},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3376586},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3710402},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4074964},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4460321},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4733180},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5208771},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5601747},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6054037},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6394562},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6918210},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7271735},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7686647},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8051344},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8497150},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8891421},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9309687},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9772446},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10254118},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 151900},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 362317},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 580273},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 821692},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1070459},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1304094},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1578908},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1828108},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2117755},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2383273},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2697036},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2949069},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3270009},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3616277},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3994651},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4537629},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5188728},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5751349},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6415282},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6968786},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7696685},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8355443},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8879648},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9405477},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10048553},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10519660},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11068288},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11579591},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12225582},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12749461},
]},
],
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
				
				            maximum: 555933,
				            interval: 55593,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 94608},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 95084},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 95180},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 88386},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 129560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 145216},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 152466},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 184111},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 141031},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 178577},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 198763},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 327893},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 250102},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 220261},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 167110},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 210110},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 192854},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 278161},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 189197},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 173465},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 129255},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 101033},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 136421},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 149503},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 97973},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 146274},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 178035},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 189027},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183762},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 192860},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13863},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26817},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33378},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42318},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 48537},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 35340},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 46297},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43240},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 57312},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 53563},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 61740},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 53336},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65017},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 86853},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 91608},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 122408},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 103805},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 118102},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 74754},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 115485},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48963},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 75720},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 84937},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 97052},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 95948},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 88375},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 111887},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 111770},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 95494},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 118790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 23962},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26807},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 30057},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31895},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 41610},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40026},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 58432},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 37958},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42232},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 59828},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 66650},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 113489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 76518},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 72209},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 79026},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 83161},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40631},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 115361},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 96953},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 80460},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 84391},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 86990},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 73291},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 115624},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 58815},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 146694},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 129381},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 132479},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 131674},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 130718},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 108689},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 122846},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 146306},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 139552},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 141684},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 132897},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 127917},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 160920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 179486},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 173825},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 164449},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 170023},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 152988},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 148313},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 175054},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 198042},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 385139},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 359712},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 441912},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 393919},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 555933},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 454336},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 418945},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 385217},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 409382},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 282888},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 341360},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 296196},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 385657},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 287323},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29348},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 60754},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38272},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 59549},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 58546},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 65398},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 100600},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45040},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 52849},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 38130},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 87574},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28674},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 102935},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 111102},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 111712},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 222528},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 162155},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 84807},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 147267},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44100},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 123003},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 128702},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20323},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 43560},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 137746},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99844},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 95381},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 103337},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 164840},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 117766},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22160},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18662},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27044},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 65892},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 48510},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 51365},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 50672},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23971},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39209},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 77376},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 44261},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 81202},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 95821},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41346},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 118426},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 92086},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39374},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 82069},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 106826},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 198365},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 126879},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 335625},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 143813},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 149785},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 207909},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 152838},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 86855},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 96760},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 147323},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 158094},
]},
],
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
				            text: '喵鼠的PT統計(總分823143)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 89385,
				            interval: 8938,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4967},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9194},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12391},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14874},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8859},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16153},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34138},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 46796},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28173},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22086},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20925},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34355},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 68321},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 60160},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 89385},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 59668},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2538},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3270},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3023},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3959},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3106},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5020},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4117},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4792},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4717},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8980},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8298},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3015},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 756},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2367},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4170},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2261},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4824},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2732},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9659},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4614},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5071},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6849},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8515},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24761},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9303},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13428},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24144},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21694},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16008},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22136},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15115},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33935},
]},
],
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

                   text: '喵鼠的PT構成(總分823143)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 112174, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180524, name: '強襲', legendMarkerType: 'square'},
{  y: 530445, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分684036)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64907,
				            interval: 6490,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2815},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3556},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1882},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4229},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1653},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2815},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7396},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6512},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5348},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9336},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4989},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15641},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3621},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9260},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3659},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5401},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9489},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6707},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5433},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2406},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3216},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8840},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12092},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3386},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9805},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6821},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17773},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7149},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14590},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23010},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10404},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9872},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18529},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42376},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13689},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 64907},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28928},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 41656},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41929},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17125},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6962},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8814},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9947},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18042},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26684},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 48873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35589},
]},
],
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

                   text: '雪歌的PT構成(總分684036)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 149487, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 175791, name: '強襲', legendMarkerType: 'square'},
{  y: 358758, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分599246)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41645,
				            interval: 4164,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3459},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1650},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4645},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6828},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6449},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7549},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 374},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7895},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10920},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2330},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8324},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21038},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12642},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13791},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6488},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3660},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7875},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6742},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8411},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5842},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15024},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9859},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7198},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10801},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12987},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17797},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31554},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41645},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14697},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18408},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27116},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14693},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26787},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14017},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26031},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2454},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4027},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7752},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14273},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12638},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36587},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13092},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12503},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17139},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8724},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12747},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21740},
]},
],
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

                   text: '依司瑪耳的PT構成(總分599246)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 189838, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 163676, name: '強襲', legendMarkerType: 'square'},
{  y: 245732, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分572768)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36752,
				            interval: 3675,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7728},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5789},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5968},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4608},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9276},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5938},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6908},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6983},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15156},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4650},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31229},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24508},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21354},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8220},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22975},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29946},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31195},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6676},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13255},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5758},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6377},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14343},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15856},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7724},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19286},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10585},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9009},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13754},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11847},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12538},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10398},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36752},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15772},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11054},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17584},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14717},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7416},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8613},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14076},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15243},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11984},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11792},
]},
],
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

                   text: '葬月的PT構成(總分572768)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 359228, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129699, name: '強襲', legendMarkerType: 'square'},
{  y: 83841, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分554398)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31319,
				            interval: 3131,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9501},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7502},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4417},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4723},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5134},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6496},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8685},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12985},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6932},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1992},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10372},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26118},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28954},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25400},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22472},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23013},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31319},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16332},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13209},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3236},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8268},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3557},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13391},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13147},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14845},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7151},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13297},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21516},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3725},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8218},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12642},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6942},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18176},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13276},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21465},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8647},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29435},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28117},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8541},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9117},
]},
],
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

                   text: '阿拉的PT構成(總分554398)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 375107, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161633, name: '強襲', legendMarkerType: 'square'},
{  y: 17658, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分551068)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45710,
				            interval: 4571,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1817},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3427},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4811},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4361},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9286},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7934},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2844},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9663},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3094},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9597},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10154},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10451},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10714},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23855},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21416},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12941},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8545},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6135},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2427},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3395},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10768},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8415},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4772},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6130},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7884},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8835},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9228},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3057},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6799},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11750},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7864},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8584},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17449},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29406},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15954},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29612},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2801},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6701},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8287},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13634},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28857},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12019},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14064},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 45710},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16463},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22239},
]},
],
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

                   text: '神隱的PT構成(總分551068)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 222967, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 170775, name: '強襲', legendMarkerType: 'square'},
{  y: 157326, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分513929)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60566,
				            interval: 6056,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5689},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4673},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4053},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2970},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12461},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7610},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13792},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8737},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12002},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25167},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21980},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12307},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14951},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4697},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3953},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10093},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11269},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9912},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5717},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6771},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7370},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9614},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9312},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6428},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9325},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10069},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6179},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6849},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10120},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14579},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14816},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19326},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9410},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13830},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6827},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11542},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19718},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12186},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13653},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60566},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13058},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16805},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分513929)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 264465, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 177595, name: '強襲', legendMarkerType: 'square'},
{  y: 71869, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分513377)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60264,
				            interval: 6026,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4903},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4072},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6003},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4856},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9058},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 33908},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34260},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 60264},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8960},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19688},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14064},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34485},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15446},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30380},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5598},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6787},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5350},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2143},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7463},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9651},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5929},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11415},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5806},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11868},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6482},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7125},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10327},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14765},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18731},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8135},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13485},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8673},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7576},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14334},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3665},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8287},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12161},
]},
],
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

                   text: '嘎喵的PT構成(總分513377)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 429675, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52203, name: '強襲', legendMarkerType: 'square'},
{  y: 31499, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分500890)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57334,
				            interval: 5733,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6121},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3923},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6401},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2166},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2419},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3771},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2094},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14357},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3983},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5228},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6461},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1212},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5484},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4894},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7073},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3750},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5524},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7820},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3776},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6368},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6571},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8993},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3592},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10275},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6273},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4253},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4841},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11179},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10768},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24415},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18138},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3988},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 57334},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24013},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16632},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2838},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8186},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28535},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 53866},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4804},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2955},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8741},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12598},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6117},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14563},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21785},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21812},
]},
],
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

                   text: '土土昕的PT構成(總分500890)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 138529, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93375, name: '強襲', legendMarkerType: 'square'},
{  y: 268986, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分498659)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39675,
				            interval: 3967,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5190},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5487},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5395},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6538},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6495},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7862},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5550},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14365},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18601},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21115},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9902},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 731},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12018},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30537},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8141},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6406},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5798},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12844},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7862},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10049},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3023},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7010},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10367},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7442},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16445},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9716},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4185},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14113},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14890},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13910},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8025},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11152},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13707},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15306},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39675},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17982},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3983},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11661},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13383},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8617},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8988},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11735},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14622},
]},
],
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

                   text: '寇內爾緹的PT構成(總分498659)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 264226, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 190471, name: '強襲', legendMarkerType: 'square'},
{  y: 43962, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分496705)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58937,
				            interval: 5893,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4853},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6867},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8437},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21525},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24759},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29154},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10476},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39277},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18544},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9409},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 58937},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4185},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2019},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3323},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5456},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5828},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3540},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2051},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4965},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5783},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5864},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8857},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6113},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11176},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5263},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8290},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7673},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10185},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6259},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9059},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2624},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5778},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11145},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2259},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11315},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9782},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3271},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6253},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11302},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14831},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22040},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4934},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19043},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23051},
]},
],
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

                   text: '秋風冷月的PT構成(總分496705)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169266, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 232238, name: '強襲', legendMarkerType: 'square'},
{  y: 95201, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分490897)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33619,
				            interval: 3361,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5505},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8047},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13664},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9108},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5008},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11059},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7209},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5541},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6597},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8409},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5637},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7766},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12383},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16024},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6647},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33619},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21085},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8312},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3795},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5980},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7134},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11693},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6828},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21430},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22591},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6386},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5403},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6294},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9266},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12730},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2404},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11800},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6243},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7102},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16189},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9934},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12382},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16310},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15534},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11054},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13369},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18430},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29063},
]},
],
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

                   text: '緋煌的PT構成(總分490897)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 293955, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 155610, name: '強襲', legendMarkerType: 'square'},
{  y: 41332, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分479941)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42413,
				            interval: 4241,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5323},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8595},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20813},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5209},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19726},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32990},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14986},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20081},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26625},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42413},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5196},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1824},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1752},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5514},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11000},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5385},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7407},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4774},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7035},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3170},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22701},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18454},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12615},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15376},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12808},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2190},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7234},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9149},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9247},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4180},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9333},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11855},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8525},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 63},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 59},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8374},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11214},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7964},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6732},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12067},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12976},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15036},
]},
],
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

                   text: '魔法的PT構成(總分479941)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 224398, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 208732, name: '強襲', legendMarkerType: 'square'},
{  y: 46811, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分479657)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58315,
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
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6257},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4306},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7224},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4077},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4281},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5159},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7262},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4836},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4669},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2516},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6733},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6721},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15554},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6123},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4291},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 694},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7026},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11041},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2334},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4610},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3812},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 793},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2076},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15998},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7964},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7412},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11391},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3315},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4649},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4426},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6102},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15051},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11139},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11955},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27785},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 58315},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3701},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1682},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1382},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4335},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9469},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13543},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17243},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20923},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23006},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15166},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40966},
]},
],
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

                   text: '阿榮的PT構成(總分479657)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 178446, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149795, name: '強襲', legendMarkerType: 'square'},
{  y: 151416, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分469960)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38733,
				            interval: 3873,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9818},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3478},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7229},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9256},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9673},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6869},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11022},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10085},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11224},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11514},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5990},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21238},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26916},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4074},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8492},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7610},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15137},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7308},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9946},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7910},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13256},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13631},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10434},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8389},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26923},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28194},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11840},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4507},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2875},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9138},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9405},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12452},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13423},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 38733},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12241},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9866},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21131},
]},
],
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

                   text: '冰紅茶的PT構成(總分469960)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 324707, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124122, name: '強襲', legendMarkerType: 'square'},
{  y: 21131, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分441897)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42364,
				            interval: 4236,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4786},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4789},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5562},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6222},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6870},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13666},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8622},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6838},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8199},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3345},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10388},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7366},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19777},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12076},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11730},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17596},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2128},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42364},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36706},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15161},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4715},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9590},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5408},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9294},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7740},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13930},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3478},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5340},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8880},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1365},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2740},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4503},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4476},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13666},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7103},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7299},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7678},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7947},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15350},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9909},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11934},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14815},
]},
],
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

                   text: '冰的PT構成(總分441897)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309145, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 114806, name: '強襲', legendMarkerType: 'square'},
{  y: 17946, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分412320)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32656,
				            interval: 3265,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3160},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7986},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8100},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8123},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4969},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7813},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5110},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13634},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12305},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5901},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24504},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13237},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10693},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11839},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4743},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9901},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18459},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12931},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10210},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7758},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6648},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6903},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5989},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1690},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12075},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2504},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4147},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8208},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8062},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6183},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3268},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5088},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3475},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5405},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5383},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11193},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32656},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9316},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15578},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10474},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15985},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9952},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8538},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12224},
]},
],
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

                   text: '藏月的PT構成(總分412320)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 257602, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 133956, name: '強襲', legendMarkerType: 'square'},
{  y: 20762, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分409306)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31538,
				            interval: 3153,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5693},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3330},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9408},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7689},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2944},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10635},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12508},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7265},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22342},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31538},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14632},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19857},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20288},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3213},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8045},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7368},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5061},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4250},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10729},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4243},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3341},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9959},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7510},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9668},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5160},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5984},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10382},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19102},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1353},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25541},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9599},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7077},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5786},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10030},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1547},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3682},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2635},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7291},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8426},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8995},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15355},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分409306)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 216827, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 168129, name: '強襲', legendMarkerType: 'square'},
{  y: 24350, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分393025)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32807,
				            interval: 3280,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7747},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2359},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7686},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9061},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6338},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6506},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14212},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9291},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7996},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12061},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32807},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19850},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1886},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11848},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28796},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4948},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13078},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9503},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6250},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6285},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11216},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8974},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5498},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4203},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4435},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10089},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20286},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17848},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7668},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1651},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3013},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3497},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4360},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7481},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7341},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7979},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16154},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13959},
]},
],
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

                   text: '亞歷的PT構成(總分393025)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 308775, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63784, name: '強襲', legendMarkerType: 'square'},
{  y: 20466, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分368896)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24824,
				            interval: 2482,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5970},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 733},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8996},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 59},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5443},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5443},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7100},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8505},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5757},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9143},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2195},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5362},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10522},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6267},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12436},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24824},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16233},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6276},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7523},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13114},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6840},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6705},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9368},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13261},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5840},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10289},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13257},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6522},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12290},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21444},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15044},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24411},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14123},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14496},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4654},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10876},
]},
],
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

                   text: '幻想魔術師的PT構成(總分368896)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 227461, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83604, name: '強襲', legendMarkerType: 'square'},
{  y: 57831, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '納蘭性德的PT統計(總分856101)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54247,
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
                                    name: "納蘭性德殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3457},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2932},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8744},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10201},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8672},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7653},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6027},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11491},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9031},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7451},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12582},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1850},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5753},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1894},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31310},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 39302},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16840},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15681},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33151},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34256},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1410},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11107},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6541},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12975},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14596},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12098},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19075},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "納蘭性德CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16740},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9246},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14173},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12656},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12322},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 39081},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20866},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22442},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23023},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8886},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16531},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21309},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "納蘭性德強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9182},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9432},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10068},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8660},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16512},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54247},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19561},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34304},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17363},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18397},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18331},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25269},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20381},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27770},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3195},
]},
],
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

                   text: '納蘭性德的PT構成(總分856101)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 346154, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 292672, name: '強襲', legendMarkerType: 'square'},
{  y: 217275, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小葉子的PT統計(總分757065)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39439,
				            interval: 3943,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5053},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6745},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7389},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6865},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8318},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7603},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8797},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18792},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15816},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18118},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14281},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14396},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21007},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14539},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3931},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10723},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9193},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9715},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5040},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11844},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11830},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11466},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3182},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14053},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5760},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12609},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6205},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9416},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12253},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17412},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33259},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39439},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16724},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34819},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24635},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16459},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8112},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33016},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21537},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35592},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20143},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11662},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5551},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小葉子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7561},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6829},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7018},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10262},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11086},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34218},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20111},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15643},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21038},
]},
],
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

                   text: '小葉子的PT構成(總分757065)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 455580, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167719, name: '強襲', legendMarkerType: 'square'},
{  y: 133766, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '司馬中獎的PT統計(總分727805)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46091,
				            interval: 4609,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司馬中獎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6652},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6220},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8582},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4870},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7958},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6604},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7408},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7198},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9693},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9425},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11059},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1646},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6353},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4580},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8604},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5913},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38898},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14362},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32796},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37337},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26859},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30794},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19880},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13856},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9992},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 42158},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18472},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11372},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14203},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司馬中獎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5900},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8612},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8222},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8112},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9683},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10031},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46091},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10359},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17385},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23583},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司馬中獎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12682},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8644},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9998},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12402},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13209},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16053},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17691},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14417},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11989},
]},
],
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

                   text: '司馬中獎的PT構成(總分727805)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 443617, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 147978, name: '強襲', legendMarkerType: 'square'},
{  y: 136210, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有紀的PT統計(總分708154)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50384,
				            interval: 5038,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有紀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8355},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4542},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9237},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1229},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11208},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6094},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3181},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8643},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8042},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9463},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5515},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11359},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6351},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5422},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2993},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27044},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33111},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19733},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11769},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 50384},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38162},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24487},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16008},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8830},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22361},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40897},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31531},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 47921},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有紀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7375},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8842},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34698},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32277},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17715},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有紀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6893},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6793},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5536},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5656},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10692},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9027},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11661},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18271},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2055},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8488},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17806},
]},
],
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

                   text: '有紀的PT構成(總分708154)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 488090, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102878, name: '強襲', legendMarkerType: 'square'},
{  y: 117186, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '菲格妮絲的PT統計(總分696886)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48760,
				            interval: 4876,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲格妮絲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6161},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6347},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6343},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6993},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14116},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7525},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7362},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10302},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15479},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5822},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8169},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13063},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11825},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11500},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10889},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9471},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37018},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48760},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21949},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20831},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18920},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12272},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21330},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10734},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14298},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37229},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲格妮絲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7677},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8792},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8904},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10709},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16957},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15837},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26207},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲格妮絲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4078},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6536},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20933},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13546},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18955},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20556},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9149},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17130},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20579},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14663},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29221},
]},
],
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

                   text: '菲格妮絲的PT構成(總分696886)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 411968, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 189835, name: '強襲', legendMarkerType: 'square'},
{  y: 95083, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '月的PT統計(總分693207)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49424,
				            interval: 4942,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9142},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11751},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15283},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12844},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10087},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3880},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16419},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17252},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7839},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12435},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10347},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7677},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10679},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3170},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15114},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 49424},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25906},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33635},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25873},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29178},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31798},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11960},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 45559},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17352},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13821},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12976},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12306},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13963},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16111},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8306},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4281},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12097},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32421},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17483},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3841},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16542},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21140},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16449},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13765},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3943},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8447},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25698},
]},
],
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

                   text: '月的PT構成(總分693207)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 508794, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146325, name: '強襲', legendMarkerType: 'square'},
{  y: 38088, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嫵媚娘的PT統計(總分692496)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44860,
				            interval: 4486,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫵媚娘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2037},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8059},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4227},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11559},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3960},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3109},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11847},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7682},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11714},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9420},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9501},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16807},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7419},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13127},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19550},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6363},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30777},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2415},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34586},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12051},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10594},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10525},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11949},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25648},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34786},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 44860},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32504},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16941},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44505},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23119},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫵媚娘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2333},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3221},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11333},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23575},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19329},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21155},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3605},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14093},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25031},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫵媚娘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6549},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4528},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9402},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13122},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18739},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12933},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21907},
]},
],
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

                   text: '嫵媚娘的PT構成(總分692496)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 481641, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87180, name: '強襲', legendMarkerType: 'square'},
{  y: 123675, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞絲娜的PT統計(總分690070)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50199,
				            interval: 5019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞絲娜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5187},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10545},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6579},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7192},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5346},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7238},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14232},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17694},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17781},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22918},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞絲娜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5752},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7057},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6878},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7561},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10164},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4663},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6038},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10980},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10235},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4206},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4269},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3932},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13433},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23875},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5655},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19689},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28004},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29496},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25695},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13886},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31847},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23899},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 50199},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8039},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10167},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2175},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36123},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16928},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7150},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14017},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞絲娜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4993},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5449},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10744},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15798},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19712},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5263},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12598},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24480},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13566},
]},
],
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

                   text: '亞絲娜的PT構成(總分690070)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 442012, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 135455, name: '強襲', legendMarkerType: 'square'},
{  y: 112603, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅德的PT統計(總分683898)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49830,
				            interval: 4983,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅德CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8049},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3023},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10619},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9448},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11279},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9543},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20219},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19198},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35529},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20605},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16218},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23285},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅德殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6682},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12798},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4803},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9890},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4934},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2824},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4690},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9049},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4702},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1288},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12324},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2650},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14634},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9403},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9959},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12765},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6728},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3906},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10314},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17000},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 42959},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6631},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1180},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10610},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7302},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17198},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30818},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14815},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8554},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅德強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2498},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1842},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6072},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11478},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7949},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6367},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9225},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18729},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14522},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14054},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14662},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21935},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16310},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 49830},
]},
],
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

                   text: '羅德的PT構成(總分683898)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 301410, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 195473, name: '強襲', legendMarkerType: 'square'},
{  y: 187015, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藍斯特的PT統計(總分679614)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44836,
				            interval: 4483,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍斯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7306},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4252},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9454},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7778},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6002},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5077},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11915},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5114},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8059},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12074},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7362},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17303},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1501},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7550},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14268},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17031},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13518},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33169},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11722},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44201},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8676},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44836},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21439},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15047},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4586},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11207},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18507},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 36883},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28172},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍斯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1816},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20291},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28404},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15226},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17200},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18466},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍斯特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3251},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7196},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5176},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7708},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7833},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16913},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7675},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10980},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11509},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36419},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19343},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10199},
]},
],
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

                   text: '藍斯特的PT構成(總分679614)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 434009, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 144202, name: '強襲', legendMarkerType: 'square'},
{  y: 101403, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Archer的PT統計(總分663106)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36680,
				            interval: 3668,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Archer殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7639},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7400},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12377},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4396},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5839},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6311},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5309},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7175},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4685},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14661},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7111},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10475},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5977},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2930},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9445},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10002},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3795},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29341},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10298},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19368},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5277},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36680},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14748},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9589},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12597},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11048},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Archer強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15147},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21635},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10080},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13094},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12057},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10006},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14235},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16331},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35532},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20323},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15871},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13367},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17040},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4010},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ArcherCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4133},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6011},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8237},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10592},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12931},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20353},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16780},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15882},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23197},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17660},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15016},
]},
],
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

                   text: 'Archer的PT構成(總分663106)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 293586, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 218728, name: '強襲', legendMarkerType: 'square'},
{  y: 150792, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '真愛無敵的PT統計(總分657360)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54645,
				            interval: 5464,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真愛無敵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7774},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6850},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4551},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6498},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10956},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3890},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9057},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11928},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7321},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4438},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8573},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10176},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10714},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11740},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9407},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6015},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21142},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15970},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33307},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7636},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11391},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10083},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 49238},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42153},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34778},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14962},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11003},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5415},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54645},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27920},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真愛無敵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8245},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6879},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13471},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17714},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13561},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14274},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7442},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真愛無敵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7806},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21242},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15835},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22080},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12293},
]},
],
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

                   text: '真愛無敵的PT構成(總分657360)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 469531, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 108573, name: '強襲', legendMarkerType: 'square'},
{  y: 79256, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '莫忘初衷的PT統計(總分656583)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44267,
				            interval: 4426,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "莫忘初衷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2975},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3001},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13081},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29125},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20127},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16588},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 44267},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "莫忘初衷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2634},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3128},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9486},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9219},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7244},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10946},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11224},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11095},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11165},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8459},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5767},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7659},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10106},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15283},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33203},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32946},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18528},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18497},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31288},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8688},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20034},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10220},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6524},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13178},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9754},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33937},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "莫忘初衷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6149},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6004},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15709},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9672},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21020},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13072},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31874},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26536},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13793},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20888},
]},
],
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

                   text: '莫忘初衷的PT構成(總分656583)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 362702, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 164717, name: '強襲', legendMarkerType: 'square'},
{  y: 129164, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '不同角度的世界的PT統計(總分649419)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46522,
				            interval: 4652,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8916},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6373},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10904},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9474},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4567},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13591},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10595},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18282},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3913},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11584},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16572},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11815},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10680},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12297},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8457},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10340},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40308},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25496},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 46522},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8060},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13486},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13322},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19023},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 43943},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38816},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8389},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32597},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27453},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6191},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15795},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5352},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6171},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15914},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12683},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7030},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34573},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8484},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7342},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20394},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9596},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12102},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2017},
]},
],
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

                   text: '不同角度的世界的PT構成(總分649419)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 507761, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81723, name: '強襲', legendMarkerType: 'square'},
{  y: 59935, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Hide的PT統計(總分638652)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44868,
				            interval: 4486,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hide強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7525},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6737},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14462},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14479},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14741},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4551},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38902},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14970},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16498},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12857},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hide殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4460},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9704},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9742},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10437},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3529},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9241},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14558},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7857},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12780},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14311},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11417},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19968},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6437},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16390},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18054},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 75},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44868},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38528},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 43323},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8898},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17056},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7126},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19521},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3659},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6615},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4389},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12149},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HideCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4612},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7755},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6440},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8051},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7691},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13074},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17140},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14837},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4896},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10926},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15451},
]},
],
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

                   text: 'Hide的PT構成(總分638652)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 382057, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145722, name: '強襲', legendMarkerType: 'square'},
{  y: 110873, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蝦底迪的PT統計(總分616651)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33286,
				            interval: 3328,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8643},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4320},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8045},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9151},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8920},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6041},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 819},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2860},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15579},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8856},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7704},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12135},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13011},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 468},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7335},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4980},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12565},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15977},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8719},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19633},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29860},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17109},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20245},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26315},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33286},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13089},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14119},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7339},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13084},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11132},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8254},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10867},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20478},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17551},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23280},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20068},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16422},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1127},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7909},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10215},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5358},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8496},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11487},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11980},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17531},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2189},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19561},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23855},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18684},
]},
],
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

                   text: '蝦底迪的PT構成(總分616651)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361339, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116920, name: '強襲', legendMarkerType: 'square'},
{  y: 138392, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凜冬的PT統計(總分595480)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50176,
				            interval: 5017,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凜冬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8023},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7125},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6356},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5211},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6053},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15728},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2672},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9078},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9346},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7675},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2990},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5921},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8305},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5501},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7671},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2463},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13110},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14225},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34630},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23438},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23391},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35735},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9184},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 50176},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7608},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10708},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11065},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6149},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12982},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凜冬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3772},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11754},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14689},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19243},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25065},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9428},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30337},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32988},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26309},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凜冬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16659},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9802},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6744},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8841},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17330},
]},
],
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

                   text: '凜冬的PT構成(總分595480)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 362519, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59376, name: '強襲', legendMarkerType: 'square'},
{  y: 173585, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'BabyFat的PT統計(總分565258)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45763,
				            interval: 4576,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFat殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3876},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9151},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11249},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2010},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12364},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6398},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8025},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9325},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8120},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6205},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 291},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6135},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6048},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10804},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7985},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10333},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8639},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15266},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6603},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45763},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 42654},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26171},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5141},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14880},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17986},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6707},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6509},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 42021},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7774},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFat強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5630},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8908},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14649},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10641},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7268},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9985},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14066},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11650},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35430},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BabyFatCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9174},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3544},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11033},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13614},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22939},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22250},
]},
],
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

                   text: 'BabyFat的PT構成(總分565258)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 364477, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118227, name: '強襲', legendMarkerType: 'square'},
{  y: 82554, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '流氓浪子的PT統計(總分521656)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36816,
				            interval: 3681,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "流氓浪子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4012},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4342},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9166},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2947},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8667},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10161},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14883},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6442},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9631},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2014},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9988},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5953},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1829},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29223},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15556},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23099},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31379},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25559},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22218},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31543},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28388},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 36816},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18234},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22172},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4634},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14909},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13824},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15196},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "流氓浪子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4808},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2544},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11635},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7966},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13963},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8593},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12630},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "流氓浪子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12024},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23830},
]},
],
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

                   text: '流氓浪子的PT構成(總分521656)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 423663, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62139, name: '強襲', legendMarkerType: 'square'},
{  y: 35854, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
