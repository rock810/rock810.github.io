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
				
				            maximum: 674119,
				            interval: 67411,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 198866},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 215173},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 232701},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 261902},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 245979},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 274453},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 273413},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 303253},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 288141},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 352987},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 334531},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 371395},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 345836},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 465293},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 519843},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 571964},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 531334},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 514216},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 485655},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 512745},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 535558},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 573546},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 539284},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 663914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 581071},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 573721},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 616493},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 674119},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 483352},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 437943},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 3180},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 127509},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 166160},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 149163},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 162036},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 180875},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 209446},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 212591},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 243845},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 243916},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 224790},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 302589},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 341209},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 363036},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 416286},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 369932},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 442525},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 570664},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 408768},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 370805},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 373561},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 415778},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 416445},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 399526},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 449059},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 419479},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 577957},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 461148},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 438358},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 445291},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 424225},
]},
],
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
				
				            maximum: 23308833,
				            interval: 2330883,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 198866},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 414039},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 646740},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 908642},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1154621},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1429074},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1702487},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2005740},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2293881},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2646868},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2981399},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3352794},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3698630},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4163923},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4683766},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5255730},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5787064},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6301280},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6786935},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7299680},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7835238},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8408784},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8948068},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9611982},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10193053},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10766774},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11383267},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12057386},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12540738},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12978681},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 12981861},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 127509},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 293669},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 442832},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 604868},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 785743},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 995189},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1207780},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1451625},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1695541},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1920331},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2222920},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2564129},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2927165},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3343451},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3713383},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4155908},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4726572},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5135340},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5506145},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5879706},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6295484},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6711929},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7111455},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7560514},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7979993},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8557950},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9019098},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9457456},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9902747},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10326972},
]},
],
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
				
				            maximum: 444383,
				            interval: 44438,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 124455},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 147962},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 176701},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 171574},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 163780},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 193139},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 163908},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 170787},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 184668},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 249909},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 252084},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 301700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 319999},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 401208},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 391184},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 439395},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 434303},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 444383},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 357616},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 376950},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 421498},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 427563},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 352770},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 355050},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 426933},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 323700},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 351675},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 335868},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 247638},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 242655},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 3180},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 16678},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 35683},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11077},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12961},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9415},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28918},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 47920},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 84787},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40364},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 59107},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 94293},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34157},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 29600},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 66925},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 78958},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 117065},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 128737},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 69685},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 66399},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 58186},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 89380},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 82620},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19908},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 89538},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 100041},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 145178},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 84011},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 67515},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 60929},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 128748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 96470},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 100727},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 110008},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 118418},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 128218},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 144208},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 132745},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 124801},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 156741},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 129075},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 140459},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 253828},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 264994},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 283934},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 235655},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 253738},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 328223},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 269391},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 237689},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 269873},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 263141},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 285029},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 322959},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 273426},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 245340},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 317436},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 280729},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 221418},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 283861},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 190762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14361},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 29750},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28078},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 30657},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 43242},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 36320},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 31926},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 34257},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 46811},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 36608},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 67837},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 53224},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 68442},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 65427},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55319},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 71722},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 113704},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 69692},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 66717},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 45502},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 63257},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 48796},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 56659},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 86095},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 74098},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 115343},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 96408},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 149425},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 100501},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 104715},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 19898},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 35449},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36504},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 39161},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 37179},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 48276},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 44609},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50229},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 54772},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 56455},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 59293},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 44929},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15837},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30601},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 58424},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 73516},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 55543},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36461},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 58845},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 62706},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 48640},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 81351},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 84675},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 98724},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 154138},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 140617},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 152101},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 144489},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 101171},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 88627},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 54513},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31762},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19496},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 51167},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 45020},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 33038},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 64896},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 82237},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 48701},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 46623},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23154},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24766},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10000},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 33484},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 70235},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 59053},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 41488},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33372},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 69194},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 73089},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 65420},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 64632},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 101839},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 210140},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 109404},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 112717},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 193762},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 134543},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 106661},
]},
],
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
				            text: 'gotice的PT統計(總分700864)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47789,
				            interval: 4778,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3583},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7621},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15590},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12952},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9291},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14008},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23459},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2891},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8363},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7112},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8791},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5216},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6431},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10751},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5793},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9727},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 732},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23187},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13896},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28255},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18923},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9134},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30183},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28626},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 47208},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17688},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23885},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 47789},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41204},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15847},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10091},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13177},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5513},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6423},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13105},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11865},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4106},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6402},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 22155},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6888},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6529},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7689},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11024},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7989},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16929},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22266},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24204},
]},
],
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

                   text: 'gotice的PT構成(總分700864)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 471806, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 92877, name: '強襲', legendMarkerType: 'square'},
{  y: 136181, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分677159)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 89977,
				            interval: 8997,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9859},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24613},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14988},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19118},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27238},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 31935},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9669},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6046},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8170},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24819},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14399},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2048},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13465},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15973},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23810},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 56152},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21384},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27706},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 89977},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35562},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40665},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7110},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1545},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1308},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3317},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4114},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5768},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13763},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10015},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4954},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7115},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7588},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4890},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3040},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7649},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7995},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6272},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1397},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9400},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9929},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2886},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8854},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2807},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12919},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4108},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4215},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 62},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6543},
]},
],
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

                   text: '雪歌的PT構成(總分677159)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 159563, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 127751, name: '強襲', legendMarkerType: 'square'},
{  y: 389845, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分642958)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45221,
				            interval: 4522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6324},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10209},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7824},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11080},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11235},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9889},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4713},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4291},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9607},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10007},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5366},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12805},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18920},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27733},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7761},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27548},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5829},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15414},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4855},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24090},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28641},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34317},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30615},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 36293},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16440},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21642},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 35418},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26853},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 45221},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13256},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7663},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7474},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4702},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9584},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19756},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10356},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14055},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16495},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2076},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5347},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15035},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6219},
]},
],
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

                   text: '裁風的PT構成(總分642958)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 524196, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90085, name: '強襲', legendMarkerType: 'square'},
{  y: 28677, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分629911)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43192,
				            interval: 4319,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6025},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5767},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6254},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5196},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9553},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9721},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4909},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8451},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6512},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10037},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4888},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11790},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14969},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24338},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22618},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13445},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22872},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25305},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17948},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9935},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 464},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5698},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24258},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20357},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36131},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 43192},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9727},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18583},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15258},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5285},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4489},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13595},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8534},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11629},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12410},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7552},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3843},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8388},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8874},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7349},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12415},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9666},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17405},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21376},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19536},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21336},
]},
],
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

                   text: '葬月的PT構成(總分629911)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 419486, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 135506, name: '強襲', legendMarkerType: 'square'},
{  y: 74919, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分615569)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46025,
				            interval: 4602,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9476},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4552},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6616},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9998},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14738},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15467},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18151},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 38889},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9163},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4821},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13471},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6219},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17788},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30500},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23684},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12071},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13307},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2282},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5928},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24230},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19838},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15796},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8726},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10159},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27796},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26353},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 46025},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15104},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15067},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9496},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14301},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10895},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10392},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16266},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18843},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3832},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9504},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11691},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12394},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3169},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13422},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8791},
]},
],
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

                   text: '嘎喵的PT構成(總分615569)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 472573, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62803, name: '強襲', legendMarkerType: 'square'},
{  y: 80193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分602290)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43043,
				            interval: 4304,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5859},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9088},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16655},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21661},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13177},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14402},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12337},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15678},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24558},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28497},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5371},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3779},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6056},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7809},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6012},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10707},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7976},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5835},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11382},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4065},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34292},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7600},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17757},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3784},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5370},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9109},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5106},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12196},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18207},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13560},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7841},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14358},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7802},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5623},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12878},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18516},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2449},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11244},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1842},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8018},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 43043},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31565},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14238},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18406},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31150},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15432},
]},
],
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

                   text: '迪克的PT構成(總分602290)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 278526, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161852, name: '強襲', legendMarkerType: 'square'},
{  y: 161912, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分598334)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41686,
				            interval: 4168,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6738},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6467},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10642},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4418},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1637},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3934},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3902},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7784},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1815},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5295},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8166},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14514},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2149},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8994},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7519},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2350},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3125},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7905},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30673},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18257},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30725},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13179},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5641},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3757},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4106},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2530},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8143},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12465},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13548},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1831},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20236},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11272},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10542},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28204},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4478},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13708},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20795},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14430},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25768},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41686},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22720},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11620},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5593},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18512},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14821},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16718},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25482},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19589},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19929},
]},
],
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

                   text: 'Abbey的PT構成(總分598334)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 250400, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 215670, name: '強襲', legendMarkerType: 'square'},
{  y: 132264, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分570092)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44611,
				            interval: 4461,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2709},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3495},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9070},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7651},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5281},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2831},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11699},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7557},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3719},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4128},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5098},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17824},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9880},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12492},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23871},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 36789},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 44611},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2749},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5917},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10365},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11277},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2857},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4197},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8616},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 91},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4144},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14150},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12994},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29284},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34666},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4270},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7661},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15686},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23663},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8940},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37760},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18179},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5712},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9105},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8197},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12622},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10101},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7958},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6937},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24328},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9973},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8988},
]},
],
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

                   text: '依司瑪耳的PT構成(總分570092)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 350012, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103921, name: '強襲', legendMarkerType: 'square'},
{  y: 116159, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分557159)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43282,
				            interval: 4328,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4042},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11016},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3025},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7599},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8596},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5238},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7317},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 440},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11307},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5274},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3888},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 25713},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43282},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34381},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6981},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31464},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18931},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5419},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5923},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6235},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2737},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26140},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10023},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24832},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42601},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5730},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16535},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10215},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8682},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8353},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9563},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9779},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11128},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12017},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6718},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29522},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3922},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6345},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8590},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11754},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9628},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10325},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16059},
]},
],
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

                   text: '無銘的PT構成(總分557159)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 384884, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 105652, name: '強襲', legendMarkerType: 'square'},
{  y: 66623, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分550417)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39833,
				            interval: 3983,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8474},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7031},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1026},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5205},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4769},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11348},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7083},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6336},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5186},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11131},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10510},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11444},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12825},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5299},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 33757},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39833},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23304},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19946},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18951},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 55},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20657},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27872},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23660},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25006},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10982},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9865},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14138},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14022},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9395},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6165},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15749},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8812},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13660},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17446},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16179},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12650},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3332},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7019},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8594},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15984},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12079},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13638},
]},
],
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

                   text: '暗之武者的PT構成(總分550417)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 389715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57314, name: '強襲', legendMarkerType: 'square'},
{  y: 103388, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分509776)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30845,
				            interval: 3084,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6240},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3530},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4208},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7576},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12475},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4766},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7606},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3438},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16578},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6288},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9628},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10217},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8695},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10338},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15221},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18838},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30845},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21315},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11966},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12025},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11774},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7875},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14391},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21341},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8361},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5682},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10208},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16591},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10343},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16471},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8291},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15175},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12587},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9856},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15732},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18173},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16418},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5463},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4425},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7489},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7878},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12530},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9735},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11751},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9443},
]},
],
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

                   text: '湖光的PT構成(總分509776)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 344830, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 96232, name: '強襲', legendMarkerType: 'square'},
{  y: 68714, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分508364)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32213,
				            interval: 3221,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1810},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3675},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8342},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5330},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2276},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12419},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9449},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8053},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10064},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5634},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11843},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8380},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 28244},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13942},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1152},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6045},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12415},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12005},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23443},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16376},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17596},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14905},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8025},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8468},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12449},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22500},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 32213},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14048},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16125},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6863},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1710},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6587},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3255},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10915},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7186},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9637},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8550},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17797},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4510},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9364},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20073},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12242},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3457},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6378},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6091},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9812},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16711},
]},
],
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

                   text: '冰的PT構成(總分508364)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 354089, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 111826, name: '強襲', legendMarkerType: 'square'},
{  y: 42449, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分464878)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33409,
				            interval: 3340,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4370},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5677},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8838},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8683},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7637},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12077},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2409},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5132},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7325},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5277},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14169},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1092},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5721},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8022},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17260},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5976},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 33409},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29546},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6484},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11056},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11752},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2861},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6751},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6782},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6634},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11849},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3477},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13402},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27037},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6936},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5901},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13993},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10717},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19257},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3481},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19812},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22923},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11606},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9744},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3011},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10847},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 985},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6853},
]},
],
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

                   text: '羽龍的PT構成(總分464878)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 297641, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124191, name: '強襲', legendMarkerType: 'square'},
{  y: 43046, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分462757)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53801,
				            interval: 5380,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8033},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4871},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4917},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6979},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12565},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5457},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13189},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12059},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11525},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3394},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13083},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 992},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6403},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7636},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10303},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3127},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11293},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12941},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8974},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10877},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7151},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13048},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11926},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12429},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8919},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12338},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14177},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36012},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23593},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 53801},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18365},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15881},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9309},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11405},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12815},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32939},
]},
],
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

                   text: '凱爾的PT構成(總分462757)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 213203, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 82349, name: '強襲', legendMarkerType: 'square'},
{  y: 167205, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分454988)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46271,
				            interval: 4627,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2567},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14268},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11436},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18057},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26375},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21623},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13098},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13361},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4869},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8135},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11165},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5449},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7314},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1805},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5922},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12098},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11595},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7946},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13609},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8435},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8193},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21670},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14400},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14585},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31791},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16331},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16779},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5813},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15593},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1235},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 34483},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5577},
]},
],
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

                   text: '西沙斯的PT構成(總分454988)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 231044, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167056, name: '強襲', legendMarkerType: 'square'},
{  y: 56888, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分431045)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19693,
				            interval: 1969,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7003},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5881},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6230},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6266},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6765},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7563},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6541},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7833},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7979},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1672},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5195},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13329},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12700},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8234},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15526},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16154},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8072},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5965},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14592},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10834},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17679},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19107},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4794},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3955},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14565},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6056},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12337},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9093},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9444},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3169},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5856},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6367},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6660},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4119},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7739},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19693},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6280},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15636},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19038},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4551},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11000},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8596},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3184},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9210},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5063},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9305},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14215},
]},
],
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

                   text: '卡特爾的PT構成(總分431045)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 271364, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 65124, name: '強襲', legendMarkerType: 'square'},
{  y: 94557, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分422979)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38208,
				            interval: 3820,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6045},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8097},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6616},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2062},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6833},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10944},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5431},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4851},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9494},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13424},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11601},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15074},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8596},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10053},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18874},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16633},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11082},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1200},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3457},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25085},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35649},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38208},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30139},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27465},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3152},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3711},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5472},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11733},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14512},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3540},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3577},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4058},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6039},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8240},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8339},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6115},
]},
],
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

                   text: '紫嫣的PT構成(總分422979)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 345780, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45482, name: '強襲', legendMarkerType: 'square'},
{  y: 31717, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分351191)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27084,
				            interval: 2708,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8536},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3808},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4224},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 703},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5787},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7773},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6073},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6386},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6899},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11482},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5767},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12275},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11457},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20789},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18089},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27084},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10617},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10168},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15084},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13029},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20882},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2778},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8135},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1574},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11008},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10216},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6572},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4926},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15237},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12543},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7126},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14144},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8561},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9109},
]},
],
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

                   text: '賽西的PT構成(總分351191)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 267195, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53976, name: '強襲', legendMarkerType: 'square'},
{  y: 30020, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分331660)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36701,
				            interval: 3670,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5263},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4963},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6376},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4562},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9643},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8982},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1570},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5814},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5193},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5067},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10264},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7805},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7481},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 581},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6201},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11394},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3988},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10006},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6128},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13029},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36701},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18255},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5692},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7724},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12373},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13255},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7146},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3677},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11471},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8274},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5047},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4543},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8916},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11255},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4973},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10544},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6136},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6849},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14519},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分331660)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 258878, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45278, name: '強襲', legendMarkerType: 'square'},
{  y: 27504, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分244581)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16288,
				            interval: 1628,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3414},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1280},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8518},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5892},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3854},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4605},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4991},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5290},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5624},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3629},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11776},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8013},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3796},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3463},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14824},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6997},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7300},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3767},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9183},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7885},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10860},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10611},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2977},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9576},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2876},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5723},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6504},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9008},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7621},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4612},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16288},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1414},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6160},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6264},
]},
],
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

                   text: '龍的PT構成(總分244581)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 178111, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13838, name: '強襲', legendMarkerType: 'square'},
{  y: 52632, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大無畏的PT統計(總分1042295)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 110526,
				            interval: 11052,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大無畏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18025},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13237},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17738},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22012},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14526},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9688},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10088},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31673},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7026},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14224},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20967},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29236},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22038},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32082},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 110526},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 66135},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43289},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22669},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 48770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大無畏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8181},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1532},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5903},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4977},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13149},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4431},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3291},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3334},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7140},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17322},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28547},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8914},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18719},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13869},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3665},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26234},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 52935},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23723},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14746},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13386},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24367},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32720},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6856},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13418},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6115},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大無畏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12119},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13889},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8700},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14886},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 34578},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 37825},
]},
],
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

                   text: '大無畏的PT構成(總分1042295)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 366349, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121997, name: '強襲', legendMarkerType: 'square'},
{  y: 553949, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '特蘭提亞的PT統計(總分725511)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 88503,
				            interval: 8850,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特蘭提亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7811},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8877},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9210},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10170},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5230},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8399},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8977},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9576},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6182},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10871},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15074},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34204},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 36896},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25143},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15378},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25598},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16682},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10550},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6288},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12664},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17400},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8733},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14740},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7420},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10617},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20108},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9096},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17725},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11456},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 3147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特蘭提亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5051},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6123},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6486},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13280},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7389},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7177},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23078},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11766},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13763},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12023},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27739},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 88503},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特蘭提亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12819},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12165},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10838},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17015},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 46074},
]},
],
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

                   text: '特蘭提亞的PT構成(總分725511)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 404222, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98911, name: '強襲', legendMarkerType: 'square'},
{  y: 222378, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '維吉鐵爾的PT統計(總分716439)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53789,
				            interval: 5378,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉鐵爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7598},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10078},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13541},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15624},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5322},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13617},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6112},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12388},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12892},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20523},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30492},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 51700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26368},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 37976},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 48938},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11086},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9043},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6701},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13949},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11347},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31708},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35141},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28936},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38616},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 53789},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18473},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12726},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18351},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16451},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17738},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉鐵爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3468},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4872},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6091},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1300},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7410},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8903},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12288},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "維吉鐵爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3035},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6410},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6718},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6917},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11803},
]},
],
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

                   text: '維吉鐵爾的PT構成(總分716439)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 637224, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44332, name: '強襲', legendMarkerType: 'square'},
{  y: 34883, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '修昂的PT統計(總分709183)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46700,
				            interval: 4670,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修昂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7285},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 13684},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5074},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7552},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8628},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4662},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4085},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15379},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5012},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8468},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9801},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29878},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31682},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19841},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6040},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13976},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10333},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26294},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18611},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 35190},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25640},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13522},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19351},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15030},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28497},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15323},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 46700},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22563},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7492},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12956},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修昂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4174},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7229},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11013},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9351},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26054},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17837},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 38346},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修昂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2900},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3531},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6893},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8084},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9607},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3981},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19801},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20466},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11718},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8935},
]},
],
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

                   text: '修昂的PT構成(總分709183)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 488549, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124718, name: '強襲', legendMarkerType: 'square'},
{  y: 95916, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '怒風的PT統計(總分701988)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51429,
				            interval: 5142,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "怒風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2243},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9514},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13120},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3161},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10250},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6763},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13809},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9479},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10852},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7926},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10048},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11528},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 44789},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15475},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25332},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13527},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3994},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21853},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13311},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26788},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30782},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22628},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12357},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36797},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2491},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 581},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3364},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7565},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16654},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "怒風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11667},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8579},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19064},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7575},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9065},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24356},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26187},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 51429},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "怒風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9787},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3677},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6306},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7968},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13464},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18927},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 37436},
]},
],
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

                   text: '怒風的PT構成(總分701988)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 406981, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97565, name: '強襲', legendMarkerType: 'square'},
{  y: 197442, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小藍的PT統計(總分693108)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47279,
				            interval: 4727,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小藍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12701},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4953},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10694},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12917},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12986},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5441},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10941},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7283},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9697},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15056},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12573},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9113},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17543},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25754},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29753},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31226},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23911},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 31939},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9847},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23689},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32005},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 47279},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29115},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28809},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26014},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13202},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15822},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8851},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13830},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小藍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5824},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6094},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6369},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7315},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9904},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10917},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14501},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6124},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19437},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15279},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13916},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小藍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5795},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1427},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6055},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15749},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15458},
]},
],
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

                   text: '小藍的PT構成(總分693108)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 532944, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 115680, name: '強襲', legendMarkerType: 'square'},
{  y: 44484, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西野官的PT統計(總分671949)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43249,
				            interval: 4324,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西野官殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4516},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8878},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10176},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6109},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4489},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12396},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7244},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7279},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23493},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 37745},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15166},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19900},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26391},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14452},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25486},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24208},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22066},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22592},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20959},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8400},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6446},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10152},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5773},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9003},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14400},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7294},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9575},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7895},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7540},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18188},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西野官CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6522},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20026},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10858},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5802},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16453},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13418},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 43249},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4557},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11992},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西野官強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5042},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8453},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8615},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9247},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9551},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12800},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19799},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26605},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20749},
]},
],
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

                   text: '西野官的PT構成(總分671949)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 418211, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 120861, name: '強襲', legendMarkerType: 'square'},
{  y: 132877, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '七緒的PT統計(總分657806)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56072,
				            interval: 5607,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "七緒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8128},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10493},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11458},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7028},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8287},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13041},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6284},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5286},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6874},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10661},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11311},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3497},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8850},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 26321},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33966},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 37789},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 46354},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9835},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 34719},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18878},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25889},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27463},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20266},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7089},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28926},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 56072},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42159},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25629},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13806},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16750},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "七緒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7299},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7432},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19553},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "七緒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4130},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7227},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7307},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4140},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17609},
]},
],
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

                   text: '七緒的PT構成(總分657806)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 583109, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34284, name: '強襲', legendMarkerType: 'square'},
{  y: 40413, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '金小胖的PT統計(總分652666)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59093,
				            interval: 5909,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "金小胖殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5575},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6791},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10839},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4551},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7655},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16641},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6517},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10578},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4479},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18672},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12673},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4626},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14681},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15932},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15901},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5383},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32664},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 59093},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 47652},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30579},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23325},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19962},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13561},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7817},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22505},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12592},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 56575},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 52390},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17569},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8050},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 33},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "金小胖強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3774},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4080},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5072},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5905},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7215},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6218},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9156},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14078},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "金小胖CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4981},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4502},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7913},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13911},
]},
],
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

                   text: '金小胖的PT構成(總分652666)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 565861, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 55498, name: '強襲', legendMarkerType: 'square'},
{  y: 31307, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '飛天李奧的PT統計(總分634024)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40933,
				            interval: 4093,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛天李奧殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3014},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9222},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9258},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5675},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4612},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4261},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6089},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11307},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2662},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4680},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12677},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27113},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30769},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33976},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5830},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12618},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14437},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17330},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16803},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 40933},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17647},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23600},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26369},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 157},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27831},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11905},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16079},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12539},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛天李奧CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4788},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5958},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6959},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7029},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 32716},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "飛天李奧強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3192},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17001},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8632},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8439},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18816},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5097},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11085},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14703},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27021},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26805},
]},
],
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

                   text: '飛天李奧的PT構成(總分634024)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 425643, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 140791, name: '強襲', legendMarkerType: 'square'},
{  y: 67590, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '楓宗一郎的PT統計(總分624573)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65585,
				            interval: 6558,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓宗一郎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7192},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3652},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4395},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11149},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4472},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8176},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8514},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5021},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10692},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3511},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8853},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15654},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8715},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3018},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17084},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9235},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11788},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3740},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10883},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17242},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25737},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19782},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28295},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12308},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8412},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6387},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4889},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14175},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓宗一郎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5529},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10663},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16527},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9638},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 62185},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19186},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓宗一郎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5355},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8671},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 17381},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6428},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17614},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14562},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11661},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11354},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18470},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13243},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6632},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10896},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 65585},
]},
],
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

                   text: '楓宗一郎的PT構成(總分624573)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 292993, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 123728, name: '強襲', legendMarkerType: 'square'},
{  y: 207852, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夜曇的PT統計(總分615516)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42695,
				            interval: 4269,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜曇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5597},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4390},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9773},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6172},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6632},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7105},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7352},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5199},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8274},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9517},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11139},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11964},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12175},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28651},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17162},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27172},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26671},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40939},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31932},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24244},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16459},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6829},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7975},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14418},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7112},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4482},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11487},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6365},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12963},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜曇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5187},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6617},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5193},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3609},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5220},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7708},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6741},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19504},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11632},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 40175},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25943},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42695},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜曇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18977},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5924},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20241},
]},
],
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

                   text: '夜曇的PT構成(總分615516)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 390150, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180224, name: '強襲', legendMarkerType: 'square'},
{  y: 45142, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '殘劍飛雪的PT統計(總分607924)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38674,
				            interval: 3867,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殘劍飛雪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9814},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10780},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9517},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15703},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3685},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7682},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9457},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11467},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11693},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6014},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9776},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17335},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8136},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8833},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7085},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3620},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19359},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7759},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 38674},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33317},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15691},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30838},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 78},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35458},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24759},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4815},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14447},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22742},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15829},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17072},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殘劍飛雪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8678},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9943},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11721},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10608},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11143},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9705},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19419},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17232},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殘劍飛雪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4804},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7540},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7997},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6378},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7752},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9084},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9611},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13882},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10992},
]},
],
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

                   text: '殘劍飛雪的PT構成(總分607924)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 431435, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98449, name: '強襲', legendMarkerType: 'square'},
{  y: 78040, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '黎慕筱的PT統計(總分597387)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33920,
				            interval: 3392,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黎慕筱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6510},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9282},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3911},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12605},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5246},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9940},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13564},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2938},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12715},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14715},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18856},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16002},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14633},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 22058},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33920},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32525},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28206},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26716},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 28869},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14271},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8458},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10534},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16920},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11443},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20709},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9789},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20217},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12969},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18356},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19645},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黎慕筱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4442},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12426},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1581},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5914},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4415},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10417},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13673},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18903},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黎慕筱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3131},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11282},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13016},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9087},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12578},
]},
],
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

                   text: '黎慕筱的PT構成(總分597387)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 476522, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71771, name: '強襲', legendMarkerType: 'square'},
{  y: 49094, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '布洛基的PT統計(總分589854)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57173,
				            interval: 5717,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布洛基殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6050},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6341},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10423},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5215},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9500},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9558},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6625},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12404},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9988},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4889},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6687},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11802},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11083},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17431},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 51843},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21155},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21109},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14768},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11647},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16298},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7506},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14659},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31422},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57173},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33697},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18405},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10675},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15149},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19455},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布洛基強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3882},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5718},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4722},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11714},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2925},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4642},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8592},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14051},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13245},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16176},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布洛基CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5210},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1933},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7641},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1630},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9242},
]},
],
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

                   text: '布洛基的PT構成(總分589854)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 478531, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 85667, name: '強襲', legendMarkerType: 'square'},
{  y: 25656, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '于君的PT統計(總分577707)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42754,
				            interval: 4275,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "于君強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6591},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6942},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8671},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9151},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12323},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20620},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11130},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11455},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20934},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18248},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "于君殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5730},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10726},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10704},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11362},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8026},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3804},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15696},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15714},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7495},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10080},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6745},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14105},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5489},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15206},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11104},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11265},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7576},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 42754},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13652},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31826},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6599},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17377},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16731},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21755},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21863},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11952},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17605},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7761},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11111},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "于君CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3563},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6007},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10479},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18680},
]},
],
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

                   text: '于君的PT構成(總分577707)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 396953, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 142025, name: '強襲', legendMarkerType: 'square'},
{  y: 38729, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘟捺的PT統計(總分569808)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45668,
				            interval: 4566,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘟捺CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3461},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1142},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5710},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 751},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4526},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6461},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7756},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11355},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9996},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11241},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14259},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘟捺殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3414},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6160},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9519},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9546},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14121},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9048},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9819},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18375},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10773},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12109},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5413},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13955},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15968},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22571},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27186},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34947},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17117},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3680},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9092},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 45668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16911},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26249},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21230},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19868},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17146},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11191},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13119},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7836},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6550},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘟捺強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9668},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1171},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5440},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5418},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3821},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1340},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4480},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23231},
]},
],
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

                   text: '嘟捺的PT構成(總分569808)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 438581, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54569, name: '強襲', legendMarkerType: 'square'},
{  y: 76658, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰藍色月光的PT統計(總分567744)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43319,
				            interval: 4331,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰藍色月光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 794},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3283},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7002},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13310},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11229},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9751},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3542},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4995},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13237},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8511},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7432},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14159},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15520},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14929},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 34504},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27070},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11147},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9234},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15374},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11412},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9465},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19642},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16701},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12691},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30032},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30413},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 43319},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 32300},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16750},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰藍色月光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4047},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9120},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15488},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰藍色月光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8178},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4631},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2631},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14059},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7114},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7566},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5172},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3092},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8788},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13243},
]},
],
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

                   text: '冰藍色月光的PT構成(總分567744)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 459297, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79792, name: '強襲', legendMarkerType: 'square'},
{  y: 28655, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿納貝爾˙卡多的PT統計(總分523998)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44704,
				            interval: 4470,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿納貝爾˙卡多殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9422},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4834},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5242},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10202},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6327},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5773},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5544},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11042},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19934},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22678},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12561},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10535},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4177},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11023},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 44704},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28346},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19072},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23010},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12198},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15877},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19212},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6883},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19099},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9951},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7672},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9966},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26033},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19037},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿納貝爾˙卡多強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4518},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3268},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9172},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12979},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7144},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18462},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16679},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17315},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿納貝爾˙卡多CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10489},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3505},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13538},
]},
],
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

                   text: '阿納貝爾˙卡多的PT構成(總分523998)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 406929, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 89537, name: '強襲', legendMarkerType: 'square'},
{  y: 27532, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'SHS的PT統計(總分502381)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38476,
				            interval: 3847,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SHS強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3298},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16833},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11753},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13528},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6220},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10877},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7998},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22173},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13167},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SHS殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12302},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6064},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10709},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14660},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7957},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 30727},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6610},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3800},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9593},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8316},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6048},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9335},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3495},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11301},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14159},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5399},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18306},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7612},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7058},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20803},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16489},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38476},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14307},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9162},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11491},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12831},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6392},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20139},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7204},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3006},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SHSCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4020},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8677},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1926},
]},
],
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

                   text: 'SHS的PT構成(總分502381)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 353751, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134007, name: '強襲', legendMarkerType: 'square'},
{  y: 14623, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
