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
				
				            maximum: 277976,
				            interval: 27797,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2138},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4799},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15045},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20943},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18529},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 31588},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 31053},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 56566},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 60227},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 58593},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20537},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1029},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2765},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 170886},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 200993},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 159785},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 109793},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 94364},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24539},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2285},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46254},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 179683},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 167749},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 202610},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 277976},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 214760},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 255225},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 217691},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 234486},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 127939},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 47898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19389},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7666},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 32954},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 31248},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24990},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22052},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50445},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63056},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 79679},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39439},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41349},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 88678},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 56630},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 69830},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 79824},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 106031},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 58573},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 90907},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 102064},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 56950},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 117246},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 210907},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 239632},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 112924},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 187649},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 214029},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 161532},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 153716},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 118164},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 0},
]},
],
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
				
				            maximum: 5696592,
				            interval: 569659,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2138},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6937},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 21982},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 42925},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 61454},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 93042},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 124095},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 180661},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 240888},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 299481},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 320018},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 321047},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 323812},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 494698},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 695691},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 855476},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 965269},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1059633},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1084172},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1086457},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1132711},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1312394},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1480143},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1682753},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1960729},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2175489},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2430714},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2648405},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2882891},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3010830},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 3011141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 47898},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 67287},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 74953},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 107907},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 139155},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 164145},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 186197},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 236642},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 299698},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 379377},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 418816},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 460165},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 548843},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 605473},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 675303},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 755127},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 861158},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 919731},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1010638},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1112702},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1169652},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1286898},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1497805},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1737437},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1850361},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2038010},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2252039},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2413571},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2567287},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2685451},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 2685451},
]},
],
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
				
				            maximum: 190734,
				            interval: 19073,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 429},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3598},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4432},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4896},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7251},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13234},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24043},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40242},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39270},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24216},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1308},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1029},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2765},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 92589},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 116427},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 90393},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16204},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25353},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13546},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2285},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36153},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 76240},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 128414},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 132857},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 190734},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 105940},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99019},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 82532},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 106035},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24853},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29588},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6346},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5243},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21720},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26878},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12832},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12927},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20901},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34365},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21645},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22289},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24799},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40610},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30610},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14358},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37070},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 58479},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29707},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 55791},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 56352},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26277},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 92778},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 115541},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 79889},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 73536},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 84449},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 55856},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 128963},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 74036},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 68442},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1709},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1201},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4702},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9775},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14486},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3874},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13965},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20957},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34377},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19229},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 73840},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61123},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 69392},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 83069},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 59943},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9179},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6489},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 83933},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32888},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 55073},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 69252},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 74776},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 112990},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 94364},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 101290},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 82441},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4360},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3952},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3424},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13858},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25486},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13909},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2090},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13648},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18386},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10939},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10225},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17554},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12030},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9701},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13660},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4796},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12627},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24547},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13345},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18746},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31926},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19098},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3459},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11345},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1503},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3868},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3136},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2359},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4457},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23443},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10520},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9068},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1814},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3612},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19510},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6447},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14680},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17990},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 34044},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43216},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40795},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27161},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20645},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13950},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13043},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2423},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11234},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4370},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12158},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5173},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26120},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14833},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32548},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3241},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14460},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34420},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7634},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 44533},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32529},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 47552},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11312},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23086},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36011},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17013},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19672},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 82739},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 135196},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26043},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 84454},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 126247},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32569},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 60582},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37736},
]},
],
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
				            text: '喵鼠的PT統計(總分351682)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 110013,
				            interval: 11001,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 179},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 109},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 186},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1153},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1793},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4517},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3054},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3473},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9015},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13084},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3874},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 43631},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32568},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44703},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9179},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 55148},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 110013},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15999},
]},
],
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

                   text: '喵鼠的PT構成(總分351682)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7941, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 343741, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '葬月的PT統計(總分350142)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68678,
				            interval: 6867,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 394},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 245},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 957},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 378},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5254},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5408},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1703},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1577},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19405},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19229},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 68678},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24692},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 49915},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 52957},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30137},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44761},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21564},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2833},
]},
],
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

                   text: '葬月的PT構成(總分350142)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 15971, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2833, name: '強襲', legendMarkerType: 'square'},
{  y: 331338, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分280605)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33568,
				            interval: 3356,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 310},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1767},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 361},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9773},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32876},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 33568},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21206},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 326},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16785},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 32733},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21750},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4248},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29593},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12297},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1154},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9606},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9487},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 927},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1306},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1778},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 788},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 935},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3566},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3612},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5103},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3673},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3369},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7961},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 684},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 633},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3827},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4259},
]},
],
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

                   text: '嘎喵的PT構成(總分280605)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 242195, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29007, name: '強襲', legendMarkerType: 'square'},
{  y: 9403, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分276677)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50501,
				            interval: 5050,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9329},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30478},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25761},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 50501},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15240},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34018},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25241},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33470},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15989},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9214},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21088},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 630},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 690},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1627},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1661},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1694},
]},
],
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

                   text: '土土昕的PT構成(總分276677)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6348, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 270329, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雪歌的PT統計(總分204279)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69151,
				            interval: 6915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34377},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 69151},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 56529},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 833},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 115},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1486},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 311},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1688},
]},
],
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

                   text: '雪歌的PT構成(總分204279)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2745, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1688, name: '強襲', legendMarkerType: 'square'},
{  y: 199846, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分200610)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29341,
				            interval: 2934,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 290},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1743},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 200},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1025},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 353},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1007},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 430},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 213},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20763},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15300},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28917},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3683},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 809},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 460},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29341},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10690},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12178},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1156},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 926},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 592},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 895},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1245},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8024},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1265},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10225},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7074},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16784},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6820},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9893},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3757},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 596},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1552},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2116},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分200610)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129772, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62817, name: '強襲', legendMarkerType: 'square'},
{  y: 8021, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分193546)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33273,
				            interval: 3327,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 355},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 959},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 725},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 338},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 478},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 217},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16953},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21652},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18022},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1701},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33273},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21649},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32500},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22230},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1045},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 257},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6391},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 238},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2854},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2671},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 714},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 608},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 760},
]},
],
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

                   text: '阿拉的PT構成(總分193546)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 182855, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9931, name: '強襲', legendMarkerType: 'square'},
{  y: 760, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分181957)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36347,
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
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1784},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4650},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 204},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 259},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7266},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1247},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7002},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17765},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24166},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36347},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11504},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1822},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10039},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 79},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8101},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8571},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 212},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7492},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7647},
]},
],
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

                   text: '依司瑪耳的PT構成(總分181957)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 121524, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52786, name: '強襲', legendMarkerType: 'square'},
{  y: 7647, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分177229)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39301,
				            interval: 3930,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 128},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 815},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 963},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 956},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1071},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1589},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 152},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 747},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 767},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1644},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 684},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39301},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16920},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34141},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6282},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7980},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19737},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27817},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5642},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 861},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3950},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2977},
]},
],
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

                   text: '魔法的PT構成(總分177229)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169441, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4811, name: '強襲', legendMarkerType: 'square'},
{  y: 2977, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分168823)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22042,
				            interval: 2204,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 400},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 283},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4641},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3994},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4719},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 445},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2418},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4277},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5150},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1616},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2434},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8102},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22042},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2022},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12603},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6002},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12437},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14095},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11551},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3419},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3136},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 957},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3517},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3041},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3635},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3552},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3808},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3880},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6100},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5581},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 343},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 809},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 903},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3002},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3639},
]},
],
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

                   text: '赤雲天的PT構成(總分168823)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 122920, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37207, name: '強襲', legendMarkerType: 'square'},
{  y: 8696, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分163451)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35996,
				            interval: 3599,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 171},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1619},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 705},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 414},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 512},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2719},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 571},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 115},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 792},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20094},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25887},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11505},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 308},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1127},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11950},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10004},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35996},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13925},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1735},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3293},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1400},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4328},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2498},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3038},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 517},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1402},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6489},
]},
],
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

                   text: '寇內爾緹的PT構成(總分163451)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 145179, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9864, name: '強襲', legendMarkerType: 'square'},
{  y: 8408, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分124184)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20166,
				            interval: 2016,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1027},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5033},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 250},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3078},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4852},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5047},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2285},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5750},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7192},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12812},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18663},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 641},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5084},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3779},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20166},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5282},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3733},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5182},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5274},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4823},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4229},
]},
],
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

                   text: '亞歷的PT構成(總分124184)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100943, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23241, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分122594)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20057,
				            interval: 2005,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 14, 0), y: 544},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1616},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1814},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7912},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10835},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 139},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 542},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 207},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1019},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1223},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 83},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2309},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 314},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 63},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1844},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 343},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11792},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11848},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9709},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20057},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19154},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16982},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1709},
]},
],
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

                   text: '冰紅茶的PT構成(總分122594)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 98164, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22721, name: '強襲', legendMarkerType: 'square'},
{  y: 1709, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分111398)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16927,
				            interval: 1692,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 380},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1280},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 537},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3820},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 456},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1262},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 313},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4810},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 747},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5801},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6529},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16927},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13498},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16224},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2021},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11609},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 281},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1402},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6800},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7553},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8130},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分111398)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 87513, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23885, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分103964)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29226,
				            interval: 2922,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4759},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4657},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2237},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11212},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6103},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5217},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6964},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29226},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2712},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5338},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5433},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5836},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5674},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2951},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5645},
]},
],
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

                   text: '冰的PT構成(總分103964)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 73087, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22281, name: '強襲', legendMarkerType: 'square'},
{  y: 8596, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天霜的PT統計(總分344236)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60582,
				            interval: 6058,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天霜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1710},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 854},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 135},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 172},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4108},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8398},
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
                                    name: "天霜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6519},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13043},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9134},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32548},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34420},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22467},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23086},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36011},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10865},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35464},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 60582},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17367},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天霜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 713},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14410},
]},
],
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

                   text: '天霜的PT構成(總分344236)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 15377, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15123, name: '強襲', legendMarkerType: 'square'},
{  y: 313736, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾蕾爾的PT統計(總分254504)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38804,
				            interval: 3880,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 346},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 229},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1752},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1074},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3453},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2127},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1198},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12158},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21272},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38804},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32529},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25085},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11312},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4783},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19672},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18366},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19606},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14979},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20369},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5365},
]},
],
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

                   text: '艾蕾爾的PT構成(總分254504)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 10204, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5365, name: '強襲', legendMarkerType: 'square'},
{  y: 238935, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Almis的PT統計(總分238704)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32396,
				            interval: 3239,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Almis殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8397},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 108},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9425},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4627},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8139},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4249},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4863},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5449},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14299},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 16169},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17648},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15084},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11157},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32396},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24314},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21065},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5039},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10272},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10072},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2658},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Almis強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3100},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 718},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4794},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3418},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1244},
]},
],
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

                   text: 'Almis的PT構成(總分238704)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 225430, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13274, name: '強襲', legendMarkerType: 'square'},
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
				            text: '派大星的PT統計(總分237187)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 116830,
				            interval: 11683,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 244},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3161},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17080},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5090},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8410},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5259},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2237},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12640},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 22, 0), y: 66205},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 116830},
]},
],
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

                   text: '派大星的PT構成(總分237187)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 41512, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12640, name: '強襲', legendMarkerType: 'square'},
{  y: 183035, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '倫的PT統計(總分224084)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 126247,
				            interval: 12624,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 326},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3682},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2333},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 632},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3895},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3629},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3334},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11182},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3241},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48990},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 126247},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16552},
]},
],
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

                   text: '倫的PT構成(總分224084)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 29054, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 195030, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '今晚打老虎的PT統計(總分199969)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28770,
				            interval: 2877,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2575},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6926},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9470},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10431},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4925},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4291},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 203},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10773},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21320},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20444},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25600},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12813},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28770},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4547},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6965},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12760},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6219},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2207},
]},
],
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

                   text: '今晚打老虎的PT構成(總分199969)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 167271, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30491, name: '強襲', legendMarkerType: 'square'},
{  y: 2207, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '歐西里斯的PT統計(總分168540)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23242,
				            interval: 2324,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 349},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8752},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3224},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1287},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4706},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3968},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5902},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5250},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5632},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11054},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23242},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3399},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6214},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12446},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22758},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2919},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6589},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3424},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2313},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3908},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7830},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1876},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3974},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3417},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3340},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5173},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4848},
]},
],
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

                   text: '歐西里斯的PT構成(總分168540)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 128437, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30082, name: '強襲', legendMarkerType: 'square'},
{  y: 10021, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '退休謝拉特的PT統計(總分152715)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21791,
				            interval: 2179,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8445},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16318},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3258},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6151},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13943},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7033},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 645},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 116},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 95},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 414},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2651},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 501},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2169},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2441},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4168},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 572},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2015},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2256},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4299},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9770},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21791},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10942},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2075},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3807},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3792},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5013},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2423},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4370},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5699},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5427},
]},
],
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

                   text: '退休謝拉特的PT構成(總分152715)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 79648, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 55148, name: '強襲', legendMarkerType: 'square'},
{  y: 17919, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '撲克臉的PT統計(總分144400)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25229,
				            interval: 2522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1899},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3583},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4996},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5678},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2243},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6093},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2862},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25229},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20441},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9036},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5427},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1831},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7695},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4671},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5020},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6203},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1920},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3952},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4796},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6593},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4658},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2427},
]},
],
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

                   text: '撲克臉的PT構成(總分144400)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 112907, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29066, name: '強襲', legendMarkerType: 'square'},
{  y: 2427, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '404的PT統計(總分143592)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14114,
				            interval: 1411,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2440},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3111},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6752},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4953},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6863},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1658},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3689},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2878},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3925},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4568},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4170},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5800},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14114},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10302},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13157},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9717},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11734},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6793},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5913},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9790},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6437},
]},
],
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

                   text: '404的PT構成(總分143592)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 119899, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17256, name: '強襲', legendMarkerType: 'square'},
{  y: 6437, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡爾．剎斯的PT統計(總分139020)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25837,
				            interval: 2583,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7119},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6219},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4803},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2310},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4595},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3344},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4359},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19818},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25837},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4883},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5195},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5419},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7313},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7994},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5729},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5669},
]},
],
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

                   text: '卡爾．剎斯的PT構成(總分139020)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 96818, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30804, name: '強襲', legendMarkerType: 'square'},
{  y: 11398, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '公平的PT統計(總分124624)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23258,
				            interval: 2325,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5375},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1746},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2728},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 309},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4545},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6014},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 716},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9903},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4487},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23258},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12858},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15760},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2090},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5434},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12925},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1038},
]},
],
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

                   text: '公平的PT構成(總分124624)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 96679, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26907, name: '強襲', legendMarkerType: 'square'},
{  y: 1038, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Jens的PT統計(總分93440)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12947,
				            interval: 1294,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jens殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3579},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2807},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1787},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1710},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7845},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2358},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4668},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2139},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4215},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4997},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1414},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7006},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9624},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2550},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12947},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11667},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jens強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2968},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3119},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2007},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4033},
]},
],
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

                   text: 'Jens的PT構成(總分93440)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 81313, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12127, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿酒的PT統計(總分59345)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16003,
				            interval: 1600,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿酒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5502},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3295},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4750},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16003},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13287},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3534},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1932},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿酒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5342},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4336},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1057},
]},
],
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

                   text: '阿酒的PT構成(總分59345)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 48610, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10735, name: '強襲', legendMarkerType: 'square'},
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
				            text: '又怎麼了的PT統計(總分56577)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18577,
				            interval: 1857,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "又怎麼了殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1275},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13221},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9128},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5614},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18577},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "又怎麼了強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3231},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5531},
]},
],
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

                   text: '又怎麼了的PT構成(總分56577)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 47815, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8762, name: '強襲', legendMarkerType: 'square'},
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
				            text: '卡爾上校的PT統計(總分30653)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9715,
				            interval: 971,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾上校殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1844},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6352},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1284},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7598},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9715},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾上校強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3860},
]},
],
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

                   text: '卡爾上校的PT構成(總分30653)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 26793, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3860, name: '強襲', legendMarkerType: 'square'},
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
				            text: '凱特爾的PT統計(總分28025)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8807,
				            interval: 880,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6796},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4375},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 616},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7431},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8807},
]},
],
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

                   text: '凱特爾的PT構成(總分28025)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 11787, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16238, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '7D狂人的PT統計(總分26964)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11667,
				            interval: 1166,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3389},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8653},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11667},
]},
],
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

                   text: '7D狂人的PT構成(總分26964)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6644, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8653, name: '強襲', legendMarkerType: 'square'},
{  y: 11667, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小明的PT統計(總分18872)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6883,
				            interval: 688,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小明CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小明殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4262},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6883},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2078},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2856},
]},
],
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

                   text: '小明的PT構成(總分18872)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16079, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2793, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart34.render();
}
