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
				
				            maximum: 493499,
				            interval: 49349,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22517},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31197},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37870},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 45170},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 68893},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 124236},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1696},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17343},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 138767},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 256078},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 238493},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 322019},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 163372},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 146292},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17620},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21728},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 323132},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 210075},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 155683},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 241671},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 133920},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91808},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 91149},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 43657},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 328501},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 288818},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 332114},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 493499},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 405298},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 317828},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10443},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11387},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18456},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 40171},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44738},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 87035},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 59365},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 106441},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 79604},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 43230},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22812},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15309},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53104},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 86851},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 133994},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 162207},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 95020},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37889},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 43234},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 72974},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 191116},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 262855},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 140911},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 155084},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 176300},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 202523},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 269424},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 261915},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 302846},
]},
],
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
				
				            maximum: 8303499,
				            interval: 830349,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22517},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 53714},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 91584},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 136754},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 205647},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 329883},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 331579},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 348922},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 487689},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 743767},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 982260},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1304279},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1467651},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1613943},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1631563},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1653291},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1976423},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2186498},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2342181},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2583852},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2717772},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2809580},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2900729},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2944386},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3272887},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3561705},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3893819},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4387318},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4792616},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5110444},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5115478},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10443},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21830},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40286},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 80457},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 125195},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 212230},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 271595},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 378036},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 457640},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 500870},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 523682},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 538991},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 592095},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 678946},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 812940},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 975147},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1070167},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1108056},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1108839},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1152073},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1225047},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1416163},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1679018},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1819929},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1975013},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2151313},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2353836},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2623260},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2885175},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3188021},
]},
],
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
				
				            maximum: 276815,
				            interval: 27681,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17498},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 27605},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17752},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22885},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28475},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29363},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1696},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2572},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 76154},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 106124},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 89280},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41576},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 70796},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 94195},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8824},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21728},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 162067},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 79147},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35060},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 94389},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 60502},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31759},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 42870},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27514},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 115299},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 139958},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 183170},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 205349},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 219799},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 189472},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6545},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8910},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10145},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25031},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 31047},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36263},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34770},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 54891},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 32939},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26718},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15096},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11741},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19190},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 47697},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 54740},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 59814},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30601},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14242},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16942},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26422},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 101537},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 90040},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 82747},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 75582},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 71760},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 113227},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 105897},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 129062},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 182970},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2477},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6096},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14408},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7025},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43410},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12732},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 47561},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42206},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14907},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7716},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29356},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34376},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 70855},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 95411},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 57750},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22068},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26292},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29264},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 75439},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 161594},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 45462},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 78207},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101629},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 89296},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 125272},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 83906},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 98953},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5019},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3592},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11051},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21455},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 33813},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 86316},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14771},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 62613},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 120861},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 100119},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 276815},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 88971},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 48223},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8796},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 148309},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 110935},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 99922},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 129909},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 72533},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37336},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7801},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 164318},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 119047},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 130720},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 251844},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 169384},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9067},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 830},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6605},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8557},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29093},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 49094},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3628},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3605},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3874},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12756},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19993},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20701},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17373},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22713},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 40478},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16143},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 48884},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29813},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18224},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36306},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16115},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 87445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2215},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 732},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6666},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7362},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11863},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3989},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4459},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1605},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3568},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4558},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4778},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8399},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6982},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6669},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1579},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14140},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11221},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12702},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1295},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2911},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38255},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48947},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20923},
]},
],
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
				            text: '葬月的PT統計(總分385601)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64567,
				            interval: 6456,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 237},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5162},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5901},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25631},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27010},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 36045},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64567},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32378},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12442},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29264},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31154},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 49852},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 54863},
]},
],
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

                   text: '葬月的PT構成(總分385601)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 11429, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10966, name: '強襲', legendMarkerType: 'square'},
{  y: 363206, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分347508)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70475,
				            interval: 7047,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1007},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 129},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1323},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 724},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2496},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2422},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5321},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17318},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2205},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15975},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12150},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17740},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1618},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31475},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30844},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25372},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9626},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26292},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 70475},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39444},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31157},
]},
],
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

                   text: '雪歌的PT構成(總分347508)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 15817, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17318, name: '強襲', legendMarkerType: 'square'},
{  y: 314373, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分345487)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68783,
				            interval: 6878,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2585},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 507},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31609},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39380},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 68783},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39391},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 54502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23065},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 67947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 368},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1387},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 369},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2384},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1565},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 391},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4962},
]},
],
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

                   text: '喵鼠的PT構成(總分345487)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6701, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4962, name: '強襲', legendMarkerType: 'square'},
{  y: 333824, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分326243)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92811,
				            interval: 9281,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3434},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13289},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7716},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20237},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 75276},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 92811},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23705},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 36844},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 202},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 999},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 400},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3085},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1009},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3989},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6102},
]},
],
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

                   text: '土土昕的PT構成(總分326243)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 14897, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10091, name: '強襲', legendMarkerType: 'square'},
{  y: 301255, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分245554)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44653,
				            interval: 4465,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 961},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2189},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5618},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11974},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22347},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14520},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3018},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1697},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21177},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11218},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13233},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1255},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6344},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44653},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11986},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16936},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1118},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14045},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23515},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2960},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1605},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5238},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1870},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3944},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 855},
]},
],
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

                   text: '阿拉的PT構成(總分245554)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 228087, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15617, name: '強襲', legendMarkerType: 'square'},
{  y: 1850, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分235095)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31316,
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
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5577},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11450},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1771},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5480},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12281},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8884},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5188},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1947},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5858},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7493},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11662},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1474},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11058},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4899},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6100},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11253},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17170},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18967},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25875},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31316},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3854},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3568},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4558},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4778},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3861},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6006},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2767},
]},
],
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

                   text: '冰的PT構成(總分235095)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 205703, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26625, name: '強襲', legendMarkerType: 'square'},
{  y: 2767, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分209622)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28514,
				            interval: 2851,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 146},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 529},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 263},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7033},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1481},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 634},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1318},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 232},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10367},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13540},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22790},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11156},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15931},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5978},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3927},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5875},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9821},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28514},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22999},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18008},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2590},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3285},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10903},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4746},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4408},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 457},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 512},
]},
],
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

                   text: '藏月的PT構成(總分209622)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 198178, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10475, name: '強襲', legendMarkerType: 'square'},
{  y: 969, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分171656)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31885,
				            interval: 3188,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 397},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 770},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 562},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9559},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3167},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11421},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2258},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1578},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7525},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3644},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31885},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6801},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16362},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2439},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2302},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8612},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6210},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4464},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3875},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4964},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1521},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1002},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12367},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10444},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1115},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6071},
]},
],
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

                   text: '魔法的PT構成(總分171656)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 120152, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44318, name: '強襲', legendMarkerType: 'square'},
{  y: 7186, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分167846)'
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
                                    name: "赤雲天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4480},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2881},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5683},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4415},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5124},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3494},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 301},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 431},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7953},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7471},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10354},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6699},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11412},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 938},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11139},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7073},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22545},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7433},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2215},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2791},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3045},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3161},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3321},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 318},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 582},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2811},
]},
],
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

                   text: '赤雲天的PT構成(總分167846)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 149602, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14533, name: '強襲', legendMarkerType: 'square'},
{  y: 3711, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分135664)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28986,
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
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3253},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1763},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1184},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3589},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1368},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 372},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6531},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2555},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1088},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2779},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 312},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2662},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1008},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1355},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9575},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15253},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9217},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 807},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9706},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10219},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12051},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1804},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2839},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 163},
]},
],
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

                   text: '依司瑪耳的PT構成(總分135664)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 98075, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20732, name: '強襲', legendMarkerType: 'square'},
{  y: 16857, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分120333)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14799,
				            interval: 1479,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 200},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 460},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 333},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2330},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5043},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2670},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4732},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4317},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2005},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12718},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7069},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14799},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10829},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3254},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7321},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1620},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7531},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4212},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3081},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2938},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1600},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5450},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6200},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9119},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分120333)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 91945, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19269, name: '強襲', legendMarkerType: 'square'},
{  y: 9119, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分116572)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12780,
				            interval: 1278,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 472},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 290},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 117},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4643},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4571},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 713},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12183},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12780},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 71},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2106},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11739},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6888},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 612},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10341},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3984},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9908},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5696},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9741},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8511},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3322},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 732},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2911},
]},
],
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

                   text: '寇內爾緹的PT構成(總分116572)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 105666, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4521, name: '強襲', legendMarkerType: 'square'},
{  y: 6385, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分110367)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15569,
				            interval: 1556,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4006},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 754},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1660},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 980},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2741},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2165},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1944},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 392},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 208},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 479},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 202},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1289},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15569},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5660},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7099},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1519},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7364},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11523},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10015},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2103},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3232},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5547},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9341},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12153},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2357},
]},
],
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

                   text: '冰紅茶的PT構成(總分110367)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 77737, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30273, name: '強襲', legendMarkerType: 'square'},
{  y: 2357, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分95370)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27236,
				            interval: 2723,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 12, 0), y: 121},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2240},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5312},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 262},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5590},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13280},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 609},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12319},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4776},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20793},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27236},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2808},
]},
],
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

                   text: '亞歷的PT構成(總分95370)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 92562, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2808, name: '強襲', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分88059)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25115,
				            interval: 2511,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 12, 0), y: 187},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 965},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3078},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 386},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 267},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1155},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1572},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 318},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 213},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12649},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16271},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25115},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15239},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 204},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1053},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1295},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8046},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分88059)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 77461, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10598, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿榮的PT統計(總分87044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39252,
				            interval: 3925,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 609},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 778},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6372},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2438},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4431},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 615},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 112},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7834},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 458},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39252},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23997},
]},
],
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

                   text: '阿榮的PT構成(總分87044)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23337, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63707, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '鋼鐵柔情的PT統計(總分483945)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95013,
				            interval: 9501,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 121},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1037},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 377},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 875},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 459},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7419},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鋼鐵柔情CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18797},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 45194},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14771},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 60340},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 53648},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 59073},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15625},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 90054},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 95013},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20678},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鋼鐵柔情強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49},
]},
],
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

                   text: '鋼鐵柔情的PT構成(總分483945)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 10653, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49, name: '強襲', legendMarkerType: 'square'},
{  y: 473243, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'ab99的PT統計(總分474637)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111850,
				            interval: 11185,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 717},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 253},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 961},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 281},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 460},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8257},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5392},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9876},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ab99強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 936},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16753},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ab99CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 100871},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 50186},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31855},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7811},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111850},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 67224},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39766},
]},
],
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

                   text: 'ab99的PT構成(總分474637)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 31270, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33804, name: '強襲', legendMarkerType: 'square'},
{  y: 409563, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '琊牙的PT統計(總分383823)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57287,
				            interval: 5728,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 204},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1581},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2136},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 491},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2044},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13118},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5203},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22903},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17712},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5551},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11632},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17157},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9516},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琊牙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1608},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10900},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16524},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琊牙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35770},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33817},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47217},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 57287},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17180},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19099},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21070},
]},
],
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

                   text: '琊牙的PT構成(總分383823)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 110133, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42250, name: '強襲', legendMarkerType: 'square'},
{  y: 231440, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Kyo的PT統計(總分377648)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 142127,
				            interval: 14212,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 175},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4157},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 168},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2093},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1046},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1045},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6101},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KyoCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3398},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6756},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 142127},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31534},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16368},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 47580},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22786},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 81959},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5273},
]},
],
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

                   text: 'Kyo的PT構成(總分377648)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 19867, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 357781, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Arashi可洛的PT統計(總分374303)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 161790,
				            interval: 16179,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Arashi可洛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3382},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21362},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Arashi可洛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 620},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1197},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1082},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 692},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 121},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Arashi可洛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 997},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14699},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13156},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 41122},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39712},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 161790},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 74371},
]},
],
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

                   text: 'Arashi可洛的PT構成(總分374303)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3712, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24744, name: '強襲', legendMarkerType: 'square'},
{  y: 345847, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '諾言的PT統計(總分344565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78274,
				            interval: 7827,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾言殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1254},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1024},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2753},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 309},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 772},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3505},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1468},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2470},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7694},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾言CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5019},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 37047},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 70751},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 47256},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 985},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 78274},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55353},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18237},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7751},
]},
],
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

                   text: '諾言的PT構成(總分344565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23892, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 320673, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '小雪的PT統計(總分319127)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33457,
				            interval: 3345,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6400},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6593},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7363},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3827},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4258},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4088},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13193},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19897},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17175},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7673},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2917},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5478},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12001},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3759},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11961},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8635},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11765},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5310},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31359},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23446},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24471},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33457},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15438},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9886},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小雪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2622},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5012},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4490},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8823},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7830},
]},
],
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

                   text: '小雪的PT構成(總分319127)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 290350, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28777, name: '強襲', legendMarkerType: 'square'},
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
				            text: '秋意寒的PT統計(總分303765)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36078,
				            interval: 3607,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1461},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4997},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8557},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15123},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6341},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋意寒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 813},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4938},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1711},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2728},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4557},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4211},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2145},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12694},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17334},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 36078},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1149},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16763},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9250},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3753},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8259},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11080},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2946},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1722},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10274},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27175},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25048},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23386},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19632},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋意寒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1328},
]},
],
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

                   text: '秋意寒的PT構成(總分303765)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 252323, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50114, name: '強襲', legendMarkerType: 'square'},
{  y: 1328, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Mic的PT統計(總分294134)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31683,
				            interval: 3168,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3409},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 319},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2429},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6897},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7684},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13058},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23656},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4633},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16250},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25276},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14306},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5099},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10786},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5749},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5720},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10301},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18388},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31683},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9808},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7749},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Mic強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4391},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12091},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7478},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MicCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1860},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20599},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7967},
]},
],
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

                   text: 'Mic的PT構成(總分294134)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 223200, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40508, name: '強襲', legendMarkerType: 'square'},
{  y: 30426, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大中天的PT統計(總分280173)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37130,
				            interval: 3713,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大中天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1244},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 532},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 731},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1206},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1060},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15546},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21051},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10878},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 108},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3971},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26507},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21070},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4498},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1368},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 811},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1151},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1143},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23852},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6069},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37130},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19471},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 429},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大中天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 830},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9078},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9461},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6880},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5879},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10394},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15048},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大中天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 624},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 721},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 758},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11677},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8995},
]},
],
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

                   text: '大中天的PT構成(總分280173)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 199828, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57570, name: '強襲', legendMarkerType: 'square'},
{  y: 22775, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Chaos的PT統計(總分224175)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50110,
				            interval: 5011,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 661},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1008},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 364},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1597},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13163},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5439},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10062},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chaos強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2669},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29578},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16143},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14524},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ChaosCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25566},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 50110},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17093},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36010},
]},
],
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

                   text: 'Chaos的PT構成(總分224175)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 32482, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62914, name: '強襲', legendMarkerType: 'square'},
{  y: 128779, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪馬歐斯∑的PT統計(總分214464)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29291,
				            interval: 2929,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7117},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8610},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9217},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11209},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 148},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1427},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1821},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1710},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5519},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3029},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4111},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4725},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7616},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29291},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12871},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6190},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 134},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 278},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11104},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10925},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19290},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27970},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22748},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6016},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪馬歐斯∑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 657},
]},
],
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

                   text: '迪馬歐斯∑的PT構成(總分214464)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 177654, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36153, name: '強襲', legendMarkerType: 'square'},
{  y: 657, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷霆的PT統計(總分187695)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35444,
				            interval: 3544,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6062},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8425},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6861},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 482},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 120},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 751},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2393},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15687},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 444},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19230},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7367},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27232},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 338},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20568},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 74},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35444},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20573},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷霆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13199},
]},
],
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

                   text: '雷霆的PT構成(總分187695)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 160009, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13199, name: '強襲', legendMarkerType: 'square'},
{  y: 14487, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '心繫穎的PT統計(總分160374)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23953,
				            interval: 2395,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 578},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1589},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 189},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 717},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 938},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2536},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13866},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17921},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2600},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1508},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3784},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 923},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3934},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 797},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6664},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23953},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9774},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6308},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5417},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6569},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7384},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "心繫穎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2431},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "心繫穎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1205},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3454},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 836},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4404},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9674},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 925},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6335},
]},
],
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

                   text: '心繫穎的PT構成(總分160374)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129950, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26833, name: '強襲', legendMarkerType: 'square'},
{  y: 3591, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凌漣漪☆☆{艾}的PT統計(總分159605)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20065,
				            interval: 2006,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 666},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4911},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6493},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13367},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14378},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5880},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 479},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9280},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8713},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2214},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7040},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7467},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8813},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7945},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10020},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凌漣漪☆☆{艾}強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9030},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3605},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20065},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16709},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凌漣漪☆☆{艾}CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2511},
]},
],
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

                   text: '凌漣漪☆☆{艾}的PT構成(總分159605)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 107685, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49409, name: '強襲', legendMarkerType: 'square'},
{  y: 2511, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '渣克的PT統計(總分158023)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21705,
				            interval: 2170,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 125},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 316},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 312},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6205},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6266},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3521},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9679},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4932},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2486},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 437},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4841},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17918},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2353},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1171},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 324},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5419},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3768},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6949},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2211},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12130},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3370},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12221},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21705},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "渣克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2843},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4888},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5375},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "渣克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 666},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4892},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5947},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4683},
]},
],
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

                   text: '渣克的PT構成(總分158023)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 128729, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16188, name: '強襲', legendMarkerType: 'square'},
{  y: 13106, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '梅利奧達斯的PT統計(總分145439)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28359,
				            interval: 2835,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 685},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2503},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2077},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2916},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1369},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 520},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1065},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 477},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3008},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2293},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2372},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2712},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 603},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 275},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2081},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28359},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12006},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22592},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6782},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24157},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25493},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梅利奧達斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1040},
]},
],
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

                   text: '梅利奧達斯的PT構成(總分145439)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144399, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1040, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '旋律的PT統計(總分119561)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22485,
				            interval: 2248,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 443},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 961},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4175},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 628},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2359},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22485},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1978},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12432},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12017},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 242},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 268},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 475},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1320},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 277},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3862},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2724},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13497},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9151},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10018},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3628},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8162},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旋律CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 886},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7251},
]},
],
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

                   text: '旋律的PT構成(總分119561)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 99634, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11790, name: '強襲', legendMarkerType: 'square'},
{  y: 8137, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '熾雲的PT統計(總分110022)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26479,
				            interval: 2647,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1517},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 267},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1159},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5962},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1081},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 569},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 980},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 210},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2054},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9268},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26479},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25014},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1836},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 210},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3703},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5694},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 309},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4811},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10980},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "熾雲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1193},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1985},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4702},
]},
],
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

                   text: '熾雲的PT構成(總分110022)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 102142, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7880, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart35.render();
}
