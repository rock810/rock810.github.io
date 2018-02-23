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
				
				            maximum: 649966,
				            interval: 64996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147603},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 186085},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 209071},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 218198},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 256654},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 286484},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 336306},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 304619},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 337125},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 277682},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 273618},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 146340},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 261332},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 433314},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 498379},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 468861},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 541718},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 449394},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 394816},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 392068},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 525992},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 525790},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 463734},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 493839},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 447548},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 392894},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 444762},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 404585},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 480434},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 380462},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 187449},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 194580},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 229988},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 227359},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 254579},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 289842},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 292617},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 284855},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 319522},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 317832},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 320526},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 477021},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 492582},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 468163},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 537413},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 470704},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 554450},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 542330},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 509292},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 517683},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 548784},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 533647},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 505074},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 644840},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 633501},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 560420},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 549832},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 649966},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 489814},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 473941},
]},
],
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
				
				            maximum: 24062172,
				            interval: 2406217,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147603},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 333688},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 542759},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 760957},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1017611},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1304095},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1640401},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1945020},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2282145},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2559827},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2833445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2979785},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3241117},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3674431},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4172810},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4641671},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5183389},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5632783},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6027599},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6419667},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6945659},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7471449},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7935183},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8429022},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8876570},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9269464},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9714226},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10118811},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10599245},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10979707},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10983566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 187449},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 382029},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 612017},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 839376},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1093955},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1383797},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1676414},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1961269},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2280791},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2598623},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2919149},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3396170},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3888752},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4356915},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4894328},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5365032},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5919482},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6461812},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6971104},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7488787},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8037571},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8571218},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9076292},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9721132},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10354633},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10915053},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11464885},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12114851},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12604665},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13078606},
]},
],
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
				
				            maximum: 410314,
				            interval: 41031,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 100514},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 141928},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 138738},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 136647},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 158831},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 154055},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 207846},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 178807},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 184267},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 176117},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 154304},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 117555},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 158985},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 314321},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 317996},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 286545},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 287387},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 276687},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 187660},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 225936},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 239365},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 280427},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 239181},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 226359},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 255942},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 254863},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 227783},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 242710},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 242690},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 200304},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 105481},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 113678},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 158506},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 136441},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 153188},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 133855},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 162376},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 194806},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 164850},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 170105},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 187472},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 287662},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 285149},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 307491},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 373024},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 309114},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 410314},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 356662},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 294289},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 309433},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 320710},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 354789},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 341964},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 336357},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 378606},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 366867},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 308527},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 337352},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 250967},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 222331},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24143},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 30516},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38349},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 45581},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 43236},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46599},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 48849},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 56491},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63875},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46305},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 75791},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 73138},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 82035},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 75807},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 76752},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 92649},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 114044},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 101880},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 94761},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 103083},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88439},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 87690},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 95053},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 143125},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 125583},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101753},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 68774},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 109626},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 129290},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 111238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21379},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23130},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37885},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 43711},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 57381},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 60351},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 61838},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 41444},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 65871},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39541},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 57946},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15191},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44564},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 53833},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 85842},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 76323},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 90902},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 91304},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 76591},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 87479},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 138916},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 112100},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 117626},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 129250},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 92301},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 100343},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73385},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 120714},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 131084},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 95998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 57825},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 50386},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33133},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 45337},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 58155},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 109388},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 81392},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33558},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 90797},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 101422},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 57263},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 116221},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 125398},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 84865},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 87637},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 68941},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30092},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 83788},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 120242},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 105167},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 139635},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91168},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 68057},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 165358},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 129312},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 91800},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 172531},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 202988},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 109557},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 140372},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 25710},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21027},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32448},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 37840},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 40442},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 72078},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 66622},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 84368},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 86987},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 62024},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 61368},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13594},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 57783},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 65160},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94541},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 105993},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 163429},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 81403},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 130565},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 78653},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 147711},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 133263},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 106927},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 138230},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 99305},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37688},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 143594},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 41161},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 106660},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 84160},
]},
],
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
				            text: '裁風的PT統計(總分844776)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54678,
				            interval: 5467,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9883},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12551},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13232},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17986},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 43908},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7992},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4133},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14073},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 707},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7172},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7730},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7965},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10699},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18900},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11475},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6299},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10741},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25226},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22973},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 52121},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9630},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20029},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19524},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7296},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30471},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45744},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 53690},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32826},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28928},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37363},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33723},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31385},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 54678},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13299},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4199},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11306},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9839},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11436},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13955},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23348},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22849},
]},
],
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

                   text: '裁風的PT構成(總分844776)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 630758, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 117086, name: '強襲', legendMarkerType: 'square'},
{  y: 96932, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分821947)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51839,
				            interval: 5183,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10860},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4872},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4812},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9177},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9059},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11172},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5254},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7387},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4155},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11504},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12758},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3598},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18775},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10263},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13279},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6170},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38173},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31299},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12384},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33872},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38547},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33838},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33787},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37063},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28881},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 51839},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27069},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17827},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10911},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6610},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8107},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11058},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11388},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15812},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10430},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20125},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17097},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7195},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11376},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10438},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10738},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8886},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9471},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23993},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29808},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15639},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11800},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12874},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4316},
]},
],
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

                   text: '嘎喵的PT構成(總分821947)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 534925, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130488, name: '強襲', legendMarkerType: 'square'},
{  y: 156534, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分788909)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49099,
				            interval: 4909,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5384},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8846},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9842},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8627},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6475},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5336},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4679},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2202},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8706},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10415},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10685},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6572},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12152},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4134},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12266},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16485},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6548},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10903},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8849},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26294},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16099},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12482},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9091},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12794},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10573},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9032},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7463},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9571},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14800},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12646},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9218},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 49099},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20469},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19644},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38962},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35573},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16060},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48436},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30336},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 42018},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11682},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17335},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44341},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20072},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24284},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22082},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20629},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18718},
]},
],
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

                   text: 'Abbey的PT構成(總分788909)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 255471, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 354295, name: '強襲', legendMarkerType: 'square'},
{  y: 179143, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分774948)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49149,
				            interval: 4914,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13746},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1954},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12355},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15580},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17596},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8227},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22328},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16164},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11514},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9519},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5105},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4929},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6554},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12226},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3003},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9530},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11266},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16142},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13156},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18426},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15245},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17915},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31810},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18548},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16738},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15407},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3319},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 657},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5093},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11601},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8510},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6638},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10038},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2643},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7044},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12860},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12179},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19897},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31729},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 43591},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26124},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 49149},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33082},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1579},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14529},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26493},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9359},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32796},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15085},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9297},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6447},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4832},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5170},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13500},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6724},
]},
],
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

                   text: '依司瑪耳的PT構成(總分774948)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 429965, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 216000, name: '強襲', legendMarkerType: 'square'},
{  y: 128983, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分759193)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48422,
				            interval: 4842,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12221},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2116},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5038},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14567},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6057},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4386},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12532},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14239},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 48422},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11818},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31077},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5835},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4293},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7961},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9640},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6248},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7716},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8359},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16453},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8377},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17792},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17707},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25893},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23946},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46920},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2848},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16272},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30957},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26449},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35409},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23594},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 39521},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19030},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11570},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9600},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39949},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22888},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22143},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6850},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7487},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4130},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8224},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14092},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19255},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11215},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18097},
]},
],
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

                   text: '葬月的PT構成(總分759193)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 521707, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 162473, name: '強襲', legendMarkerType: 'square'},
{  y: 75013, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分753232)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45830,
				            interval: 4583,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3374},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9504},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17189},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18443},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29472},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29236},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27125},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11169},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6634},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8298},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6423},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9277},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10198},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5594},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8403},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11881},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2952},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13682},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19505},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9142},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6875},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10527},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19932},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27085},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36187},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24362},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6576},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16543},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10640},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17670},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17014},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25355},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 43421},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13748},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9643},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6668},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9045},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11170},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11518},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8392},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20822},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3160},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18253},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22939},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15501},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 45830},
]},
],
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

                   text: '暗之武者的PT構成(總分753232)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 408736, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 173298, name: '強襲', legendMarkerType: 'square'},
{  y: 171198, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分712524)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46574,
				            interval: 4657,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8073},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5305},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3107},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9310},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4595},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14428},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4948},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12696},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5323},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14125},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7218},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18826},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 35665},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34438},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46574},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12742},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16472},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15458},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13591},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13301},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12292},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16982},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7803},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16876},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5866},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8557},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13650},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21311},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6675},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11589},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6172},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11249},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20936},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 44091},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25272},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19993},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26319},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19506},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7466},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14463},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21047},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 45844},
]},
],
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

                   text: '迪克的PT構成(總分712524)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 406233, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 217471, name: '強襲', legendMarkerType: 'square'},
{  y: 88820, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '格爾的PT統計(總分710116)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45157,
				            interval: 4515,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6018},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8886},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10508},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10483},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6648},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4906},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5771},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10803},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8809},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5780},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11125},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5761},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9310},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8794},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14088},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12308},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5535},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15623},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12784},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6819},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36048},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16044},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16185},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9734},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10602},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13383},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17898},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9246},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15430},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9790},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11978},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22844},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42315},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20810},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5744},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5884},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11076},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11959},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10651},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9565},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44241},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20632},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15132},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25610},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35463},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20146},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 45157},
]},
],
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

                   text: '格爾的PT構成(總分710116)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 325689, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 255516, name: '強襲', legendMarkerType: 'square'},
{  y: 128911, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分700079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56029,
				            interval: 5602,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12827},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18585},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 28810},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17702},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31611},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29562},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26669},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24504},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19568},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46910},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32349},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 56029},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29525},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27661},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25925},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5497},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6555},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10076},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10974},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 452},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11377},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12505},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10490},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7133},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4625},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16535},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14326},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8324},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11917},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7683},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6501},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8691},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5207},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6639},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6642},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11207},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6638},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10345},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9129},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9495},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16447},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18918},
]},
],
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

                   text: '雪歌的PT構成(總分700079)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 217853, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53989, name: '強襲', legendMarkerType: 'square'},
{  y: 428237, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分639228)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39982,
				            interval: 3998,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 759},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14395},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12087},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3338},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8082},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6937},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5756},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16256},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3738},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15044},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31294},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16032},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38649},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26790},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31372},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7215},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13402},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16627},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13417},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10543},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13431},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10774},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39982},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11486},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28759},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26214},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10308},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6066},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8481},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9586},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18195},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13954},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9140},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5130},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14225},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9167},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9394},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5616},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7623},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1942},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13825},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16863},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16736},
]},
],
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

                   text: '冰的PT構成(總分639228)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 457195, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 109661, name: '強襲', legendMarkerType: 'square'},
{  y: 72372, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分636683)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66722,
				            interval: 6672,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5068},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7489},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6456},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4223},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10469},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8573},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6960},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9226},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1436},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10576},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10205},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9536},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13256},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8533},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20802},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30988},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 66722},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 48351},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32039},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8699},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20844},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9393},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10911},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6963},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20979},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14161},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7138},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18588},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3854},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5943},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7759},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16480},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7455},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12847},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12682},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16273},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19711},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6221},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10368},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11814},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11860},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14981},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18986},
]},
],
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

                   text: '龍的PT構成(總分636683)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 454161, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103004, name: '強襲', legendMarkerType: 'square'},
{  y: 79518, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分620066)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45490,
				            interval: 4549,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3851},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4886},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7439},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 273},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4236},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10662},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14522},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5925},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5765},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26626},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16415},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 28715},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16207},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15358},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5779},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10829},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3371},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26234},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16901},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 45490},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16141},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17832},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16183},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9970},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12737},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12654},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7895},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12435},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9034},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3112},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8090},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8728},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17522},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11515},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11695},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19860},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14960},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13878},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11991},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23095},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17075},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10178},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17073},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15500},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11081},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11804},
]},
],
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

                   text: '卡特爾的PT構成(總分620066)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383875, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 153480, name: '強襲', legendMarkerType: 'square'},
{  y: 82711, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分619514)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40294,
				            interval: 4029,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1917},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4242},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3866},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2753},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9793},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1539},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5413},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8173},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5093},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6044},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15295},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30623},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7063},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16638},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1487},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29028},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 40294},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28946},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5936},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16050},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14571},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2379},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11952},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18607},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19359},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22149},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18129},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14467},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5180},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7553},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9857},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10675},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12490},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7954},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11983},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10376},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11868},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12904},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10998},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15125},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6362},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4744},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9281},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10504},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11307},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17543},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18512},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21429},
]},
],
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

                   text: '無銘的PT構成(總分619514)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 374919, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129788, name: '強襲', legendMarkerType: 'square'},
{  y: 114807, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分600563)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42866,
				            interval: 4286,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1510},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7403},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6049},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9525},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13604},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7081},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7848},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6679},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13006},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10850},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15186},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14026},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6113},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5825},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15768},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5154},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12550},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13332},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22552},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20817},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8200},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14719},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12410},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32716},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 42866},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24947},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22832},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7009},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13734},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10601},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11561},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10378},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15001},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13527},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15715},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24469},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15514},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13488},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22705},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15662},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22166},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15465},
]},
],
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

                   text: '羽龍的PT構成(總分600563)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 404912, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 105000, name: '強襲', legendMarkerType: 'square'},
{  y: 90651, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分586391)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44525,
				            interval: 4452,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4387},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8868},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12167},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5381},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3685},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7593},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10962},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14858},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9188},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11819},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8030},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11063},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10584},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13675},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13356},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12075},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14345},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12823},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13227},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13824},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35109},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26898},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20934},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18572},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44525},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28756},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26839},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16801},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8738},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14604},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3314},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4669},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2929},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6963},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7054},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8002},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9751},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9876},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12619},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16588},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11460},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6240},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9376},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11873},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11991},
]},
],
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

                   text: '紫嫣的PT構成(總分586391)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 453686, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81765, name: '強襲', legendMarkerType: 'square'},
{  y: 50940, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分565315)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34171,
				            interval: 3417,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10098},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3729},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11411},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12188},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2269},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10296},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8544},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10800},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7384},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3528},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10987},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12196},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7023},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5841},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22392},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34171},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31483},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9327},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6421},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19089},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12625},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10758},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9353},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11032},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12476},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10775},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7011},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18518},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14458},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5949},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8339},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5821},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6302},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13614},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10124},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33202},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14781},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17272},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20424},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12311},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12285},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6450},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6289},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18814},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15247},
]},
],
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

                   text: '湖光的PT構成(總分565315)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 358091, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71396, name: '強襲', legendMarkerType: 'square'},
{  y: 135828, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分552608)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30151,
				            interval: 3015,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6036},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7617},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9785},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5722},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11326},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4725},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1498},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12640},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8835},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7899},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14171},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15302},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12252},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5340},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17796},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18087},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12134},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12424},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14372},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7831},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14102},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12525},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12648},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13418},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9054},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6734},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17821},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13693},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18746},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5743},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10094},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9453},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11677},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27037},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27888},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18725},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8749},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10351},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20568},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30151},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15598},
]},
],
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

                   text: '凱爾的PT構成(總分552608)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 333821, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110617, name: '強襲', legendMarkerType: 'square'},
{  y: 108170, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分534377)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22855,
				            interval: 2285,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3746},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3932},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5106},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5050},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4747},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2547},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12255},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15815},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10252},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16002},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16439},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10888},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10456},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17465},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12797},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7045},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12875},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10075},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13942},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22855},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14683},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7517},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9940},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9591},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7015},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9956},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14243},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5709},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8115},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11242},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11167},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8538},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18456},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14340},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16971},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18636},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13411},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5159},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4253},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21851},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18207},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22536},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22235},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13134},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13183},
]},
],
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

                   text: '西沙斯的PT構成(總分534377)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 287234, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131744, name: '強襲', legendMarkerType: 'square'},
{  y: 115399, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分430726)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31696,
				            interval: 3169,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3962},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7719},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2751},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3477},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9287},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5284},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9498},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10982},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5551},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11397},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7829},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13324},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3116},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10921},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12642},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7573},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14620},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8241},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6528},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6486},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18793},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 31696},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14132},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15570},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8129},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8039},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5676},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10490},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6622},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8225},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 29870},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12599},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18809},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17175},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20288},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16612},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3385},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6598},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13820},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3010},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分430726)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 273713, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130200, name: '強襲', legendMarkerType: 'square'},
{  y: 26813, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分427411)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31831,
				            interval: 3183,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3954},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12957},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9094},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8373},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10308},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12132},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11295},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4109},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6900},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11471},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12380},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20183},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19676},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27871},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 830},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14914},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3857},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12036},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31831},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13782},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10404},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13227},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14704},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13204},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11618},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8312},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9757},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17549},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5825},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11064},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11699},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15497},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19390},
]},
],
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

                   text: '賽西的PT構成(總分427411)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319422, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44514, name: '強襲', legendMarkerType: 'square'},
{  y: 63475, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '法蘭西斯的PT統計(總分919328)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67459,
				            interval: 6745,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8769},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16791},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11350},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19982},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9147},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20213},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4625},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21308},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11574},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23392},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 39337},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10397},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37414},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26738},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32315},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56154},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 67459},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33109},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48063},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 59120},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 51240},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2146},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4195},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5479},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8707},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1733},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12396},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 28393},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 33969},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4923},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1620},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1663},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4878},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2997},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5884},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5637},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3674},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11420},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10832},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3717},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5454},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1555},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8034},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1786},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4047},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8027},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15379},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26671},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30148},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26343},
]},
],
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

                   text: '法蘭西斯的PT構成(總分919328)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 176984, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 106568, name: '強襲', legendMarkerType: 'square'},
{  y: 635776, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '當公主只愛車的PT統計(總分710074)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57452,
				            interval: 5745,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "當公主只愛車強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9416},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5900},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12640},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12626},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33094},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "當公主只愛車殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4823},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7797},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15298},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10016},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11078},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13341},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11642},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15809},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7810},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14370},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14145},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21338},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 57452},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19801},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30268},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44205},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6315},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25410},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27444},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 53998},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37873},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19574},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10412},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16169},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9166},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4234},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11546},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9448},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "當公主只愛車CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6882},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13983},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18055},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16986},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13704},
]},
],
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

                   text: '當公主只愛車的PT構成(總分710074)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 544497, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 95967, name: '強襲', legendMarkerType: 'square'},
{  y: 69610, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小孟的PT統計(總分670171)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46665,
				            interval: 4666,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小孟殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2369},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9605},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13550},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5823},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12213},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5634},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13236},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10329},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13416},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12192},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9685},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7988},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12386},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8846},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10797},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9408},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14306},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19155},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5630},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3026},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6032},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41508},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28977},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1521},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36227},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18243},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 46665},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12763},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小孟CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5757},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2610},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12262},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10229},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20593},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 45145},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22724},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19244},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小孟強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13862},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7941},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14494},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24206},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21912},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20131},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17991},
]},
],
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

                   text: '小孟的PT構成(總分670171)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 398906, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 120537, name: '強襲', legendMarkerType: 'square'},
{  y: 150728, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Natures的PT統計(總分635134)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44903,
				            interval: 4490,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "NaturesCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 16973},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4199},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18209},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19206},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22577},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18658},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Natures殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7483},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6946},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13205},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9325},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5578},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26142},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7498},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14460},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5769},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7603},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3202},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19977},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24732},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42325},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15534},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7322},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12696},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7336},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11575},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11050},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3787},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10032},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16138},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44903},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33124},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8054},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14787},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13585},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6507},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Natures強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8901},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7867},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11598},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6267},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5463},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8033},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11368},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12441},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13959},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11702},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12724},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6912},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7019},
]},
],
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

                   text: 'Natures的PT構成(總分635134)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 411058, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124254, name: '強襲', legendMarkerType: 'square'},
{  y: 99822, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '森苦的PT統計(總分623064)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36813,
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
                                    name: "森苦殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4903},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10145},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11439},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3191},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6256},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6209},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14224},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3352},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10637},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13392},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9311},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4891},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7783},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6023},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2227},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6309},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5471},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19982},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2095},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2594},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25547},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36813},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24555},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17373},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2197},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14784},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9236},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19173},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10806},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "森苦CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5302},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13575},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4317},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30975},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26166},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14437},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15405},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22131},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "森苦強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5441},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7461},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10218},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12476},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11711},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16147},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30562},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16705},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35887},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22527},
]},
],
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

                   text: '森苦的PT構成(總分623064)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321621, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169135, name: '強襲', legendMarkerType: 'square'},
{  y: 132308, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小傑老師的PT統計(總分602302)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39156,
				            interval: 3915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小傑老師殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9095},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10658},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7799},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5644},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5179},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14768},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10317},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4938},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6213},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7372},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2485},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9184},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15669},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20056},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 36511},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17212},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15455},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8323},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6910},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12362},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6771},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17014},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6510},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6545},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14770},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14230},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15377},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9289},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小傑老師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11139},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11392},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14006},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7515},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29532},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18863},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32102},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39156},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26024},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小傑老師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6678},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8241},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11762},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37773},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13539},
]},
],
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

                   text: '小傑老師的PT構成(總分602302)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 334580, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 189729, name: '強襲', legendMarkerType: 'square'},
{  y: 77993, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '霖奈的PT統計(總分564501)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29664,
				            interval: 2966,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霖奈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4211},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8171},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11757},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6376},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8780},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11635},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7464},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11187},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4539},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13271},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17242},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12075},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27343},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11710},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15773},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15083},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13566},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14203},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7933},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3861},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12888},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8455},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7094},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17541},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8880},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14342},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7063},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8492},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霖奈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12364},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7748},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22017},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28006},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霖奈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9712},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14041},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11757},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11172},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11711},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29664},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16769},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22709},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21254},
]},
],
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

                   text: '霖奈的PT構成(總分564501)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 313724, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 148789, name: '強襲', legendMarkerType: 'square'},
{  y: 101988, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Fatkeng的PT統計(總分553933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47631,
				            interval: 4763,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatkeng殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6464},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9260},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6652},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9919},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13533},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5536},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14891},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6830},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5338},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13941},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4364},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6900},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4165},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19588},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23978},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 47631},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16222},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16207},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23605},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10219},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10904},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7107},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9779},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11596},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11767},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15633},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7883},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11981},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FatkengCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7503},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8163},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12713},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21101},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8669},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatkeng強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7349},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8873},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8434},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10259},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9377},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18388},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13274},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15389},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23848},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12790},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6119},
]},
],
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

                   text: 'Fatkeng的PT構成(總分553933)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361684, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134100, name: '強襲', legendMarkerType: 'square'},
{  y: 58149, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Smart的PT統計(總分543751)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43293,
				            interval: 4329,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Smart殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8711},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7200},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7026},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5912},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2002},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9825},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11640},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13113},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10218},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3271},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15066},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20272},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21211},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8801},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13082},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10640},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13536},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2554},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16351},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15163},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 43293},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13566},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7402},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13898},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7751},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15543},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8019},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13611},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SmartCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8427},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12414},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20948},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21447},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Smart強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1721},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11714},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5315},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13878},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2142},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6474},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17831},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29412},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33017},
]},
],
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

                   text: 'Smart的PT構成(總分543751)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 359011, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121504, name: '強襲', legendMarkerType: 'square'},
{  y: 63236, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有休息時間的PT統計(總分542944)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39225,
				            interval: 3922,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有休息時間殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4742},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10782},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10822},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8504},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11352},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7041},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39225},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17047},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15557},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3395},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11558},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1653},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4884},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11777},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6336},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2752},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9584},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35938},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24985},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14099},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2997},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6969},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5555},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17000},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5940},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12310},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16597},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13693},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7835},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10262},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有休息時間強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3661},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6369},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9912},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26773},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14082},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13977},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12381},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8234},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11233},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7033},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有休息時間CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5078},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5313},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1090},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3914},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9744},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19332},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14546},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19081},
]},
],
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

                   text: '有休息時間的PT構成(總分542944)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 351191, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 113655, name: '強襲', legendMarkerType: 'square'},
{  y: 78098, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天童的PT統計(總分536949)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32801,
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
                                    name: "天童殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7677},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12921},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5524},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8510},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5777},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7387},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5233},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7807},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8274},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4915},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14665},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8476},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10315},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8946},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12442},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24110},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25157},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25250},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3725},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12253},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32801},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26148},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15020},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14444},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12861},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12603},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6538},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6967},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7466},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天童CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9360},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10587},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7949},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6708},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11310},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天童強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2696},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9126},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10004},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13197},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1332},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13457},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12254},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17388},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15785},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11435},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18271},
]},
],
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

                   text: '天童的PT構成(總分536949)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 366090, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124945, name: '強襲', legendMarkerType: 'square'},
{  y: 45914, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'KIM的PT統計(總分528560)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65564,
				            interval: 6556,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KIM殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4834},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6152},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1419},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6809},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2175},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7753},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6593},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8788},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3448},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6713},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15909},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4182},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 65564},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 45160},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47935},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23226},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11406},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11825},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15247},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9450},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10310},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19888},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6657},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6639},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11347},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4394},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15154},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4393},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KIM強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5629},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9364},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2605},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8026},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8943},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13282},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11438},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2349},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "KIMCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3701},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9498},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4593},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13308},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15794},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15812},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13297},
]},
],
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

                   text: 'KIM的PT構成(總分528560)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383521, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69036, name: '強襲', legendMarkerType: 'square'},
{  y: 76003, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '安德魯的PT統計(總分525636)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39246,
				            interval: 3924,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "安德魯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6292},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3636},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12346},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17583},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11587},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13489},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9555},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10165},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9587},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10825},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14064},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3419},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5550},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1164},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39029},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 39246},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24356},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17165},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7888},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21382},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11692},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15083},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13171},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8774},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15317},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7233},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15644},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11521},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8162},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "安德魯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8349},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9819},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7809},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12177},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "安德魯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4640},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5152},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8368},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6383},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7646},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14264},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9874},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22212},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4668},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2550},
]},
],
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

                   text: '安德魯的PT構成(總分525636)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 384955, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 85757, name: '強襲', legendMarkerType: 'square'},
{  y: 54924, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '誓不課金的PT統計(總分501739)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34258,
				            interval: 3425,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "誓不課金殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3734},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9340},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8028},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4466},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4696},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7630},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4762},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9218},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5211},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7992},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10931},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7700},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5850},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10208},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7996},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8871},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5863},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17523},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10380},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17267},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5606},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11498},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18175},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17646},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33051},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34258},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9705},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8004},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9637},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8389},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "誓不課金強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12776},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18335},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15297},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7788},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1737},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "誓不課金CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7205},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12532},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12444},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4943},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25835},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22978},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14517},
]},
],
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

                   text: '誓不課金的PT構成(總分501739)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 323635, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 77650, name: '強襲', legendMarkerType: 'square'},
{  y: 100454, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '丹尼的PT統計(總分484550)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41544,
				            interval: 4154,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3883},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7409},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6043},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9189},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3163},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9788},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 672},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8770},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5049},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6954},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3135},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1622},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 311},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7563},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16924},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3657},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6373},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3488},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5415},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13692},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11635},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13748},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15623},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8271},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6824},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20464},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6186},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9012},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12555},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3593},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7322},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13726},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 41544},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18812},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12049},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31667},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16227},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 38420},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28833},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28068},
]},
],
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

                   text: '丹尼的PT構成(總分484550)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 216536, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 156466, name: '強襲', legendMarkerType: 'square'},
{  y: 111548, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰封月魂的PT統計(總分478827)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32006,
				            interval: 3200,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰封月魂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7318},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3816},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4839},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16017},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20573},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12565},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5002},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2976},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8501},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13364},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5131},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6159},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5350},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8421},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17730},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14170},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10546},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11488},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8311},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18791},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13523},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8144},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18220},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7190},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13529},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15773},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11837},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15953},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9954},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17524},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰封月魂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6788},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14151},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5412},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13027},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18605},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11360},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰封月魂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4579},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9333},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18171},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 32006},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12680},
]},
],
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

                   text: '冰封月魂的PT構成(總分478827)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69343, name: '強襲', legendMarkerType: 'square'},
{  y: 76769, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '霜染的PT統計(總分475366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38215,
				            interval: 3821,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霜染殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2359},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5613},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15646},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9993},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9060},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6668},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7260},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9020},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5779},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3393},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4675},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5152},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8122},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8898},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3439},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6545},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3656},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9381},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6489},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4558},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12508},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4121},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11546},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12825},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16362},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霜染強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7678},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16101},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8669},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10789},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12060},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7103},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18082},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38215},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17333},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10236},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16936},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22194},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霜染CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4958},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6731},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6894},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15445},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22954},
]},
],
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

                   text: '霜染的PT構成(總分475366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 209110, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 209274, name: '強襲', legendMarkerType: 'square'},
{  y: 56982, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅嚴克拉姆的PT統計(總分452760)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30343,
				            interval: 3034,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅嚴克拉姆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6611},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5198},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7204},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2800},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5652},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8652},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4287},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9987},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1675},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1010},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3857},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5227},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3450},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6180},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9573},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7798},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4601},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5899},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6630},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10175},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8952},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8116},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 774},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15736},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3284},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2894},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6941},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10883},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅嚴克拉姆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13342},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11867},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21699},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10475},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16469},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11468},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30343},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20335},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7773},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28493},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅嚴克拉姆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6085},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15316},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19081},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16009},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26215},
]},
],
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

                   text: '羅嚴克拉姆的PT構成(總分452760)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 178415, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 172264, name: '強襲', legendMarkerType: 'square'},
{  y: 102081, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '洛無水的PT統計(總分400921)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24762,
				            interval: 2476,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "洛無水殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2859},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3084},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5638},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4436},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4857},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7858},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2686},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6542},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8665},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1267},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8502},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8049},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9069},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9107},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3864},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7467},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10899},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6567},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7309},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9217},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9557},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6084},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12086},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "洛無水CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2311},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19715},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14806},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22637},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11368},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7623},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2549},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5950},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10820},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12527},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9777},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22432},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9325},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "洛無水強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3360},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4777},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12750},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12702},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11959},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24762},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15536},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7537},
]},
],
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

                   text: '洛無水的PT構成(總分400921)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 155698, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93383, name: '強襲', legendMarkerType: 'square'},
{  y: 151840, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '咬字分開念的PT統計(總分233056)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33107,
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
                                    name: "咬字分開念殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6298},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1616},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3395},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2031},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7235},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4570},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2576},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10983},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6038},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1032},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2307},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10888},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8259},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16099},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4584},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7910},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15539},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21340},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33107},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22580},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "咬字分開念強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 483},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5976},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3186},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12776},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15957},
]},
],
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

                   text: '咬字分開念的PT構成(總分233056)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 194678, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38378, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
