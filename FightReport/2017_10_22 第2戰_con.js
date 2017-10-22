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
				
				            maximum: 452324,
				            interval: 45232,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 103988},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 126997},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 107460},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 137309},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 110852},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 176967},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 192538},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 157243},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 175710},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 226858},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 271926},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 301367},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 287093},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 248765},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 245177},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 270319},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 263598},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 393074},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 394276},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 344914},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 317344},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 404945},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 230240},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 350251},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 261730},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 452324},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 244813},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 409142},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 359838},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 306437},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 1104},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31732},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 73467},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 65003},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 88814},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 108630},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 119225},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 124593},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 134980},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 176033},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 144086},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 104707},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 199068},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 223597},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 372315},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 350510},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 318353},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 352833},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 320189},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 233681},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 217481},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 322790},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 278607},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 338405},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 304691},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 332120},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 392454},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 373822},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 354640},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 426643},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 362025},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8151},
]},
],
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
				
				            maximum: 15128244,
				            interval: 1512824,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 103988},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 230985},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 338445},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 475754},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 586606},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 763573},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 956111},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1113354},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1289064},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1515922},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1787848},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2089215},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2376308},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2625073},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2870250},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3140569},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3404167},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3797241},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4191517},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4536431},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4853775},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5258720},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5488960},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5839211},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6100941},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6553265},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6798078},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7207220},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7567058},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7873495},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 7874599},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31732},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 105199},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 170202},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 259016},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 367646},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 486871},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 611464},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 746444},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 922477},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1066563},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1171270},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1370338},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1593935},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1966250},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2316760},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2635113},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2987946},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3308135},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3541816},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3759297},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4082087},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4360694},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4699099},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5003790},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5335910},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5728364},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6102186},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6456826},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6883469},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7245494},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 7253645},
]},
],
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
				
				            maximum: 284122,
				            interval: 28412,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 65150},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 76599},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 67331},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58883},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 75128},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 100130},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 104935},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 84392},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 94501},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 126768},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 186519},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 226083},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 219656},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 142832},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 111918},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 138378},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 179637},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 232645},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 214285},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 141647},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 120101},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 142085},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 122710},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 139833},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 135074},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 123854},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 140087},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 147349},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 146298},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 153861},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 1104},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18490},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 50019},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 43396},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 51379},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 78558},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 98945},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 89851},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 61717},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 125211},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 119513},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 63146},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 102557},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 146547},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 180615},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 183393},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 201745},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 261480},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 247623},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 177868},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 164605},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 255633},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 189869},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 215917},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 211534},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 245081},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 230929},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 271522},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 254749},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 284122},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 247390},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8151},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16115},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26929},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 23921},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28775},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16844},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28165},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34564},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 29365},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 37537},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 52231},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 49712},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 55612},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26454},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55787},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34122},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35678},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 43097},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 75186},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 53936},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 83451},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 63545},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 105523},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 54661},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99055},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 51894},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99184},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 71843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 116733},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 122911},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 72687},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22723},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23469},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16208},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 49651},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18880},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 48672},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 53039},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43486},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 43672},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 47859},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35695},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19672},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40983},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 50146},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 99137},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 96263},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40864},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 85243},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 126055},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 119816},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 133698},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 157337},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52869},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 111363},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 74762},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 229286},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32883},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 145060},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 90629},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 79889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12341},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21907},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16062},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20919},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13470},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13088},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16726},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32014},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22214},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24573},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 55029},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 48265},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 140035},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 72721},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 69328},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36486},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41809},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 42714},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 48028},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46801},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 59284},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 63859},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 44809},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 67401},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 87588},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 66199},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56103},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 76694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37832},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 901},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1541},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5545},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16516},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16602},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7192},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18016},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 41249},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 28608},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16242},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41482},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28785},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 51665},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94396},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 47280},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54867},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 30757},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13099},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4848},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20356},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29454},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58629},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 48348},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19638},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 73937},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36101},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43788},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 65827},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 76803},
]},
],
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
				            text: '喵鼠的PT統計(總分697533)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76601,
				            interval: 7660,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7774},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12189},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8290},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12509},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17869},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10039},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14565},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2240},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9337},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12037},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23135},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15977},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30222},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19749},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28558},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25642},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 76601},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44804},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30764},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4514},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4168},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3555},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3594},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6125},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1972},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2014},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5050},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3973},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 629},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7894},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6500},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1231},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1363},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2559},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8026},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2291},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2390},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4701},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2318},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5539},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7923},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6014},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6091},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5200},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1575},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5348},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7474},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9210},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10611},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46420},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17759},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15113},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17087},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15425},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 43576},
]},
],
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

                   text: '喵鼠的PT構成(總分697533)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 112557, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 182675, name: '強襲', legendMarkerType: 'square'},
{  y: 402301, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分596254)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43626,
				            interval: 4362,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7925},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3351},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6316},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9273},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10478},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6711},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11400},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9412},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5965},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9160},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5942},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30958},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31890},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13860},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6472},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14935},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10071},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33193},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4187},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2912},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8268},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14912},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2955},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6154},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14348},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8393},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4718},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16891},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6596},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7320},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6895},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8224},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10502},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9310},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15265},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13459},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25980},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15076},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11505},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14030},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43626},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7584},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8322},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16798},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14829},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11977},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14382},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16268},
]},
],
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

                   text: '阿拉的PT構成(總分596254)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 324902, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 188776, name: '強襲', legendMarkerType: 'square'},
{  y: 82576, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分563684)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29082,
				            interval: 2908,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5062},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2279},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7346},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9199},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2162},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2762},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4075},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5598},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6006},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15918},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29052},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17500},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4706},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10097},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5856},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11301},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1311},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18116},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22789},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13923},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7343},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9424},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8800},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3941},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5201},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4783},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3527},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12698},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6922},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6239},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4157},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6502},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13989},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5495},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7464},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11818},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11509},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29082},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13768},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24679},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9715},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28436},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21524},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15933},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20837},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6347},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8974},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12249},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13404},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21705},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分563684)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 269858, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 231147, name: '強襲', legendMarkerType: 'square'},
{  y: 62679, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分536918)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36145,
				            interval: 3614,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4780},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9937},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3139},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9270},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12170},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14521},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29224},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15502},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36145},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13549},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13037},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9791},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9936},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5246},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4884},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8965},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25164},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27703},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20254},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20266},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18233},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9789},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6475},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28966},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16892},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3021},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7952},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6334},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12307},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10031},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13975},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7515},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6321},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8333},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12108},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8341},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6874},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9933},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9745},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14043},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11624},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13882},
]},
],
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

                   text: '嘎喵的PT構成(總分536918)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 325609, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161274, name: '強襲', legendMarkerType: 'square'},
{  y: 50035, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分506085)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37830,
				            interval: 3783,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1834},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6176},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5957},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4186},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4682},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6671},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4582},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2928},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6280},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2114},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 37830},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19266},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19948},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10271},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13338},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10334},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29415},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3227},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6442},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4782},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2660},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4718},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11647},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6177},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10625},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1723},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7075},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14371},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10977},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14592},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 1104},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4980},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7490},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6945},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19477},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15827},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20589},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4337},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3872},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5440},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6295},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9397},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7682},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11727},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13408},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10444},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15167},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15025},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15874},
]},
],
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

                   text: '寇內爾緹的PT構成(總分506085)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 285932, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 138619, name: '強襲', legendMarkerType: 'square'},
{  y: 81534, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分490680)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43635,
				            interval: 4363,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4267},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4020},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4043},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9780},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8351},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5010},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7038},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5455},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10683},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6585},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30104},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10792},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7963},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4862},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14492},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8918},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11843},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2660},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5968},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5816},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12895},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16952},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7964},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5995},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17683},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16661},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10698},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6052},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7906},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6383},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16886},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11767},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14065},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8070},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17671},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6047},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13797},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 43635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6660},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3974},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6415},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9741},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8392},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5869},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18992},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7331},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13433},
]},
],
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

                   text: '葬月的PT構成(總分490680)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 257594, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 152279, name: '強襲', legendMarkerType: 'square'},
{  y: 80807, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分468637)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21113,
				            interval: 2111,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6207},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1244},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3117},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4459},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4612},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3215},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 691},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13827},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7881},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11557},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10902},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17818},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16228},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5790},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5518},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13273},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20536},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8579},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5925},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5928},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7424},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2592},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12440},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9765},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13955},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6219},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13473},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5748},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5937},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8843},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11978},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10932},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12947},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7923},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14741},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19992},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10695},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17381},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8507},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14682},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3999},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7325},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2583},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8068},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9113},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6592},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13493},
]},
],
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

                   text: '緋煌的PT構成(總分468637)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 267158, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 150306, name: '強襲', legendMarkerType: 'square'},
{  y: 51173, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分466319)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37262,
				            interval: 3726,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1024},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4405},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5343},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5114},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6682},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 368},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4255},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3042},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5404},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4855},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9616},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4106},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9749},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2039},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6799},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11193},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5403},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9364},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7687},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6273},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9950},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8270},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3382},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10487},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6097},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10258},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2386},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5503},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5469},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11364},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37262},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12774},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22846},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17198},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31927},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29069},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4038},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6200},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8954},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6516},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10476},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7213},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34692},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22339},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5528},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16855},
]},
],
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

                   text: '秋風冷月的PT構成(總分466319)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169109, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 122811, name: '強襲', legendMarkerType: 'square'},
{  y: 174399, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分437144)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55316,
				            interval: 5531,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6193},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26255},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7848},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3160},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7038},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1781},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4088},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4738},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8389},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6235},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9044},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5024},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7224},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11259},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13111},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12786},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1984},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5159},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8127},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7761},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5821},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2869},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10413},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7230},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9211},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8527},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11111},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10504},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5246},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10912},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13746},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12678},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3312},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5141},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6339},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10817},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7332},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11584},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5619},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45792},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20420},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 55316},
]},
],
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

                   text: '依司瑪耳的PT構成(總分437144)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 228488, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 168360, name: '強襲', legendMarkerType: 'square'},
{  y: 40296, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分428852)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46585,
				            interval: 4658,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3135},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5704},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1719},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3522},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1376},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18399},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8909},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17902},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2207},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4858},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17702},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23377},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 46585},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32972},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15457},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10235},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7651},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 816},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3053},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7260},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9425},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7848},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15539},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3157},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12952},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3831},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5348},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5710},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13739},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12351},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23750},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4938},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27175},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17126},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18427},
]},
],
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

                   text: '冰的PT構成(總分428852)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 268808, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124491, name: '強襲', legendMarkerType: 'square'},
{  y: 35553, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分415154)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28112,
				            interval: 2811,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4211},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8627},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8302},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2408},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17035},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24636},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3964},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4682},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7088},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 632},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7861},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4801},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4973},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4917},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 515},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11884},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23583},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7664},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19451},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1908},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4582},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7618},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1602},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12583},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13921},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5962},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8124},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9739},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5355},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10988},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11517},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7661},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7340},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4759},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4158},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6788},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7185},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7350},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4991},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3225},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21962},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28112},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4081},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21794},
]},
],
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

                   text: '魔法的PT構成(總分415154)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 219957, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121661, name: '強襲', legendMarkerType: 'square'},
{  y: 73536, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分400013)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38009,
				            interval: 3800,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4448},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4786},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5764},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2688},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6719},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22079},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6137},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8072},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6581},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4472},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9203},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7848},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7156},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7439},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5007},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10942},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24753},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16133},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17505},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10086},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11807},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21505},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38009},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16020},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19034},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15637},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11231},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13768},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9521},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9070},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8386},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11455},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11620},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5308},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2697},
]},
],
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

                   text: '冰紅茶的PT構成(總分400013)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 345524, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46484, name: '強襲', legendMarkerType: 'square'},
{  y: 8005, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分379666)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27709,
				            interval: 2770,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7051},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7711},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2178},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8462},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10003},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8228},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27709},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11644},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5234},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1635},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 66},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19368},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12936},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24570},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5971},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5422},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5675},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8954},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16413},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2968},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3924},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7503},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11615},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9471},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7318},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3759},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12915},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11603},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6617},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9220},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20829},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3817},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3234},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9743},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3783},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24323},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16325},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9261},
]},
],
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

                   text: '土土昕的PT構成(總分379666)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 232029, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70486, name: '強襲', legendMarkerType: 'square'},
{  y: 77151, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分368874)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35156,
				            interval: 3515,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3805},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1969},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4627},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14558},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8357},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12222},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8538},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5948},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14127},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6087},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5150},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2328},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9998},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4823},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5434},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5890},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8534},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1360},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6359},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6928},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6683},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2003},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5710},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12425},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2996},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3612},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 723},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10346},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10323},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10818},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9237},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5366},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14174},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13754},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15810},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17630},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23878},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21683},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35156},
]},
],
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

                   text: '阿榮的PT構成(總分368874)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 114590, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76455, name: '強襲', legendMarkerType: 'square'},
{  y: 177829, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分354303)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26930,
				            interval: 2693,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2265},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5304},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2492},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4705},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3469},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3768},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1838},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2830},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2846},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7233},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5431},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5407},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1107},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3541},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5060},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4201},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5871},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4801},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3427},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10931},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5385},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8351},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5881},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5910},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5390},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10693},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5666},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6302},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7769},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6726},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11569},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9484},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17866},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26930},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15931},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18508},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26911},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25758},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5147},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13799},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17985},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9815},
]},
],
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

                   text: '雪歌的PT構成(總分354303)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 128137, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46746, name: '強襲', legendMarkerType: 'square'},
{  y: 179420, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分255120)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18511,
				            interval: 1851,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1079},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4076},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8663},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1726},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2713},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3181},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5009},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5096},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2879},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6839},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14257},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17104},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10295},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7757},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13199},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5057},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7944},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18511},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5476},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 953},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8913},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8433},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7041},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3757},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4374},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4941},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6907},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15210},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14309},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11032},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4734},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1454},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6534},
]},
],
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

                   text: '藏月的PT構成(總分255120)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 173577, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 75009, name: '強襲', legendMarkerType: 'square'},
{  y: 6534, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分229415)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26873,
				            interval: 2687,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1472},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1034},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1283},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1778},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8389},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6176},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4037},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2464},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5696},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6218},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5834},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3884},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5861},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18401},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14029},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11613},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7646},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2463},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6856},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11499},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14761},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26873},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7962},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8155},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10138},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23797},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10988},
]},
],
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

                   text: '幻想魔術師的PT構成(總分229415)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 105923, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62452, name: '強襲', legendMarkerType: 'square'},
{  y: 61040, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分217807)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27674,
				            interval: 2767,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 726},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1078},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 174},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9522},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10382},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27674},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14826},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8998},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4011},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10835},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6468},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9992},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13411},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7074},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2854},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6448},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9733},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1480},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 915},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 603},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 371},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12263},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13894},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8115},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1533},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1069},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6585},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11462},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分217807)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146562, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50596, name: '強襲', legendMarkerType: 'square'},
{  y: 20649, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分62141)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10039,
				            interval: 1003,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 904},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2257},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3666},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1796},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6608},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5216},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2104},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9051},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4283},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7574},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8643},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10039},
]},
],
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

                   text: '亞歷的PT構成(總分62141)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 43459, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18682, name: '強襲', legendMarkerType: 'square'},
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
				            text: '謙謙的PT統計(總分612381)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49519,
				            interval: 4951,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謙謙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7215},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10117},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10892},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14473},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14135},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7733},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4954},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13261},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14617},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謙謙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6993},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2055},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6928},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4617},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5224},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5249},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9983},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5855},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2816},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10826},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23219},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 35321},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20920},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19152},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32852},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8404},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3452},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8546},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5600},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21339},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30723},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26550},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 46492},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21158},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49519},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37673},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14731},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謙謙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4155},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17028},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10813},
]},
],
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

                   text: '謙謙的PT構成(總分612381)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 482988, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97397, name: '強襲', legendMarkerType: 'square'},
{  y: 31996, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽特的PT統計(總分575176)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47225,
				            interval: 4722,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6175},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8012},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4205},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10811},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3882},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4991},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3073},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7677},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6069},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8426},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3391},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5362},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11058},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2697},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11667},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10751},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7398},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 663},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6330},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13583},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2187},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23470},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6953},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 47225},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18297},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27492},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5744},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3033},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8577},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7369},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11823},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13624},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17871},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13502},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29062},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16411},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5394},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8709},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26907},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2808},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17779},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5767},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7117},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10785},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8583},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5096},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13895},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2915},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9255},
]},
],
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

                   text: '賽特的PT構成(總分575176)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309020, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63413, name: '強襲', legendMarkerType: 'square'},
{  y: 202743, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米修斯的PT統計(總分560110)'
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
                                    name: "米修斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15997},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19827},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3521},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5828},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24566},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41283},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20632},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18505},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12734},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8776},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7337},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24789},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28928},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1343},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17693},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7768},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米修斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 40035},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15842},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25648},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17956},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米修斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5874},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1603},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23469},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28123},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30074},
]},
],
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

                   text: '米修斯的PT構成(總分560110)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 271487, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99481, name: '強襲', legendMarkerType: 'square'},
{  y: 189142, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Him Him的PT統計(總分521736)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33308,
				            interval: 3330,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Him Him殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 648},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 960},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 939},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 259},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6397},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4782},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5356},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3179},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5529},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9603},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3127},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2466},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29052},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17615},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16693},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12140},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5934},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24075},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3972},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11666},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2735},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13427},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6596},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15087},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18152},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33308},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19679},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Him Him強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8558},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4308},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7072},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10231},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4037},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Him HimCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 621},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32014},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14845},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6164},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10552},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7784},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26762},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15475},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17755},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13386},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24249},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13399},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7287},
]},
],
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

                   text: 'Him Him的PT構成(總分521736)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 277106, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35783, name: '強襲', legendMarkerType: 'square'},
{  y: 208847, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '真田幸村的PT統計(總分473334)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32498,
				            interval: 3249,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真田幸村殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 735},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 398},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11751},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24569},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12128},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5415},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6912},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15429},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3196},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5484},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8055},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7945},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1659},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32498},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2473},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23507},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6061},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12469},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5781},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5777},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3107},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5300},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9746},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2433},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26219},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30170},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29610},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真田幸村CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 926},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18174},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11145},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9830},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12587},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11102},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16245},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10985},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14682},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真田幸村強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11466},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14048},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13034},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12027},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12207},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6032},
]},
],
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

                   text: '真田幸村的PT構成(總分473334)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 298844, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 68814, name: '強襲', legendMarkerType: 'square'},
{  y: 105676, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '影舞者的PT統計(總分471847)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34135,
				            interval: 3413,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影舞者殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 769},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 699},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 973},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 277},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4120},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 884},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 516},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 801},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 380},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1429},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1238},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11060},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23217},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14060},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33945},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11255},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20910},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15093},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2172},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5084},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15915},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8278},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3746},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4158},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5257},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6596},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影舞者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14515},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6048},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1986},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10716},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13496},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12679},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34135},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21079},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9373},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18500},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31901},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23006},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14563},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16967},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影舞者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6832},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13733},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11765},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9237},
]},
],
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

                   text: '影舞者的PT構成(總分471847)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 201316, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41567, name: '強襲', legendMarkerType: 'square'},
{  y: 228964, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '張日出的PT統計(總分464037)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37435,
				            interval: 3743,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "張日出殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 176},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4191},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1418},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2951},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4291},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12760},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16167},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22629},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6124},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2046},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13432},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10444},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9208},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10126},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13055},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27121},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18635},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14555},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 37435},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6707},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6345},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10514},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13398},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29423},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36154},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6204},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8632},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13151},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "張日出強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2238},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12163},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11359},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7665},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8877},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17022},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10334},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "張日出CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14833},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11077},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11177},
]},
],
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

                   text: '張日出的PT構成(總分464037)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 357292, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69658, name: '強襲', legendMarkerType: 'square'},
{  y: 37087, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '派脆雞的PT統計(總分428871)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36396,
				            interval: 3639,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派脆雞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1422},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 845},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 120},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1066},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3781},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8539},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11991},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9805},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10775},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4499},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 321},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2552},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9573},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4193},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26765},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28718},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14482},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11156},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1363},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5831},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16485},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26204},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22033},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13381},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12835},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13302},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14701},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36396},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派脆雞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5715},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7741},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14381},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8035},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3688},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24471},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派脆雞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5350},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13183},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11063},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14469},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4313},
]},
],
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

                   text: '派脆雞的PT構成(總分428871)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 316462, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48378, name: '強襲', legendMarkerType: 'square'},
{  y: 64031, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '啾啾的PT統計(總分416674)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31606,
				            interval: 3160,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啾啾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3952},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3226},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4125},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4822},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5659},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9511},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7499},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6516},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8275},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10441},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7514},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10705},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4036},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6133},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4833},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11913},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14991},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21841},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29470},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8156},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4008},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17801},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22927},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26424},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31606},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啾啾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7192},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19696},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21819},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9676},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10184},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9935},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啾啾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4401},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8949},
]},
],
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

                   text: '啾啾的PT構成(總分416674)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309282, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88889, name: '強襲', legendMarkerType: 'square'},
{  y: 18503, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '墨菲斯的PT統計(總分380163)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36065,
				            interval: 3606,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "墨菲斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4135},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 254},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16434},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13460},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14344},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4797},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7861},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3387},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4727},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8939},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2294},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8722},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9906},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6114},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8170},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5817},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3750},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5042},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10448},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26463},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36065},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6509},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2788},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7066},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11730},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6793},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9541},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8419},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8151},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "墨菲斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10660},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22859},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18861},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3018},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "墨菲斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4391},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7772},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14663},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7580},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27963},
]},
],
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

                   text: '墨菲斯的PT構成(總分380163)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 262396, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62369, name: '強襲', legendMarkerType: 'square'},
{  y: 55398, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '文森的PT統計(總分371181)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31928,
				            interval: 3192,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文森殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6673},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 238},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5049},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11903},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12124},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13094},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 558},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11157},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9808},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10722},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29509},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31928},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12809},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28910},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9677},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5457},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10659},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12583},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7642},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13997},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4236},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5837},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文森CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7889},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21413},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17810},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23343},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文森強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3567},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5079},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5177},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14148},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18145},
]},
],
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

                   text: '文森的PT構成(總分371181)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 254610, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46116, name: '強襲', legendMarkerType: 'square'},
{  y: 70455, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '克貝洛斯的PT統計(總分332964)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26851,
				            interval: 2685,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克貝洛斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 210},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1579},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 580},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2713},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1826},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8214},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9390},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10642},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9473},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12802},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23542},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13165},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18873},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22587},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13076},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15251},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26142},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16221},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26851},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15912},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7443},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10506},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3930},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克貝洛斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10057},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克貝洛斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 901},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5147},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3696},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4502},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10107},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7991},
]},
],
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

                   text: '克貝洛斯的PT構成(總分332964)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 271669, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32344, name: '強襲', legendMarkerType: 'square'},
{  y: 28951, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '貝魯特的PT統計(總分324626)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31294,
				            interval: 3129,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝魯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3010},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1150},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2438},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2173},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4756},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6603},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5356},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31294},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30898},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5472},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7947},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21480},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31014},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18310},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12763},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16945},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2334},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3913},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6101},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15790},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3727},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10624},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7990},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10071},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11132},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9148},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9255},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7043},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝魯特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1541},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1730},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2088},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4980},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝魯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4858},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1151},
]},
],
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

                   text: '貝魯特的PT構成(總分324626)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304420, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14197, name: '強襲', legendMarkerType: 'square'},
{  y: 6009, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '殤曲的PT統計(總分278076)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28636,
				            interval: 2863,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殤曲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1518},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1999},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 892},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5247},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 733},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3824},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9638},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9871},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8071},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2412},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28636},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14389},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18641},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13971},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17238},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15536},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15519},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8224},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4471},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14964},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11332},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12464},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6676},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7705},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殤曲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3732},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10761},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殤曲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1314},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11954},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4255},
]},
],
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

                   text: '殤曲的PT構成(總分278076)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 233997, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26556, name: '強襲', legendMarkerType: 'square'},
{  y: 17523, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑士德的PT統計(總分242410)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28298,
				            interval: 2829,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑士德殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9994},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 601},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2652},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4377},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9145},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4718},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9136},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3227},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6295},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6582},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8033},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23598},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9029},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2082},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21844},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14359},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28298},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11346},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑士德CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6440},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11612},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18970},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑士德強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7961},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4848},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5887},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11376},
]},
],
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

                   text: '傑士德的PT構成(總分242410)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 175316, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30072, name: '強襲', legendMarkerType: 'square'},
{  y: 37022, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Albert的PT統計(總分235515)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36413,
				            interval: 3641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Albert殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6536},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7035},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7553},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6534},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2444},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6639},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3525},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5744},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3506},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4504},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5494},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5494},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8548},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6317},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2660},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1230},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 516},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1673},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7363},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36413},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Albert強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12321},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17142},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14356},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AlbertCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5729},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4007},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6163},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7693},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12636},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10967},
]},
],
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

                   text: 'Albert的PT構成(總分235515)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 134963, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53357, name: '強襲', legendMarkerType: 'square'},
{  y: 47195, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '憨吉的PT統計(總分221880)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45015,
				            interval: 4501,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "憨吉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 819},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4181},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1086},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15037},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22227},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1744},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18722},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12504},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8120},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12793},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45015},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17125},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24228},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6637},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7738},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10650},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "憨吉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3199},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2984},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3033},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4038},
]},
],
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

                   text: '憨吉的PT構成(總分221880)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 208626, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13254, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'cocole的PT統計(總分177549)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46086,
				            interval: 4608,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocoleCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17035},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocole強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8013},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16579},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13849},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46086},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocole殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4123},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3764},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21448},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7219},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9638},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12013},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 468},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1382},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8238},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7694},
]},
],
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

                   text: 'cocole的PT構成(總分177549)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 75987, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 84527, name: '強襲', legendMarkerType: 'square'},
{  y: 17035, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Owen的PT統計(總分95194)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20222,
				            interval: 2022,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Owen殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 437},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 132},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1600},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13915},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20222},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5063},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8752},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6303},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4721},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5281},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2224},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 697},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2539},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "OwenCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7008},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Owen強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 804},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1705},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10771},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3020},
]},
],
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

                   text: 'Owen的PT構成(總分95194)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 71886, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16300, name: '強襲', legendMarkerType: 'square'},
{  y: 7008, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Yuchi的PT統計(總分69921)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17724,
				            interval: 1772,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Yuchi殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3962},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8095},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17724},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11065},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12937},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10105},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "YuchiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6033},
]},
],
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

                   text: 'Yuchi的PT構成(總分69921)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 63888, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6033, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
