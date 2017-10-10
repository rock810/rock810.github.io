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
				
				            maximum: 491330,
				            interval: 49133,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30339},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 68972},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 58125},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 85695},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 72468},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 61888},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 256},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 231895},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 245348},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 217826},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 202150},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 167411},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 188847},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 258177},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 291830},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 129387},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5163},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 224264},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 284162},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 309518},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 353161},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 355906},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 183927},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 491330},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 471456},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 363359},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5195},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8053},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12080},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 33750},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13733},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 67670},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 49127},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40576},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13828},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3843},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 46925},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 36476},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 165858},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 119296},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 167487},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 109081},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21403},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77137},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52162},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 160862},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 115683},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 157420},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 163496},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 222495},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 188722},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 186684},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 128957},
]},
],
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
				
				            maximum: 7723411,
				            interval: 772341,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30339},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 99311},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 157436},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 243131},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 315599},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 377487},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 377743},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 377743},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 609638},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 854986},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1072812},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1274962},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1442373},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1631220},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1889397},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2181227},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2310614},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2315777},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2315777},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2315777},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2315777},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2540041},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2824203},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3133721},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3486882},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3842788},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4026715},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4518045},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4989501},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5352860},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5355408},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5195},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13248},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 25328},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 59078},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 72811},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 140481},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 189608},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 230184},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 244012},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 247855},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 247859},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 247859},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 294784},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 331260},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 497118},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 616414},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 783901},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 892982},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 914385},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 914385},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 991522},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1043684},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1204546},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1320229},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1477649},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1641145},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1863640},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2052362},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2239046},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2368003},
]},
],
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
				
				            maximum: 293427,
				            interval: 29342,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18544},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37927},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 25442},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39736},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 35468},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30111},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 157306},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 74500},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 63097},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 79207},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 70536},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 98094},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 157032},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 178940},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46042},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 146374},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 137383},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 119572},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 162228},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 163775},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92759},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 293427},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183167},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 111195},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2765},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3038},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9977},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29462},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10529},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 48564},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 38882},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32066},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5591},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18353},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34119},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38347},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 68485},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 106947},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 69024},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48295},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31404},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 87306},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 59427},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 105543},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 67800},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 91732},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 85190},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 69898},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 56150},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10539},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31045},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27012},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36919},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 36094},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29908},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 256},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 65952},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 140912},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 141761},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 98863},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 71798},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 83993},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 84483},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 103544},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 69630},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5163},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 76436},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 121839},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 169915},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 164525},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 164523},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 89164},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 144508},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 258221},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 206621},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 292},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1029},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11079},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5309},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7619},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4894},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3513},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 841},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 762},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11622},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1735},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32097},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3922},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11804},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3642},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2278},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7357},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15938},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6576},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18760},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25951},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15035},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1256},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5671},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9040},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 906},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1869},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8637},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29936},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12968},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24080},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25077},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6760},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16662},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9346},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13715},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1454},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24940},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20031},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26408},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27608},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2004},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 53395},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30068},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 45543},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2430},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4723},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2103},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4288},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2175},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8027},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4936},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 891},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3343},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 310},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27731},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1595},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 115889},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 49076},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28443},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36135},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21401},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17038},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17116},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 71278},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 48899},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35939},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 95650},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 124187},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 84772},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 90835},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 57772},
]},
],
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
				            text: '土土昕的PT統計(總分305722)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48877,
				            interval: 4887,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 380},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 54},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 79},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 163},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 266},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3469},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 259},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2943},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8027},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4936},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27731},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 48877},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 41403},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36135},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21401},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16194},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17116},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 967},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21309},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31272},
]},
],
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

                   text: '土土昕的PT構成(總分305722)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 4497, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31272, name: '強襲', legendMarkerType: 'square'},
{  y: 269953, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分283009)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95018,
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
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 207},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 188},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1548},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2665},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 95018},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 61306},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 64451},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 55428},
]},
],
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

                   text: '喵鼠的PT構成(總分283009)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 4141, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 278868, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '葬月的PT統計(總分209192)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66413,
				            interval: 6641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 205},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 788},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 213},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 78},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6520},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3078},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1345},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 66413},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24101},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 45598},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30309},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27961},
]},
],
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

                   text: '葬月的PT構成(總分209192)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 13465, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 195727, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '鬼魅魍魎的PT統計(總分208060)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45692,
				            interval: 4569,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 156},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 423},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 262},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12774},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10033},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27257},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5257},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3277},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7168},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45692},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26568},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11480},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6727},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4675},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7375},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7282},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 871},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 461},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4778},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5169},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3513},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5630},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7049},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4164},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分208060)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 177296, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26600, name: '強襲', legendMarkerType: 'square'},
{  y: 4164, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分189827)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 86923,
				            interval: 8692,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 285},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 279},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13145},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1873},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11723},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1152},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 70311},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86923},
]},
],
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

                   text: '雪歌的PT構成(總分189827)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 19718, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11723, name: '強襲', legendMarkerType: 'square'},
{  y: 158386, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分175232)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28281,
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
                                    name: "阿拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 564},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2671},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3383},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15287},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28281},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 219},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 869},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13089},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19215},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8782},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11823},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13374},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19457},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1154},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4198},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5848},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4277},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2450},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1645},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2278},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2486},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3059},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2192},
]},
],
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

                   text: '阿拉的PT構成(總分175232)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 156845, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16195, name: '強襲', legendMarkerType: 'square'},
{  y: 2192, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分174516)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34716,
				            interval: 3471,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2603},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2452},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2203},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24993},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10084},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34716},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12516},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4599},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13140},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14100},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6802},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4894},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7321},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9973},
]},
],
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

                   text: '依司瑪耳的PT構成(總分174516)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 143094, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29078, name: '強襲', legendMarkerType: 'square'},
{  y: 2344, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分169408)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24008,
				            interval: 2400,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 193},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 194},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 452},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 588},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 279},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 724},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1333},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4777},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12509},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21622},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8620},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6429},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9509},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24008},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10911},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 765},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5961},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9167},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 214},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5598},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3318},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 531},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 841},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9977},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 867},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3836},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4407},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 906},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1844},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1135},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1337},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7673},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3154},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5630},
]},
],
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

                   text: '魔法的PT構成(總分169408)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 127270, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20459, name: '強襲', legendMarkerType: 'square'},
{  y: 21679, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分168938)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25005,
				            interval: 2500,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1401},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2439},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18892},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11809},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25005},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 168},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1354},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 555},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8425},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2774},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9576},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22455},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21930},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6729},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11909},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 686},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8391},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 946},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6757},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 891},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2513},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 844},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2157},
]},
],
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

                   text: '嘎喵的PT構成(總分168938)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146439, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16094, name: '強襲', legendMarkerType: 'square'},
{  y: 6405, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分144131)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33101,
				            interval: 3310,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 191},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 709},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2057},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26643},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3590},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19600},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 314},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 100},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1517},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1810},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 267},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2372},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1079},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 208},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2533},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33101},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17766},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11473},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7489},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3343},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1829},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 578},
]},
],
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

                   text: '寇內爾緹的PT構成(總分144131)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 137173, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 578, name: '強襲', legendMarkerType: 'square'},
{  y: 6380, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分79928)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19182,
				            interval: 1918,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 140},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 98},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 85},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 363},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14061},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7094},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10311},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5646},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10762},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19182},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 330},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 71},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 874},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2385},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1953},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2070},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1735},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 647},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 552},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 310},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 599},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 147},
]},
],
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

                   text: '藏月的PT構成(總分79928)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 75680, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2934, name: '強襲', legendMarkerType: 'square'},
{  y: 1314, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分72411)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20580,
				            interval: 2058,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 20, 0), y: 194},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 796},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8013},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10979},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20580},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1809},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12988},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 538},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1242},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6024},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3856},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分72411)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 62152, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9880, name: '強襲', legendMarkerType: 'square'},
{  y: 379, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分65779)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12376,
				            interval: 1237,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 292},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 568},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 762},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4871},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1523},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7434},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 118},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 265},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 160},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 230},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 252},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 349},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 399},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 578},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2115},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 267},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4862},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5231},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11467},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12376},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4343},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 238},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1040},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4563},
]},
],
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

                   text: '冰紅茶的PT構成(總分65779)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 43705, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16233, name: '強襲', legendMarkerType: 'square'},
{  y: 5841, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分63190)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10139,
				            interval: 1013,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2641},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2849},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3495},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7678},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8068},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1455},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3104},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6696},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10139},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1181},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6713},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 224},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3350},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1465},
]},
],
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

                   text: '赤雲天的PT構成(總分63190)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 58375, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1465, name: '強襲', legendMarkerType: 'square'},
{  y: 3350, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分44813)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8003,
				            interval: 800,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2599},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5017},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5472},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5967},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2677},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5094},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4342},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 134},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8003},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2477},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2177},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 524},
]},
],
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

                   text: '亞歷的PT構成(總分44813)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 39635, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5178, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分13847)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6381,
				            interval: 638,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6381},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3054},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4412},
]},
],
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

                   text: '冰的PT構成(總分13847)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 9435, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4412, name: '強襲', legendMarkerType: 'square'},
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
				            text: '保羅的PT統計(總分596373)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 128116,
				            interval: 12811,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1903},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24632},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23298},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21550},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 104238},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 94173},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25872},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 102103},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 128116},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 66827},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 863},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 932},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1866},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
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
                                          PlayerChart17.render();
                                        }
                                      }
                                    });
                            PlayerChart17.render();
var PlayerPieChart17 = new CanvasJS.Chart('PlayerPieChartContainer17',

    {

        title:{

                   text: '保羅的PT構成(總分596373)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3661, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 592712, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '荷荷的PT統計(總分500242)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 97948,
				            interval: 9794,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 96017},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45644},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20147},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 97948},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 84482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23782},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 770},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1072},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4670},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 406},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2559},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2634},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1497},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3714},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37487},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40917},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24243},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3330},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2898},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1594},
]},
],
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

                   text: '荷荷的PT構成(總分500242)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 121852, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7822, name: '強襲', legendMarkerType: 'square'},
{  y: 370568, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪音的PT統計(總分460521)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 191324,
				            interval: 19132,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 560},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8880},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15104},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12170},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8561},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34309},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 84767},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 191324},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 55051},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29603},
]},
],
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

                   text: '雪音的PT構成(總分460521)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 9462, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 451059, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '星韻的PT統計(總分436954)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 86612,
				            interval: 8661,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1493},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1208},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 71},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 264},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1904},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11554},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13105},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7699},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20812},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9607},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37739},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 69164},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18723},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 84253},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86612},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 68790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3956},
]},
],
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

                   text: '星韻的PT構成(總分436954)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37298, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3956, name: '強襲', legendMarkerType: 'square'},
{  y: 395700, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '人生無極限的PT統計(總分434161)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95790,
				            interval: 9579,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 76},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1265},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3081},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1085},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4742},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 598},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 611},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 175},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11136},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7850},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13871},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30633},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10987},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1256},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9366},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 61289},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21182},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36524},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48426},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48535},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 95790},
]},
],
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

                   text: '人生無極限的PT構成(總分434161)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 87025, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35390, name: '強襲', legendMarkerType: 'square'},
{  y: 311746, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿道弗斯的PT統計(總分422670)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77975,
				            interval: 7797,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1052},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1879},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28869},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29472},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12995},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17429},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17115},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10841},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32486},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74358},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17067},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 77975},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77163},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23969},
]},
],
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

                   text: '阿道弗斯的PT構成(總分422670)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 61272, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12995, name: '強襲', legendMarkerType: 'square'},
{  y: 348403, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '醉貓的PT統計(總分298060)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33580,
				            interval: 3358,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醉貓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3933},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1874},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 883},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7722},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2848},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11763},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3843},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7097},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 756},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 320},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7551},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12787},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33580},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27564},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18422},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 993},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30360},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19519},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28599},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6338},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14743},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14225},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醉貓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1230},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4749},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9481},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2548},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5070},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醉貓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5013},
]},
],
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

                   text: '醉貓的PT構成(總分298060)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 267838, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25209, name: '強襲', legendMarkerType: 'square'},
{  y: 5013, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰淇淋的PT統計(總分244620)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36096,
				            interval: 3609,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 680},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 710},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1322},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1223},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 234},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12187},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32426},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17002},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1054},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2511},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1131},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 288},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7764},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36096},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24249},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24638},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9389},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1467},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3636},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15266},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9692},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1265},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7691},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9759},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6584},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2004},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3501},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7674},
]},
],
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

                   text: '冰淇淋的PT構成(總分244620)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206142, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30804, name: '強襲', legendMarkerType: 'square'},
{  y: 7674, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '面白小猫的PT統計(總分244271)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39072,
				            interval: 3907,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 756},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1370},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 893},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2641},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1229},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 881},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39072},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12966},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34812},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7563},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2366},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3213},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2638},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 450},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1245},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2220},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 36254},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17442},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18072},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8429},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 407},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14670},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16460},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 607},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1185},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6920},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2372},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1833},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1094},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1454},
]},
],
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

                   text: '面白小猫的PT構成(總分244271)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 228806, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15465, name: '強襲', legendMarkerType: 'square'},
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
				            text: '惡系的PT統計(總分230421)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36150,
				            interval: 3615,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1561},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1277},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 397},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4539},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 658},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2184},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1235},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8279},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36150},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7634},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12912},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5720},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 221},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6633},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1812},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9073},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27158},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7425},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33716},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3969},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1356},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2907},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3629},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 906},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1869},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1386},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5781},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13026},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5209},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7441},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3125},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1418},
]},
],
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

                   text: '惡系的PT構成(總分230421)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 190260, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38743, name: '強襲', legendMarkerType: 'square'},
{  y: 1418, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ezio的PT統計(總分223035)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28478,
				            interval: 2847,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ezio殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1660},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2250},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2564},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9760},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24776},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5979},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4726},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3980},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9031},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2708},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2991},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9439},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8181},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7533},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2234},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1693},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11123},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28478},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5163},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ezio強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6066},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5215},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3898},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4388},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2831},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13027},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5547},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7660},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7937},
]},
],
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

                   text: 'Ezio的PT構成(總分223035)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 166466, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56569, name: '強襲', legendMarkerType: 'square'},
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
				            text: '★桐人★的PT統計(總分222015)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28458,
				            interval: 2845,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2083},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1203},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2049},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 241},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6476},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3129},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26350},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27689},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6023},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7355},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1462},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10031},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10604},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3602},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10252},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11174},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9534},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11995},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1573},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7776},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6232},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9701},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5199},
]},
],
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

                   text: '★桐人★的PT構成(總分222015)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 191534, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30481, name: '強襲', legendMarkerType: 'square'},
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
				            text: '布萊迪的PT統計(總分207168)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20098,
				            interval: 2009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3491},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5348},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5193},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5332},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7105},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5083},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3938},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 223},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2103},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9359},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8185},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7984},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 936},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7981},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1030},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8808},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12272},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11758},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13766},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6330},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20098},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13574},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13737},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10584},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12077},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1296},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 666},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1372},
]},
],
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

                   text: '布萊迪的PT構成(總分207168)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169640, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35490, name: '強襲', legendMarkerType: 'square'},
{  y: 2038, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Din★丁的PT統計(總分191002)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36124,
				            interval: 3612,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1660},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 844},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4255},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7925},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5116},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5009},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8536},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1872},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2514},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 446},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10865},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8617},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8387},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5192},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14354},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13573},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36124},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12030},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1402},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9756},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4366},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14765},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6557},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6831},
]},
],
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

                   text: 'Din★丁的PT構成(總分191002)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 158483, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13388, name: '強襲', legendMarkerType: 'square'},
{  y: 19131, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Jason的PT統計(總分172825)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28358,
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
                                    name: "Jason殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 908},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1925},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 319},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3721},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5798},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1109},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7406},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5622},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1286},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5668},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5699},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11293},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15881},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28358},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17322},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20471},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jason強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9055},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7830},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JasonCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3456},
]},
],
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

                   text: 'Jason的PT構成(總分172825)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144487, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24882, name: '強襲', legendMarkerType: 'square'},
{  y: 3456, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大李飛刀的PT統計(總分157642)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17209,
				            interval: 1720,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4506},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5569},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4867},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7594},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1836},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7489},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1869},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4539},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4813},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 787},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9197},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 216},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5339},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4668},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5425},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10814},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5009},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10403},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7577},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1917},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3406},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17209},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 449},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6426},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5526},
]},
],
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

                   text: '大李飛刀的PT構成(總分157642)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 124626, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20615, name: '強襲', legendMarkerType: 'square'},
{  y: 12401, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '豬肉火腿起司蛋餅的PT統計(總分152013)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21934,
				            interval: 2193,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2589},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2509},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7289},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9160},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8900},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 467},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1519},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1465},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 431},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1106},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1176},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1717},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5742},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5118},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 582},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12957},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21934},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16377},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5666},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 218},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1223},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1022},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5256},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2046},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1938},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10906},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13237},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9443},
]},
],
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

                   text: '豬肉火腿起司蛋餅的PT構成(總分152013)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 121566, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30447, name: '強襲', legendMarkerType: 'square'},
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
				            text: '風夏的PT統計(總分143406)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24584,
				            interval: 2458,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 569},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1728},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2247},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1245},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3124},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13552},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24584},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17011},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 449},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6428},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2167},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3677},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2244},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6829},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6071},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8066},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4134},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11398},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 322},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1186},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7330},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6048},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4917},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4153},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1147},
]},
],
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

                   text: '風夏的PT構成(總分143406)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 127141, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15118, name: '強襲', legendMarkerType: 'square'},
{  y: 1147, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '望月.鳴上嵐的PT統計(總分18009)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4829,
				            interval: 482,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 460},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4058},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1753},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4104},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4829},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 861},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1944},
]},
],
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

                   text: '望月.鳴上嵐的PT構成(總分18009)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16065, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1944, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart35.render();
}
