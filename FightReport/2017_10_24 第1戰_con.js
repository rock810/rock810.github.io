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
				
				            maximum: 627391,
				            interval: 62739,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 152817},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 175690},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 179272},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 190468},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 225353},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 206945},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 223637},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 211040},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 222776},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 245803},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 208084},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 260599},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 309145},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 388542},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 375852},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 454991},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 260596},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 419780},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 462083},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 434851},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 434591},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 442408},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 305814},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 527328},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 422046},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 532652},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 409752},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 527347},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 449884},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 410118},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 27970},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 177745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 174404},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 200735},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 212379},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 249161},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 268187},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 283461},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 237327},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 272355},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 257930},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 273296},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 291764},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 338207},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 496005},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 594323},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 464765},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 490660},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 459955},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 525908},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 442735},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 512252},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 556793},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 627391},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 534256},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 519489},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 469055},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 524939},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 474416},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 464480},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 442791},
]},
],
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
				
				            maximum: 21935398,
				            interval: 2193539,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 152817},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 328507},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 507779},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 698247},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 923600},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1130545},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1354182},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1565222},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1787998},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2033801},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2241885},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2502484},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2811629},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3200171},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3576023},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4031014},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4291610},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4711390},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5173473},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5608324},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6042915},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6485323},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6791137},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7318465},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7740511},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8273163},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8682915},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9210262},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9660146},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10070264},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 10098234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 177745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 352149},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 552884},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 765263},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1014424},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1282611},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1566072},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1803399},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2075754},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2333684},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2606980},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2898744},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3236951},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3732956},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4327279},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4792044},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5282704},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5742659},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6268567},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6711302},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7223554},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7780347},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8407738},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8941994},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9461483},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9930538},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10455477},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10929893},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11394373},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11837164},
]},
],
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
				
				            maximum: 398421,
				            interval: 39842,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 21355},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 33341},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 32012},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 34361},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 46970},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 37444},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 51175},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 44912},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 41650},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 50692},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25798},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 59404},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 73469},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 76961},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 83163},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 112901},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 69464},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 74383},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 66537},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 73412},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 71410},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 75673},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 62216},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 65549},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 74270},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 113300},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 95225},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 144492},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 129503},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 134751},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 20596},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 94193},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 100257},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 109497},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 130122},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 148745},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 116001},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 139694},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 121756},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 150953},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 144702},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 142465},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 157351},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 131396},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 130282},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 120839},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 136279},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 145895},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 207686},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 239287},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 348234},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 313301},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 281801},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 217757},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 367447},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 257643},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 269218},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 199206},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 247587},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 170367},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 182442},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 7374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 37269},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 42092},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 37763},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 25985},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 29638},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 53500},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 32768},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 44372},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 30173},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 50409},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 39821},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 43844},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 104280},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 181299},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 171850},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 205811},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 45237},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 137711},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 156259},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13205},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 49880},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 84934},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25841},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 94332},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 90133},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 150134},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 115321},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 135268},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 150014},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 92925},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 126424},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 134298},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 140867},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 117934},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 141272},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 156400},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 134062},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 158865},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 148916},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 182405},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 158838},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 164374},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 196982},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 305762},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 398421},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 327868},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 320193},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 282114},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 328494},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 270719},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 291760},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 385177},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 366468},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 286424},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 278636},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 268281},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 311802},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 269369},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 228581},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 219786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 25357},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14063},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 31839},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 57636},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 55912},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 66846},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 92810},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 52702},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 72316},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28745},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 75309},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 60794},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 56965},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 103165},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 98261},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 62883},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 89699},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 105709},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 108251},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 109753},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 121447},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 97800},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 174662},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 169356},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 118002},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 121059},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 125855},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 107102},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 134169},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 126966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 25964},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 26043},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28029},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 36809},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 51977},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 44941},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 56589},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25760},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 51123},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 46780},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 39149},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 66596},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 84260},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 87078},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 97641},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 74014},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 80768},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 72132},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 89163},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 62263},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 99045},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 73816},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 86261},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 78476},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 122851},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 79715},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 87282},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 97945},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 101730},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 96039},
]},
],
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
				            text: '喵鼠的PT統計(總分708053)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72499,
				            interval: 7249,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7731},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10978},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11505},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14134},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17458},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13013},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6535},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17467},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16566},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10945},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24051},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16813},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 43234},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35004},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30820},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30306},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 49186},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 72499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2381},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1559},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7535},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4621},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6028},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4646},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3556},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2371},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7243},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4066},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9780},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5658},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2467},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9219},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3707},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5997},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1330},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6085},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 901},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3097},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4443},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5461},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1895},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9457},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12819},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6912},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6740},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14464},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14994},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20944},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15211},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16299},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35858},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22064},
]},
],
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

                   text: '喵鼠的PT構成(總分708053)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 133234, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146574, name: '強襲', legendMarkerType: 'square'},
{  y: 428245, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分652981)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36738,
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4862},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10135},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4346},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6664},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12914},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10225},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3821},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13273},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15311},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14607},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8748},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8270},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5453},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7817},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7060},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14049},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9231},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28054},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 33318},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36088},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14564},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8625},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8790},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15028},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28885},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 36738},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8899},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18784},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6517},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4977},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6589},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6327},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7616},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10971},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15321},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19491},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21691},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10703},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14523},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13031},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22471},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16465},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5990},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8747},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11558},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13138},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10954},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16284},
]},
],
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

                   text: '阿拉的PT構成(總分652981)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 416134, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 66671, name: '強襲', legendMarkerType: 'square'},
{  y: 170176, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分606863)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56409,
				            interval: 5640,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8492},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10139},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10377},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7429},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3206},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4647},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5714},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12854},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6155},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9846},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9200},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5796},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 886},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14353},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6197},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3379},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12027},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14243},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32497},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 56409},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37057},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 159},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43920},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24686},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27768},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4503},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12207},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7701},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6986},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7480},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7151},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7985},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8204},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17348},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11430},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6056},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7292},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7953},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4892},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8536},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9214},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11346},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11012},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12947},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15294},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8971},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 33283},
]},
],
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

                   text: '冰的PT構成(總分606863)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 403483, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 148226, name: '強襲', legendMarkerType: 'square'},
{  y: 55154, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分563082)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 75908,
				            interval: 7590,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9234},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5689},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2859},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3345},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4840},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6556},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4379},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9870},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5625},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11846},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3703},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5288},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2758},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14096},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5688},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2734},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2438},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8399},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3231},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6067},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5444},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9503},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8730},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5763},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10750},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10557},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7034},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16288},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28519},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27902},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23711},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18950},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17087},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28000},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 75908},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 33966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5022},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11742},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 50223},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27807},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14672},
]},
],
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

                   text: '雪歌的PT構成(總分563082)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 176251, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 109466, name: '強襲', legendMarkerType: 'square'},
{  y: 277365, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分562430)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53245,
				            interval: 5324,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8565},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5926},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8461},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10148},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1000},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10015},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11220},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9447},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4898},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8770},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5951},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7400},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 948},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9556},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10755},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6012},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7500},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23512},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30215},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 53245},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38929},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19563},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27204},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14648},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3679},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12318},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10757},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15818},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 24438},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9052},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15161},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7290},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11195},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15410},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4922},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6280},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8270},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5862},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15952},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7644},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12369},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28834},
]},
],
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

                   text: '嘎喵的PT構成(總分562430)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 373933, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90133, name: '強襲', legendMarkerType: 'square'},
{  y: 98364, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分555329)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30736,
				            interval: 3073,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4948},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4055},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2760},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9922},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10374},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2411},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7966},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9234},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6260},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11301},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5519},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11687},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3998},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11489},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2427},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6235},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4076},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9095},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20390},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21310},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30736},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6354},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12127},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21625},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21962},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21489},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14121},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1718},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5081},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7726},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7290},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2283},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7703},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12189},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3673},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16476},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13205},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15688},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10815},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9826},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15855},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20491},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14312},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3887},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6730},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17196},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14969},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12221},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14419},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12538},
]},
],
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

                   text: '土土昕的PT構成(總分555329)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 303441, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169928, name: '強襲', legendMarkerType: 'square'},
{  y: 81960, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分544430)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46510,
				            interval: 4651,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4579},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2437},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6171},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7251},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8378},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7920},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8387},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10310},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9383},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5282},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4396},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14664},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10818},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5809},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11711},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1600},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22588},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14666},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12811},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1611},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6356},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20083},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30241},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 46510},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 60},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13246},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6539},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8372},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11824},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4266},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6987},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29796},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27793},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10349},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13318},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19518},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18067},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5081},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6822},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7904},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9077},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18645},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15917},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12723},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12930},
]},
],
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

                   text: '葬月的PT構成(總分544430)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 325237, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130094, name: '強襲', legendMarkerType: 'square'},
{  y: 89099, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分524810)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29510,
				            interval: 2951,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4390},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3456},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7778},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17763},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6082},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10498},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27824},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20726},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20183},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15800},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11590},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5688},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7791},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3250},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10246},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7014},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18700},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21439},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16213},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3696},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5639},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8318},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11340},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9154},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4065},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8944},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5717},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5355},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9414},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6736},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5037},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12864},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11693},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6493},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20720},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13403},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23318},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14592},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12343},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29510},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10385},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5191},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21198},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11056},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5670},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6528},
]},
],
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

                   text: '緋煌的PT構成(總分524810)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 288379, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134500, name: '強襲', legendMarkerType: 'square'},
{  y: 101931, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分517788)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35674,
				            interval: 3567,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2836},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2120},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4535},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9962},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6864},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5986},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9621},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7816},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12196},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6002},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5829},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16513},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8239},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10542},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9244},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10195},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8281},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5805},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7057},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28497},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14643},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13556},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10448},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16346},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20146},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17715},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15647},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11917},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10244},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10808},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5342},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8249},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7589},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8382},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6486},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8616},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35674},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10734},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16457},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14461},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21541},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25713},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4109},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7167},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17658},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分517788)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319610, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169244, name: '強襲', legendMarkerType: 'square'},
{  y: 28934, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分509236)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38284,
				            interval: 3828,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10482},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11093},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14353},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22038},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26049},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20948},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23625},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17657},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15897},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 20596},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7227},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5916},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 42},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4742},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4653},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5511},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5046},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1252},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9280},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2059},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1745},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4819},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7265},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 462},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3164},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5432},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8189},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6067},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4321},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8159},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8126},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1194},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5555},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7255},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8579},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 62},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6807},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3472},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10998},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8917},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8145},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20374},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12292},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22562},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16087},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24227},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38284},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28211},
]},
],
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

                   text: '依司瑪耳的PT構成(總分509236)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 136401, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 190097, name: '強襲', legendMarkerType: 'square'},
{  y: 182738, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分506891)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44821,
				            interval: 4482,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4892},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5906},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7115},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5754},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7568},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7865},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15195},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3087},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10369},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4311},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12676},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5509},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6121},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5448},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3167},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5856},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7591},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11252},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 44821},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18855},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22305},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22850},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7249},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8803},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12564},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6628},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14128},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14719},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11131},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 7374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6641},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7262},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18656},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18932},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3451},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 30520},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9077},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16779},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8776},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11997},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24586},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15564},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13517},
]},
],
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

                   text: '魔法的PT構成(總分506891)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321133, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 156677, name: '強襲', legendMarkerType: 'square'},
{  y: 29081, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分503534)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56521,
				            interval: 5652,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4821},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6980},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5754},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3360},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9661},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3937},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3170},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3470},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5450},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10895},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6792},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7864},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3479},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4616},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10574},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13036},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7011},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13604},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4267},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8499},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3884},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6680},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6277},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5854},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11162},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13520},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10477},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9553},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9503},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15931},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17445},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29415},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30629},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5397},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9121},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10495},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 56521},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29968},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20419},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12406},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 45627},
]},
],
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

                   text: '秋風冷月的PT構成(總分503534)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 201104, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 189954, name: '強襲', legendMarkerType: 'square'},
{  y: 112476, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分463485)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56582,
				            interval: 5658,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3999},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4075},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11450},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6099},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1769},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4492},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4648},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8908},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3564},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2094},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10706},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5549},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4212},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8861},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9468},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4745},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6257},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1742},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12867},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3725},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8900},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4610},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9096},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11499},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19403},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6335},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11224},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2936},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4071},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10417},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11635},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11087},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8406},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21347},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12430},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14563},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 56582},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3301},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3538},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11521},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6125},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18450},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18620},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10064},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10860},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17715},
]},
],
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

                   text: '阿榮的PT構成(總分463485)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 212753, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 150538, name: '強襲', legendMarkerType: 'square'},
{  y: 100194, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分461149)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43073,
				            interval: 4307,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1240},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3989},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7583},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7779},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10028},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4152},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7834},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2690},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10910},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2655},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10274},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8091},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8606},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4038},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4862},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5515},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2772},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14458},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6289},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27819},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10381},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28250},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22952},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43073},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1483},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8128},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3976},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10664},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15056},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5924},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12228},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3681},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3492},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5012},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5205},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12417},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9608},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16134},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9414},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7154},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6055},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24847},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12849},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14743},
]},
],
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

                   text: '藏月的PT構成(總分461149)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 295547, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130611, name: '強襲', legendMarkerType: 'square'},
{  y: 34991, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分449934)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33071,
				            interval: 3307,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3817},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4988},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2114},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5070},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13131},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10058},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13382},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12233},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3529},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10184},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10594},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12090},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12089},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6917},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1880},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9765},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15509},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16010},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17699},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3709},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7639},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12469},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16770},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27206},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33071},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3647},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14758},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8806},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5357},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13522},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7634},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10342},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19596},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2052},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4377},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15918},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8449},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13113},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14650},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12469},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13321},
]},
],
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

                   text: '冰紅茶的PT構成(總分449934)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314491, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 84349, name: '強襲', legendMarkerType: 'square'},
{  y: 51094, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分445202)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24985,
				            interval: 2498,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2978},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1751},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7835},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7659},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12105},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5598},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 977},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4495},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9624},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8875},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9619},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7837},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5087},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8995},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6271},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8141},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7063},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13455},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19835},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8028},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21474},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21991},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8234},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24985},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12939},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6524},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15588},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15047},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7431},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1443},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6445},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7532},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8174},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15315},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20901},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20735},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11046},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12735},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12284},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6577},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10551},
]},
],
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

                   text: '寇內爾緹的PT構成(總分445202)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87976, name: '強襲', legendMarkerType: 'square'},
{  y: 53193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分412696)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37458,
				            interval: 3745,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6281},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7050},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5915},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2349},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3499},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 222},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6594},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4286},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9114},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6376},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5905},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5610},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7355},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5917},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3806},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3222},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3048},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15479},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16137},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31567},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 23793},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 37458},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32420},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13935},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5119},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2326},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10331},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13602},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5264},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9561},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16609},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 22702},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21256},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17042},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6804},
]},
],
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

                   text: '神隱的PT構成(總分412696)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 262366, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 51092, name: '強襲', legendMarkerType: 'square'},
{  y: 99238, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分408803)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33544,
				            interval: 3354,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3455},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8762},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4666},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6229},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7855},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5544},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7773},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5528},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5957},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8728},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3384},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12218},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6993},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7084},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6647},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7230},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22494},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17576},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23102},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5372},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18664},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19279},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33544},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7964},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6249},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2813},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17810},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15328},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5478},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4522},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4553},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 872},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2669},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12075},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7209},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7623},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9974},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13081},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8076},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3791},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9429},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9101},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5402},
]},
],
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

                   text: '亞歷的PT構成(總分408803)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 310426, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70654, name: '強襲', legendMarkerType: 'square'},
{  y: 27723, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分367764)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40584,
				            interval: 4058,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4049},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4528},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3699},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5840},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13089},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4409},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5315},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4374},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5617},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2338},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5251},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13805},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4366},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11371},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10977},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3709},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20167},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15915},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6418},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7660},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3755},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6189},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12614},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4021},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4029},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13057},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19850},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17605},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 40584},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4536},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15006},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21465},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11006},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6083},
]},
],
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

                   text: '幻想魔術師的PT構成(總分367764)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 193069, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116599, name: '強襲', legendMarkerType: 'square'},
{  y: 58096, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分333774)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21875,
				            interval: 2187,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9068},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2941},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5144},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9333},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7471},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2766},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6544},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7772},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8856},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5858},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8930},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13626},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15767},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 53},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4053},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8226},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5889},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19288},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21875},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17781},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10247},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2603},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7046},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1160},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4939},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9684},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7710},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9893},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2639},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1590},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6430},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6468},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10861},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16317},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11293},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6192},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21124},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6118},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10219},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分333774)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 238752, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78685, name: '強襲', legendMarkerType: 'square'},
{  y: 16337, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '斯特拉托斯的PT統計(總分810242)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50370,
				            interval: 5037,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斯特拉托斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10929},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6417},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10594},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18038},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21105},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 47020},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11579},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26088},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25103},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30783},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斯特拉托斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2761},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6079},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5796},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7707},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3362},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4265},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15005},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3156},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9625},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11821},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7902},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4891},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19614},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 35730},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 33733},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22127},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6369},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8310},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2442},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3124},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 50370},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7214},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 34731},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7851},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3804},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18449},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31023},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20285},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4991},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斯特拉托斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9435},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5903},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8802},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24413},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12205},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13937},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14686},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 32885},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17509},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20448},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22812},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27014},
]},
],
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

                   text: '斯特拉托斯的PT構成(總分810242)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 392537, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 207656, name: '強襲', legendMarkerType: 'square'},
{  y: 210049, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '庫克的PT統計(總分756682)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50314,
				            interval: 5031,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "庫克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10201},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6835},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2410},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3455},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4716},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5785},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 429},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9679},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5244},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12697},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15398},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5505},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10739},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6972},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2270},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28663},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24999},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19469},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50314},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 37461},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16180},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10351},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6541},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8243},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4376},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16777},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9442},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "庫克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4340},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8126},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10335},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9316},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7291},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11809},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8605},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16282},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25224},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20833},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25184},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5822},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26378},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31062},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7687},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "庫克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 643},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9788},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8532},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5562},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17446},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11481},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16341},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14986},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17080},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38183},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21181},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19023},
]},
],
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

                   text: '庫克的PT構成(總分756682)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 335151, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 241285, name: '強襲', legendMarkerType: 'square'},
{  y: 180246, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰室徹的PT統計(總分731398)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48151,
				            interval: 4815,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰室徹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5597},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5614},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5362},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13669},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16292},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11923},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5913},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13877},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6989},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12585},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10136},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11245},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12444},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30988},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29459},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 48151},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20240},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2572},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4456},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12294},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19313},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26105},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41301},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16921},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27235},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9783},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24172},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10966},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13842},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17173},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰室徹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7330},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7008},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11169},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16044},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19983},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13202},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16630},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰室徹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3700},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6947},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10404},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8361},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13568},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14599},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17377},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26268},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33055},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19136},
]},
],
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

                   text: '冰室徹的PT構成(總分731398)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 486617, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 153415, name: '強襲', legendMarkerType: 'square'},
{  y: 91366, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ji Ni的PT統計(總分702985)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50781,
				            interval: 5078,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ji Ni殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11578},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3928},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14474},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8851},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5016},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2505},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10945},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8562},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14729},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9370},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8073},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12219},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5300},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27112},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37513},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15591},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23290},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14389},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20050},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6392},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6098},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15688},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 31457},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25435},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16855},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25058},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23779},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 50781},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17068},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13753},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ji Ni強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6886},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2242},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3510},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16541},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9820},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11408},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15779},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11617},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22682},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ji NiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8682},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9735},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14148},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11473},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23173},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11125},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20367},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17938},
]},
],
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

                   text: 'Ji Ni的PT構成(總分702985)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 485859, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100485, name: '強襲', legendMarkerType: 'square'},
{  y: 116641, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '達爾文的PT統計(總分699721)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42402,
				            interval: 4240,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "達爾文殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5498},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4450},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11134},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5404},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3494},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10783},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13433},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5982},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12312},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5413},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17248},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6678},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20861},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28116},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 31661},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8306},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12940},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9596},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16219},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37550},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 42402},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17611},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13490},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 40525},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24909},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7743},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "達爾文CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6724},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19595},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5332},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12109},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23642},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20667},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16073},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12330},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20352},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "達爾文強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5791},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6716},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8180},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12008},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14860},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18313},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27022},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19572},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8848},
]},
],
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

                   text: '達爾文的PT構成(總分699721)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 441587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121310, name: '強襲', legendMarkerType: 'square'},
{  y: 136824, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '爵士精靈的PT統計(總分689105)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43214,
				            interval: 4321,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爵士精靈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6610},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9947},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14847},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14225},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18265},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18323},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17702},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12351},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24729},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爵士精靈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3513},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9681},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2178},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1982},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5353},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8041},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2692},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9924},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5633},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2309},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7484},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4919},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5857},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3275},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4588},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18721},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23586},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 37085},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25152},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 41550},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8098},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15936},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11433},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12998},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 890},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 517},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11843},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9522},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爵士精靈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9039},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7569},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8262},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13508},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3234},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21397},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17081},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 25118},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 43214},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20271},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13614},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17566},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15117},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18190},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24135},
]},
],
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

                   text: '爵士精靈的PT構成(總分689105)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 294791, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 136999, name: '強襲', legendMarkerType: 'square'},
{  y: 257315, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '粉絲應該放水煮的PT統計(總分685412)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47472,
				            interval: 4747,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "粉絲應該放水煮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9084},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10763},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8247},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9647},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17749},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10539},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4492},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4263},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11653},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14603},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6817},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8265},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7719},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21643},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 47472},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24875},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19051},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13852},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6842},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7712},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5698},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24992},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26808},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33815},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13435},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14577},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41890},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19619},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20960},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17627},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "粉絲應該放水煮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5850},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14341},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9321},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5431},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21653},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4732},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19471},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15667},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "粉絲應該放水煮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7702},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8379},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18145},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12572},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 36839},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5719},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10272},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4609},
]},
],
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

                   text: '粉絲應該放水煮的PT構成(總分685412)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 484709, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 104237, name: '強襲', legendMarkerType: 'square'},
{  y: 96466, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Exi的PT統計(總分672675)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44887,
				            interval: 4488,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ExiCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5430},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10757},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12904},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exi殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1883},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5400},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11551},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1474},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3579},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8441},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7067},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9956},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10025},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13287},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14924},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1875},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20223},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 31297},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33496},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19601},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9131},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7017},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15069},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7192},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22488},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35701},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29167},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15228},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 34110},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27761},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15708},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exi強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3596},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5397},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4688},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10422},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5733},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5835},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18833},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15220},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8933},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10059},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43795},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14491},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7682},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44887},
]},
],
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

                   text: 'Exi的PT構成(總分672675)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 425009, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 199571, name: '強襲', legendMarkerType: 'square'},
{  y: 48095, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅恩格林的PT統計(總分664588)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46257,
				            interval: 4625,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅恩格林殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6206},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8215},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6717},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7425},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4466},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11187},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5035},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10662},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3121},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5065},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5290},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7101},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14047},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8281},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5425},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6339},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16218},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38414},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23259},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22395},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3349},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7384},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7165},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7207},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16877},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14465},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6952},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11669},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4114},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅恩格林CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3936},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7746},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9145},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11745},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 39790},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11149},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24712},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22155},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46257},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅恩格林強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5657},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8989},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11871},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14009},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11547},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25961},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19747},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21333},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8194},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41496},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16775},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8324},
]},
],
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

                   text: '羅恩格林的PT構成(總分664588)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 294050, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 193903, name: '強襲', legendMarkerType: 'square'},
{  y: 176635, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Joyce的PT統計(總分639787)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42500,
				            interval: 4250,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Joyce殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6037},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6477},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9045},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4543},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6783},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14348},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13780},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5068},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11475},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8851},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4554},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13894},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10478},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14255},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 42500},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31930},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16076},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6906},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11656},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7689},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13469},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21097},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23686},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29317},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3164},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38644},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23120},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22688},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16772},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JoyceCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9666},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12111},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19393},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19801},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20810},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Joyce強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9174},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4877},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24929},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13126},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31958},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18180},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17460},
]},
],
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

                   text: 'Joyce的PT構成(總分639787)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 438302, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119704, name: '強襲', legendMarkerType: 'square'},
{  y: 81781, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '悠悠找不到的PT統計(總分607708)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47078,
				            interval: 4707,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠悠找不到殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7873},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6154},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2250},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4450},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12489},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13828},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6113},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9516},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10886},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9799},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13000},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3393},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8764},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2165},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12238},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22400},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36868},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 47078},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13622},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21887},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22991},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15770},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9778},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17411},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11729},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5446},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12169},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11729},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9130},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠悠找不到強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9761},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20271},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8540},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21156},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25889},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17292},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19405},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27738},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15966},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠悠找不到CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20222},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4730},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19398},
]},
],
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

                   text: '悠悠找不到的PT構成(總分607708)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 380926, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 182432, name: '強襲', legendMarkerType: 'square'},
{  y: 44350, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '真野 恵里菜的PT統計(總分572099)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33972,
				            interval: 3397,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真野 恵里菜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4573},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19414},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11323},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13775},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11110},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13337},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17667},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18521},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12385},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真野 恵里菜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7124},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5812},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1196},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7858},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10917},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10605},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9069},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5235},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 46},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5174},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10284},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14759},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27943},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28606},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19697},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15430},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10807},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32057},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25915},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12918},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7781},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16117},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22663},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33972},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17787},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17859},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9428},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14626},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13278},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "真野 恵里菜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3554},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5365},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9585},
]},
],
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

                   text: '真野 恵里菜的PT構成(總分572099)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 416722, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 136873, name: '強襲', legendMarkerType: 'square'},
{  y: 18504, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '維安卡的PT統計(總分540546)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29642,
				            interval: 2964,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維安卡殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10071},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12774},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9957},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4369},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8639},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10994},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4991},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12696},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15842},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4371},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2201},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7983},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12796},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10056},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2497},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21993},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11073},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16040},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12343},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5995},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7215},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6726},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18837},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15111},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11382},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7604},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7840},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7359},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維安卡強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6129},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8118},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12634},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9124},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15864},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11269},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15699},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11854},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17457},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12478},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9258},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維安卡CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18567},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6034},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16606},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3793},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29642},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20622},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24094},
]},
],
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

                   text: '維安卡的PT構成(總分540546)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 291304, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129884, name: '強襲', legendMarkerType: 'square'},
{  y: 119358, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '百濕不得騎姊的PT統計(總分539986)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35170,
				            interval: 3517,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "百濕不得騎姊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5087},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6718},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5632},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3919},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14238},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5387},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13233},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5308},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11857},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12621},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11922},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6259},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10541},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11076},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12197},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9187},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10291},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6596},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6009},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13250},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6501},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1133},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4480},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 25057},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20999},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35170},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18506},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "百濕不得騎姊CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2443},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9234},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19693},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25305},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25335},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15367},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "百濕不得騎姊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13795},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11839},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8974},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7951},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5800},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13640},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10213},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20566},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18325},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21142},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5288},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11902},
]},
],
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

                   text: '百濕不得騎姊的PT構成(總分539986)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 293174, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149435, name: '強襲', legendMarkerType: 'square'},
{  y: 97377, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '程朗的PT統計(總分523027)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33159,
				            interval: 3315,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "程朗強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6896},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9321},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8423},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13887},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10542},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16473},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "程朗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3743},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6931},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6660},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4642},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5437},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8628},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4415},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5625},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13890},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4863},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6006},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10186},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 31457},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19204},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6834},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9578},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11704},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6955},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5425},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21726},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33159},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18592},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18119},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16611},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2969},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13711},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15007},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6625},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "程朗CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6460},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12574},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11182},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10079},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10271},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12516},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20986},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11759},
]},
],
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

                   text: '程朗的PT構成(總分523027)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 318702, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 91859, name: '強襲', legendMarkerType: 'square'},
{  y: 112466, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'kirua的PT統計(總分501078)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32420,
				            interval: 3242,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "kirua殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5957},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10504},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4137},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9513},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5606},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4775},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10382},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10664},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8891},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4397},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6055},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9649},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7878},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7192},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12780},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23349},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15766},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8107},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6094},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21935},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26698},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 32420},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13120},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10705},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14998},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12250},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6738},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2229},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12006},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8124},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "kiruaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17437},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15564},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "kirua強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4208},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7603},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5045},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11074},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9739},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13608},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11343},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22371},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14250},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19379},
]},
],
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

                   text: 'kirua的PT構成(總分501078)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332919, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118620, name: '強襲', legendMarkerType: 'square'},
{  y: 49539, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大島優子的PT統計(總分488079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46819,
				            interval: 4681,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大島優子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7104},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2165},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8760},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 36372},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14433},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4765},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13638},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14240},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大島優子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7578},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3191},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10326},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7507},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4897},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10379},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11216},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 420},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11309},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10268},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7097},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11682},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18849},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9761},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15771},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25739},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6748},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1738},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10386},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6421},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3237},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14356},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 46819},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 626},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2833},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10550},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6290},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9880},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大島優子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4102},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18774},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23310},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19101},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17326},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18115},
]},
],
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

                   text: '大島優子的PT構成(總分488079)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 285874, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100728, name: '強襲', legendMarkerType: 'square'},
{  y: 101477, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞斯藍的PT統計(總分480812)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36341,
				            interval: 3634,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞斯藍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6044},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5336},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6008},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5496},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10371},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5297},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9220},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1035},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7917},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4850},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11401},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2863},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7092},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19210},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23001},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23681},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12447},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11448},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14521},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36341},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17034},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2171},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4970},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12368},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12449},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8017},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4466},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3678},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞斯藍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3960},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3712},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3736},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6487},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7322},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7003},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7313},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9992},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9968},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6508},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19323},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16752},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞斯藍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8757},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8597},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11374},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8559},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26819},
]},
],
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

                   text: '亞斯藍的PT構成(總分480812)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314630, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102076, name: '強襲', legendMarkerType: 'square'},
{  y: 64106, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Neill的PT統計(總分439733)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40154,
				            interval: 4015,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Neill殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3859},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4052},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7676},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1691},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8309},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10808},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5587},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9068},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13002},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12173},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11027},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9911},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9483},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6069},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12742},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22114},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16207},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 40154},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16570},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5847},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15263},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9766},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 58},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15819},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10237},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10227},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4042},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3396},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12638},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "NeillCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5443},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3365},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2633},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2802},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4401},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10275},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9307},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15791},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Neill強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9322},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12011},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11052},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15474},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13725},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6892},
]},
],
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

                   text: 'Neill的PT構成(總分439733)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 307795, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 68476, name: '強襲', legendMarkerType: 'square'},
{  y: 63462, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾伯格的PT統計(總分91501)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17791,
				            interval: 1779,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾伯格殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6730},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5384},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10111},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8251},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3240},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2800},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9733},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14032},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17791},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾伯格CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4182},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾伯格強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1780},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4705},
]},
],
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

                   text: '艾伯格的PT構成(總分91501)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 80834, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6485, name: '強襲', legendMarkerType: 'square'},
{  y: 4182, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
