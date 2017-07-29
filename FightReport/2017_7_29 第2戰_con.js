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
				
				            maximum: 450109,
				            interval: 45010,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18384},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15327},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18904},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18384},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45119},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15498},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 31418},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 258687},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 225888},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 334301},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 161968},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15702},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44809},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 130415},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 307934},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 310701},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 251442},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 218613},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 296477},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 243891},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 298965},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 330448},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 205668},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183887},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 238956},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 25708},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37953},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21911},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 86425},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 70858},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58219},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13153},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17983},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 164356},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 96197},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 171292},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 223036},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 231095},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 135674},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 57321},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 45340},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 305432},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 133284},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 143563},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 221978},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 191089},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 164109},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 126944},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99972},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 247682},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 405311},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 271613},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 450109},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 309688},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 220899},
]},
],
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
				
				            maximum: 8983533,
				            interval: 898353,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18384},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 33711},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 52615},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 70999},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 116118},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 131616},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 163034},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 163034},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 163034},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 174620},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 433307},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 659195},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 993496},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1155464},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1171166},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1173133},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1217942},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1217942},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1348357},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1656291},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1966992},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2218434},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2437047},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2733524},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2977415},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3276380},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3606828},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3812496},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3996383},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4235339},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 25708},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 63661},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 85572},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 171997},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 242855},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 301074},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 314227},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 332210},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 496566},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 592763},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 764055},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 987091},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1218186},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1353860},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1411181},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1456521},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1761953},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1895237},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2038800},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2260778},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2451867},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2615976},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2742920},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2842892},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3090574},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3495885},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3767498},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4217607},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4527295},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4748194},
]},
],
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
				
				            maximum: 278055,
				            interval: 27805,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11746},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8045},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14628},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14563},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10510},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13315},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3074},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 148009},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 144133},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 164144},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 58582},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8384},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 54024},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 132009},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 177151},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 185610},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 159493},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 152438},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 136053},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 123901},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 153817},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 116934},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 107192},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 103511},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19809},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19012},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16557},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23755},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18132},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 41164},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7214},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8751},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 98603},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 52821},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 110491},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 86658},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 42277},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 67364},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39843},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20696},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 130863},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3657},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 56161},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 82816},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 76552},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 85093},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 67076},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56865},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 149227},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 142193},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 166227},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 170135},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 101492},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 111839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6416},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6741},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4276},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2916},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34609},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2183},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28344},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 103012},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 72240},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 161876},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 103386},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15659},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36425},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 69569},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 174403},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 129751},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 59058},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35465},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 133180},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 107838},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 173316},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 122742},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 67859},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 55288},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 541},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 905},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7666},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9515},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8281},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6822},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1522},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3799},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6774},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23655},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10859},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1748},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 53889},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20875},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21407},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42464},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5899},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18941},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4710},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 61373},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 48561},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14643},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5939},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39746},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19200},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 54756},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 70381},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 178283},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 49963},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15859},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14799},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 133033},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 129627},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 81443},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 117146},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88974},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 71268},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 51268},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30744},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 93939},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 236123},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92207},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 278055},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 142843},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 95781},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 644},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1297},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4165},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2412},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1137},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26007},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24176},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6045},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 65997},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10535},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18347},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1619},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9845},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 41536},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5959},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22016},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25563},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7748},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8600},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12363},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4516},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26995},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13179},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1919},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 65353},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13279},
]},
],
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
				            text: '羽龍的PT統計(總分453029)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 157669,
				            interval: 15766,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36024},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 63375},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54364},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 157669},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 69767},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16962},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37107},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 623},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 641},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 147},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3182},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10572},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2576},
]},
],
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
var PlayerChart2 = new CanvasJS.Chart('PlayerChartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '喵鼠的PT統計(總分450348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 101679,
				            interval: 10167,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 113},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 318},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 797},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12553},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1474},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6182},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2200},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10937},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53939},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 101679},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15659},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33111},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23274},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 49383},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18937},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 42533},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33479},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27080},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16700},
]},
],
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
var PlayerChart3 = new CanvasJS.Chart('PlayerChartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '土土昕的PT統計(總分352812)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81303,
				            interval: 8130,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 534},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1544},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7319},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1693},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5611},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8208},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41332},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 48751},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36425},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 68049},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 81303},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23617},
]},
],
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
var PlayerChart4 = new CanvasJS.Chart('PlayerChartContainer4',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雪歌的PT統計(總分347365)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90288,
				            interval: 9028,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 65},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 160},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 97},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4334},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4986},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2218},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5182},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15378},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25656},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 69569},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 90288},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 79474},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9931},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3820},
]},
],
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
var PlayerChart5 = new CanvasJS.Chart('PlayerChartContainer5',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎喵的PT統計(總分304271)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36906,
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
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 703},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 186},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 621},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2010},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36906},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21799},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28624},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 713},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17712},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12250},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16144},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20902},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11832},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28943},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18911},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9712},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15693},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26343},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13983},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3324},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3799},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3518},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 545},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2874},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1020},
]},
],
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
var PlayerChart6 = new CanvasJS.Chart('PlayerChartContainer6',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '葬月的PT統計(總分251532)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29258,
				            interval: 2925,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4129},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2546},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9416},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2345},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 219},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1437},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1457},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2155},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 781},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10163},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15354},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17582},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9868},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29258},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13169},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28180},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16272},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9372},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20148},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4377},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7432},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6508},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15156},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6915},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4638},
]},
],
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
var PlayerChart7 = new CanvasJS.Chart('PlayerChartContainer7',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿拉的PT統計(總分210773)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40743,
				            interval: 4074,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1192},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5836},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13094},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17071},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15687},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9768},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9386},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 40743},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20046},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22425},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2321},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1327},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11661},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3537},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3496},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1748},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5494},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10449},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 812},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5832},
]},
],
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
var PlayerChart8 = new CanvasJS.Chart('PlayerChartContainer8',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '魔法的PT統計(總分197839)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28175,
				            interval: 2817,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 183},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 469},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1930},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25952},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19265},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15534},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2601},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13210},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12473},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28175},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15779},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20555},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10177},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7921},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10890},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4640},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3377},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1542},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1779},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1287},
]},
],
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
var PlayerChart9 = new CanvasJS.Chart('PlayerChartContainer9',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯的PT統計(總分194813)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28287,
				            interval: 2828,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3380},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1681},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 462},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28287},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11789},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11890},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 660},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18596},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17838},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12089},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3297},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7206},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8934},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3529},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15933},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10613},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18423},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8771},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5278},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5055},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 940},
]},
],
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
var PlayerChart10 = new CanvasJS.Chart('PlayerChartContainer10',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '依司瑪耳的PT統計(總分193918)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28746,
				            interval: 2874,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8819},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4460},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 897},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28746},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22554},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15997},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20053},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23259},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4686},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2956},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6228},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6019},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10731},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7219},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19517},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7005},
]},
],
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
var PlayerChart11 = new CanvasJS.Chart('PlayerChartContainer11',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋風冷月的PT統計(總分183711)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81880,
				            interval: 8188,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 388},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4857},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1533},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4072},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3273},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1380},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28344},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 81880},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 50277},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7598},
]},
],
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
var PlayerChart12 = new CanvasJS.Chart('PlayerChartContainer12',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '赤雲天的PT統計(總分166838)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24918,
				            interval: 2491,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 292},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1707},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5716},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3036},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 445},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 281},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4805},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 685},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11609},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20894},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24918},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 923},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7305},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10945},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8329},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9614},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10150},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11426},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3746},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3149},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6603},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1776},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11982},
]},
],
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
var PlayerChart13 = new CanvasJS.Chart('PlayerChartContainer13',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞歷的PT統計(總分159388)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23748,
				            interval: 2374,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1046},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 880},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1963},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8118},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5549},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8508},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21252},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2975},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23748},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14438},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19594},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4052},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1237},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6855},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1360},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 889},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7465},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4276},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3967},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4822},
]},
],
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
var PlayerChart14 = new CanvasJS.Chart('PlayerChartContainer14',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '寇內爾緹的PT統計(總分159124)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32555,
				            interval: 3255,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1323},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 78},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 660},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 215},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 274},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11129},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29042},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13955},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4619},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1701},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23773},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32555},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13034},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 305},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8607},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1163},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6874},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4205},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1522},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1448},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 658},
]},
],
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
var PlayerChart15 = new CanvasJS.Chart('PlayerChartContainer15',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰紅茶的PT統計(總分130283)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34915,
				            interval: 3491,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1640},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 247},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2230},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 286},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 379},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1656},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6627},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17837},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30456},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 34915},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18020},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3811},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10757},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1065},
]},
],
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
var PlayerChart16 = new CanvasJS.Chart('PlayerChartContainer16',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '有生之蓮解鋒鏑的PT統計(總分103736)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21639,
				            interval: 2163,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3415},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1795},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1422},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4157},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9216},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12983},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21639},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8637},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2477},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6367},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7621},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4355},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6087},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3052},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2275},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6774},
]},
],
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
var PlayerChart17 = new CanvasJS.Chart('PlayerChartContainer17',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '藏月的PT統計(總分101806)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25795,
				            interval: 2579,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 915},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 213},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1305},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2169},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5455},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 347},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25795},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4475},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3359},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6923},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7927},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3453},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9109},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7663},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1143},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2273},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 541},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 609},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1737},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4496},
]},
],
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
var PlayerChart18 = new CanvasJS.Chart('PlayerChartContainer18',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鬼魅魍魎的PT統計(總分97607)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13110,
				            interval: 1311,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 180},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 515},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 784},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 948},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 554},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 134},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 65},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6340},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 417},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 600},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1681},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5184},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1168},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 744},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8294},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13110},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11126},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11252},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9862},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11528},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11246},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1443},
]},
],
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
var PlayerChart19 = new CanvasJS.Chart('PlayerChartContainer19',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰的PT統計(總分93966)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11228,
				            interval: 1122,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4046},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 243},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6799},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3074},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8468},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6152},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2239},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2808},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11228},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5492},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7862},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5308},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7926},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10177},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9005},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2490},
]},
],
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
var PlayerChart20 = new CanvasJS.Chart('PlayerChartContainer20',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿榮的PT統計(總分82180)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18823,
				            interval: 1882,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 193},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 125},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 148},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 325},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 914},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5936},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2211},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2142},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 980},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1120},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4524},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2260},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4932},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5001},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 251},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 905},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8281},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14410},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18823},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1371},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2235},
]},
],
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
var PlayerChart21 = new CanvasJS.Chart('PlayerChartContainer21',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'MoonCat的PT統計(總分508801)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 132957,
				            interval: 13295,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MoonCatCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4172},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16651},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 34851},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21486},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11122},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5939},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 60016},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 57862},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 41647},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 132957},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 80076},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25983},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MoonCat殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1882},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 147},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4488},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3061},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1688},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4754},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
],
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
var PlayerChart22 = new CanvasJS.Chart('PlayerChartContainer22',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鋼鐵柔情的PT統計(總分479768)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 145098,
				            interval: 14509,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鋼鐵柔情殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 359},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 84},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2221},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 294},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1169},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 907},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 314},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 374},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1587},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 373},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4776},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鋼鐵柔情CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 547},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26522},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27075},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14579},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 73017},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 71765},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21663},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12249},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 145098},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 60297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鋼鐵柔情強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1137},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5227},
]},
],
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
var PlayerChart23 = new CanvasJS.Chart('PlayerChartContainer23',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'ab99的PT統計(總分461043)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 115788,
				            interval: 11578,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ab99殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 240},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1874},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 219},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6940},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12269},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14690},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29213},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ab99CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 616},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29540},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 110141},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19408},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15859},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5750},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 72269},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 115788},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26128},
]},
],
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
var PlayerChart24 = new CanvasJS.Chart('PlayerChartContainer24',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '琊牙的PT統計(總分437799)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120335,
				            interval: 12033,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琊牙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 312},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 166},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 335},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4611},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11121},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琊牙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42678},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4456},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40892},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琊牙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 457},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1476},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32928},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 68142},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 28698},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9049},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 120335},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 66079},
]},
],
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
var PlayerChart25 = new CanvasJS.Chart('PlayerChartContainer25',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '諾言的PT統計(總分323224)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58846,
				            interval: 5884,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾言CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 654},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17996},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26244},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1857},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22473},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27765},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47677},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39019},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22087},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13166},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 58846},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾言殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 201},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9818},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 429},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1225},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1113},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3416},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1340},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9021},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9646},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3490},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾言強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 644},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5017},
]},
],
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
var PlayerChart26 = new CanvasJS.Chart('PlayerChartContainer26',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Chaos的PT統計(總分245364)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84168,
				            interval: 8416,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chaos殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 629},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1412},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4825},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4995},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4831},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6338},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5894},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5293},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6329},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chaos強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8600},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ChaosCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27231},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 84168},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61209},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23591},
]},
],
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
var PlayerChart27 = new CanvasJS.Chart('PlayerChartContainer27',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Mic的PT統計(總分236276)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28728,
				            interval: 2872,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Mic殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2702},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3312},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1983},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2339},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9765},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1426},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 409},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5922},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8134},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 127},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28728},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8445},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5849},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6582},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11844},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6421},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16693},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5867},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28427},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25200},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6681},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10885},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Mic強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 897},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6621},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6994},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MicCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18133},
]},
],
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
var PlayerChart28 = new CanvasJS.Chart('PlayerChartContainer28',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '迪馬歐斯∑的PT統計(總分222146)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26331,
				            interval: 2633,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 141},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2725},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1159},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1417},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 330},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4080},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9797},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16626},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14889},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3928},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2361},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 676},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1638},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14667},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13504},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11566},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26331},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16256},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7140},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13873},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6294},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7697},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2681},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1297},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1701},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9149},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6600},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6671},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1322},
]},
],
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
var PlayerChart29 = new CanvasJS.Chart('PlayerChartContainer29',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Kyo的PT統計(總分203006)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35687,
				            interval: 3568,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kyo殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7843},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 617},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8624},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9341},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6575},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2399},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4820},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2380},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2280},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35687},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13670},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5842},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6328},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7406},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3523},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12319},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6943},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14881},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9839},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9817},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 961},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kyo強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4751},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5056},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5502},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6823},
]},
],
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
var PlayerChart30 = new CanvasJS.Chart('PlayerChartContainer30',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋意寒的PT統計(總分202936)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30186,
				            interval: 3018,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋意寒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4065},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4687},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5540},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4516},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9716},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋意寒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4563},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2345},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 137},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9232},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2867},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 787},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4569},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1939},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4345},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6567},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8817},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6886},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5145},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6536},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6593},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2047},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5739},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30186},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13302},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12837},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 348},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋意寒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1326},
]},
],
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
var PlayerChart31 = new CanvasJS.Chart('PlayerChartContainer31',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Arashi可洛的PT統計(總分182046)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19297,
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
                                    name: "Arashi可洛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 786},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 265},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2942},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 355},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1074},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 203},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3554},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9046},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9970},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7521},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3235},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3819},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4267},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8742},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1435},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5439},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19297},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16688},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12585},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8801},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3749},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1942},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Arashi可洛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6699},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6016},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12135},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Arashi可洛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10082},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6181},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10505},
]},
],
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
var PlayerChart32 = new CanvasJS.Chart('PlayerChartContainer32',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '渣克的PT統計(總分173178)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22870,
				            interval: 2287,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "渣克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5249},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 899},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1200},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2980},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5113},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10272},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2437},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4746},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3719},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1506},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2038},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5863},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11504},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1519},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11187},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5628},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2466},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9539},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2409},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22870},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6253},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12492},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "渣克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 941},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8724},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 989},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2700},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5778},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "渣克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5634},
]},
],
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
var PlayerChart33 = new CanvasJS.Chart('PlayerChartContainer33',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷霆的PT統計(總分173038)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28033,
				            interval: 2803,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 829},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2049},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 369},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3506},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 446},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6309},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1741},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3556},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3017},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3217},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2599},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10156},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3657},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6390},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7209},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1473},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3634},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6734},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7311},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14339},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28033},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19714},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13207},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8569},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5984},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1471},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2039},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2572},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2908},
]},
],
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
var PlayerChart34 = new CanvasJS.Chart('PlayerChartContainer34',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '心繫穎的PT統計(總分167877)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27895,
				            interval: 2789,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "心繫穎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1170},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1105},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 291},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1896},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 821},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11017},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23409},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10877},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3315},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 967},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 268},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 843},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13683},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5625},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27895},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4834},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8457},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6212},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4765},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7464},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2639},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "心繫穎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 779},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1003},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 760},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9821},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6132},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "心繫穎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 613},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8657},
]},
],
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
var PlayerChart35 = new CanvasJS.Chart('PlayerChartContainer35',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Kei的PT統計(總分165497)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31758,
				            interval: 3175,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kei殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 195},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 974},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 372},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 455},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 254},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31758},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 30679},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8899},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4709},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5961},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7823},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7381},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2196},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3106},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1181},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 650},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5586},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KeiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7792},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2470},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kei強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 802},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7838},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1262},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17256},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1919},
]},
],
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
var PlayerChart36 = new CanvasJS.Chart('PlayerChartContainer36',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '凌漣漪☆☆{艾}的PT統計(總分164617)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17515,
				            interval: 1751,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凌漣漪☆☆{艾}殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 746},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1539},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 623},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2074},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5201},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12566},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6043},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13333},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16452},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2956},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9130},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4947},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7974},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4273},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8816},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6405},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 814},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7765},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3108},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3928},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2959},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9171},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凌漣漪☆☆{艾}強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17515},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10430},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凌漣漪☆☆{艾}CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5849},
]},
],
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
var PlayerChart37 = new CanvasJS.Chart('PlayerChartContainer37',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '旋律的PT統計(總分159468)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20491,
				            interval: 2049,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1880},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4629},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7139},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1530},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4446},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13310},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16211},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17851},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17514},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1114},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5180},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1654},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2735},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14052},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20491},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11371},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1197},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5109},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5156},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1281},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1732},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2870},
]},
],
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
var PlayerChart38 = new CanvasJS.Chart('PlayerChartContainer38',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '梅利奧達斯的PT統計(總分144077)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27038,
				            interval: 2703,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅利奧達斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 352},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1134},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 544},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4748},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 791},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 100},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2646},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5242},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3988},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4752},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2494},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 390},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8385},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10846},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3061},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 551},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3167},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4312},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2561},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13224},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27038},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20409},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5240},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅利奧達斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5751},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 859},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1619},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅利奧達斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1119},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1296},
]},
],
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
var PlayerChart39 = new CanvasJS.Chart('PlayerChartContainer39',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '小雪的PT統計(總分53718)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11913,
				            interval: 1191,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小雪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3329},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 265},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4410},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 722},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 752},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2379},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2083},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3718},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11913},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4783},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 284},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小雪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 883},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9676},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5959},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小雪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 624},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1938},
]},
],
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
var PlayerChart40 = new CanvasJS.Chart('PlayerChartContainer40',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '熾雲的PT統計(總分44315)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10952,
				            interval: 1095,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "熾雲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2371},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 643},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 641},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 542},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 433},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1793},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2562},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 816},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3014},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4992},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2456},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 528},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "熾雲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10952},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "熾雲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 538},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4075},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7401},
]},
],
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
}
