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
				
				            maximum: 3116782,
				            interval: 311678,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 290361},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 354957},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 368902},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 383417},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 423361},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 549822},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 971801},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1618804},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1790671},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1057582},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1608553},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2091117},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2120381},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1515121},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1674504},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1733843},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2517268},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1370141},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1624648},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1999839},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2099321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1533817},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1983250},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2411458},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3081887},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3116782},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2868788},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2526452},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2359438},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1634155},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 9205},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 257447},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 373670},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 529838},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 496527},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 611672},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 611686},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 540980},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 543326},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 641960},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 731583},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 739025},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 577320},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 728723},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 554198},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 515815},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 757398},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1099891},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1152950},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1180139},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1148607},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1041598},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1382978},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1014225},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 833167},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 810941},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 756634},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 743441},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 773971},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 945797},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 780769},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 18163},
]},
],
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
				
				            maximum: 72584085,
				            interval: 7258408,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 290361},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 645318},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1014220},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1397637},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1820998},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2370820},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3342621},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4961425},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6752096},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7809678},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9418231},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11509348},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13629729},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15144850},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16819354},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18553197},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21070465},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22440606},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24065254},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26065093},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28164414},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29698231},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31681481},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34092939},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37174826},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40291608},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43160396},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 45686848},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48046286},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 49680441},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 49689646},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 257447},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 631117},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1160955},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1657482},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2269154},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2880840},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3421820},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3965146},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4607106},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5338689},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6077714},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6655034},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7383757},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7937955},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8453770},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9211168},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10311059},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11464009},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12644148},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13792755},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14834353},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16217331},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17231556},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18064723},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18875664},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19632298},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20375739},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21149710},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22095507},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22876276},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 22894439},
]},
],
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
				
				            maximum: 2638519,
				            interval: 263851,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 152251},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 116041},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 189513},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 158012},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 136120},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 152785},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 233648},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 193057},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 172202},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 149869},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 124811},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 263604},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 153368},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 166381},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 157085},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 228334},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 229404},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 156641},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 212556},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 240134},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 133243},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 172933},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 138562},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 182414},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 161502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 394418},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 222940},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 413638},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 250763},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 420737},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 9205},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 170450},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 228932},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 399642},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 306800},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 426252},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 425159},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 342958},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 359535},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 417808},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 480026},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 432975},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 340052},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 437288},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 318711},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 331653},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 465557},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 495232},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 633090},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 590045},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 556675},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 576529},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 728703},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 492216},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 364353},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 245632},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 286440},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 263294},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 280473},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 400975},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 336457},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 18163},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 56767},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 47686},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 71180},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 66840},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 79213},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 74810},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 121390},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 247366},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 171048},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 101754},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 172685},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 229230},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 189137},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 168421},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 161133},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 218044},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 232629},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 183576},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 175309},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 273971},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 195404},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 166905},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 174759},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 212784},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 281866},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 353548},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 322808},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 384343},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 271099},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 235418},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21355},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31026},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 44682},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 46728},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 50110},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58513},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 55342},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 73073},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 46097},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 79547},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 80571},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 59513},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 139523},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 85123},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 89239},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87046},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 141056},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 106352},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 143877},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 107908},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 190154},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 133323},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 102987},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 114755},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 75556},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 103983},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 97460},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 96402},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 106672},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92766},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 65642},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 113712},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 85514},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 142999},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 135310},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 128014},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 142680},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 110718},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 178055},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 172010},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 225479},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 177755},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 151912},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 150364},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94923},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 204795},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 463603},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 413508},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 446217},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 484024},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 274915},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 520952},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 419022},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 354059},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 489753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 366211},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 382687},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 397096},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 438150},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 351546},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 81343},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 191230},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 108209},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 158565},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 208028},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 322227},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 616763},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1178381},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1447421},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 805959},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1311057},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1598283},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1777876},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1180319},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1356286},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1287465},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2055235},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1029924},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1236783},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1485734},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1770674},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1193979},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1669929},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2016260},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2638519},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2368816},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2323040},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1728471},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1837576},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 978000},
]},
],
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
				            text: '喵鼠的PT統計(總分2007870)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 143865,
				            interval: 14386,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8706},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2595},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4597},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6812},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1593},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2297},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2091},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 117},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7509},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7260},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2415},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 29287},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16690},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18176},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36632},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15534},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20790},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13757},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34851},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27275},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 56015},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9861},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26022},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 66562},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 123932},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 117642},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 87915},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 143865},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61077},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 126624},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 65593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 100542},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 109346},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 60225},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 66548},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19495},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 118192},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 52342},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7672},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13661},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17455},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21906},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17418},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16965},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47747},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23637},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44443},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17784},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16132},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20116},
]},
],
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

                   text: '喵鼠的PT構成(總分2007870)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 45992, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1696942, name: '強襲', legendMarkerType: 'square'},
{  y: 264936, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分1706084)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 117323,
				            interval: 11732,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6210},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12522},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2058},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6119},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2862},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4321},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3395},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5702},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5952},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8453},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2563},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27823},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3971},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11957},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14645},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20884},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16135},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22821},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22298},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29007},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 28088},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10680},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33590},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28280},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12813},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25655},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40733},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18576},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21126},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 68332},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 39200},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4881},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30835},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21388},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 59823},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 109887},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 96402},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 117323},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 80480},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60351},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 75328},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 79344},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 77020},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 80755},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 65310},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 67173},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 51235},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42235},
]},
],
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

                   text: '葬月的PT構成(總分1706084)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100580, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1446843, name: '強襲', legendMarkerType: 'square'},
{  y: 158661, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分1651955)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 136239,
				            interval: 13623,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27144},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 33121},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 58169},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 45540},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 59140},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34866},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 66956},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 87677},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 136239},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 55913},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31448},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34949},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 57404},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4532},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 73068},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30963},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42699},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 60906},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36114},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 84938},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 131322},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 68104},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16418},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 73087},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27140},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5562},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22325},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 65258},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31166},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 61865},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4002},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15979},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14974},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7498},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16144},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18460},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10865},
]},
],
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

                   text: '阿拉的PT構成(總分1651955)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1564033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10865, name: '強襲', legendMarkerType: 'square'},
{  y: 77057, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分1603763)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 156606,
				            interval: 15660,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2080},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2612},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 226},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7131},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3850},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9872},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1744},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4020},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6850},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2963},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9603},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13128},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1940},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27023},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12904},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4217},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1743},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19836},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3646},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3783},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11886},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15870},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13313},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6349},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45590},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35455},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 42865},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46896},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19122},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23350},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11116},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44245},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 52890},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 156606},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38100},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 74989},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 110318},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25418},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36079},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 53124},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 117892},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32557},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6594},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11391},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14607},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8559},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25288},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 87380},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10422},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59960},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32531},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26525},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37533},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17677},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33104},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27019},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21542},
]},
],
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

                   text: '秋風冷月的PT構成(總分1603763)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 114961, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1041295, name: '強襲', legendMarkerType: 'square'},
{  y: 447507, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1444036)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 139864,
				            interval: 13986,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3936},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1865},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12149},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6287},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15648},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10562},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1239},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3081},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5403},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19673},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6281},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3369},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8936},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1250},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4507},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8532},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11077},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3338},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9767},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3042},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 9583},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11946},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11074},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19871},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 25264},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 65796},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 50330},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11551},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22356},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15021},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9994},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 33609},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5342},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 92680},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24987},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 81016},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 128932},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34182},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 100447},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16675},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92489},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 139864},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 69770},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3286},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8380},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13984},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5865},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27492},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17605},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17850},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26680},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19849},
]},
],
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

                   text: '雪歌的PT構成(總分1444036)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 149585, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1153460, name: '強襲', legendMarkerType: 'square'},
{  y: 140991, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分1413140)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 102147,
				            interval: 10214,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13963},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 35774},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 69639},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17763},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 41018},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 102147},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4557},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22373},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50642},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 65205},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 91921},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30921},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 32401},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34506},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47101},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 47048},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22614},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 71890},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 97661},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 48357},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7481},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 53293},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 59601},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6017},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 70947},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 83864},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10190},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32113},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 46609},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38427},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6984},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8731},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7150},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15718},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14419},
]},
],
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

                   text: '嘎喵的PT構成(總分1413140)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1356043, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57097, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分1410814)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 118349,
				            interval: 11834,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18003},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 30041},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 30637},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22197},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27602},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 50865},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 84548},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33128},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42168},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 58897},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36634},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 45011},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 63447},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 45186},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23144},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37700},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26144},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 73212},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21130},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 61163},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 75503},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 118349},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44784},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 114225},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9076},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12976},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 55044},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9500},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40183},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 34482},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25390},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12597},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27848},
]},
],
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

                   text: '依司瑪耳的PT構成(總分1410814)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1344979, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 65835, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雷克斯的PT統計(總分1311517)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111810,
				            interval: 11181,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 23357},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17388},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 44110},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 89649},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27872},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28441},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27161},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43218},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10380},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39649},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 104144},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23171},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23820},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52171},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32746},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16598},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 68675},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 111810},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 51518},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 57336},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48965},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 110354},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52243},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29546},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10892},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32340},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5239},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16363},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29766},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11263},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9165},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6133},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11029},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6777},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6658},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13101},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7775},
]},
],
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

                   text: '雷克斯的PT構成(總分1311517)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1240185, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7775, name: '強襲', legendMarkerType: 'square'},
{  y: 63557, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分1253181)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 79112,
				            interval: 7911,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8951},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26283},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12664},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 56695},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30670},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46929},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23193},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38022},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4720},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4515},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15338},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 53321},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21160},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 48827},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 79112},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 50562},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28371},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 42255},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21473},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30960},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27638},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36007},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36555},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21489},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 65037},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4869},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5300},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2397},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1986},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8912},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5657},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 981},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7133},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2341},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2120},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7993},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8803},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4130},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31538},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9318},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 856},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17773},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3227},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 48047},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13349},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 69876},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 37964},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37102},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27986},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12189},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14089},
]},
],
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

                   text: '羽龍的PT構成(總分1253181)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 105707, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 830747, name: '強襲', legendMarkerType: 'square'},
{  y: 316727, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分1249366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 119996,
				            interval: 11999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23113},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 44483},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20858},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 51068},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14561},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 75529},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35885},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30952},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40649},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15306},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14681},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 56940},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27142},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24089},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 57171},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 93769},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 118170},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 119996},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50356},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 43662},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 62065},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19720},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8011},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 49276},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2928},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 55888},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7276},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28923},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14801},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8481},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7091},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7587},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7456},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11448},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分1249366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1207303, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42063, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '土土昕的PT統計(總分1108407)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92230,
				            interval: 9223,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12374},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13719},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20636},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8431},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20479},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 45187},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38916},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37254},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 92230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23922},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60282},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18125},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22732},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14303},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9059},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5871},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11475},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2734},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5643},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1116},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24327},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9079},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1999},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5082},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9197},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1556},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2100},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7085},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8418},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18997},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2842},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23688},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6400},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1140},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13804},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 568},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10891},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15661},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13542},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11508},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8104},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24511},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15393},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18625},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18326},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 41721},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29411},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 43836},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41575},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 57299},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 48446},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 62591},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46180},
]},
],
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

                   text: '土土昕的PT構成(總分1108407)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 186500, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 507620, name: '強襲', legendMarkerType: 'square'},
{  y: 414287, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分1023262)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 104293,
				            interval: 10429,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 05, 0), y: 53659},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2067},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14103},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25100},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 43662},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 60616},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 81701},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26441},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 57358},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31267},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24451},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 48684},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25351},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 104293},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 47775},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46734},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60601},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45528},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25661},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14301},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26616},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 62297},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34864},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11542},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14965},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15220},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8562},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7484},
]},
],
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

                   text: '亞歷的PT構成(總分1023262)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 965489, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7484, name: '強襲', legendMarkerType: 'square'},
{  y: 50289, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分999334)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 82689,
				            interval: 8268,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8767},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5997},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8621},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5931},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26301},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28055},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13434},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18594},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 53347},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 82689},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39400},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 32271},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45792},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34326},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37563},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42113},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3162},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37082},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4812},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1203},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2873},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6254},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 401},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3497},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2240},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3094},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8719},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4092},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11632},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2053},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1071},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 148},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6556},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9588},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17653},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15158},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30224},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24371},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11509},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32524},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30363},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30702},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36639},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23944},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26277},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30541},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30993},
]},
],
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

                   text: '阿榮的PT構成(總分999334)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 58762, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 569511, name: '強襲', legendMarkerType: 'square'},
{  y: 371061, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分970247)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 96847,
				            interval: 9684,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16465},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32285},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 65731},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22249},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 96847},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16544},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19797},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16631},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30427},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 37676},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35819},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33702},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23166},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30178},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 37922},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29094},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34123},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38167},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 40883},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 77806},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14845},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 43134},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35545},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14274},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3921},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2131},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20392},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7119},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9720},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 44110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8720},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5546},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7278},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6994},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11006},
]},
],
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

                   text: '冰的PT構成(總分970247)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 930703, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39544, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分944285)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71953,
				            interval: 7195,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14733},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27616},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18623},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1319},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30922},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12708},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 707},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25629},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 47048},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6996},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21295},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29561},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3762},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16991},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 71035},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 71725},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 68003},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39669},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33097},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 60720},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11811},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58896},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32474},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8998},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 71953},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40793},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9973},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54138},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13479},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7212},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8246},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6156},
]},
],
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

                   text: '魔法的PT構成(總分944285)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 897556, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25115, name: '強襲', legendMarkerType: 'square'},
{  y: 21614, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分896719)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59017,
				            interval: 5901,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14982},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7378},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8668},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28352},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28583},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27176},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15827},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11044},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 57467},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47223},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9451},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31098},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29912},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23930},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27793},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16772},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31069},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41856},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19664},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 49131},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36306},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 59017},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33360},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 43979},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26186},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2513},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6156},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7638},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6122},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7371},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2161},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3498},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5097},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10189},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 611},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2372},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15257},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16816},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29052},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12506},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10591},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17371},
]},
],
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

                   text: '冰紅茶的PT構成(總分896719)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116538, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 739713, name: '強襲', legendMarkerType: 'square'},
{  y: 40468, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分774674)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 102388,
				            interval: 10238,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14894},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 24725},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3859},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9412},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30337},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11741},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3683},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 44530},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14443},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 33457},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2003},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12560},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22431},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18972},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6113},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18900},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 72776},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 30554},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28119},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 32427},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33064},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 102388},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 42733},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14369},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9860},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18804},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30839},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33771},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10814},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28975},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5373},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7748},
]},
],
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

                   text: '赤雲天的PT構成(總分774674)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 761553, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13121, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '藏月的PT統計(總分760149)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69262,
				            interval: 6926,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20182},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5011},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35695},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27926},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 53311},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 61920},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11237},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11466},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23125},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15853},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13828},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7108},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23982},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17436},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3539},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 68587},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7299},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4382},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17656},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4310},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38297},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 138},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33380},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19188},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4666},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5445},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11975},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27192},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48010},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 69262},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13612},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6594},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23749},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11670},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13118},
]},
],
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

                   text: '藏月的PT構成(總分760149)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 691406, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24788, name: '強襲', legendMarkerType: 'square'},
{  y: 43955, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分365636)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47486,
				            interval: 4748,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6883},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4905},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13942},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7042},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10709},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11979},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 38914},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4340},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5132},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15712},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4173},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12695},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5491},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30494},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47486},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 37239},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7336},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6597},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8156},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2256},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1149},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12976},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18594},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4277},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13215},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14477},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12340},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分365636)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314200, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19467, name: '強襲', legendMarkerType: 'square'},
{  y: 31969, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風魂的PT統計(總分2920701)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 250761,
				            interval: 25076,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風魂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4532},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6225},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9267},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11581},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2960},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3503},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6750},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10708},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27884},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7656},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7524},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9402},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8485},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6597},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17371},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8974},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36348},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5503},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14909},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風魂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16096},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14785},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12398},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39396},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 87888},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 72160},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 80158},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 90846},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 117704},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 90890},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 63399},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47891},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56980},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 176597},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 82131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 100945},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 75713},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 191575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 46676},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 57067},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 65536},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 90445},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77578},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 250761},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 132502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 75158},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風魂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 49739},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 43487},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27910},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20610},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 95991},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 63484},
]},
],
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

                   text: '風魂的PT構成(總分2920701)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206207, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2413273, name: '強襲', legendMarkerType: 'square'},
{  y: 301221, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'winni伶的PT統計(總分2893421)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 299997,
				            interval: 29999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winni伶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12551},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4999},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2679},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5912},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6741},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9885},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9931},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25576},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5476},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6297},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8236},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5041},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8598},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8967},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9265},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winni伶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33093},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 46207},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 57079},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27711},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15402},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 56878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "winni伶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16065},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16455},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3364},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12080},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21507},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 31354},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 77503},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 129213},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30017},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 75843},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 80265},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 132742},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 95096},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 96453},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52489},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67072},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 57544},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 158282},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 102503},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 118221},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52936},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 120067},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 182054},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 172066},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 128308},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 73167},
]},
],
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

                   text: 'winni伶的PT構成(總分2893421)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 154389, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2502662, name: '強襲', legendMarkerType: 'square'},
{  y: 236370, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '仁傑的PT統計(總分2782307)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 249286,
				            interval: 24928,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "仁傑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17289},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37249},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10321},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11270},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 36963},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 73346},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 160052},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 57618},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25703},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 128813},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 69372},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 51680},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94538},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 163137},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 213030},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8261},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 72825},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 53526},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9421},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 46637},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 92905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 249286},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 193995},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 60963},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 136503},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 119269},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "仁傑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10044},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4445},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5215},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8332},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15679},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28887},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7287},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7129},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7573},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17302},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8320},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21788},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15437},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34492},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8975},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9465},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9691},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9677},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22409},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17756},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "仁傑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14018},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26108},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 63321},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 68522},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 46464},
]},
],
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

                   text: '仁傑的PT構成(總分2782307)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 269903, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2293971, name: '強襲', legendMarkerType: 'square'},
{  y: 218433, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Kyouga的PT統計(總分2781804)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 243120,
				            interval: 24312,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kyouga殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5926},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 529},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11394},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4666},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7690},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9177},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1419},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22811},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24917},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3295},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6266},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13911},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9080},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8098},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4638},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12142},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6028},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4411},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2407},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8740},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27754},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9147},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13143},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17191},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kyouga強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7800},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23890},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12979},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46350},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 41506},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 56412},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 131108},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 159167},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 129272},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 36959},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 86011},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 63228},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 87063},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21939},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 83007},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 105890},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 89456},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52612},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30042},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 176005},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 177323},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 243120},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 54468},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KyougaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7521},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 86478},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17164},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20259},
]},
],
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

                   text: 'Kyouga的PT構成(總分2781804)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 234780, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2415602, name: '強襲', legendMarkerType: 'square'},
{  y: 131422, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小鬼˙ˇ˙的PT統計(總分2759576)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 213760,
				            interval: 21376,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鬼˙ˇ˙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8215},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4946},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5897},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1928},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6227},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4358},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8277},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12811},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7220},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4747},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3859},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23896},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3735},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8703},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12481},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14306},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7976},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7945},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17967},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11236},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40149},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13565},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17565},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鬼˙ˇ˙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11857},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12982},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12675},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 186547},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 67541},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19403},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 75318},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15314},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 117726},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 111811},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53659},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 213760},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38548},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 60546},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 107989},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77699},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 72604},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 151307},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 98031},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 176878},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99376},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 79534},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 127075},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 57111},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鬼˙ˇ˙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12660},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11611},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15340},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18083},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20196},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26905},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16933},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 61345},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32587},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35189},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32175},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13242},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 70011},
]},
],
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

                   text: '小鬼˙ˇ˙的PT構成(總分2759576)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 248009, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2145290, name: '強襲', legendMarkerType: 'square'},
{  y: 366277, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '朔夜的PT統計(總分2714433)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 285432,
				            interval: 28543,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朔夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4843},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7292},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6444},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18939},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4395},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2561},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2304},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12279},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7962},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29990},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7580},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11938},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8518},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22090},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9281},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4825},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9389},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43377},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13553},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18579},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朔夜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8970},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10322},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12706},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 44762},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 139902},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 111687},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 37097},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 115403},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 57944},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 217323},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 103746},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42664},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 160372},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42856},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 73266},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 97114},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 160864},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 102802},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 54915},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 164572},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 285432},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 85509},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35472},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朔夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9506},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13790},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14921},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17711},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24923},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 49324},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 72420},
]},
],
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

                   text: '朔夜的PT構成(總分2714433)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 246139, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2265699, name: '強襲', legendMarkerType: 'square'},
{  y: 202595, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '飛雲的PT統計(總分2654865)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 195672,
				            interval: 19567,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛雲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8675},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25746},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 66034},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 53932},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 118316},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39989},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 181816},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65509},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 73601},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 35430},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 105424},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 92838},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29863},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 50229},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 93747},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 65439},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 68418},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 171868},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 195672},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 92104},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 76835},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46027},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛雲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17179},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11289},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15663},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42394},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13948},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26331},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 71802},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 28883},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47644},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40302},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36175},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 46041},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73526},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 63597},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39391},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛雲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10967},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5225},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8066},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2695},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9240},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3449},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6794},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2857},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6053},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25086},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5485},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7875},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5097},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15721},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8532},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14275},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5293},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1775},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8111},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8715},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29763},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22586},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9529},
]},
],
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

                   text: '飛雲的PT構成(總分2654865)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 223189, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1857511, name: '強襲', legendMarkerType: 'square'},
{  y: 574165, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '主人！那邊不能摸的PT統計(總分2604338)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主人！那邊不能摸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17106},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 52667},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 33969},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34746},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42571},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主人！那邊不能摸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5136},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1076},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13479},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5988},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4248},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2022},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5992},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9753},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5960},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10471},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23968},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2248},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7398},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16286},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3694},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8534},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13830},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15079},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38017},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "主人！那邊不能摸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 25986},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14734},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 35859},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 43804},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 29038},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 44836},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 69099},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 56482},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 46740},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 108925},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 77008},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22147},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 199040},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 68559},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39604},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 156283},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 122083},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 97938},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 147450},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 84542},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 139753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 81638},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 190485},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
]},
],
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

                   text: '主人！那邊不能摸的PT構成(總分2604338)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 193179, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2230100, name: '強襲', legendMarkerType: 'square'},
{  y: 181059, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '靈玲的PT統計(總分2597806)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈玲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13535},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44160},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20809},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26005},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 64820},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 57223},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 51245},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 137428},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 135663},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87179},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 75472},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 79273},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 75016},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 88642},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17740},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 59210},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 151337},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56117},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 159057},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 169453},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 76292},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 186293},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈玲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 245},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8268},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9220},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2123},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3060},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8800},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9027},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3504},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7195},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12031},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 35314},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7599},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7456},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11896},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3531},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8209},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4529},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8323},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8763},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26011},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9335},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈玲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19399},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36040},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 87256},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13995},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38198},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58504},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50035},
]},
],
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

                   text: '靈玲的PT構成(總分2597806)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 226710, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2067669, name: '強襲', legendMarkerType: 'square'},
{  y: 303427, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿祖童鞋的PT統計(總分2540551)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 207343,
				            interval: 20734,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿祖童鞋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9709},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9418},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 39205},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17162},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 120556},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 64292},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 121065},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 207343},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26795},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 119926},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 150218},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 76058},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 56787},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 59720},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 142000},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 57546},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 133773},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 124375},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 55772},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 160497},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿祖童鞋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6281},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6000},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12426},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7885},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5466},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11328},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33789},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5204},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18711},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9452},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8010},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2324},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11110},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6189},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1093},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14657},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29762},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2581},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3757},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8321},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿祖童鞋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10326},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13224},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 49420},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36520},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 35090},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 59661},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 79750},
]},
],
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

                   text: '阿祖童鞋的PT構成(總分2540551)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 204346, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2052214, name: '強襲', legendMarkerType: 'square'},
{  y: 283991, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞倫的PT統計(總分2526092)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6519},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10802},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5913},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11807},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7405},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4404},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9978},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3875},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30645},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5190},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7718},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16155},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4244},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15569},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10322},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5110},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27466},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6411},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8420},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16802},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19912},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17203},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8952},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1952},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38704},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞倫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7561},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16857},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12376},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 40221},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 111335},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 44043},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 53751},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 81961},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33754},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 127825},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 68429},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 85826},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4713},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 122948},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 135308},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 55916},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 166989},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 196478},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 69222},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7343},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 52624},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 57775},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31408},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41725},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 38925},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21135},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 59950},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 122027},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 152811},
]},
],
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

                   text: '亞倫的PT構成(總分2526092)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304858, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1642854, name: '強襲', legendMarkerType: 'square'},
{  y: 578380, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱撒的PT統計(總分2478385)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 203614,
				            interval: 20361,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱撒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14606},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36044},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31800},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32091},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33048},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 52820},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 63759},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32519},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39008},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 76331},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36782},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱撒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9862},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2797},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5575},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8461},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7599},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6848},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10319},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6602},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20464},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18786},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4104},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1654},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8482},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8848},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8812},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4042},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱撒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9830},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13445},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11427},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14957},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7605},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 60231},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 49289},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 142974},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 82469},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 203614},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 81733},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18105},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 90749},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 71195},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 114106},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 94651},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 66733},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7666},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 179767},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 85791},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48924},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 95547},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 145494},
]},
],
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

                   text: '凱撒的PT構成(總分2478385)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 133277, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1896300, name: '強襲', legendMarkerType: 'square'},
{  y: 448808, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '泡泡妖精的PT統計(總分2460328)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 146973,
				            interval: 14697,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "泡泡妖精CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17779},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 33404},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42068},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27587},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 42651},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37640},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 40601},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 137438},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22134},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "泡泡妖精殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7586},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10913},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7452},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7140},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10339},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8253},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3981},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 571},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21820},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17501},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12319},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11702},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20065},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22689},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2067},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "泡泡妖精強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32936},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7372},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10827},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 37435},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35746},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50951},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 53959},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41408},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 95854},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 146973},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47444},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 50884},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 68332},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 40326},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 135182},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 82288},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32729},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 88424},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 62771},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 84020},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 103382},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 120195},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 134847},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77442},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 96130},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 66039},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 55717},
]},
],
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

                   text: '泡泡妖精的PT構成(總分2460328)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 199413, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1859613, name: '強襲', legendMarkerType: 'square'},
{  y: 401302, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '靈的PT統計(總分2456897)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 189927,
				            interval: 18992,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13898},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4875},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35997},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31997},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35296},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44507},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46841},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52920},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37662},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5135},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7348},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12001},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10225},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8661},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 839},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18871},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21506},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8283},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28485},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12046},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7191},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8069},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16306},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33908},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4525},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3764},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9433},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6305},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2438},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6346},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27423},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3987},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10035},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5789},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9896},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16627},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 79051},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36042},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 110185},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32551},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25972},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 130737},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 74101},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 48756},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 83062},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21108},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 108508},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 104400},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 69846},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31322},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 141409},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 187677},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 177923},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 189927},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 61901},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 129807},
]},
],
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

                   text: '靈的PT構成(總分2456897)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 266272, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1886632, name: '強襲', legendMarkerType: 'square'},
{  y: 303993, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蝦底迪的PT統計(總分2351382)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 149576,
				            interval: 14957,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9672},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10270},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9154},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10745},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10293},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36420},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 87548},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 60538},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 49177},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 53984},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25683},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 110204},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 129828},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 132972},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 79494},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 92679},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 84206},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 110206},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 149576},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 136880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 74871},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 87828},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 97335},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 83020},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 104014},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5626},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7634},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6709},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12600},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7183},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9187},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10139},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22892},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9047},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1862},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7193},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15646},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6980},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19276},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1854},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17426},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37596},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13224},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13480},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11446},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8930},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蝦底迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5707},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12201},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 25393},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24648},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6123},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 42013},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46042},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19346},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46549},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40833},
]},
],
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

                   text: '蝦底迪的PT構成(總分2351382)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245930, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1836597, name: '強襲', legendMarkerType: 'square'},
{  y: 268855, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '(´・ω・`)的PT統計(總分2313068)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 176018,
				            interval: 17601,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "(´・ω・`)殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2876},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5261},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3997},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6459},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2006},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7143},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10747},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7173},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8688},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6367},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7865},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 23636},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12183},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15603},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10981},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 843},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5875},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8885},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12777},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4813},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30026},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17255},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 9205},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "(´・ω・`)強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9263},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18763},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30358},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21047},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19968},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 99589},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18037},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 51674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 45705},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 137771},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 37571},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32007},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 74812},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38033},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 89604},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 93877},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 169328},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 164967},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 104827},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 176018},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46623},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 128352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "(´・ω・`)CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10756},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15830},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15239},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 29660},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 60753},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 62544},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37051},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38930},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 57685},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51754},
]},
],
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

                   text: '(´・ω・`)的PT構成(總分2313068)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 223375, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1709491, name: '強襲', legendMarkerType: 'square'},
{  y: 380202, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '薛丁格的貓的PT統計(總分2244345)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 286339,
				            interval: 28633,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薛丁格的貓殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10533},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2447},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7513},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7925},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3425},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9692},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2632},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7458},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3210},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4002},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25528},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13851},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8355},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5697},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8795},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10955},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6327},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7288},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26467},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 36605},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16179},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薛丁格的貓強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2286},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15819},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50582},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 28930},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26499},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28040},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 60012},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 121457},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 78270},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 67675},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 86102},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42510},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 90286},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 64626},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 123850},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22257},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 139102},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 98681},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 286339},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 165690},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 189833},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薛丁格的貓CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14750},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24888},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54550},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36092},
]},
],
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

                   text: '薛丁格的貓的PT構成(總分2244345)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 225220, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1888845, name: '強襲', legendMarkerType: 'square'},
{  y: 130280, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大米粒的PT統計(總分2032190)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 163832,
				            interval: 16383,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大米粒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5228},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10918},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9539},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6310},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5466},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6652},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5896},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5341},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29854},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14266},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10440},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11506},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5521},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6892},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5918},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27228},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7997},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8442},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16188},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8792},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25017},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16102},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 43084},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13953},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2475},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12993},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大米粒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19746},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9619},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11051},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43244},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 30640},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 124935},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 92278},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31949},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 122701},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 163832},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47528},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 51146},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39994},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 89277},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 98700},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33793},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 53119},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28726},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55413},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29477},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 128163},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 85204},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 113227},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48424},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大米粒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10954},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27741},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35088},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33017},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51186},
]},
],
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

                   text: '大米粒的PT構成(總分2032190)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 322018, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1552186, name: '強襲', legendMarkerType: 'square'},
{  y: 157986, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '闇龍的PT統計(總分1928228)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 159498,
				            interval: 15949,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "闇龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24297},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20828},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 54059},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 43588},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26505},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43193},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 106966},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 28736},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 58587},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11663},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41580},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 94848},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22912},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44006},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34789},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 69159},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 103084},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38215},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 73980},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 96522},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23692},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 49125},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16771},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 70125},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29895},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 108273},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63393},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 113763},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 66424},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 159498},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "闇龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13952},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9086},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13946},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7944},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17847},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20209},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22061},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28294},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26434},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29979},
]},
],
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

                   text: '闇龍的PT構成(總分1928228)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1738476, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 189752, name: '強襲', legendMarkerType: 'square'},
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
				            text: '諸神的黃昏的PT統計(總分1648929)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 124367,
				            interval: 12436,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諸神的黃昏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7675},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8308},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17427},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7455},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3813},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 43517},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5482},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31153},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26808},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 89285},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 100121},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 95373},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35498},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 56723},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 62938},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 124367},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 86435},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 92336},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 95281},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27462},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63421},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48242},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 76525},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 50446},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諸神的黃昏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10692},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7450},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5549},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4309},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8418},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1746},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6637},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6285},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21132},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7161},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11203},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5399},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13422},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8457},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7952},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5661},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18799},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9391},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29583},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18419},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12753},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諸神的黃昏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10202},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27239},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24323},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23524},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25016},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 62053},
]},
],
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

                   text: '諸神的黃昏的PT構成(總分1648929)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 220481, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1256091, name: '強襲', legendMarkerType: 'square'},
{  y: 172357, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
