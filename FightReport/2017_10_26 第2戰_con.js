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
				
				            maximum: 657911,
				            interval: 65791,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 181552},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 207813},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 193007},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 254041},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 244808},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 259479},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 246096},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 318234},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 325015},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 323981},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 279320},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 328253},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 400672},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 415473},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 422542},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 390606},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 442391},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 429190},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 363433},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 448884},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 472142},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 629906},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 497166},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 479623},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 606121},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 586742},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 639188},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 538888},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 657911},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 578502},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 92054},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 117815},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 154488},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 192280},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 208597},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 268481},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 268841},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 305108},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 317732},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 257222},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 304996},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 347164},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 281487},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 312408},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 252595},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 303982},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 223736},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 293292},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 347526},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 331089},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 202663},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 239745},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 233607},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 222550},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 208783},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 235675},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 250332},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 143146},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 152823},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 155256},
]},
],
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
				
				            maximum: 19386452,
				            interval: 1938645,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 181552},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 389365},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 582372},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 836413},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1081221},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1340700},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1586796},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1905030},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2230045},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2554026},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2833346},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3161599},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3562271},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3977744},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4400286},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4790892},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5233283},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5662473},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6025906},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6474790},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6946932},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7576838},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8074004},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8553627},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9159748},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9746490},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10385678},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10924566},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11582477},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12160979},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 92054},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 209869},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 364357},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 556637},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 765234},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1033715},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1302556},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1607664},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1925396},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2182618},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2487614},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2834778},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3116265},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3428673},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3681268},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3985250},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4208986},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4502278},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4849804},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5180893},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5383556},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5623301},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5856908},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6079458},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6288241},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6523916},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6774248},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6917394},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7070217},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7225473},
]},
],
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
				
				            maximum: 339942,
				            interval: 33994,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 36397},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 73451},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 60646},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 63173},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 78500},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 43051},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24991},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 61326},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63579},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 85763},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 76344},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 70611},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 126130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 123175},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 91349},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 104153},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 168718},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 128885},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 94175},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 151986},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 159392},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 214569},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 156786},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 78584},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 161616},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 235959},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 180964},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 187228},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 254357},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 198683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 117971},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 92724},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 95027},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 140373},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 126830},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 173900},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 169001},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 187586},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 191147},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 180032},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 153543},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 192862},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 218760},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 227306},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 256813},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 213017},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 206734},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 202299},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 191922},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 206532},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 191491},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 245632},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 221556},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 339942},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 312230},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 221718},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 315918},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 224529},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 271799},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 289014},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 69400},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 74538},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 83927},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 137416},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 153302},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 200552},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 170503},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 179769},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 213784},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 174401},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 188642},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 189078},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 153848},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 195338},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 159791},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 152506},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 105625},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 132462},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 169676},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 152166},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 154047},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 133048},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 134657},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 157885},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 117100},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 136076},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 115153},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 80926},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 106797},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 123354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27184},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 41638},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37334},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 50495},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39478},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42528},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 52104},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 69322},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 70289},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 58186},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 49433},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 64780},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 55782},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 64992},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 74380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 73436},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 66939},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 98006},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 77336},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 90366},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 121259},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 169705},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 118824},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 61097},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 132275},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 129065},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 142306},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 127131},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 131755},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 90805},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10031},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 24166},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 38514},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25771},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9330},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30148},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 29585},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40923},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 55033},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46350},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 54538},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 86192},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 72879},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44882},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 43280},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 77060},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 80565},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 100707},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 107356},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 115435},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14347},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 64930},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45719},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 40413},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 53603},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29535},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 86451},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22862},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11014},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11899},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12623},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19111},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32047},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29093},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45965},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 37781},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 68753},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 84416},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48915},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 36471},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 61816},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 71894},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54760},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 72188},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 49524},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 74416},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37546},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 60123},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 70494},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 63488},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34269},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 41767},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 53231},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24252},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38080},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 70064},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 48728},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39358},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35012},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20003},
]},
],
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
				            text: '喵鼠的PT統計(總分840955)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 110333,
				            interval: 11033,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20195},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10657},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22224},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16649},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36478},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32868},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27955},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 110333},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 44726},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7509},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 386},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1213},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7936},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1795},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6954},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4804},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3055},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7056},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17270},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5453},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8390},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3009},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3507},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 82},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7193},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6773},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6209},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1758},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7700},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6216},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3400},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11419},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10091},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7099},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16448},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11019},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7620},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11164},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 44386},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21019},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25375},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 39578},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38867},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22240},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47403},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23760},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29482},
]},
],
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

                   text: '喵鼠的PT構成(總分840955)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 152629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 349965, name: '強襲', legendMarkerType: 'square'},
{  y: 338361, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分718381)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30918,
				            interval: 3091,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11246},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5583},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9348},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3252},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9178},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6401},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6643},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15101},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8158},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14157},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5378},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23697},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25737},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18763},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20556},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26191},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13874},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13352},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21840},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7320},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13051},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18576},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30918},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19819},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12795},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13066},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5329},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20231},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16232},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15229},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17381},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8751},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9273},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10136},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26151},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10595},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16622},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25911},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22072},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30804},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16908},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23678},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5231},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16674},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18287},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10940},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17946},
]},
],
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

                   text: '葬月的PT構成(總分718381)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 431021, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 218282, name: '強襲', legendMarkerType: 'square'},
{  y: 69078, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分706580)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55603,
				            interval: 5560,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 36},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6440},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2537},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1195},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2561},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6597},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 120},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4800},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4245},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9099},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14819},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2187},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3950},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5775},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1805},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4151},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5993},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4368},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15527},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4279},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3443},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12355},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4996},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9454},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5071},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15577},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11583},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 23732},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 51359},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21613},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16082},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26687},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15803},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22053},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 46278},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 55603},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19258},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27928},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25900},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5702},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12963},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16094},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6457},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9359},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15663},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9335},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13415},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32371},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24785},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31842},
]},
],
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

                   text: '神隱的PT構成(總分706580)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144067, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 177986, name: '強襲', legendMarkerType: 'square'},
{  y: 384527, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分684939)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54747,
				            interval: 5474,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6143},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1512},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4728},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4773},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7739},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6463},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7193},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1940},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6049},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9723},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5724},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13178},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5705},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15042},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8803},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6553},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10234},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8385},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8424},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17561},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7636},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11412},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12226},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 40044},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35979},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18628},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51474},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7596},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18577},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20625},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19132},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12903},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19482},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3005},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9881},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19096},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10461},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21739},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 54747},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28393},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17095},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9528},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14872},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12064},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23687},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28785},
]},
],
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

                   text: '依司瑪耳的PT構成(總分684939)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 380069, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 198839, name: '強襲', legendMarkerType: 'square'},
{  y: 106031, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分677572)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50758,
				            interval: 5075,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4051},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5296},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8947},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9697},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2708},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6776},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16460},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5889},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5994},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1436},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10119},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9999},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28348},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31070},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36745},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6493},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15784},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20746},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17407},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50758},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6971},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9059},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16695},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9017},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39954},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34867},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45887},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6312},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19393},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16624},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4450},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6524},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8501},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7467},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9865},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9681},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20785},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 39133},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21535},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6363},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6222},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6399},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7437},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8595},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12759},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2354},
]},
],
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

                   text: '阿拉的PT構成(總分677572)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 499502, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134304, name: '強襲', legendMarkerType: 'square'},
{  y: 43766, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分677019)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73784,
				            interval: 7378,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5124},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13804},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13443},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2172},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6714},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16324},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13233},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19404},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12898},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11013},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12395},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26601},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27333},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17231},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2187},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3688},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8507},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6706},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9304},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6017},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4772},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6362},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11234},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9184},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5742},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6357},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4313},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6047},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4270},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8057},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5099},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6517},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19062},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4407},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6909},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13357},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6810},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11500},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16308},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18932},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10430},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17162},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31559},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29004},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29134},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 73784},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 44305},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25990},
]},
],
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

                   text: '秋風冷月的PT構成(總分677019)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 164996, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 197689, name: '強襲', legendMarkerType: 'square'},
{  y: 314334, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分675871)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68707,
				            interval: 6870,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10195},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10526},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12422},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12218},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4530},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12480},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32168},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15072},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30439},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 68707},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30751},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27902},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4889},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8613},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3508},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2401},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5868},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5511},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9247},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4832},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7935},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12468},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9675},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5568},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5373},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11913},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10196},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35249},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18955},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22637},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11145},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7781},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12340},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13846},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4499},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7050},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5973},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10235},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14739},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12987},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7339},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6198},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7646},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3996},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 48342},
]},
],
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

                   text: '雪歌的PT構成(總分675871)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 283812, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86508, name: '強襲', legendMarkerType: 'square'},
{  y: 305551, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分651155)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49830,
				            interval: 4983,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10169},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4886},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6322},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10457},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11288},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9749},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9890},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9038},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10917},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3081},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12243},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11262},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 396},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11245},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2339},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8304},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8741},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6356},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12582},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14287},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9540},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13441},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19073},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11141},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3327},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16186},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23241},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 49830},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18060},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12361},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10857},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10482},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13006},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20128},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10361},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19418},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11652},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38516},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11434},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24449},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22804},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7396},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9413},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29170},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19525},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28929},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6487},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分651155)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319331, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 223528, name: '強襲', legendMarkerType: 'square'},
{  y: 108296, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分614697)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54510,
				            interval: 5451,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5605},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7782},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14351},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16740},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7240},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8889},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8159},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12739},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9965},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2675},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4650},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 999},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22374},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22785},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 50771},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12911},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27939},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6957},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6257},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4952},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13487},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7918},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11926},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12499},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7088},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10396},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4384},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10370},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11617},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13698},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3064},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30902},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 54510},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18120},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13529},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15105},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13533},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2976},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5486},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7259},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7250},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8050},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9214},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6761},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10721},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8642},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13635},
]},
],
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

                   text: '嘎喵的PT構成(總分614697)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 418392, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 84274, name: '強襲', legendMarkerType: 'square'},
{  y: 112031, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分610507)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40951,
				            interval: 4095,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8011},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6303},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4298},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6150},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11554},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17556},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19231},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14515},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9575},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14434},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 40247},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15960},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22033},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17881},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40951},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8413},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4447},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11499},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5089},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4513},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7228},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3973},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5736},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9205},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6167},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3040},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6994},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2185},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6876},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35840},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11797},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17177},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12704},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11940},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7242},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5865},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11242},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7021},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13575},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7672},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24470},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3548},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9184},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9428},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7048},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11844},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18610},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 21185},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18861},
]},
],
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

                   text: '緋煌的PT構成(總分610507)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 274832, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 248699, name: '強襲', legendMarkerType: 'square'},
{  y: 86976, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分603092)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42681,
				            interval: 4268,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7850},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3562},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6623},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7824},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7576},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12328},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11485},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11407},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31355},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15352},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11573},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21699},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3981},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6468},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12762},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4578},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9323},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7995},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8442},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10375},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10532},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9776},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5480},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15209},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29672},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29053},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2333},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8865},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10346},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9676},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8822},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7644},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12900},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4377},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11654},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13731},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2701},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23066},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16327},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26419},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15824},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20236},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 42681},
]},
],
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

                   text: '冰紅茶的PT構成(總分603092)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 353286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 171065, name: '強襲', legendMarkerType: 'square'},
{  y: 78741, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分601099)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51725,
				            interval: 5172,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5373},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5774},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4980},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4665},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7137},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7469},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10987},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3983},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10298},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11873},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5705},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6361},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14317},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44202},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21795},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5482},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10185},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6477},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6751},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11383},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9107},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25717},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23816},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 51725},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31288},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3757},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12703},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10092},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18620},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15104},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4060},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3737},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6292},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10835},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10035},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18165},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18127},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4593},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4545},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6795},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8479},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21688},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11374},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11531},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27151},
]},
],
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

                   text: '寇內爾緹的PT構成(總分601099)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 407126, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 96156, name: '強襲', legendMarkerType: 'square'},
{  y: 97817, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分558518)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51420,
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
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6179},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5359},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4781},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 419},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5748},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6789},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5139},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9870},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14485},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7279},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6557},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4151},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8923},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4026},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 362},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17762},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24785},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10615},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16078},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11630},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39280},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10206},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32513},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8689},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8301},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9142},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23788},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19078},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 51420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8356},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4854},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6082},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5728},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5715},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6666},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12100},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9791},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9437},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21708},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5320},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22703},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13034},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13889},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18570},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8271},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5953},
]},
],
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

                   text: '藏月的PT構成(總分558518)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 380341, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 163953, name: '強襲', legendMarkerType: 'square'},
{  y: 14224, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分536975)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38354,
				            interval: 3835,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3735},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5453},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11782},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7625},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8949},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8786},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9649},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19699},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11780},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3317},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18312},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6433},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9109},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10478},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11048},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5039},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4434},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12641},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12820},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4138},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6891},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4134},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12683},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16070},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 33297},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7180},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38354},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7571},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16057},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22713},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23914},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13933},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11169},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15141},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3401},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12273},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18863},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6198},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14077},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7492},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19213},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8022},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7389},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18905},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6808},
]},
],
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

                   text: '冰的PT構成(總分536975)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 390820, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 109087, name: '強襲', legendMarkerType: 'square'},
{  y: 37068, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分532598)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37123,
				            interval: 3712,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4682},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4315},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6340},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7298},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5939},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7947},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6730},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5471},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11822},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3406},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6137},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2566},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9558},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3769},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12772},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10454},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4243},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6507},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19835},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8860},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16499},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6612},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14383},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2507},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14316},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37123},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6000},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3781},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3947},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12515},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10038},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6730},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9545},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22859},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33202},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10065},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19007},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13526},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4157},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21511},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26152},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20983},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16544},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26182},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25734},
]},
],
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

                   text: '魔法的PT構成(總分532598)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 240120, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 292478, name: '強襲', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分528902)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32854,
				            interval: 3285,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5685},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6063},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2688},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12230},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12223},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7640},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8267},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13296},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17632},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16728},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5453},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4133},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7595},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4920},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12502},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6967},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6868},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8820},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5743},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16419},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10293},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5926},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13259},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2601},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6954},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9460},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10681},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12731},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4399},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4290},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11416},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10397},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8811},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10894},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12954},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10774},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32175},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5903},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20813},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16665},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 32854},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19500},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21640},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19139},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13773},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8869},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分528902)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 263636, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 242624, name: '強襲', legendMarkerType: 'square'},
{  y: 22642, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分516139)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29962,
				            interval: 2996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6436},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5205},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6753},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5955},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9115},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2452},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4506},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10695},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10055},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4736},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8369},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3600},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15086},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19629},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 394},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6085},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6366},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12779},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3925},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7107},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8742},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7063},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13505},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11386},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10858},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2607},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2864},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7001},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7507},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9883},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9368},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13135},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6095},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14498},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14975},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29962},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16737},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8228},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21055},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7291},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2982},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15965},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10304},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13908},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15622},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9172},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9111},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24171},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8293},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18079},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16479},
]},
],
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

                   text: '阿榮的PT構成(總分516139)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 203454, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 151377, name: '強襲', legendMarkerType: 'square'},
{  y: 161308, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分496404)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35424,
				            interval: 3542,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7596},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1914},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6490},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3193},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7281},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 600},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10154},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10857},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17760},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28286},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7178},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3746},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9365},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5504},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8069},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4623},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12283},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4962},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16777},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1407},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12788},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7341},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10255},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35424},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23470},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 74},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14962},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10632},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7197},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10804},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6983},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8813},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13301},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13344},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15487},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10730},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19545},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17341},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15206},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17496},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3785},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9005},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12521},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9831},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22024},
]},
],
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

                   text: '土土昕的PT構成(總分496404)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 282991, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 123545, name: '強襲', legendMarkerType: 'square'},
{  y: 89868, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分467590)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34840,
				            interval: 3484,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5163},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7876},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4094},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2956},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6376},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14655},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19775},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23542},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22345},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11780},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5342},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34840},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12002},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12567},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5971},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12529},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13842},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12304},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13011},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15134},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15209},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6864},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10328},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15256},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12166},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3536},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3299},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7989},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9056},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8665},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17990},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5933},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12396},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10631},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15630},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13532},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8952},
]},
],
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

                   text: '亞歷的PT構成(總分467590)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 336113, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 122525, name: '強襲', legendMarkerType: 'square'},
{  y: 8952, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分461986)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24093,
				            interval: 2409,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4875},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10213},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6780},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6955},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12897},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3502},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10069},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24093},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20592},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16992},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13438},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15632},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15619},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6865},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6219},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6632},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2414},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9276},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13069},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8404},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5427},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4520},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5178},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15633},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1990},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8274},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10210},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5369},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13433},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17638},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14757},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3638},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13595},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5523},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5821},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12899},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12138},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5481},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13711},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8048},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13558},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5808},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7016},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7134},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10355},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18346},
]},
],
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

                   text: '幻想魔術師的PT構成(總分461986)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 251670, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161657, name: '強襲', legendMarkerType: 'square'},
{  y: 48659, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '銀狼的PT統計(總分603107)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36269,
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
                                    name: "銀狼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6915},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9120},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1507},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3595},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8485},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16511},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2482},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30734},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9229},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4312},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2759},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3237},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12563},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13767},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6009},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7188},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9621},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9020},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6178},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9866},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3491},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6121},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2584},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6747},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6268},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2383},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1849},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11848},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3605},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "銀狼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9995},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21140},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31384},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15740},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21723},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11180},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "銀狼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11236},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11865},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12011},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18300},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21427},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16411},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18382},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25394},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26513},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17201},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14788},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13188},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11875},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6325},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12766},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36269},
]},
],
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

                   text: '銀狼的PT構成(總分603107)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 217994, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 273951, name: '強襲', legendMarkerType: 'square'},
{  y: 111162, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嗡嗡嗡的PT統計(總分561562)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34107,
				            interval: 3410,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗡嗡嗡殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5171},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6489},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9637},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16671},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11907},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13896},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16600},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4492},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7918},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7989},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16890},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2290},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34107},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14927},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5071},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18621},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11816},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2981},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17276},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13648},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15003},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6014},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5628},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10630},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15390},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14837},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16967},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12015},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4486},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2297},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗡嗡嗡強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3219},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9330},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11464},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8114},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13789},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12392},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13048},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17179},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16088},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10847},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8666},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15156},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11014},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嗡嗡嗡CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11885},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21999},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25259},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10449},
]},
],
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

                   text: '嗡嗡嗡的PT構成(總分561562)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 341664, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 150306, name: '強襲', legendMarkerType: 'square'},
{  y: 69592, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小水點的PT統計(總分532734)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34771,
				            interval: 3477,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小水點殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9159},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7454},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11451},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4125},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13307},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10582},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12656},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7138},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10285},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7449},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5048},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10859},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7964},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11320},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8199},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11555},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11849},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5817},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13885},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7068},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34771},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24605},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31121},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24871},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21879},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11718},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10514},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9467},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小水點強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4931},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7258},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10530},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13372},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17848},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8866},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14504},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16417},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16657},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15531},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11602},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7446},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小水點CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4776},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7889},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11993},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1794},
]},
],
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

                   text: '小水點的PT構成(總分532734)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361320, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 144962, name: '強襲', legendMarkerType: 'square'},
{  y: 26452, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔幻天空的PT統計(總分531948)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45616,
				            interval: 4561,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔幻天空殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2267},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10197},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2857},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7462},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6396},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4649},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9005},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11092},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6834},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8251},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4605},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7503},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11125},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18434},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27971},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13755},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2977},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16964},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7820},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18637},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11329},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18689},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15165},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20130},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15928},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8942},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 280},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 863},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23598},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 45616},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔幻天空CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4830},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6797},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5766},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12877},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7545},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13333},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔幻天空強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1843},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5544},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5166},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10383},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8241},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14347},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8702},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13608},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12614},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23376},
]},
],
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

                   text: '魔幻天空的PT構成(總分531948)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 359341, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103824, name: '強襲', legendMarkerType: 'square'},
{  y: 68783, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蘭斯洛特的PT統計(總分459997)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34467,
				            interval: 3446,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯洛特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2114},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4040},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10496},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4470},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22413},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27817},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12648},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13682},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25616},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25668},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13905},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34467},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31419},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30992},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12549},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12608},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11340},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10461},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6583},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8718},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10182},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8660},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6050},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11180},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13630},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5957},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 677},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6657},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10507},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯洛特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7089},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9852},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12223},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10913},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18433},
]},
],
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

                   text: '蘭斯洛特的PT構成(總分459997)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 401487, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58510, name: '強襲', legendMarkerType: 'square'},
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
				            text: '2333的PT統計(總分459715)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68213,
				            interval: 6821,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "2333殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2431},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 182},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5041},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2667},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3738},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2731},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6353},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5817},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7339},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 136},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 904},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "2333CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7478},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11702},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26171},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 68213},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19559},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28582},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9748},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26705},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20132},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18538},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15229},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19676},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16314},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16367},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28709},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11852},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17589},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15219},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "2333強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9461},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5054},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12180},
]},
],
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

                   text: '2333的PT構成(總分459715)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 38019, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26695, name: '強襲', legendMarkerType: 'square'},
{  y: 395001, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '戰冰夏的PT統計(總分459261)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48791,
				            interval: 4879,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "戰冰夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2956},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7215},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2535},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5896},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11038},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8742},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18367},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11170},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48791},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10762},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33729},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17207},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10036},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13777},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10372},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6131},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17182},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6713},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8959},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15072},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6129},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11693},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9558},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5603},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6247},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9770},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10098},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6451},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12006},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "戰冰夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4502},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9688},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7363},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6614},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "戰冰夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4551},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5502},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9417},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5069},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8255},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8446},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11629},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9781},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7699},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8167},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8373},
]},
],
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

                   text: '戰冰夏的PT構成(總分459261)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 344205, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86889, name: '強襲', legendMarkerType: 'square'},
{  y: 28167, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小白鶴的PT統計(總分454083)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31994,
				            interval: 3199,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小白鶴殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 362},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2733},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4998},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22229},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12533},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 31994},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24511},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20870},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10701},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5717},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24750},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29458},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13412},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11138},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6458},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10642},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12252},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10308},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11012},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6524},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11542},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7536},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4453},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15705},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9439},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10944},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小白鶴強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6812},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5136},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5387},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8223},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9465},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19231},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5831},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22010},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8931},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11644},
]},
],
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

                   text: '小白鶴的PT構成(總分454083)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 342047, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 112036, name: '強襲', legendMarkerType: 'square'},
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
				            text: '哈里的PT統計(總分404012)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29750,
				            interval: 2975,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6115},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6584},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23376},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15171},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 23415},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15794},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13280},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13348},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11619},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8359},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29750},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9807},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25586},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21464},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6054},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6707},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4029},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12555},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2155},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5825},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4115},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9626},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6527},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12535},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6648},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12853},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5560},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13643},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12813},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7010},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7000},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8394},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9512},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8625},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2416},
]},
],
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

                   text: '哈里的PT構成(總分404012)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 297003, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42957, name: '強襲', legendMarkerType: 'square'},
{  y: 64052, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '派翠克的PT統計(總分368354)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40902,
				            interval: 4090,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派翠克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6505},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9188},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7306},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8215},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12503},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12899},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5571},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7706},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11899},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派翠克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6163},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7449},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5694},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8928},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7274},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12538},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17295},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15890},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15189},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4900},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2220},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6061},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2912},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7369},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11699},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6250},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 40902},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15839},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25984},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5706},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9700},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 975},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11974},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11298},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12857},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6375},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7070},
]},
],
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

                   text: '派翠克的PT構成(總分368354)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 286562, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81792, name: '強襲', legendMarkerType: 'square'},
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
				            text: '旺角金正恩的PT統計(總分346874)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41679,
				            interval: 4167,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旺角金正恩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16258},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29449},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18459},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41679},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13575},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26998},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16952},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37637},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39778},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旺角金正恩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 970},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2584},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2920},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3563},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6388},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1770},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3979},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3968},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 781},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "旺角金正恩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35809},
]},
],
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

                   text: '旺角金正恩的PT構成(總分346874)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 26923, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35809, name: '強襲', legendMarkerType: 'square'},
{  y: 284142, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '菲艾特的PT統計(總分338511)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19962,
				            interval: 1996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲艾特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10521},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19962},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14551},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16751},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11879},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16203},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17222},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11281},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19126},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15133},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19149},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15244},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19837},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲艾特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1790},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4064},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1782},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4347},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9541},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5306},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12242},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5325},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 640},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3825},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2420},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5931},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3090},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3412},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3340},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "菲艾特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16606},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16315},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11908},
]},
],
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

                   text: '菲艾特的PT構成(總分338511)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 74852, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44829, name: '強襲', legendMarkerType: 'square'},
{  y: 218830, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無法無天的PT統計(總分314397)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19622,
				            interval: 1962,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無法無天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3676},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6424},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4170},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6521},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7035},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 248},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4962},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 662},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9780},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14016},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10490},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5727},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4924},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7406},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4432},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10213},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11062},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4488},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5726},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8523},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6561},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19622},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16056},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10133},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無法無天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19490},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16707},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無法無天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4236},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13516},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11888},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19026},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18270},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14048},
]},
],
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

                   text: '無法無天的PT構成(總分314397)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 197216, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 80984, name: '強襲', legendMarkerType: 'square'},
{  y: 36197, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '歎希奇的PT統計(總分297833)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30831,
				            interval: 3083,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歎希奇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3823},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6006},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4599},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2753},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6177},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4635},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4054},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5904},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4977},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 525},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10097},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1386},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5223},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4576},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7129},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3025},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2162},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28839},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9537},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22276},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5097},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 30831},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16026},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6528},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9198},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10132},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25507},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歎希奇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5653},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9132},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16038},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4155},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歎希奇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8601},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8717},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4346},
]},
],
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

                   text: '歎希奇的PT構成(總分297833)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 241191, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34978, name: '強襲', legendMarkerType: 'square'},
{  y: 21664, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '丹尼的PT統計(總分273932)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28661,
				            interval: 2866,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7177},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4643},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5486},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5148},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7336},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9166},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 104},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8478},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9068},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14552},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12083},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5173},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12767},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13223},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5170},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7832},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12857},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4307},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9794},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3037},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4602},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13641},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3397},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4086},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4041},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2220},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12128},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5217},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "丹尼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3979},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11046},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7179},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28661},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6391},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6413},
]},
],
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

                   text: '丹尼的PT構成(總分273932)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 187809, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63669, name: '強襲', legendMarkerType: 'square'},
{  y: 22454, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '影星的PT統計(總分268945)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32326,
				            interval: 3232,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影星殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4067},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4499},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6101},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15244},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15397},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 655},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12504},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2836},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 29448},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32326},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9378},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6280},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11791},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9502},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11360},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6344},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3620},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11055},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9527},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8153},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1217},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6257},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1982},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2796},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影星CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2102},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2323},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4426},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影星強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8965},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4598},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7736},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9601},
]},
],
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

                   text: '影星的PT構成(總分268945)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 222339, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30900, name: '強襲', legendMarkerType: 'square'},
{  y: 15706, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '柯南的PT統計(總分240025)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23396,
				            interval: 2339,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "柯南殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6187},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3922},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3969},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6573},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 23396},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9708},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16593},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1157},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10519},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9643},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4726},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9937},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8745},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2274},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4951},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5732},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11481},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14685},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8661},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2022},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2747},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6030},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10081},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "柯南強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4857},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4184},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4584},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7976},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9535},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10224},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "柯南CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4607},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9360},
]},
],
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

                   text: '柯南的PT構成(總分240025)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 184698, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41360, name: '強襲', legendMarkerType: 'square'},
{  y: 13967, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑特的PT統計(總分173144)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12821,
				            interval: 1282,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3619},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2219},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2851},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2749},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1190},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4579},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3880},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4964},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 770},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5179},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5797},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4560},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2997},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2837},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2323},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6080},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2543},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6586},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6397},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6124},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4240},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5509},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3950},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5312},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4007},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6597},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2978},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3145},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4888},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12795},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12821},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11547},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7411},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9700},
]},
],
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

                   text: '傑特的PT構成(總分173144)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 110837, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28658, name: '強襲', legendMarkerType: 'square'},
{  y: 33649, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '信瑪冠石獸的PT統計(總分137039)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21786,
				            interval: 2178,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "信瑪冠石獸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3411},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7236},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9563},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "信瑪冠石獸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3234},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3957},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2113},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7237},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8625},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2395},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12327},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13294},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10871},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10281},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5906},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "信瑪冠石獸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8623},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21786},
]},
],
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

                   text: '信瑪冠石獸的PT構成(總分137039)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 80260, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30409, name: '強襲', legendMarkerType: 'square'},
{  y: 26370, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
