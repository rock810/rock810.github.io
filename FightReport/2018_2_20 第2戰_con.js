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
				
				            maximum: 686846,
				            interval: 68684,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 132432},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 172301},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 234272},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 236957},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 227075},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 247722},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 264280},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 245151},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 296441},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 326180},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 350708},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 217038},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 238656},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 218105},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 417819},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 390846},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 503221},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 531303},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 574517},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 538065},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 484320},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 602705},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 668380},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 591932},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 625309},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 445252},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 686846},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 602080},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 598429},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 413440},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 129573},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 151587},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 185769},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 218344},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 223066},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 236160},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 234031},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 258265},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 249735},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 236277},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 265687},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 403770},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 416939},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 510443},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 441770},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 476285},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 465444},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 402123},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 396066},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 487400},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 457166},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 575647},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 493988},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 566064},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 503565},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 574507},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 565662},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 652551},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 594412},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 534325},
]},
],
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
				
				            maximum: 23988403,
				            interval: 2398840,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 132432},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 304733},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 539005},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 775962},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1003037},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1250759},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1515039},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1760190},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2056631},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2382811},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2733519},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2950557},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3189213},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3407318},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3825137},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4215983},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4719204},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5250507},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5825024},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6363089},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6847409},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7450114},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8118494},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8710426},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9335735},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9780987},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10467833},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11069913},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11668342},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12081782},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 129573},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 281160},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 466929},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 685273},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 908339},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1144499},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1378530},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1636795},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1886530},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2122807},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2388494},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2792264},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3209203},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3719646},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4161416},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4637701},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5103145},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5505268},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5901334},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6388734},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6845900},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7421547},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7915535},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8481599},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8985164},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9559671},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10125333},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10777884},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11372296},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11906621},
]},
],
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
				
				            maximum: 421954,
				            interval: 42195,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 17981},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 35808},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 40275},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 39359},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 44477},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 58035},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 47539},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 56744},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 54651},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 53896},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 69277},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 32665},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 24309},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 24527},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 51291},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 56432},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 86401},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 89636},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 109639},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 98285},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 81056},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 115705},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 121052},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 100853},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 148555},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 77610},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 159441},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 120195},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 116710},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 138786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 23648},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 24235},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 27296},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 44145},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 45318},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 47787},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 37420},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 49268},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 45994},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 57523},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 49585},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 63843},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 46960},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 72274},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 68849},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 75238},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 93076},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 51087},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 76806},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 79960},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 80731},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 126979},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 95452},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 101404},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 69952},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 90753},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 89050},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 128740},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 177250},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 155971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 84094},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 91558},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 149836},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 163384},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 137805},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 162252},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 160440},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 143617},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 204023},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 172935},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 229131},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 153598},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 194842},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 178141},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 334462},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 278384},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 345953},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 330568},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 306662},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 312981},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 318872},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 361540},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 371058},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 372724},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 324803},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 298334},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 354976},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 264946},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 371374},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 274654},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 83751},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 108269},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 108405},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 127893},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 134931},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 146363},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 126882},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 143119},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 148122},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 155124},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 153018},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 260123},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 324978},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 340294},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 320867},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 297804},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 344556},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 301879},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 298913},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 327372},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 245415},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 378779},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 335536},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 407148},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 373074},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 421954},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 362985},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 330807},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 304448},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 268420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 22174},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 19083},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 50068},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 46306},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 42817},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 42010},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 69729},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 65878},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 55619},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 23630},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 63084},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 79804},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 45001},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 97875},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 52054},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 103243},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 27812},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 49157},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 20347},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 80068},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 131020},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 69889},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 63000},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 57512},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 60539},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 61800},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 113627},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 193004},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 112714},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 109934},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 30357},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 44935},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 44161},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 34214},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 44793},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 27435},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 56301},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 44790},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 37767},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 99349},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 52300},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 30775},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 19505},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15437},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 32066},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 56030},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 70867},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 111099},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 158216},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 126799},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 84392},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 125460},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 176270},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 118355},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 151951},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 69308},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 172429},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 216939},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 110345},
]},
],
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
				            text: '裁風的PT統計(總分804249)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55220,
				            interval: 5522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4228},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5269},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9801},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4279},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10232},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11231},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8830},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12997},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14014},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 478},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15621},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6551},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 20885},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 41803},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 27249},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 25571},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11828},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9349},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17553},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 55220},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 34609},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20853},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15635},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 46539},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 50101},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 24963},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 42858},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 34585},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 31264},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 22672},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3940},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4605},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3802},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14086},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15367},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3181},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11983},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12558},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15666},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 23799},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 23411},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9919},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16191},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8673},
]},
],
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

                   text: '裁風的PT構成(總分804249)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 637068, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 108987, name: '強襲', legendMarkerType: 'square'},
{  y: 58194, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分758183)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 97626,
				            interval: 9762,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6983},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4704},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5943},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5390},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3363},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4007},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3657},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11256},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3572},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2509},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5171},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9580},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 13715},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11205},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6062},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2524},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2630},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11685},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4834},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 14882},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11669},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1621},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11908},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 17068},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6467},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 63},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3368},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9893},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 929},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12488},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13614},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7054},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 15652},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 19215},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12410},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 34808},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 39027},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 18390},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 97626},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 48357},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 35552},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 36969},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19836},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20244},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 69526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 14293},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16983},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11645},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17836},
]},
],
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

                   text: '雪歌的PT構成(總分758183)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 196658, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60757, name: '強襲', legendMarkerType: 'square'},
{  y: 500768, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分737239)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54771,
				            interval: 5477,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5627},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6051},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6743},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 22373},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13965},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14385},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 2872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4966},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4919},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8057},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12085},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5128},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6436},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2515},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11066},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16443},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2472},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2365},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 12871},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 31145},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 24405},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8296},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 46212},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 48556},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 37385},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18499},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13857},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14975},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 21952},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19718},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 52442},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 54771},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 36255},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 36664},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9371},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7319},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3552},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4656},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7575},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7991},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8015},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11438},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8738},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20385},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 21728},
]},
],
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

                   text: '葬月的PT構成(總分737239)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 571145, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94078, name: '強襲', legendMarkerType: 'square'},
{  y: 72016, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分714037)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53038,
				            interval: 5303,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3191},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4730},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4551},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9712},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13548},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6905},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3365},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9220},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7352},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10792},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13354},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 19573},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 22489},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 51685},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 53038},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 22631},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 29541},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5696},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11857},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 14482},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 37672},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 38177},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 35358},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11870},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20222},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3264},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21572},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10339},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5962},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6570},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5397},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9754},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12083},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15789},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 32769},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14040},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10976},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9063},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12620},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15198},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10434},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 41892},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15304},
]},
],
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

                   text: '嘎喵的PT構成(總分714037)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 496186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88324, name: '強襲', legendMarkerType: 'square'},
{  y: 129527, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分679494)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45935,
				            interval: 4593,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5594},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10409},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9917},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4831},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6583},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11519},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1019},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9268},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9918},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13111},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9977},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14381},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7132},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 14295},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 11049},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14349},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 27320},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16228},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2661},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12323},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5380},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 27184},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 23306},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 26514},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24437},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8431},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15512},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7385},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7361},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14935},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10976},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19203},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 15257},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16823},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18953},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 30618},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11044},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 23938},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12996},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6542},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 17380},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 23440},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16148},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 21639},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16273},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 45935},
]},
],
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

                   text: '暗之武者的PT構成(總分679494)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 372329, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 195335, name: '強襲', legendMarkerType: 'square'},
{  y: 111830, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'gotice的PT統計(總分676953)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47159,
				            interval: 4715,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2827},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6023},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9895},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6683},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14795},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7280},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11734},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5760},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16405},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9423},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6223},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 21144},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 21300},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15288},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 26595},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19394},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 30742},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20154},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 33191},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 7127},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23370},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 47159},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 36120},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8045},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 17918},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11169},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14930},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16103},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15357},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4807},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6797},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9801},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7864},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11329},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10117},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10026},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17836},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19754},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 3853},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4772},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2095},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8064},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 16465},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6992},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9746},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13009},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12527},
]},
],
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

                   text: 'gotice的PT構成(總分676953)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 482154, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121129, name: '強襲', legendMarkerType: 'square'},
{  y: 73670, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分667393)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70690,
				            interval: 7069,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5023},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4059},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1259},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11430},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9308},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4666},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9174},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7411},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10194},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5106},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12486},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9007},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12284},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7797},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16986},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6647},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15161},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6728},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6291},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13372},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9908},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7201},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 27333},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 47411},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 41741},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 35940},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 70690},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 166},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 43190},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4346},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4089},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5456},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2331},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6583},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7732},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11800},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7141},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 4945},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17654},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3433},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4251},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11471},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6564},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6354},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 871},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6429},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7662},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14393},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6604},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12336},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10060},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12186},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15787},
]},
],
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

                   text: '紫嫣的PT構成(總分667393)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 476915, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118401, name: '強襲', legendMarkerType: 'square'},
{  y: 72077, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分639298)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34155,
				            interval: 3415,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8973},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3577},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9162},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11019},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12019},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9271},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11047},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3508},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1707},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11017},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10162},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 27410},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 26698},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 34155},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3143},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11205},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18067},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8327},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 19313},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 7384},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3311},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 16013},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7861},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8873},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6450},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25725},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5648},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14296},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8716},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17747},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9742},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14105},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 19819},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 20391},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 27676},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18580},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19895},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 15671},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7615},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10645},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9884},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 14573},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17852},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 22034},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16711},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17553},
]},
],
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

                   text: '迪克的PT構成(總分639298)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361804, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 160627, name: '強襲', legendMarkerType: 'square'},
{  y: 116867, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分621544)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76827,
				            interval: 7682,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4760},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7405},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10843},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11804},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15178},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14299},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23513},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 44504},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 76827},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 65774},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10487},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1850},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10600},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6752},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5930},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 15372},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7703},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9208},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8329},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 284},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10038},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4758},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12976},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16618},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28402},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6221},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10321},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11394},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5696},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9317},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 35385},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3023},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 35451},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 36067},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13373},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10968},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2617},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2274},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19773},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3285},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10118},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6645},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5103},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11445},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6898},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10823},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9204},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8364},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11574},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5684},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11021},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12903},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5625},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17085},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12646},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 345},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 14798},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17239},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18695},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10840},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12867},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10229},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8322},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19246},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13759},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3889},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3271},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3535},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9089},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10033},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 17250},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11050},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6510},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14645},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8010},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 24735},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12807},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14438},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 45830},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 42352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5780},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4081},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13026},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13373},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 23955},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 31661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13345},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12712},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2328},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10926},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21611},
]},
],
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

                   text: '凱爾的PT構成(總分621544)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 285715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60922, name: '強襲', legendMarkerType: 'square'},
{  y: 274907, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分607587)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41534,
				            interval: 4153,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4583},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6014},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8866},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7259},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7392},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5261},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 17779},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18698},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18259},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14597},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2076},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2922},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3517},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3325},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5873},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5369},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 999},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8537},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4557},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3689},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7086},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 29208},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 26587},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 23422},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 12499},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28738},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14437},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 34678},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7559},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5898},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13111},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 4357},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 24299},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18147},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 30169},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7866},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21765},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 41534},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 19379},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7620},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 9422},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3072},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8086},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7064},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 11484},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13094},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11435},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15999},
]},
],
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

                   text: '無銘的PT構成(總分607587)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 419223, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 108708, name: '強襲', legendMarkerType: 'square'},
{  y: 79656, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分606085)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52263,
				            interval: 5226,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4648},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1742},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4351},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8727},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 339},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6048},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10321},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9591},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5166},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7525},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8379},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 18581},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 26643},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 52263},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19262},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16137},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13431},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 25110},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 27106},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17189},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11944},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14537},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7751},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12836},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7579},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11099},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9688},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17629},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6141},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7225},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8309},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9392},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8871},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5928},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7792},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21828},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 21756},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25821},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5812},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12027},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 19140},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 35229},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14696},
]},
],
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

                   text: '依司瑪耳的PT構成(總分606085)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 375622, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 143559, name: '強襲', legendMarkerType: 'square'},
{  y: 86904, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分601042)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46746,
				            interval: 4674,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1723},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6728},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2818},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4776},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7052},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6182},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5354},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2307},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6004},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5212},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4280},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9955},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 568},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5422},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9058},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8970},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10631},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16966},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 20956},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16908},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11813},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7707},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 27379},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 27109},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 40815},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 17259},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 4344},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10313},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10401},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6453},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6581},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11657},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5127},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10068},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10427},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7850},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13576},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16841},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10361},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 19787},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 46746},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 28457},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6003},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3470},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 11587},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13673},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18084},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12880},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16231},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16173},
]},
],
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

                   text: '羽龍的PT構成(總分601042)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309010, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98101, name: '強襲', legendMarkerType: 'square'},
{  y: 193931, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分576058)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41433,
				            interval: 4143,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5414},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5107},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5008},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9273},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7802},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11906},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8653},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3236},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1013},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 14978},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3433},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2339},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 15756},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 20268},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 38657},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 29990},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 29497},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7417},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9612},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8892},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 14090},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11776},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9505},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11768},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 21351},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 41433},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 36769},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 33186},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20948},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14240},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5131},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6571},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17799},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7365},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9499},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6797},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7461},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7613},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14830},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6844},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12046},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10795},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9990},
]},
],
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

                   text: '冰的PT構成(總分576058)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 453317, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93240, name: '強襲', legendMarkerType: 'square'},
{  y: 29501, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分569406)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45987,
				            interval: 4598,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7472},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9356},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7813},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8913},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4829},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9372},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7934},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9834},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6441},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 14861},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 13599},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 15053},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17051},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8329},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 25146},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14766},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 45987},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 45034},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23122},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12930},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13172},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6561},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 22998},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9126},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19626},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10793},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15612},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18630},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10757},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7551},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6816},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9088},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6753},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14644},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7163},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 9693},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13760},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11777},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18511},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14790},
]},
],
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

                   text: '龍的PT構成(總分569406)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 438103, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 55609, name: '強襲', legendMarkerType: 'square'},
{  y: 75694, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分558884)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43656,
				            interval: 4365,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4046},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5297},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5434},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6492},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5658},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9420},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 16265},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20076},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15869},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1522},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5144},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2323},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6881},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5883},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4767},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6333},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10587},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4691},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10448},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4004},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10834},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 31569},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 43656},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 22405},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15451},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8386},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 12047},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13070},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23906},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 36262},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 40039},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14174},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13420},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12452},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16933},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15289},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9268},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15268},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9431},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4986},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5115},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6225},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6891},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6961},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13706},
]},
],
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

                   text: '卡特爾的PT構成(總分558884)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 426443, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88557, name: '強襲', legendMarkerType: 'square'},
{  y: 43884, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分537529)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34543,
				            interval: 3454,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1834},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3281},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3158},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7103},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7373},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8335},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10258},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4018},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9717},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 15281},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17379},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11178},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7134},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6271},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5944},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16136},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13357},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10508},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5024},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 29843},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 25137},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10567},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 14935},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11869},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13571},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10941},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17919},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6511},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 21330},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 14447},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1949},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11607},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21580},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16049},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 34543},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4015},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8475},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 14605},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5702},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 22909},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18260},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13026},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 24450},
]},
],
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

                   text: 'Abbey的PT構成(總分537529)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 298071, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 128016, name: '強襲', legendMarkerType: 'square'},
{  y: 111442, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分471597)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28598,
				            interval: 2859,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5980},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6253},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1924},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1963},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7846},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9713},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2938},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9262},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7467},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5759},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7716},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9310},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6391},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8572},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 12017},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 21610},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 28598},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16810},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4716},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18859},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13137},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12913},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13756},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5226},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5421},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16359},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9144},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9148},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7081},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 16568},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7068},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11665},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13333},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8229},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21521},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9906},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 23906},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 26500},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4694},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 16729},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9920},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5626},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10043},
]},
],
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

                   text: '湖光的PT構成(總分471597)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 302457, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 122128, name: '強襲', legendMarkerType: 'square'},
{  y: 47012, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分451598)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39060,
				            interval: 3906,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4949},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7234},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9047},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8645},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7848},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6306},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8154},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6841},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10538},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13127},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6123},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14397},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8813},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6474},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1837},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11636},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6899},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15552},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13367},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 38168},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16603},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 33672},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10280},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14675},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9123},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 39060},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 29800},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 30945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10041},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9251},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8338},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4199},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12375},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 17281},
]},
],
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

                   text: '賽西的PT構成(總分451598)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 390113, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 61485, name: '強襲', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分434241)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34636,
				            interval: 3463,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4244},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2967},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4769},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7269},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2044},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 17268},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 15985},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 27494},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18597},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3063},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6694},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6374},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1700},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7483},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4471},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2157},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9089},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2150},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12465},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10200},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9846},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8586},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8053},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7855},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8046},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11664},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13727},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12427},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 20341},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17999},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 34636},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5959},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6764},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13629},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 21617},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14381},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17076},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8484},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7504},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5076},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14088},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分434241)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314440, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100637, name: '強襲', legendMarkerType: 'square'},
{  y: 19164, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分194204)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38376,
				            interval: 3837,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2244},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6765},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3980},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12245},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12594},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 4707},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 18362},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6446},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13729},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 38376},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11237},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15104},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21104},
]},
],
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

                   text: '西沙斯的PT構成(總分194204)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 74456, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20198, name: '強襲', legendMarkerType: 'square'},
{  y: 99550, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Naive修的PT統計(總分827378)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53951,
				            interval: 5395,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Naive修殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5060},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4176},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3952},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2922},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5072},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4111},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2705},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4813},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2109},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11110},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7660},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5684},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 22143},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15918},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32802},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4961},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1994},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9399},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 25270},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18544},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 17745},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14147},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19360},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8727},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5317},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11896},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Naive修CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2794},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9241},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8249},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12630},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12979},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 19107},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 27889},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 13192},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4475},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 27435},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18959},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23878},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23605},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19551},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 53951},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16057},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 31600},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 25052},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 35425},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Naive修強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7375},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9785},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10975},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11312},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13767},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5845},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8063},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6953},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8813},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14503},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23140},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 26213},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13793},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13151},
]},
],
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

                   text: 'Naive修的PT構成(總分827378)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 267621, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 173688, name: '強襲', legendMarkerType: 'square'},
{  y: 386069, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Asa的PT統計(總分686491)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68414,
				            interval: 6841,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Asa殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7038},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2146},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9860},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10996},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9631},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9076},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8985},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6039},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13668},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12492},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4660},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7135},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 13200},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7032},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 39517},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18468},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13993},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20557},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 22615},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 34706},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 24497},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17519},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 31314},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8440},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 19643},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18348},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20657},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 38142},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 68414},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 23710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AsaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7577},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7865},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1833},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9260},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16472},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17766},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Asa強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3779},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4714},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 16105},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2532},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9451},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 19509},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 17272},
]},
],
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

                   text: 'Asa的PT構成(總分686491)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 542498, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 73362, name: '強襲', legendMarkerType: 'square'},
{  y: 70631, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '海頓丁的PT統計(總分679926)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63684,
				            interval: 6368,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海頓丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9186},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12798},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10986},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4588},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9844},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 14237},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5955},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13485},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 23450},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5539},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 30381},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4403},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 31162},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16466},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 28728},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32788},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 25938},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 21293},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2689},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20782},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 44165},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 63684},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 20036},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 33618},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 49266},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 18820},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 25975},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12951},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海頓丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5269},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10583},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11293},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 16024},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海頓丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3521},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4706},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5007},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 792},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 258},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4119},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9904},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15237},
]},
],
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

                   text: '海頓丁的PT構成(總分679926)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 593213, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43544, name: '強襲', legendMarkerType: 'square'},
{  y: 43169, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分666618)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76827,
				            interval: 7682,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4760},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7405},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10843},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11804},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15178},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14299},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23513},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 44504},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 76827},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 65774},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10487},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1850},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10600},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6752},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5930},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 15372},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7703},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9208},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8329},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 284},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10038},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4758},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12976},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16618},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28402},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6221},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10321},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11394},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5696},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9317},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 35385},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3023},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 35451},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 36067},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13373},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10968},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2617},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2274},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19773},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3285},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10118},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6645},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5103},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11445},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6898},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10823},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9204},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8364},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11574},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5684},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11021},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12903},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5625},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17085},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12646},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 345},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 14798},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17239},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18695},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10840},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12867},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10229},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8322},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19246},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13759},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3889},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3271},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3535},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9089},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10033},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 17250},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11050},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6510},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14645},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8010},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 24735},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12807},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14438},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 45830},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 42352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5780},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4081},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13026},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13373},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 23955},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 31661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13345},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12712},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2328},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10926},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21611},
]},
],
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

                   text: '凱爾的PT構成(總分666618)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 351187, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 223555, name: '強襲', legendMarkerType: 'square'},
{  y: 91876, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '星宸的PT統計(總分656445)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51071,
				            interval: 5107,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星宸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1047},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6520},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 13809},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3924},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1826},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8816},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5276},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9771},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9130},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12190},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11120},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3336},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9518},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 26024},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17365},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 22425},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17713},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 955},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 15137},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 7276},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6404},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13376},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 21348},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 12798},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2175},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7445},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 23371},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 23667},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 45439},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 51071},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星宸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3012},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 17951},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6088},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 22714},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18939},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4523},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星宸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2560},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5378},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12900},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4568},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3422},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3908},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19345},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 46456},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 32526},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 41883},
]},
],
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

                   text: '星宸的PT構成(總分656445)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 410272, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 172946, name: '強襲', legendMarkerType: 'square'},
{  y: 73227, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Exia的PT統計(總分652125)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49710,
				            interval: 4971,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exia殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3854},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3292},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9567},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7001},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11038},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5793},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8574},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1146},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16429},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 29171},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 30466},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 15651},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8309},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8423},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 14324},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2118},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18377},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32013},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 32545},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 22286},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18433},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 49710},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 28624},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 31329},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16199},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16527},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11322},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10608},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15680},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exia強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12174},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6274},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12961},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11440},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 19045},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 48042},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 27215},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ExiaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3649},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5388},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6056},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21072},
]},
],
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

                   text: 'Exia的PT構成(總分652125)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 478809, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 137151, name: '強襲', legendMarkerType: 'square'},
{  y: 36165, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷斯特的PT統計(總分643563)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47326,
				            interval: 4732,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷斯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7357},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3767},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 12796},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 13043},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1364},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4619},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10753},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13671},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 40975},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24483},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 19229},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7112},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5780},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 14112},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14386},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5776},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 14011},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 27689},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 30961},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10568},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8328},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9607},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 12292},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 35280},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19327},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20162},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3350},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13277},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷斯特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6797},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17864},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10760},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13465},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18547},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13315},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17449},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16095},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18937},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷斯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7452},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 16305},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1441},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 47326},
]},
],
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

                   text: '雷斯特的PT構成(總分643563)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 418020, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 153019, name: '強襲', legendMarkerType: 'square'},
{  y: 72524, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '奈菲妮的PT統計(總分628905)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52719,
				            interval: 5271,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奈菲妮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 272},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3957},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7228},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6506},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6679},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7222},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5256},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10187},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4624},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6173},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6907},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3202},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8308},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 735},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 20222},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 22389},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 33491},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 26141},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6076},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 14352},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8194},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15751},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5506},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6781},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6959},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7288},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5698},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 18217},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21304},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10226},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奈菲妮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5954},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9357},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5494},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9188},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4465},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9877},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9453},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12121},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11524},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 234},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13857},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11534},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 15189},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24652},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18065},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 41357},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 52719},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奈菲妮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4809},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10025},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7778},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2272},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 21502},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 21628},
]},
],
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

                   text: '奈菲妮的PT構成(總分628905)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 305851, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 68014, name: '強襲', legendMarkerType: 'square'},
{  y: 255040, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '維吉爾的PT統計(總分620399)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53790,
				            interval: 5379,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7096},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6769},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9766},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10304},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8607},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8728},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 502},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7192},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11774},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 17020},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 23885},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 21995},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 33963},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 18995},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10310},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5594},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 30540},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 17073},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3481},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 22826},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9671},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11831},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 35351},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 53790},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 35602},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13248},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6204},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16104},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11802},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6903},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 21461},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18787},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3992},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10227},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6886},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2197},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6372},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 39826},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13726},
]},
],
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

                   text: '維吉爾的PT構成(總分620399)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 470023, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83226, name: '強襲', legendMarkerType: 'square'},
{  y: 67150, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '腓特烈的PT統計(總分620073)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54239,
				            interval: 5423,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "腓特烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1876},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3612},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2112},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4429},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4901},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2514},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1657},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6688},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5092},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4847},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2727},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8031},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 146},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7706},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 15600},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18462},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7514},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7821},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 15113},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 35882},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 54239},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 115},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 21630},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2355},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13389},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8023},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3374},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3539},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13097},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "腓特烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9161},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10176},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 19035},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7640},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20509},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21791},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 28161},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 33603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "腓特烈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6667},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7292},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7113},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9775},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10389},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9105},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4576},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 920},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19594},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 18609},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 9193},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 16066},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14694},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 28309},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18784},
]},
],
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

                   text: '腓特烈的PT構成(總分620073)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 288911, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 181086, name: '強襲', legendMarkerType: 'square'},
{  y: 150076, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫電的PT統計(總分616016)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48557,
				            interval: 4855,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4546},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4190},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7898},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9224},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10612},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 15492},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 15676},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5236},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13814},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5698},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4867},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 12427},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8173},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8475},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 35838},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 9563},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 32866},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32542},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 45072},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 24139},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 31753},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 27374},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13974},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9915},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5163},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8071},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14378},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3196},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11094},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10436},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2964},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11927},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6085},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5413},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 23651},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 10481},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12483},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 48557},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫電CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9162},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9092},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10826},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23673},
]},
],
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

                   text: '紫電的PT構成(總分616016)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 441702, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121561, name: '強襲', legendMarkerType: 'square'},
{  y: 52753, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '落葉的PT統計(總分595820)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44533,
				            interval: 4453,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "落葉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6528},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8909},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7211},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4481},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9509},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7294},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5891},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4620},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4878},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7989},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6354},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7351},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9980},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5475},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17406},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2047},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1768},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2521},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13006},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 17745},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 27438},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 44533},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 27938},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20836},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13826},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13500},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 38524},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19527},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11345},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7010},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "落葉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10994},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9476},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8075},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1716},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5108},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13219},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5212},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7862},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15457},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16023},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "落葉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11977},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11280},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3440},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 19859},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18704},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23059},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 38919},
]},
],
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

                   text: '落葉的PT構成(總分595820)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 375440, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93142, name: '強襲', legendMarkerType: 'square'},
{  y: 127238, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嗚啦啦的PT統計(總分593786)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36406,
				            interval: 3640,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗚啦啦殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5804},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5498},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5152},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3502},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13282},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11370},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4122},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10396},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5867},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11566},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6159},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4333},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6662},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 31091},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7174},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15312},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7744},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7517},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6397},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21908},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14126},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 32210},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 36406},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25933},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 35575},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17037},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18666},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7042},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗚啦啦強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3625},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3978},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1528},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4626},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2808},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5020},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1842},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 20259},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 18472},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22701},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7000},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 16040},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗚啦啦CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3164},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3743},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4950},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9056},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6115},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5494},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 20867},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 25003},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 29644},
]},
],
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

                   text: '嗚啦啦的PT構成(總分593786)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 377851, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 107899, name: '強襲', legendMarkerType: 'square'},
{  y: 108036, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紅之惡魔蕾咪莉亞的PT統計(總分584615)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38930,
				            interval: 3893,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅之惡魔蕾咪莉亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 12, 0), y: 687},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8737},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 26111},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 33553},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 28878},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13494},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 38930},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅之惡魔蕾咪莉亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7389},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6447},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7226},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6335},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 289},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4555},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10483},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8678},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5497},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3377},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10233},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5925},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1627},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 20292},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 22907},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 23400},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 21824},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 17095},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 18312},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13501},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10696},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 22529},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2362},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10356},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2617},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7860},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10275},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9591},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7321},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅之惡魔蕾咪莉亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3425},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2348},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4623},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4969},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11186},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8355},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9228},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10787},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20686},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7911},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20217},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11836},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14611},
]},
],
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

                   text: '紅之惡魔蕾咪莉亞的PT構成(總分584615)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304043, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130182, name: '強襲', legendMarkerType: 'square'},
{  y: 150390, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '希洛唯的PT統計(總分582694)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34287,
				            interval: 3428,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛唯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3412},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3402},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5957},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 14703},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3949},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7841},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13747},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6229},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16318},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3803},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7313},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9414},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5093},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6762},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 580},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4783},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8959},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32226},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4731},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 14521},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21967},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4975},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 7010},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11914},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 34287},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18395},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 20918},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10778},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10699},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛唯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6720},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10771},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4588},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9576},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10829},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 14152},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13689},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 29672},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18550},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 23622},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 29665},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛唯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7512},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9992},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6420},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 848},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3290},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5820},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10572},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 9023},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6087},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12933},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 23677},
]},
],
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

                   text: '希洛唯的PT構成(總分582694)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314686, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 96174, name: '強襲', legendMarkerType: 'square'},
{  y: 171834, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夜語的PT統計(總分570140)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59218,
				            interval: 5921,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜語殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6435},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5390},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5717},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8545},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5285},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4905},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7799},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2900},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2319},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10877},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8522},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3561},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8663},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4171},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10504},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8184},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8551},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11805},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17655},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16598},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21864},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14257},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19159},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 36453},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9369},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12428},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 29393},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 59218},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18608},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜語強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8507},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10904},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4948},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7039},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14439},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 54929},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16948},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜語CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7326},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3650},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10163},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13842},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12342},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 15494},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10474},
]},
],
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

                   text: '夜語的PT構成(總分570140)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 379135, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 117714, name: '強襲', legendMarkerType: 'square'},
{  y: 73291, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '聖十郎的PT統計(總分501445)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55285,
				            interval: 5528,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "聖十郎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2231},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3778},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10017},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 13789},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11068},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 23969},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16566},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2432},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10033},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8863},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 21048},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 948},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2618},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7663},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3508},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6790},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6565},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2886},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2414},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8294},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9003},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9857},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 12188},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8883},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5329},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14367},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3027},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2992},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4485},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "聖十郎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6434},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8994},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6598},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3798},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10257},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15710},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 55285},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 24755},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "聖十郎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5584},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1879},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10840},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6532},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 24448},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15147},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 26173},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 25372},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 18028},
]},
],
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

                   text: '聖十郎的PT構成(總分501445)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 235611, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131831, name: '強襲', legendMarkerType: 'square'},
{  y: 134003, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾佛烈姆的PT統計(總分485518)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47137,
				            interval: 4713,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈姆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10053},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10597},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9464},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 30439},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22280},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 47137},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈姆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2069},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6651},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2850},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6534},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7944},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5073},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4413},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4404},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4093},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12050},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4913},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6834},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9132},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 9637},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5711},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 26765},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1693},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13836},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12045},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 7794},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15465},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11582},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4542},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9647},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13099},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15238},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5327},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈姆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5983},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6457},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4345},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 20975},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20136},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 25822},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12415},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 30074},
]},
],
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

                   text: '艾佛烈姆的PT構成(總分485518)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 229341, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 126207, name: '強襲', legendMarkerType: 'square'},
{  y: 129970, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '稻草人的PT統計(總分435687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43433,
				            interval: 4343,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "稻草人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 612},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3191},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3360},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5422},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3845},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5589},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12133},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11718},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13963},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5474},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7290},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 535},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 22530},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1772},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 24474},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18177},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18945},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5763},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11192},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23815},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6259},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15098},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 43433},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11250},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3036},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 4547},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12940},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5650},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8559},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10413},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "稻草人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3385},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6426},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8269},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4019},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 626},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2223},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16213},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10400},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 4690},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "稻草人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7798},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10944},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6383},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 18246},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15080},
]},
],
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

                   text: '稻草人的PT構成(總分435687)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 320985, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56251, name: '強襲', legendMarkerType: 'square'},
{  y: 58451, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
var PlayerChart40 = new CanvasJS.Chart('PlayerChartContainer40',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Samuel的PT統計(總分434138)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28492,
				            interval: 2849,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Samuel殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 981},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8013},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5572},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12174},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5988},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5325},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8355},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4052},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9156},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8032},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9265},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8666},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6998},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 9474},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8924},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28492},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 25902},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18132},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7506},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1132},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 22153},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 24817},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16100},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6997},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 17086},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6093},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18891},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6764},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 14265},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17443},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SamuelCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Samuel強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3144},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5824},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4269},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6072},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1359},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 9750},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11387},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15720},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14568},
]},
],
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
var PlayerPieChart40 = new CanvasJS.Chart('PlayerPieChartContainer40',

    {

        title:{

                   text: 'Samuel的PT構成(總分434138)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 342748, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 72093, name: '強襲', legendMarkerType: 'square'},
{  y: 19297, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
