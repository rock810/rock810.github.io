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
				
				            maximum: 672131,
				            interval: 67213,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 189430},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 199669},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 246327},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 240488},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 264014},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 276379},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 271245},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 290388},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 298811},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 286711},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 319546},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 286269},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 325630},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 349454},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 571048},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 653699},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 646892},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 626905},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 672131},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 504952},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 526430},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 429870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 579811},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 538690},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 650230},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 639871},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 565702},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 412632},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 413904},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 536437},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147685},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 171990},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 176459},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 209661},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 241754},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 332361},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 253827},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 325377},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 300174},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 290923},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 350267},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 341111},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 339066},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 381202},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 325167},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 436302},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 387012},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 309589},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 287158},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 437963},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 460260},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 574922},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 408754},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 429403},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 431502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 540698},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 527351},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 446221},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 428779},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 433677},
]},
],
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
				
				            maximum: 23546457,
				            interval: 2354645,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 189430},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 389099},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 635426},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 875914},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1139928},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1416307},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1687552},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1977940},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2276751},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2563462},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2883008},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3169277},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3494907},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3844361},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4415409},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5069108},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5716000},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6342905},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7015036},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7519988},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8046418},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8476288},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9056099},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9594789},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10245019},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10884890},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11450592},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11863224},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12277128},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12813565},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 12819842},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147685},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 319675},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 496134},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 705795},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 947549},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1279910},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1533737},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1859114},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2159288},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2450211},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2800478},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3141589},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3480655},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3861857},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4187024},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4623326},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5010338},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5319927},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5607085},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6045048},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6505308},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7080230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7488984},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7918387},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8349889},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8890587},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9417938},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9864159},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10292938},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10726615},
]},
],
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
				
				            maximum: 493768,
				            interval: 49376,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 133589},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 126941},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 156698},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 146694},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 158402},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 174949},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 168929},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 173018},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 192667},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 194301},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 196747},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 161791},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 202770},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 204144},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 349883},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 493768},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 486003},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 425666},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 428866},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 395277},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 382549},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 272810},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 289603},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 310616},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 374489},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 378156},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 343876},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 249830},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 299207},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 254589},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 28999},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 30093},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 62082},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29743},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 46443},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 113776},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26157},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 53679},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 46537},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16369},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 106958},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 63147},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3781},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 85870},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 118120},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 123045},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 76574},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 114846},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 153798},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 164339},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 245923},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 128009},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 154150},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 99454},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 236855},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 143058},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 85697},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 119106},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 159361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 103785},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 107169},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 85084},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 141946},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 158217},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 163838},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 192005},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 233669},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 207844},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 218939},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 170881},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 218829},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 250935},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 206880},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 224320},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 224287},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 170886},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 179245},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 107740},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 189958},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 207676},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 201405},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 207130},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 174401},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 272706},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 175112},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 235510},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 244686},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 218777},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 199937},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 26461},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 36087},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 52886},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 55755},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 58556},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44790},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 57903},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 67980},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 55897},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 46877},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 59998},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 69482},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 68554},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 74970},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 115187},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 83684},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 81454},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 109177},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 125705},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 42682},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 66411},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 96783},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 172729},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 104780},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 162447},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 144437},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 83891},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 76593},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30668},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 159827},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14901},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 34728},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 29293},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 37972},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 37094},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 54747},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35665},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38029},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 45793},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 55615},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 72428},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 59135},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 84350},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 88452},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 82467},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 93895},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 93081},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 53770},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 64572},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 94207},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88245},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 127594},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 73615},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 100852},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59342},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 128731},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 148783},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 115838},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 90896},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 74379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29380},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 36641},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 36743},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38039},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 47056},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 56640},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 44413},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 49390},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50247},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45533},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 62801},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 54996},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54306},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70340},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 105978},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 76247},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 79435},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 92062},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 117560},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 66993},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 77470},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60277},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 117479},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 123294},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 113294},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 117278},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 137935},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 86209},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 84029},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 122021},
]},
],
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
				            text: '喵鼠的PT統計(總分975820)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 88213,
				            interval: 8821,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4983},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6137},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6004},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3757},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4844},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3920},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10499},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6976},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5071},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2456},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 910},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2285},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8629},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7011},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5451},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3766},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5874},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6911},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6421},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8420},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15016},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13273},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37087},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 67288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11988},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26225},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24147},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17361},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38760},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30009},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11073},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11896},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15991},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 43267},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37358},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44194},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 61852},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21349},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 58254},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39566},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22453},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 54056},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37326},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 88213},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31305},
]},
],
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

                   text: '喵鼠的PT構成(總分975820)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 108093, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 289574, name: '強襲', legendMarkerType: 'square'},
{  y: 578153, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分674544)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31649,
				            interval: 3164,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3084},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9587},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4665},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11983},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13322},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1020},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15070},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11759},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1830},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5340},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10902},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4024},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7813},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 217},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8392},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6495},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11488},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5807},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2954},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12149},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6630},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7147},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8392},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2538},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25396},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19890},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25190},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17826},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12336},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18345},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5622},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3933},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9864},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23033},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10004},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11692},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10003},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17332},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14667},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6829},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24388},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31649},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24190},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17901},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21560},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16501},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16937},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5600},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9957},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10591},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23265},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13826},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7771},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24887},
]},
],
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

                   text: '依司瑪耳的PT構成(總分674544)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 291591, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 266105, name: '強襲', legendMarkerType: 'square'},
{  y: 116848, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分672980)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54742,
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
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6551},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11201},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19929},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28994},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13224},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15836},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 43446},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14030},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30811},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 54742},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33924},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37214},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 44507},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30122},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17524},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7238},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1558},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4097},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6770},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10217},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10155},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4874},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4643},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5218},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5698},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10247},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2844},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5183},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6252},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3516},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4985},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6011},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12488},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 57},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7381},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15407},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22786},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20456},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17214},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4666},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5638},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2060},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8693},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5903},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9457},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8778},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19789},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10622},
]},
],
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

                   text: '雪歌的PT構成(總分672980)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 207683, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 63242, name: '強襲', legendMarkerType: 'square'},
{  y: 402055, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分621014)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43632,
				            interval: 4363,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3783},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6983},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2686},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7108},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3320},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8422},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15199},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9467},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9876},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10478},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10887},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8032},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2806},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 26562},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18060},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15671},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24513},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6261},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26159},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6145},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22915},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11607},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8468},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5917},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12423},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10742},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11856},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25421},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17085},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3122},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5755},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6973},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5931},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15821},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10507},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14163},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13535},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18435},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21207},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5683},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5671},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4115},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8244},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13759},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16047},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7730},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 43632},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25161},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12590},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13677},
]},
],
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

                   text: '葬月的PT構成(總分621014)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 349256, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 156309, name: '強襲', legendMarkerType: 'square'},
{  y: 115449, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分618439)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39672,
				            interval: 3967,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9946},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6165},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5434},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7633},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7598},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10522},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12534},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12011},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15308},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20208},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20425},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 39672},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13590},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14328},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22867},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29065},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14384},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6385},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16293},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33219},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31524},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32281},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11820},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17626},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9152},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9720},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19091},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13959},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8698},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7991},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11519},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15883},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7002},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7000},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7680},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16539},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9599},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5989},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8262},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8694},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19947},
]},
],
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

                   text: '阿拉的PT構成(總分618439)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 478709, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90469, name: '強襲', legendMarkerType: 'square'},
{  y: 49261, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分582902)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40074,
				            interval: 4007,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4322},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12684},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6822},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11067},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19381},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11055},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21230},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39233},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40074},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30680},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7368},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5589},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6129},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8741},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7093},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12063},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5054},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6775},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11499},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9271},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7417},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6394},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20346},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15592},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36943},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12569},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7387},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8631},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2187},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19213},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4810},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13945},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24221},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18168},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22784},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11598},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26843},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17214},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12735},
]},
],
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

                   text: '寇內爾緹的PT構成(總分582902)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 317976, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 208134, name: '強襲', legendMarkerType: 'square'},
{  y: 56792, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分567365)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27843,
				            interval: 2784,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8274},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5626},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5327},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12193},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11244},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7146},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5355},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7610},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 510},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14773},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20665},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24516},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27843},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27522},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24713},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11521},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27830},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10007},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6098},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7605},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5262},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 272},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8477},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5805},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5107},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11427},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9920},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15491},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7610},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6390},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13156},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8249},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13820},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18987},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2205},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15994},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2668},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13529},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10444},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8085},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9643},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13866},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21144},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15246},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14577},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27382},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16231},
]},
],
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

                   text: '冰的PT構成(總分567365)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 328139, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 152815, name: '強襲', legendMarkerType: 'square'},
{  y: 86411, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分557798)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38162,
				            interval: 3816,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9409},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9489},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7684},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9864},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 30653},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33957},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38162},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20980},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10908},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13791},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4957},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8592},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4064},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11448},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4690},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7276},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6892},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6614},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7543},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11227},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8254},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9031},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8911},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8931},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11938},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2400},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11065},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5572},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6164},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13778},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9624},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25711},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15368},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5927},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24430},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 153},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14212},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17515},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3899},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6778},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6615},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11853},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22168},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20338},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分557798)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 295748, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 184897, name: '強襲', legendMarkerType: 'square'},
{  y: 77153, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分549735)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59436,
				            interval: 5943,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8327},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4143},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2116},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9202},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17885},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 59436},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21031},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6006},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8688},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7279},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5898},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11555},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13974},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12002},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7382},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8536},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7543},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9111},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2650},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9251},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11706},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13294},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3344},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11099},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 43538},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16436},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14559},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6433},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5178},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5238},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4830},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7213},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9304},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8916},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7616},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8036},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13295},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17088},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35682},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20425},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12336},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5151},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5804},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3508},
]},
],
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

                   text: '嘎喵的PT構成(總分549735)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 366712, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161309, name: '強襲', legendMarkerType: 'square'},
{  y: 21714, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分530787)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31782,
				            interval: 3178,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5933},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5473},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4960},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19449},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 31782},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30103},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28396},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21198},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13997},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3129},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7774},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10838},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7329},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2469},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 91},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13256},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7795},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14137},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5471},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8098},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7422},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1550},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15961},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7076},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2049},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5824},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13365},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14529},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13012},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11564},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11919},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9430},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25673},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20899},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14372},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7269},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6284},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11320},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10217},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11783},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12008},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10418},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3819},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13899},
]},
],
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

                   text: '魔法的PT構成(總分530787)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 281560, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 162210, name: '強襲', legendMarkerType: 'square'},
{  y: 87017, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分515581)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40884,
				            interval: 4088,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7405},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5814},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1723},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3895},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9018},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9186},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8945},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10573},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7364},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16078},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 40884},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26220},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13665},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15000},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23684},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3124},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16354},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10900},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6960},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16150},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18316},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13907},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6324},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11813},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1982},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7392},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6350},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8199},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4915},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10359},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7441},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8269},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18350},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16954},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8169},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11566},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8798},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12618},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9026},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14148},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18679},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13361},
]},
],
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

                   text: '土土昕的PT構成(總分515581)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332140, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 111010, name: '強襲', legendMarkerType: 'square'},
{  y: 72431, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分510173)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35958,
				            interval: 3595,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6135},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4777},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7407},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2091},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7960},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3644},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6637},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9457},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7947},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13817},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14702},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4780},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7702},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9130},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2726},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17855},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13686},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2756},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2559},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9164},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7852},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4508},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2106},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10356},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13428},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29731},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35958},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28588},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32242},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5989},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7895},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6824},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9738},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23414},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23320},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13847},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6261},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11031},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12845},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10883},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13727},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15027},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15148},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14523},
]},
],
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

                   text: '緋煌的PT構成(總分510173)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319701, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99445, name: '強襲', legendMarkerType: 'square'},
{  y: 91027, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分506161)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30509,
				            interval: 3050,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4827},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5663},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2637},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12555},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6870},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9429},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20542},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 24427},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20649},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7611},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3967},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7079},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11090},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7886},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12186},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5946},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12285},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 578},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7633},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3992},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2943},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11832},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6735},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15330},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15265},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21376},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26072},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30509},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12409},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5183},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1785},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7934},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7830},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10048},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13759},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11146},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13493},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5227},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9618},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9139},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8922},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8973},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8484},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29022},
]},
],
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

                   text: '冰紅茶的PT構成(總分506161)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 338448, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86719, name: '強襲', legendMarkerType: 'square'},
{  y: 80994, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分489941)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48484,
				            interval: 4848,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4292},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4461},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10896},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30510},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9582},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7751},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12165},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15467},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18019},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14446},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11672},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5472},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6768},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11820},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 48484},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16028},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6453},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2030},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4709},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5200},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17035},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18127},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7671},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18830},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24573},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13423},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5590},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6278},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7300},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8506},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6354},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3310},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3223},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1239},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9283},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10647},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 57},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9892},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17116},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6884},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5532},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9484},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10593},
]},
],
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

                   text: '神隱的PT構成(總分489941)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 247218, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 139261, name: '強襲', legendMarkerType: 'square'},
{  y: 103462, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分442010)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44630,
				            interval: 4463,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1650},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4489},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4799},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5402},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2786},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6095},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5931},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3019},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6027},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9445},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8817},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7028},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8480},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3745},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7361},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19135},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7303},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29963},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6709},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 187},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31182},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19808},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44630},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5695},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17990},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4685},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9646},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9991},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5409},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7834},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7051},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4454},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4275},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4909},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9231},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17467},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14922},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15374},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32060},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13273},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4994},
]},
],
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

                   text: '藏月的PT構成(總分442010)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 305241, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131775, name: '強襲', legendMarkerType: 'square'},
{  y: 4994, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分425383)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30933,
				            interval: 3093,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4066},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4478},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7230},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4253},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6182},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15559},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10836},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9993},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12765},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8352},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7097},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4599},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6184},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6606},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6304},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4647},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7050},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7655},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30001},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24003},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9105},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12651},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14297},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25531},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30933},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11979},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6060},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4280},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4548},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4303},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5492},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9117},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10192},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6601},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13511},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8583},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 706},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11967},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2996},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6098},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2280},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6834},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5485},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5276},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11442},
]},
],
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

                   text: '亞歷的PT構成(總分425383)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 303255, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90811, name: '強襲', legendMarkerType: 'square'},
{  y: 31317, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分423183)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28759,
				            interval: 2875,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2292},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4914},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6060},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9060},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3005},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7392},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9433},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6936},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12647},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8242},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2440},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21580},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9973},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2269},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7224},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7488},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10414},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8968},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6368},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12833},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8284},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6092},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13721},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12634},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6776},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4758},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7100},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5953},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17782},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6554},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16801},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18109},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19443},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12991},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11022},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12643},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9828},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28759},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13159},
]},
],
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

                   text: '阿榮的PT構成(總分423183)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 238281, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 109491, name: '強襲', legendMarkerType: 'square'},
{  y: 75411, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分388984)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27795,
				            interval: 2779,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2738},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3374},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13462},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17034},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9700},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20118},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4806},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9947},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6627},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8247},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23693},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4976},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16747},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19010},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27795},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14321},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20225},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10807},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5214},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2147},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10480},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7047},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4307},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3053},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5575},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5218},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11636},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6640},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8243},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9305},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4253},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7577},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6081},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6770},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6061},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5735},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5259},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6517},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6366},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 117},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9840},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5893},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5994},
]},
],
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

                   text: '幻想魔術師的PT構成(總分388984)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 155357, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 187319, name: '強襲', legendMarkerType: 'square'},
{  y: 46308, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分375282)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32032,
				            interval: 3203,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5527},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4239},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4879},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8132},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13990},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5791},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17512},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14517},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23094},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5129},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9396},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11416},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4940},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4753},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4903},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5095},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5781},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4446},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11967},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1639},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11528},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12704},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5845},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10888},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8246},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6372},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12962},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14265},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9526},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22260},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11919},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3781},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8205},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1471},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32032},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9108},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15616},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分375282)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 261364, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 89194, name: '強襲', legendMarkerType: 'square'},
{  y: 24724, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分298533)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26693,
				            interval: 2669,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1723},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4235},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6832},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7116},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6607},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3542},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4604},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2919},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4342},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6335},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10476},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2051},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6783},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5244},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3777},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5260},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10341},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5018},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3859},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5635},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8838},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1232},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10197},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8478},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3308},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7890},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8869},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8147},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7621},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16787},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23159},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26693},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4913},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6310},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4025},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7396},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14103},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20201},
]},
],
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

                   text: '秋風冷月的PT構成(總分298533)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 167325, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 74260, name: '強襲', legendMarkerType: 'square'},
{  y: 56948, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿斯提爾的PT統計(總分776657)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45354,
				            interval: 4535,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯提爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4881},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2443},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9926},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4658},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10239},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5387},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10738},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14643},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5542},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11296},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11545},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3861},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10650},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14801},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26710},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40067},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28735},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28842},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 41250},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16372},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7953},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7081},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18372},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38603},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29025},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45354},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6427},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7064},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9444},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯提爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5739},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4342},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8339},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21542},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4091},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12634},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12336},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19871},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21800},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18264},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4685},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4260},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5640},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 25842},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯提爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4587},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9553},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13629},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18697},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25666},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4292},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19559},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18307},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21073},
]},
],
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

                   text: '阿斯提爾的PT構成(總分776657)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 471909, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 135363, name: '強襲', legendMarkerType: 'square'},
{  y: 169385, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米寶的PT統計(總分758768)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37737,
				            interval: 3773,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米寶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3967},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4552},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3106},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7135},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10217},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9441},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5149},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12263},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5911},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10796},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9568},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18094},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6148},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7284},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21690},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33875},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31510},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34872},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23259},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31878},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 37737},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8418},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5875},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11192},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9085},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34760},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27332},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27019},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25102},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24323},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米寶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4183},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7594},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13511},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13441},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10095},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21365},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17186},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11443},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米寶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2865},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5106},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6668},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18917},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11393},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15718},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13208},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23162},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9946},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28497},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22912},
]},
],
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

                   text: '米寶的PT構成(總分758768)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 501558, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 158392, name: '強襲', legendMarkerType: 'square'},
{  y: 98818, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '工口仙人@聖星的PT統計(總分707600)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49937,
				            interval: 4993,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "工口仙人@聖星強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8561},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8672},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13265},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15525},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 40986},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17888},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18473},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "工口仙人@聖星殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8834},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8367},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7188},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10017},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8490},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14506},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11930},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6921},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11172},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7290},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15614},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14404},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7821},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16292},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28351},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38315},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 38826},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22256},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33216},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 49937},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31189},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8359},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4918},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5190},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44297},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20531},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23730},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4163},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18593},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10102},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "工口仙人@聖星CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13327},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 40084},
]},
],
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

                   text: '工口仙人@聖星的PT構成(總分707600)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 530819, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 123370, name: '強襲', legendMarkerType: 'square'},
{  y: 53411, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土匪兔的PT統計(總分693851)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41319,
				            interval: 4131,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土匪兔殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11027},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5691},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9933},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3475},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9005},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8060},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1953},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13856},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8220},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8924},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13381},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16580},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38784},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29961},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41319},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20104},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19939},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28400},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16414},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29211},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6762},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11152},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17638},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13465},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11921},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6962},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土匪兔強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8279},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10449},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7590},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6267},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7832},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28875},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23639},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20485},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15643},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39145},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17475},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12432},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36573},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土匪兔CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14740},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3975},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12709},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6313},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11907},
]},
],
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

                   text: '土匪兔的PT構成(總分693851)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 402137, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 234684, name: '強襲', legendMarkerType: 'square'},
{  y: 57030, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '猪狗轮鹰熊的PT統計(總分693498)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38798,
				            interval: 3879,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "猪狗轮鹰熊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2695},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2827},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12239},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7214},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11294},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27913},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16304},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13110},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13081},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21548},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14092},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13244},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "猪狗轮鹰熊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7841},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5472},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4124},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8906},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1582},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12470},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3864},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16001},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12860},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11201},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4680},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7824},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30167},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15126},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37390},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30249},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16668},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 38798},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10373},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15753},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10570},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10009},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14153},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10653},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7283},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7616},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17592},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15518},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "猪狗轮鹰熊CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13835},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6063},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6478},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6698},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15703},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16947},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4770},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37853},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37693},
]},
],
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

                   text: '猪狗轮鹰熊的PT構成(總分693498)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 391897, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 155561, name: '強襲', legendMarkerType: 'square'},
{  y: 146040, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天羅子的PT統計(總分674101)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46521,
				            interval: 4652,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天羅子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8564},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8366},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9213},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13806},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7985},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7978},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10255},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11364},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5301},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5672},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2285},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10713},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10151},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9489},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16761},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15662},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30193},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12083},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13263},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 46521},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2944},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4994},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11121},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 34377},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23720},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26607},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19265},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20645},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9444},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1548},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天羅子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9213},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6118},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9400},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12331},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12826},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18783},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39505},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天羅子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4509},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8132},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10006},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7596},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10302},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18218},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17127},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12815},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10143},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13180},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17381},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19949},
]},
],
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

                   text: '天羅子的PT構成(總分674101)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 416567, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149358, name: '強襲', legendMarkerType: 'square'},
{  y: 108176, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Meng的PT統計(總分672608)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44592,
				            interval: 4459,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Meng殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11234},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3729},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10259},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10620},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4127},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9894},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4891},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9442},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9412},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14441},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3452},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1047},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9411},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15052},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16190},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31386},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32291},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41862},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37719},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21347},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3809},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10811},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14109},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17209},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7922},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17706},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7190},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8008},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Meng強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6241},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13331},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19636},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12238},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3181},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17552},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31886},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12012},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37876},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21834},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MengCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8052},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4623},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18493},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13976},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44592},
]},
],
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

                   text: 'Meng的PT構成(總分672608)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 384640, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 198232, name: '強襲', legendMarkerType: 'square'},
{  y: 89736, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寂逸的PT統計(總分668854)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37421,
				            interval: 3742,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寂逸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1559},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7755},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14314},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7323},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11161},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11704},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17830},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27620},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6331},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29234},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17723},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25557},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23953},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18319},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寂逸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8963},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2062},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11591},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5868},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6309},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9639},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1999},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16240},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15056},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6493},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10883},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7069},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7632},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24643},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37421},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13856},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17079},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16946},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16571},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9397},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5324},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7162},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23171},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29593},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31701},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4706},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22595},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9838},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寂逸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4504},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12642},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29054},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9461},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7715},
]},
],
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

                   text: '寂逸的PT構成(總分668854)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 385095, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 220383, name: '強襲', legendMarkerType: 'square'},
{  y: 63376, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羋胤的PT統計(總分665621)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52801,
				            interval: 5280,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羋胤殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7805},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10598},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4894},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12368},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12970},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8702},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9326},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5782},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15338},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2244},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12617},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2444},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14540},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12768},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6604},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18354},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 52801},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23690},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20283},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6631},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8998},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31605},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17342},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42324},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7410},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10751},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12455},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14667},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17943},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4621},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羋胤CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3724},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16252},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37049},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8978},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23026},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26576},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羋胤強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1174},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7374},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7872},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1096},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9122},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11103},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15935},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6661},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17764},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16323},
]},
],
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

                   text: '羋胤的PT構成(總分665621)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 428875, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94424, name: '強襲', legendMarkerType: 'square'},
{  y: 142322, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '芮瑪的PT統計(總分650383)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49379,
				            interval: 4937,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芮瑪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11300},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2132},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10611},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9078},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9263},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9751},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5684},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6992},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4776},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5393},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16711},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13810},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14822},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8392},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9268},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8987},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13428},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6407},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27427},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18313},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49379},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31771},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9608},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13680},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11162},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5000},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10751},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15036},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6783},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芮瑪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5703},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8440},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10962},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9175},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19204},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22027},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25895},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芮瑪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5816},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8593},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11880},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14976},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21695},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19462},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20851},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 46413},
]},
],
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

                   text: '芮瑪的PT構成(總分650383)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 378412, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 170565, name: '強襲', legendMarkerType: 'square'},
{  y: 101406, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '海爾方天玉的PT統計(總分646724)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49634,
				            interval: 4963,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾方天玉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3985},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8065},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3921},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6994},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10019},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 988},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4433},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7650},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11803},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11089},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7437},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5860},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14421},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31659},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16546},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21976},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7377},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18366},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14942},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24533},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24985},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23952},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13873},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35958},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26560},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11594},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7550},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18967},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14521},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾方天玉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9584},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8080},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7611},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17053},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12132},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17031},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 49634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾方天玉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11995},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7588},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7133},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9537},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7545},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3112},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10772},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20038},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9666},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20281},
]},
],
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

                   text: '海爾方天玉的PT構成(總分646724)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 410050, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 115549, name: '強襲', legendMarkerType: 'square'},
{  y: 121125, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '豬八的PT統計(總分624373)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41875,
				            interval: 4187,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬八強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11042},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15777},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13532},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10171},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14954},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25496},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3783},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14011},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32885},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬八殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3249},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8845},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4764},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2226},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5943},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10945},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8721},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7489},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3168},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9611},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9363},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13023},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2502},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9955},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6497},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8798},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15307},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18008},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2134},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10180},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 113},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18280},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9421},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13167},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14785},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11258},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10029},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬八CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8689},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7861},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4055},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19272},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24067},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28914},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26869},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 41875},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19852},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28328},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25951},
]},
],
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

                   text: '豬八的PT構成(總分624373)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 246989, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 141651, name: '強襲', legendMarkerType: 'square'},
{  y: 235733, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '澄的PT統計(總分611114)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44830,
				            interval: 4483,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "澄CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10212},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7348},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12279},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13299},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18476},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23209},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21761},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "澄殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7371},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13043},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9844},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9594},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6079},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10375},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8553},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10641},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11788},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11937},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16748},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6673},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16055},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11592},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10612},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 44830},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17186},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20228},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39269},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26086},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22467},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7238},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21461},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11952},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7464},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15594},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10227},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19927},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17467},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14430},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "澄強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9412},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8534},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8125},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17518},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2799},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1411},
]},
],
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

                   text: '澄的PT構成(總分611114)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 456731, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47799, name: '強襲', legendMarkerType: 'square'},
{  y: 106584, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '血腥迪奇的PT統計(總分610019)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34695,
				            interval: 3469,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血腥迪奇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8466},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11539},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1067},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12197},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5450},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9230},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15092},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7330},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11894},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12292},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14042},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4775},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10554},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11996},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6206},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18168},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7216},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6608},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12736},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7024},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12484},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34695},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25934},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18575},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12233},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17774},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4985},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19365},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26929},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血腥迪奇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5134},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6929},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17025},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9486},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13206},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16137},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4182},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12898},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19897},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25294},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22686},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17492},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血腥迪奇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6757},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7975},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8722},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16239},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17974},
]},
],
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

                   text: '血腥迪奇的PT構成(總分610019)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 366856, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57667, name: '強襲', legendMarkerType: 'square'},
{  y: 185496, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蒼鬼的PT統計(總分576417)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34060,
				            interval: 3406,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼鬼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1730},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7960},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9975},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 242},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10246},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16968},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9025},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2690},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13671},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12902},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7029},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6283},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10792},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21321},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34060},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23286},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24259},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28349},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21956},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33963},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17971},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14508},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10158},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22264},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16994},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22119},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10736},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12434},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7076},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼鬼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3583},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9478},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6841},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11087},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15314},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10247},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11444},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27498},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼鬼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7241},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16201},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17038},
]},
],
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

                   text: '蒼鬼的PT構成(總分576417)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 440445, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 95492, name: '強襲', legendMarkerType: 'square'},
{  y: 40480, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '海薇的PT統計(總分574465)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36299,
				            interval: 3629,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海薇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3436},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3985},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5632},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4494},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7928},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8885},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13979},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3553},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1664},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12198},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14528},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14018},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12222},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3373},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15203},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28018},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25827},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23847},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15828},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4383},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14341},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5386},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36299},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25721},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11366},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14903},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10393},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14775},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海薇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4164},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3801},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7932},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8832},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19142},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17617},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海薇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3528},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4167},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6181},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7321},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8182},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8023},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9314},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9519},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13626},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9936},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5340},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13941},
]},
],
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

                   text: '海薇的PT構成(總分574465)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 396011, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79376, name: '強襲', legendMarkerType: 'square'},
{  y: 99078, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '林殊的PT統計(總分571213)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59908,
				            interval: 5990,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "林殊CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8214},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16429},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16109},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17892},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "林殊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6177},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8563},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6843},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11760},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7129},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8038},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12481},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8243},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6186},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 488},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6282},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8078},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9237},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12193},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22913},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39691},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 59908},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33462},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24978},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9611},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12448},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6751},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13756},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2549},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3852},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26350},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24363},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 36857},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "林殊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5442},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9246},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10147},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12256},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29316},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8315},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8660},
]},
],
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

                   text: '林殊的PT構成(總分571213)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 429187, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83382, name: '強襲', legendMarkerType: 'square'},
{  y: 58644, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '樂樂兒的PT統計(總分559449)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35718,
				            interval: 3571,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "樂樂兒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10624},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10313},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9916},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4804},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8084},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13903},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10777},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7372},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9848},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8951},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6036},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5226},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5786},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12942},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18854},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28408},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17883},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34346},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6121},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2578},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6970},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13166},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12230},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19281},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35117},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16784},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29773},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9885},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9445},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 455},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "樂樂兒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9065},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35718},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10727},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22522},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7902},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17021},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "樂樂兒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6137},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7672},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6788},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9331},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20027},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14626},
]},
],
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

                   text: '樂樂兒的PT構成(總分559449)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 385878, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 64581, name: '強襲', legendMarkerType: 'square'},
{  y: 108990, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '克雷薩的PT統計(總分547431)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53014,
				            interval: 5301,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克雷薩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6539},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4280},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8305},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3174},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11005},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10128},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6412},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3514},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15469},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11035},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14998},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10119},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7843},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14786},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13025},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12261},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11876},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8944},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12038},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8128},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10086},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13281},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12483},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16704},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14906},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16001},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16228},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克雷薩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6732},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9747},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13774},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9672},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10887},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3646},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28651},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 52489},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19432},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 53014},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克雷薩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4098},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26146},
]},
],
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

                   text: '克雷薩的PT構成(總分547431)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309143, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30244, name: '強襲', legendMarkerType: 'square'},
{  y: 208044, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '殮情的PT統計(總分536696)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47808,
				            interval: 4780,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殮情殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6062},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8572},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13824},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5134},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10488},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5514},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11984},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12746},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11155},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11874},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10315},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7612},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5474},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9806},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12847},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22465},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20392},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2851},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26990},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11140},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1874},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28413},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9316},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11345},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13319},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 47808},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18279},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17296},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12134},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殮情強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6683},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5672},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14627},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17270},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14090},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18236},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殮情CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8175},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8820},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1661},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17665},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23891},
]},
],
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

                   text: '殮情的PT構成(總分536696)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 399906, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76578, name: '強襲', legendMarkerType: 'square'},
{  y: 60212, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
