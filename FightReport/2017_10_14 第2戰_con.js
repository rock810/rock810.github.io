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
				
				            maximum: 531018,
				            interval: 53101,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6016},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9283},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21290},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22793},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32041},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34266},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 62827},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 107944},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 79764},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 66603},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28457},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7333},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 132755},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 162185},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 134152},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 237644},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 116633},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 210563},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33486},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 74806},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 178747},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 158339},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 265974},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 116301},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 110708},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 153854},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 225389},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 154421},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 254294},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 175899},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10684},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31162},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31559},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40744},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42051},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17222},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20585},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18691},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 34081},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 122315},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 179161},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 128342},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 280635},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 128211},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 160867},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 223041},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 136531},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 78755},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4312},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1014},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 209048},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 334187},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 280217},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 531018},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 420988},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 237469},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 429526},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 334667},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 326016},
]},
],
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
				
				            maximum: 8167866,
				            interval: 816786,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6016},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15299},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 36589},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 59382},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 91423},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 125689},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 188516},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 296460},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 376224},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 442827},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 471284},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 478617},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 611372},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 773557},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 907709},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1145353},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1261986},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1472549},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1506035},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1580841},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1759588},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1917927},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2183901},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2300202},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2410910},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2564764},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2790153},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2944574},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3198868},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3374767},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3385451},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31162},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 62721},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 103465},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 145516},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 162738},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 183323},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 202014},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 236095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 358410},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 537571},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 665913},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 946548},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1074759},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1235626},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1458667},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1595198},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1673953},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1678265},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1679279},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1679279},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1679279},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1888327},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2222514},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2502731},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3033749},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3454737},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3692206},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4121732},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4456399},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4782415},
]},
],
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
				
				            maximum: 322983,
				            interval: 32298,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2332},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13496},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13750},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 29767},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11835},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39007},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50893},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 53578},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39848},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 994},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4547},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44155},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 47025},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 90336},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 123669},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 103365},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 56944},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8567},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9282},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 105888},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 124290},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 184412},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 75961},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 42644},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101332},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 120363},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 82192},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 116968},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 106180},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10684},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1486},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2036},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8318},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27359},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 836},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7836},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19506},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30712},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19641},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12017},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1413},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11561},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4120},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 990},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11507},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28647},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37232},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11907},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52134},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 56279},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22404},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3404},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7047},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5529},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6401},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2786},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7633},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21381},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3072},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8076},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 940},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16432},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8697},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2399},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15287},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20595},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9705},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5752},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1716},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13962},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20214},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19654},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19370},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20793},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16717},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33958},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20198},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4184},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9614},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 76465},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 92042},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 51881},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 140057},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 43426},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 45464},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 132620},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 90548},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 59050},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 131392},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 193581},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 90041},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 322983},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 183629},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 80682},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 217528},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 167229},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 78185},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10369},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9009},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5300},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19817},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4720},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20585},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9077},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6722},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 45014},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 79283},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 56955},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 109866},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65144},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 103386},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 89008},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34422},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15585},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4312},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 66149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 111959},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 190176},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 170803},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 225452},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 156787},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 159864},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 111159},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 225427},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4118},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6951},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7794},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9043},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1938},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19027},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23820},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50004},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26186},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21226},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21062},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 80967},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 93779},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 40744},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 105899},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12328},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 137187},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16222},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 63125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 57572},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13454},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 71857},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34588},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 66348},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38560},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 84812},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52575},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 117956},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48389},
]},
],
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
				            text: '土土昕的PT統計(總分446543)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78172,
				            interval: 7817,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 409},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 523},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 145},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 679},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 170},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1838},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1008},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1370},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 214},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1591},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4919},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2620},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1998},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2533},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22137},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19232},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 78172},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40732},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28983},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 39070},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16222},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24085},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28659},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32527},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45536},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46294},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4156},
]},
],
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

                   text: '土土昕的PT構成(總分446543)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 13587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2620, name: '強襲', legendMarkerType: 'square'},
{  y: 430336, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分399277)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 103279,
				            interval: 10327,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 214},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2097},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4806},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11417},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1247},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 226},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 74},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5782},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3616},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3311},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6627},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13145},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38407},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 67390},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 57132},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32935},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 103279},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 43582},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2399},
]},
],
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

                   text: '雪歌的PT構成(總分399277)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27454, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2399, name: '強襲', legendMarkerType: 'square'},
{  y: 369424, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分357478)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90007,
				            interval: 9000,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 255},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2411},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9251},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 4902},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2746},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21062},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 53047},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 90007},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 63125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32553},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35098},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33650},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9353},
]},
],
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

                   text: '喵鼠的PT構成(總分357478)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16837, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2746, name: '強襲', legendMarkerType: 'square'},
{  y: 337895, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分334439)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40043,
				            interval: 4004,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 252},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 350},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4188},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1979},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6746},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 31133},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14735},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23688},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11622},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18890},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23279},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9292},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1429},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 40043},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14017},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34496},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1797},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34850},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30424},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7010},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4427},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 908},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2827},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8784},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2416},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1735},
]},
],
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

                   text: '嘎喵的PT構成(總分334439)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 317769, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12519, name: '強襲', legendMarkerType: 'square'},
{  y: 4151, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分309888)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36730,
				            interval: 3673,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 448},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3262},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 453},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 773},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6345},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10108},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24811},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2019},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6846},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21950},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18520},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36730},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24819},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14460},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11801},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26420},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11492},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8029},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7511},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3472},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4913},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5196},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1642},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9369},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5171},
]},
],
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

                   text: '阿拉的PT構成(總分309888)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 280125, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13581, name: '強襲', legendMarkerType: 'square'},
{  y: 16182, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分300600)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38577,
				            interval: 3857,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8815},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2292},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4548},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6955},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3940},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4914},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1716},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7657},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5795},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 124},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 340},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 575},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 939},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 856},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2264},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1244},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1181},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2386},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1042},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13954},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11151},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13138},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18971},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3133},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38577},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32588},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11009},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6216},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9663},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5473},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24355},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3953},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14989},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 502},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4449},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1994},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11273},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4249},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 763},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5626},
]},
],
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

                   text: '魔法的PT構成(總分300600)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 218166, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53578, name: '強襲', legendMarkerType: 'square'},
{  y: 28856, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分285967)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28296,
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
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 385},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 329},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 153},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6070},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26047},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6000},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19498},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4579},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1246},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2794},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11032},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7337},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11458},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14415},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13620},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28296},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26155},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9228},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26077},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2117},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4259},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13144},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10268},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2447},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4209},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2982},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4381},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4065},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3490},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10009},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9018},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 812},
]},
],
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

                   text: '葬月的PT構成(總分285967)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 244554, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40601, name: '強襲', legendMarkerType: 'square'},
{  y: 812, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分213028)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36265,
				            interval: 3626,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 236},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 667},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 476},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 386},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 249},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 355},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4530},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4107},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3214},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3274},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36265},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25735},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16899},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 303},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12990},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13929},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22743},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 584},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1017},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9658},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7903},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8110},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11486},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4205},
]},
],
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

                   text: '依司瑪耳的PT構成(總分213028)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 156490, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15176, name: '強襲', legendMarkerType: 'square'},
{  y: 41362, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分121483)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30554,
				            interval: 3055,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 899},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1391},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2016},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 993},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 297},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1582},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12863},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19831},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30554},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8232},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3675},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6515},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2996},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5976},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3237},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 784},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 894},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7655},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2262},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2591},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分121483)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 101079, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17813, name: '強襲', legendMarkerType: 'square'},
{  y: 2591, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分120933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32630,
				            interval: 3263,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10675},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11597},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3290},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32630},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3662},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14725},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1653},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 651},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 387},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8613},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5361},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2933},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1155},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2424},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3192},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3116},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3039},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7144},
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
                                          PlayerChart10.render();
                                        }
                                      }
                                    });
                            PlayerChart10.render();
var PlayerPieChart10 = new CanvasJS.Chart('PlayerPieChartContainer10',

    {

        title:{

                   text: '阿榮的PT構成(總分120933)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 42050, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78883, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Dola的PT統計(總分114119)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14825,
				            interval: 1482,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dola殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 332},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1019},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 190},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 193},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 342},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6829},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1769},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8920},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14825},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6517},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1537},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3751},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2487},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2937},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2522},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5781},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2434},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6168},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6286},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dola強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1053},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2786},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3424},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5873},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4837},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6719},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3185},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2948},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3936},
]},
],
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

                   text: 'Dola的PT構成(總分114119)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 75407, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38712, name: '強襲', legendMarkerType: 'square'},
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
				            text: '藏月的PT統計(總分106398)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24950,
				            interval: 2495,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 167},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 936},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 184},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1043},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 759},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2203},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19485},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6134},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7640},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 184},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 341},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 370},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 217},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 196},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 163},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21384},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 373},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2927},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2795},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1968},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 862},
]},
],
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

                   text: '藏月的PT構成(總分106398)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 87125, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13648, name: '強襲', legendMarkerType: 'square'},
{  y: 5625, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分100681)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21030,
				            interval: 2103,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 05, 0), y: 194},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2315},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1136},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 818},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 333},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10159},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12015},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21030},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16619},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1101},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1159},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3021},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 989},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 891},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 641},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 192},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4765},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6458},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 616},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 759},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1630},
]},
],
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

                   text: '寇內爾緹的PT構成(總分100681)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 96567, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1725, name: '強襲', legendMarkerType: 'square'},
{  y: 2389, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分67135)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13111,
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
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 632},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 994},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5576},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8777},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4148},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4401},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2861},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5705},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13111},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1948},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2025},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11610},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5324},
]},
],
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

                   text: '亞歷的PT構成(總分67135)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 61811, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5324, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '赤雲天的PT統計(總分38978)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8340,
				            interval: 834,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3129},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5172},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8340},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3753},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4655},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3072},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3239},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 488},
]},
],
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

                   text: '赤雲天的PT構成(總分38978)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 25051, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13439, name: '強襲', legendMarkerType: 'square'},
{  y: 488, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分35451)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12703,
				            interval: 1270,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 197},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 516},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1894},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 505},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1926},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1016},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 762},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 166},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5657},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4458},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 597},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 293},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1843},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 934},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分35451)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 30829, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3688, name: '強襲', legendMarkerType: 'square'},
{  y: 934, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分25223)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 3931,
				            interval: 393,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 629},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 160},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 164},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 343},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1197},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1995},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 860},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 593},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 726},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 376},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 570},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 417},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2426},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 308},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2574},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3931},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 203},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2076},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3574},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1750},
]},
],
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

                   text: '冰紅茶的PT構成(總分25223)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17620, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5324, name: '強襲', legendMarkerType: 'square'},
{  y: 2279, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分7830)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4149,
				            interval: 414,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3681},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4149},
]},
],
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

                   text: '冰的PT構成(總分7830)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3681, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4149, name: '強襲', legendMarkerType: 'square'},
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
				            text: '墨菲斯的PT統計(總分571848)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 138761,
				            interval: 13876,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1025},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2748},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3775},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2099},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11064},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14587},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "墨菲斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32479},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "墨菲斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16528},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8540},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 138761},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37832},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16600},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 131156},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 106681},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36057},
]},
],
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

                   text: '墨菲斯的PT構成(總分571848)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 35337, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44356, name: '強襲', legendMarkerType: 'square'},
{  y: 492155, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽特的PT統計(總分553109)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 153978,
				            interval: 15397,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17903},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11652},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4184},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9614},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 55362},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51752},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44449},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 153978},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 100997},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39489},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3294},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2641},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10145},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9077},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1460},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
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
                                    name: "賽特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8318},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27359},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 990},
]},
],
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

                   text: '賽特的PT構成(總分553109)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27062, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36667, name: '強襲', legendMarkerType: 'square'},
{  y: 489380, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '啾啾的PT統計(總分453693)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 191827,
				            interval: 19182,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3559},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1316},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4566},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28724},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12969},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36056},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啾啾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1486},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14576},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啾啾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8177},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 28864},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 191827},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 76948},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 44625},
]},
],
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

                   text: '啾啾的PT構成(總分453693)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 87190, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16062, name: '強襲', legendMarkerType: 'square'},
{  y: 350441, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '派脆雞的PT統計(總分396265)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 86444,
				            interval: 8644,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 864},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 390},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 398},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2079},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 362},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1497},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2865},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3358},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2771},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5876},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9521},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派脆雞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16979},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派脆雞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26983},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 61359},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14830},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 66985},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 78360},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 86444},
]},
],
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

                   text: '派脆雞的PT構成(總分396265)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 44325, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16979, name: '強襲', legendMarkerType: 'square'},
{  y: 334961, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '文森的PT統計(總分386188)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 115221,
				            interval: 11522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 968},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 223},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 520},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18558},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28926},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5027},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2515},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文森強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 980},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文森CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 49482},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30683},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 37051},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 64407},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 115221},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3597},
]},
],
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

                   text: '文森的PT構成(總分386188)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 60578, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25169, name: '強襲', legendMarkerType: 'square'},
{  y: 300441, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米修斯的PT統計(總分326990)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77258,
				            interval: 7725,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米修斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16055},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8546},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 77258},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38796},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14601},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 63550},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 66232},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38696},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米修斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 646},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2610},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
],
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

                   text: '米修斯的PT構成(總分326990)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3256, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 323734, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Yuchi的PT統計(總分281188)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53388,
				            interval: 5338,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1014},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 825},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 340},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5556},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12511},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10556},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14296},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3387},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2220},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19728},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18625},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 53388},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21629},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21416},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24892},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18828},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12452},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Yuchi強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2221},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1040},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10053},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4630},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4120},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6684},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3557},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "YuchiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1296},
]},
],
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

                   text: 'Yuchi的PT構成(總分281188)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 247587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32305, name: '強襲', legendMarkerType: 'square'},
{  y: 1296, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '謙謙的PT統計(總分256902)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38949,
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
                                    name: "謙謙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 184},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1506},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1190},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21106},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4672},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4903},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2460},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2877},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1080},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4735},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7320},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 38447},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9911},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14381},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18214},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38949},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23043},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謙謙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1310},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 726},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4098},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8768},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2673},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6197},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4769},
]},
],
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

                   text: '謙謙的PT構成(總分256902)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 228361, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28541, name: '強襲', legendMarkerType: 'square'},
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
				            text: '影舞者的PT統計(總分248639)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58743,
				            interval: 5874,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4016},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2168},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2891},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4566},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1107},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1448},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2395},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10649},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 36632},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44079},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 58743},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26238},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2290},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9045},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16720},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影舞者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1517},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12849},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8593},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2676},
]},
],
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

                   text: '影舞者的PT構成(總分248639)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 223004, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25635, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Him Him的PT統計(總分248013)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33507,
				            interval: 3350,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 222},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1272},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 481},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2133},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24551},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20343},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19042},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33507},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19017},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21425},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27658},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2941},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 242},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3016},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4842},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4307},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4786},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3527},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5249},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 437},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5687},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Him Him強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6031},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5824},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7387},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6105},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3934},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2189},
]},
],
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

                   text: 'Him Him的PT構成(總分248013)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 216543, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31470, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Owen的PT統計(總分204677)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26040,
				            interval: 2604,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Owen強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5733},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8547},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6684},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9371},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15944},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Owen殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5952},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2627},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18185},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8102},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17745},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9803},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17593},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5756},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26040},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20535},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10476},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5059},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "OwenCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4804},
]},
],
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

                   text: 'Owen的PT構成(總分204677)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 153594, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46279, name: '強襲', legendMarkerType: 'square'},
{  y: 4804, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '張日出的PT統計(總分186930)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41756,
				            interval: 4175,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 675},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1528},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1148},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3454},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7399},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6831},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5233},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6761},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2889},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 334},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3549},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25823},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13444},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 41756},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37284},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13146},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2506},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2621},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8419},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "張日出強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1310},
]},
],
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

                   text: '張日出的PT構成(總分186930)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 185620, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1310, name: '強襲', legendMarkerType: 'square'},
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
				            text: '傑士德的PT統計(總分156914)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26354,
				            interval: 2635,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5391},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2273},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1755},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 276},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1708},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 798},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26354},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25840},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18516},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7675},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2968},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2973},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2378},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22711},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9234},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9169},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑士德強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3667},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1811},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1289},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4748},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4944},
]},
],
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

                   text: '傑士德的PT構成(總分156914)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 140455, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16459, name: '強襲', legendMarkerType: 'square'},
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
				            text: '憨吉的PT統計(總分153414)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33898,
				            interval: 3389,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 180},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2059},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1648},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29968},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18116},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15783},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 196},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 434},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 529},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10629},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5099},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2271},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18250},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33898},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5853},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "憨吉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1413},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5300},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "憨吉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 790},
]},
],
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

                   text: '憨吉的PT構成(總分153414)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 145911, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6713, name: '強襲', legendMarkerType: 'square'},
{  y: 790, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '克貝洛斯的PT統計(總分139841)'
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
                                    name: "克貝洛斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 283},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2121},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1698},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 770},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5886},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8152},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8321},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1139},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4986},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5443},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4276},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6703},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18386},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18511},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9248},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4093},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1837},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9691},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6621},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4696},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克貝洛斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2653},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4823},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9269},
]},
],
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

                   text: '克貝洛斯的PT構成(總分139841)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 123096, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16745, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'cocole的PT統計(總分116223)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30011,
				            interval: 3001,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocole殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3463},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 381},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2436},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4421},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1809},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 979},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7612},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26403},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10884},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30011},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocole強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4523},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5456},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13518},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cocoleCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4265},
]},
],
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

                   text: 'cocole的PT構成(總分116223)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 88461, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23497, name: '強襲', legendMarkerType: 'square'},
{  y: 4265, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '殤曲的PT統計(總分63312)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11307,
				            interval: 1130,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殤曲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3235},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1516},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殤曲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 766},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11046},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2615},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9528},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4128},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6748},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11307},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1328},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11093},
]},
],
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

                   text: '殤曲的PT構成(總分63312)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 58561, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4751, name: '強襲', legendMarkerType: 'square'},
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
				            text: '舞的PT統計(總分38269)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30107,
				            interval: 3010,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "舞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3988},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 239},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2490},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 508},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 101},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30107},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "舞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 836},
]},
],
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

                   text: '舞的PT構成(總分38269)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37433, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 836, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart36.render();
}
