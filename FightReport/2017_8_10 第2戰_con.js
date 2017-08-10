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
				
				            maximum: 2869243,
				            interval: 286924,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 299810},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 313746},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 325136},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 333328},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 379118},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 440733},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 575955},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 598751},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 586521},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1041835},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1321780},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1785575},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1962003},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1778771},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1299595},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1231072},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1427690},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1928802},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1986049},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1652873},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1068673},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1227983},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1269039},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1557852},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1908871},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2651222},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2647343},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2811710},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2869243},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1510674},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 256853},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 266902},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 330227},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 577781},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 672833},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 655468},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 742394},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 633643},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 513086},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 620159},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 577711},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 503068},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 463222},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 592147},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 610343},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 590349},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 679950},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 580735},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 704243},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1007124},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 974558},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 993855},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 990935},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 977919},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 736338},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 690593},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 749325},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 882736},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 660704},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 859191},
]},
],
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
				
				            maximum: 60889503,
				            interval: 6088950,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 299810},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 613556},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 938692},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1272020},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1651138},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2091871},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2667826},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3266577},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3853098},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4894933},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6216713},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8002288},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9964291},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11743062},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13042657},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14273729},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15701419},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17630221},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19616270},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21269143},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22337816},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23565799},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24834838},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26392690},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28301561},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30952783},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33600126},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36411836},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 39281079},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40791753},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 40795111},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 256853},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 523755},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 853982},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1431763},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2104596},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2760064},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3502458},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4136101},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4649187},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5269346},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5847057},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6350125},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6813347},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7405494},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8015837},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8606186},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9286136},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9866871},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10571114},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11578238},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12552796},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13546651},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14537586},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15515505},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16251843},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16942436},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17691761},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18574497},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19235201},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20094392},
]},
],
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
				
				            maximum: 2497560,
				            interval: 249756,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 117058},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 93177},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 118515},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 94503},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 110560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 122392},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 92240},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 116354},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 197573},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 163138},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 130201},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 112151},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 100621},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 139070},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 171470},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 88425},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 75943},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 130530},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 115741},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 133243},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 192825},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 144901},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 83146},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 110554},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 127004},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 305572},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 170878},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 140428},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183808},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 220600},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 228079},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 220706},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 253396},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 406840},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 491180},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 502596},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 608428},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 495338},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 317882},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 441926},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 385704},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 312643},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 290753},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 371680},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 408315},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 464116},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 428835},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 326528},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 407943},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 562816},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 732617},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 709787},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 571115},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 744700},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 445259},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 329800},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 326042},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 342931},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 338589},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 601689},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20705},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19553},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 61143},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25827},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 113137},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 86590},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 71204},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 92140},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 82698},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 104148},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 72632},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 76376},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 62736},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 97913},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 88577},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 88208},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 97534},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 94490},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 86129},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 148751},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 84672},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 135612},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 122671},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 133645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 55193},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 109403},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 153296},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 109139},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 71713},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 164606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 139806},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 159236},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 152661},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 170411},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 195788},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 250101},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 399884},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 381801},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 289882},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 737840},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1020512},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1475277},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1627357},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1432735},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 940105},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 969288},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1133700},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1592220},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1622090},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1339146},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 728088},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 941150},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1000468},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1172061},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1531132},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2046468},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2185875},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2268241},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2497560},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1038527},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 42946},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 61333},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 53960},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 68414},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 72770},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 68240},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 83831},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 100596},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 99066},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 140857},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 171067},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 198147},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 234025},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 206966},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 188020},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 173359},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 218047},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 206052},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 248218},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 180484},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 147760},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 141932},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 185425},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 275237},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 250735},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 299182},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 290590},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 403041},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 187875},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 251547},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8069},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26643},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15688},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 145114},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 68516},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 66282},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 62762},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 46165},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 112506},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 74085},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 119375},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 114049},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 109733},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 122554},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 113451},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38025},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 153581},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 159717},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 210171},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 295557},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 157269},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 148456},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 297149},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99574},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 235886},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 251390},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 269987},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 430666},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 250402},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92896},
]},
],
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
				            text: '葬月的PT統計(總分1488319)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 135896,
				            interval: 13589,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5772},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26335},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20838},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9978},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16229},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 46590},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16545},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19555},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22688},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16372},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8715},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27564},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30291},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 120252},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77478},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 53714},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45545},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 48216},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 133346},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 135896},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 91654},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 41752},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 50104},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24401},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6339},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8082},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7234},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5721},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15597},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6917},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6829},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 33943},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5247},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 354},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8395},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4107},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12725},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13211},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7013},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4263},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32329},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16284},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15532},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5513},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3489},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8715},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 24551},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20438},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 40801},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21164},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39569},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24127},
]},
],
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

                   text: '葬月的PT構成(總分1488319)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 227839, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1089830, name: '強襲', legendMarkerType: 'square'},
{  y: 170650, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分1367992)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 106161,
				            interval: 10616,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9973},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 27899},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 24657},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 55475},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 61255},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 79526},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 106161},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 49343},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48790},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 37992},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27159},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26053},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19978},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 73086},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 56706},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10847},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35063},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29560},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 70771},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25945},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31117},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20578},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58795},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 90173},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 63181},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39059},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17823},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26232},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28975},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 69721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4989},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11576},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14959},
]},
],
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

                   text: '阿拉的PT構成(總分1367992)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1321893, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14575, name: '強襲', legendMarkerType: 'square'},
{  y: 31524, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分1266596)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 106972,
				            interval: 10697,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5196},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 400},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15314},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7464},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6471},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7036},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3879},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2694},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2373},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 680},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26929},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2995},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9027},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12113},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6614},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5966},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1161},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4349},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2324},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2475},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 706},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8069},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3446},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9916},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19989},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20370},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55309},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34281},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20300},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8629},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17433},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 72924},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 72104},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 106972},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45132},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17670},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 55465},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49782},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 42401},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35284},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27106},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16603},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33633},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34242},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 35993},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24600},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15851},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14369},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22873},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 41539},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28044},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27863},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4093},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22495},
]},
],
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

                   text: '喵鼠的PT構成(總分1266596)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 133552, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 748456, name: '強襲', legendMarkerType: 'square'},
{  y: 384588, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分1242988)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 106871,
				            interval: 10687,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 33612},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 47952},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21622},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 88957},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45018},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 53159},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 44023},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 47711},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 53785},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16785},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28049},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26839},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18036},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14621},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34580},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30523},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27832},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28286},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 106871},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28277},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34184},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 41561},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48863},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 64682},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15608},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8114},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40184},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22901},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37485},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 72274},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4175},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6042},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12473},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12379},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14716},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2095},
]},
],
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

                   text: '嘎喵的PT構成(總分1242988)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1182394, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8714, name: '強襲', legendMarkerType: 'square'},
{  y: 51880, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分1227457)'
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
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5847},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5815},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9275},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 700},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11794},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12653},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5915},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33882},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1546},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7216},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2894},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7692},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5225},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1302},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15544},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5990},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15511},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30037},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12729},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6117},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7101},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11683},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17341},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11020},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11272},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7514},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5535},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26940},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16059},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42952},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 36039},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30444},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22206},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44649},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 47721},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25015},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19716},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 67060},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23659},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25419},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 38330},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10923},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 54948},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 86444},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12644},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34412},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26868},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29576},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25708},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29885},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17337},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34721},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29678},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 64361},
]},
],
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

                   text: '秋風冷月的PT構成(總分1227457)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 256101, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 426227, name: '強襲', legendMarkerType: 'square'},
{  y: 545129, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分1225797)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77816,
				            interval: 7781,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19932},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10713},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1974},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23846},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 55909},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 47561},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 56451},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 34830},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26006},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 77816},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 37677},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16401},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 61857},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41498},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32650},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 59638},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7732},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23434},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18883},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 49764},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44079},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52224},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 62432},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 69033},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 47557},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2074},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17255},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40993},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25622},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16858},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20166},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20982},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24729},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29905},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13523},
]},
],
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

                   text: '依司瑪耳的PT構成(總分1225797)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1099634, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13523, name: '強襲', legendMarkerType: 'square'},
{  y: 112640, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分1221317)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 115599,
				            interval: 11559,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3005},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6586},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15504},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25146},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 50683},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58093},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37279},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12279},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8663},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27378},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24455},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21002},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9477},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32850},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 51624},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51892},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 61544},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 43168},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27674},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 74530},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 70986},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 69526},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 71842},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 115599},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33705},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19462},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22030},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11171},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24495},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 98151},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4027},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7583},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8953},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8244},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2637},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10074},
]},
],
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

                   text: '雷克斯的PT構成(總分1221317)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1179799, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41518, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '鬼魅魍魎的PT統計(總分1195494)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 104517,
				            interval: 10451,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 32088},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 25545},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3770},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 39976},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 52640},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29929},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26741},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 44672},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 52512},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18956},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21696},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14596},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14495},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25023},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14634},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87523},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 104517},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38938},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31069},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 43123},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 53827},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44852},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 69856},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 47965},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3141},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23480},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25285},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16512},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 70034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11108},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24773},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13259},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27376},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5674},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2662},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13077},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分1195494)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1097565, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76516, name: '強襲', legendMarkerType: 'square'},
{  y: 21413, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1186996)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 183160,
				            interval: 18316,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5240},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10414},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11578},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3831},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1765},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3374},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4996},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7076},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4778},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 35164},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12048},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12648},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1789},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2885},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8585},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3494},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13675},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3101},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45177},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10716},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12914},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6272},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18446},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8435},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4721},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4496},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39165},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8240},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14689},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13362},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24066},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19570},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4777},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4506},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30147},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25637},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 71130},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49219},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 32820},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 59946},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 59011},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63945},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 183160},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 45317},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25417},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8284},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14341},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21543},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25325},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17413},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16425},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34946},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16951},
]},
],
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

                   text: '雪歌的PT構成(總分1186996)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 296809, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 734959, name: '強襲', legendMarkerType: 'square'},
{  y: 155228, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分1169011)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84927,
				            interval: 8492,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20185},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 84927},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 26706},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2813},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20875},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14335},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16564},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32643},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51106},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13496},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20015},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48508},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23012},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20846},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37694},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31284},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7345},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12405},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5711},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16161},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8441},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6875},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8251},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6187},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4243},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6397},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30379},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10813},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2270},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8073},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12369},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8698},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9174},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10660},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13367},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34700},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12072},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19076},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11944},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16546},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9974},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4482},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18917},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 57540},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23869},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29668},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33286},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27143},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13426},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3298},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 50962},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 43994},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37208},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40463},
]},
],
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

                   text: '土土昕的PT構成(總分1169011)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 282157, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 421845, name: '強襲', legendMarkerType: 'square'},
{  y: 465009, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分1014311)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 104486,
				            interval: 10448,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 28242},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17506},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16097},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 51883},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18753},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12386},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28318},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 37917},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37116},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1269},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 59525},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20213},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 58437},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22852},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25455},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26027},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44273},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47856},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 104486},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38675},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 47860},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37112},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42640},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 84768},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 49444},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12863},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12150},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7178},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11405},
]},
],
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

                   text: '亞歷的PT構成(總分1014311)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 970715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12863, name: '強襲', legendMarkerType: 'square'},
{  y: 30733, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分1012299)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95376,
				            interval: 9537,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13057},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11928},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16235},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24979},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14496},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28743},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 72308},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 63486},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31246},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41468},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39736},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14134},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17708},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34384},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9291},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15984},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15169},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6229},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5162},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 95376},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 53261},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 82669},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41347},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60246},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 67396},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37374},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16595},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24492},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4916},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4708},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5393},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7389},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13435},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11276},
]},
],
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

                   text: '赤雲天的PT構成(總分1012299)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 970098, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42201, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分990665)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84348,
				            interval: 8434,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 22636},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7030},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 24584},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17751},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32291},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15503},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35064},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 46906},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15958},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24129},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26458},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18653},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37446},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15977},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44261},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38471},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 55918},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15644},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32566},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 60608},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28497},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 84348},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41920},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18800},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 40687},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 82952},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6568},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17043},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26464},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4785},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8639},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18944},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11270},
]},
],
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

                   text: '魔法的PT構成(總分990665)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 947027, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43638, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '羽龍的PT統計(總分907954)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66501,
				            interval: 6650,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 33065},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15140},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 25467},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 33288},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32285},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21031},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 60525},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26924},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19169},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19927},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19990},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5087},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2646},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13152},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11945},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11318},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26093},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16965},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22632},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 63230},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 66501},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29248},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14607},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 40708},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27382},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 65166},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2972},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22691},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27013},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4525},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12292},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25600},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6436},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7737},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7331},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10446},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13038},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11345},
]},
],
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

                   text: '羽龍的PT構成(總分907954)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 788138, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119816, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分826137)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76729,
				            interval: 7672,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12044},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6406},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19521},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 33650},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12141},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46322},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23144},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16600},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23247},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21233},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55324},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 52502},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8454},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7456},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33076},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28216},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2337},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4177},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10553},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22591},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 57344},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39441},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31002},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41115},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18648},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7940},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3016},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 45773},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 43046},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 76729},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13226},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8286},
]},
],
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

                   text: '冰的PT構成(總分826137)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 803048, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8286, name: '強襲', legendMarkerType: 'square'},
{  y: 14803, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分822549)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72239,
				            interval: 7223,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6534},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7380},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22837},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14275},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14718},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5220},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8762},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8038},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24078},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 466},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1694},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16249},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8142},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12375},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38731},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33786},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10225},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33067},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4983},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39847},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17944},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3866},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10366},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12935},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10099},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11537},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21490},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26016},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22466},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20592},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24930},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16288},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14918},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 72239},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28868},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37346},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26569},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44741},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10479},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14479},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19742},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19476},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23701},
]},
],
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

                   text: '冰紅茶的PT構成(總分822549)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 266632, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 468040, name: '強襲', legendMarkerType: 'square'},
{  y: 87877, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分720973)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64477,
				            interval: 6447,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12166},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14402},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22792},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11626},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 48109},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 37062},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20799},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45266},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17494},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29881},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15949},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28084},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 32098},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5080},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21803},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17905},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5792},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29493},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14281},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16259},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 64477},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32631},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32710},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17314},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14607},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8260},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51446},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9516},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8099},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16242},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7990},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11340},
]},
],
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

                   text: '藏月的PT構成(總分720973)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 701643, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19330, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分626420)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47853,
				            interval: 4785,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13081},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3783},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15802},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12346},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13980},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5852},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16643},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15335},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4090},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18387},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5331},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13824},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7072},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9886},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21354},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16637},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28868},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14963},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9934},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7850},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2896},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 24377},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16446},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28246},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27103},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2302},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12958},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15538},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13683},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21751},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1178},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47853},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9912},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2676},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12852},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15106},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2912},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13925},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16684},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34805},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5369},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7463},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13752},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12634},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8981},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分626420)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 389186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 204568, name: '強襲', legendMarkerType: 'square'},
{  y: 32666, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分581117)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77291,
				            interval: 7729,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4236},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3019},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7712},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3511},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7293},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1952},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9603},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7397},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26958},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16989},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3866},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35012},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2321},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2648},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4601},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8435},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4694},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18787},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25933},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20306},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 77291},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25040},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29619},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37069},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9521},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 58328},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25237},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32667},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17168},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20715},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29433},
]},
],
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

                   text: '阿榮的PT構成(總分581117)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 154003, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 67316, name: '強襲', legendMarkerType: 'square'},
{  y: 359798, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '一柱擎天 歐歐的PT統計(總分2628149)'
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
                                    name: "一柱擎天 歐歐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4357},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4128},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8451},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5126},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7796},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5068},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8535},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23231},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6379},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7799},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7786},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7296},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7152},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8073},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11173},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8667},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34906},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7528},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2373},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9572},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8506},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一柱擎天 歐歐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21479},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9925},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27951},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13790},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14004},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13483},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23308},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25204},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 138559},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 114412},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 174789},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 81266},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33366},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 60700},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 96295},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 128805},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 85707},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39413},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 87722},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58125},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 134311},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 193424},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 96976},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 122049},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一柱擎天 歐歐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11439},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17911},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44630},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34126},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 43404},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 60878},
]},
],
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

                   text: '一柱擎天 歐歐的PT構成(總分2628149)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 203804, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2211957, name: '強襲', legendMarkerType: 'square'},
{  y: 212388, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哈哈黑的PT統計(總分2476674)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 297183,
				            interval: 29718,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈黑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7320},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5693},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5409},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11649},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5886},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7167},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1008},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7556},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24746},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12307},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 56},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12380},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9285},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2836},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2374},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 88},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8871},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9038},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18473},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈黑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13245},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17544},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 58542},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 37902},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35460},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48747},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈黑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31911},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7681},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10440},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15855},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19538},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8753},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 38621},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 108430},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 184833},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 96772},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28179},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 57846},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 68998},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 177047},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 144259},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29745},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 65478},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34138},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 66880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 117460},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 177467},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 136977},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 297183},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 182546},
]},
],
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

                   text: '哈哈黑的PT構成(總分2476674)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 158197, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2107037, name: '強襲', legendMarkerType: 'square'},
{  y: 211440, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Kenng光的PT統計(總分2408346)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 207556,
				            interval: 20755,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kenng光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4770},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4833},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5634},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3212},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6030},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6704},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6801},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6497},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1151},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7325},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3884},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25080},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1541},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3010},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4771},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18435},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8875},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2351},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8994},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7964},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kenng光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12343},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10021},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9243},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67909},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 52198},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17317},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32181},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27820},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46745},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39776},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 84303},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Kenng光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16942},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7700},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50200},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 135166},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 106072},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 115599},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 86151},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 67718},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 65029},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 98378},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38226},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21939},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 207556},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 41347},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 81113},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 130685},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 132096},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 85461},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 152615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 71679},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 155598},
]},
],
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

                   text: 'Kenng光的PT構成(總分2408346)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 141220, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1867270, name: '強襲', legendMarkerType: 'square'},
{  y: 399856, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Dante的PT統計(總分2388217)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 277965,
				            interval: 27796,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "DanteCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11550},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 95241},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41725},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36008},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44961},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18413},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dante殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4509},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5680},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6614},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5123},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6589},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5264},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6306},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6893},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8483},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29591},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19318},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8817},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2657},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8927},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11197},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5417},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3424},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11822},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dante強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19095},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7284},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7917},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13134},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16675},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20676},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16329},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23409},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20413},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 48666},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 100307},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37039},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 115772},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 118792},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51318},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 109509},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 129784},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 108408},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 60589},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59509},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 96378},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 64518},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 84721},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59752},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 182160},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 277965},
]},
],
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

                   text: 'Dante的PT構成(總分2388217)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 156682, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1950118, name: '強襲', legendMarkerType: 'square'},
{  y: 281417, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風林火山的PT統計(總分2205068)'
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
                                    name: "風林火山CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13356},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27266},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 29128},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 62470},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29213},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24960},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36851},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35136},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33120},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風林火山殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5392},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4842},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2638},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9763},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7630},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4876},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6411},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1426},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9861},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31268},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9457},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7563},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7099},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8904},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5410},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2912},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36058},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 895},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4501},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8955},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8906},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5987},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18204},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風林火山強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6216},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20041},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20312},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9924},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18178},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16362},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21682},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 37518},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39117},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 36009},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 100000},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 67224},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11786},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 63042},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 64026},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 94248},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 115827},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52221},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 78335},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27897},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 137941},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 133315},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 119708},
]},
],
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

                   text: '風林火山的PT構成(總分2205068)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 222643, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1690925, name: '強襲', legendMarkerType: 'square'},
{  y: 291500, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '소녀시대的PT統計(總分2202294)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 248657,
				            interval: 24865,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "소녀시대殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12599},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9842},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8999},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10432},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7470},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20435},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6162},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6456},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2854},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3220},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6845},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8080},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9382},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7178},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7718},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2800},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3556},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 57},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29591},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15559},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9078},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4821},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2024},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "소녀시대強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7716},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20073},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15665},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33039},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 59135},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 62885},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 94729},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 114904},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 53318},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 56237},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32066},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 62985},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 102262},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 130128},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 141765},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 81242},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 82633},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29308},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 90573},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 93619},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 248657},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "소녀시대CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19268},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19121},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32996},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28264},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39777},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45771},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 53704},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 55297},
]},
],
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

                   text: '소녀시대的PT構成(總分2202294)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 195158, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1712938, name: '強襲', legendMarkerType: 'square'},
{  y: 294198, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'cylsin的PT統計(總分2148829)'
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
                                    name: "cylsin強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6919},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13500},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35170},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 64915},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 86954},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 123261},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 98116},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 54399},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 50674},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 49598},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 59495},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 107098},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 60793},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30976},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35968},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 170295},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 189001},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36434},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cylsin殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2796},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4624},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8071},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3224},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2228},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12456},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6851},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6867},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29096},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4041},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7442},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2834},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7834},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 137},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17158},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13088},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 85},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11560},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37690},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9154},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9084},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6647},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cylsinCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7400},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16857},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21672},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31417},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 43863},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40185},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30911},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 45394},
]},
],
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

                   text: 'cylsin的PT構成(總分2148829)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 216168, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1694962, name: '強襲', legendMarkerType: 'square'},
{  y: 237699, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '薇拉的PT統計(總分2125796)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 256844,
				            interval: 25684,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薇拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14780},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11021},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13059},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 32047},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 48184},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42930},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 30260},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 89392},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 106849},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 178603},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30880},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 82016},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36745},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 192186},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40773},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 81765},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 61432},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 76403},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41923},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 132260},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 89178},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 183163},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 256844},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39156},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薇拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4296},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2299},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5453},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5465},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6713},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6584},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14282},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3500},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7845},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6662},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27338},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8625},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3080},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8398},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3594},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8942},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18039},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18563},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薇拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19352},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 34917},
]},
],
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

                   text: '薇拉的PT構成(總分2125796)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 159678, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1911849, name: '強襲', legendMarkerType: 'square'},
{  y: 54269, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天罡的PT統計(總分2119423)'
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
                                    name: "天罡強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13287},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15912},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15818},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18125},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10593},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18945},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 71834},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 48047},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 45909},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17418},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 75441},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 65319},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 167372},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 92536},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 127583},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 46331},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 53449},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28400},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30200},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 65138},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 186901},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 299997},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 101666},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天罡殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2887},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12040},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 479},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10837},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3737},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5325},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6104},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6863},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6464},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30801},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12918},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2941},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 818},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4207},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 57},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4628},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12813},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8581},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6044},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18909},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30431},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9437},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天罡CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8733},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14016},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15989},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17137},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20048},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34769},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31452},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31605},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 32133},
]},
],
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

                   text: '天罡的PT構成(總分2119423)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 197321, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1716220, name: '強襲', legendMarkerType: 'square'},
{  y: 205882, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '浪人的PT統計(總分2066505)'
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
                                    name: "浪人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7459},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12853},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9745},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7733},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 835},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7898},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3275},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25754},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9681},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3095},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7632},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22672},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12601},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9366},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25942},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4921},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10884},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4774},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6647},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8274},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11028},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9438},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20169},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6308},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "浪人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9625},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18438},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11699},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 26609},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16324},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18995},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28856},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 87740},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 57804},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 40434},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 69873},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35842},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 121023},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 95878},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 41057},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45143},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 77392},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 146912},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 159420},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 61890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "浪人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20702},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 93020},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34773},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28763},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32284},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 60279},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17702},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 59020},
]},
],
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

                   text: '浪人的PT構成(總分2066505)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 249011, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1470951, name: '強襲', legendMarkerType: 'square'},
{  y: 346543, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '畫川的PT統計(總分2036315)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 172225,
				            interval: 17222,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5112},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5219},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7120},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4580},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7307},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5212},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6075},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7642},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7060},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27814},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14746},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7910},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7959},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7591},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8364},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3341},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4385},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11773},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6637},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36019},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9659},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7470},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18933},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4678},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13131},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21115},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 38312},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33187},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26605},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 156273},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 59682},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3729},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 172225},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 56304},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 60552},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 96771},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86838},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 93074},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17962},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 52246},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 66420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6740},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9820},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14042},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38432},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 83173},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28762},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 83424},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39858},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 87733},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 43466},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30742},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 169413},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50646},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 63000},
]},
],
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

                   text: '畫川的PT構成(總分2036315)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 209027, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1078037, name: '強襲', legendMarkerType: 'square'},
{  y: 749251, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '法蘭西的PT統計(總分2027967)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 213018,
				            interval: 21301,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5839},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12445},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16255},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27264},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39117},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 97044},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26482},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 47705},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 79449},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 82386},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25769},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49068},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 39310},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27203},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 71238},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 57805},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 126411},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 213018},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 76247},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 98067},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9231},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5600},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 78},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9337},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2197},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10030},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7461},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2062},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23983},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7721},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16086},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6141},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16440},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7662},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3069},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7101},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6559},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38023},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19106},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9628},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12224},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 32484},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39002},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44166},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32600},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40730},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 48691},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 112886},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 129333},
]},
],
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

                   text: '法蘭西的PT構成(總分2027967)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 217730, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1318121, name: '強襲', legendMarkerType: 'square'},
{  y: 492116, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '南宮煌的PT統計(總分2022046)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 297054,
				            interval: 29705,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13180},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9176},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37723},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20062},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14821},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14815},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26568},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 35371},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 90900},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74068},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83477},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 76121},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27842},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 56159},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50127},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21087},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60904},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52041},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 52207},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 153205},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 297054},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 84171},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 121705},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3568},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3140},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6315},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4187},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6448},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10779},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11659},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2638},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30353},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7783},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6294},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7680},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8016},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8165},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7661},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7812},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36121},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8905},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8651},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9472},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9121},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9517},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 63845},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 54078},
]},
],
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

                   text: '南宮煌的PT構成(總分2022046)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 207945, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1686661, name: '強襲', legendMarkerType: 'square'},
{  y: 127440, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '加爾的PT統計(總分1956012)'
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
                                    name: "加爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11782},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4673},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6516},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6449},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1406},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3774},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4900},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5555},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8426},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20494},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7182},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7653},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9128},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2443},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8685},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11230},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4484},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38026},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10114},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8722},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8353},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19598},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8931},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18154},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12650},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11245},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44820},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 50418},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31905},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 126075},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10866},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 122287},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 72283},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 92959},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 93177},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 169581},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44316},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60820},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38302},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35832},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 140008},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 199998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10386},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29705},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34777},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 37804},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 55584},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 58249},
]},
],
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

                   text: '加爾的PT構成(總分1956012)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 225283, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1504224, name: '強襲', legendMarkerType: 'square'},
{  y: 226505, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'As的PT統計(總分1915508)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 139729,
				            interval: 13972,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "As殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4945},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10759},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4295},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9834},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7384},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5202},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 37391},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2932},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7324},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2739},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23413},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8158},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5542},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13326},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28427},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9149},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11529},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18518},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19284},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5691},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16265},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AsCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15448},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29089},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31762},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 99724},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 41585},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "As強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12354},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6791},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16711},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19689},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9941},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23982},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32733},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22124},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 75375},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 77951},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 74798},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 124892},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 53533},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30140},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31768},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 139729},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 79755},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31918},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56028},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 88077},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45679},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 63125},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 128702},
]},
],
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

                   text: 'As的PT構成(總分1915508)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 252107, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1445793, name: '強襲', legendMarkerType: 'square'},
{  y: 217608, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Tags的PT統計(總分1828863)'
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
                                    name: "Tags強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7067},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13719},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17206},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34919},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28833},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46857},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4391},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 84286},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 106291},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 73062},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 48383},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 50019},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 63528},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 95119},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 27175},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 85259},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 51589},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 94967},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45995},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 115066},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40106},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 86697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Tags殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9508},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2545},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 888},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5736},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3215},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5738},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6290},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13838},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7072},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28783},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7060},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11481},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7230},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8464},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7975},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7722},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15746},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9555},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 41482},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TagsCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10988},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9603},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14279},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13826},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45427},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55303},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 58577},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 199998},
]},
],
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

                   text: 'Tags的PT構成(總分1828863)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 200328, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1220534, name: '強襲', legendMarkerType: 'square'},
{  y: 408001, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大村的PT統計(總分1787644)'
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
                                    name: "大村殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12073},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4365},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4689},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12001},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5965},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3540},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 71},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3844},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31118},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1455},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13418},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8291},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1382},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8616},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9086},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8766},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3825},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12834},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34396},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3841},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13229},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6415},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大村強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13399},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11649},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 61995},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17614},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17530},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18451},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6776},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46179},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33112},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38334},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 68365},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 188658},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 86262},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45403},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 194924},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 80541},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 80407},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47166},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34431},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37374},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14625},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 79242},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 55786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大村CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15487},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15087},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13071},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29014},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26293},
]},
],
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

                   text: '大村的PT構成(總分1787644)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 210471, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1478221, name: '強襲', legendMarkerType: 'square'},
{  y: 98952, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '旭飛的PT統計(總分1588786)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 183153,
				            interval: 18315,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旭飛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1231},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5724},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 933},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8487},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5981},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3826},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16952},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6693},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2702},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6338},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7772},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30168},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2573},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12007},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5266},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24373},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16955},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4172},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35167},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9112},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8842},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18922},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10832},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旭飛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4495},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12607},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11084},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13621},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 31178},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19337},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42924},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34060},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 96245},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40484},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 35050},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32234},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34054},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 62254},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 99154},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 93873},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33066},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 78881},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 76974},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 67853},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 45812},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 183153},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旭飛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7725},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9614},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8501},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8991},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21934},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 38601},
]},
],
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

                   text: '旭飛的PT構成(總分1588786)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245028, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1248392, name: '強襲', legendMarkerType: 'square'},
{  y: 95366, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '逆天的PT統計(總分1501970)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 125107,
				            interval: 12510,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "逆天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10137},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3360},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6617},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3939},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6863},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1996},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12395},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32495},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 946},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1714},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12945},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7663},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8267},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16993},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8174},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13331},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31963},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5943},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16186},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9171},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8995},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9175},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15152},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1422},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "逆天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2514},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15115},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8323},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17375},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14201},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 43871},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 125107},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65530},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 72891},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 45188},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 68242},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 72097},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15327},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 52870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 58153},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 81319},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 119197},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 94722},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 67237},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "逆天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8738},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10759},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17506},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19793},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28180},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31874},
]},
],
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

                   text: '逆天的PT構成(總分1501970)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245842, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1139278, name: '強襲', legendMarkerType: 'square'},
{  y: 116850, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫星魂的PT統計(總分1360699)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 80189,
				            interval: 8018,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7993},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10147},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5975},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5105},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1819},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6870},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2669},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3865},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7310},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2694},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25777},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5218},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2869},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8343},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8029},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3234},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12021},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9049},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8750},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14277},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40322},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3882},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15217},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 25347},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34370},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37116},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 53135},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42573},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52955},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17052},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 55763},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34619},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 54204},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 61188},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 72417},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 80189},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17646},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 76149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56507},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60062},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 59032},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 50378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12440},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20402},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30791},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29429},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35858},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21101},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32420},
]},
],
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

                   text: '紫星魂的PT構成(總分1360699)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 192336, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 985922, name: '強襲', legendMarkerType: 'square'},
{  y: 182441, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
