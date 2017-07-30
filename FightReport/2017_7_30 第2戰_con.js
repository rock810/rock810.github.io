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
				
				            maximum: 444738,
				            interval: 44473,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 15801},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 17560},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 28569},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 60702},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 34749},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 41586},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2232},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 44666},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2844},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 200872},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 169087},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 174265},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 158680},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 27859},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5754},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1765},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 135579},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 257309},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 271380},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 262668},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 157541},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 154900},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 157431},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 306818},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 358354},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 337874},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 444738},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 339677},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 2007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 30423},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 21334},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 26011},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 47817},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 37982},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13594},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 74788},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 71135},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 50852},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 14183},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 72672},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 136587},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 55741},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 31357},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 136110},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 228692},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 143088},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 121973},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 103600},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 94906},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 75950},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 96563},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 371075},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 300767},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 310420},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 204890},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 325858},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 357365},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 148425},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 203270},
]},
],
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
				
				            maximum: 8080695,
				            interval: 808069,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 15801},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 33361},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 61930},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 122632},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 157381},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 198967},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 201199},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 201199},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 245865},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 248709},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 449581},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 618668},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 792933},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 951613},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 979472},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 979472},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 985226},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 986991},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1122570},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1379879},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1651259},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1913927},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2071468},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2226368},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2383799},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2690617},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3048971},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3386845},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3831583},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4171260},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 4173267},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 30423},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 51757},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 77768},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 125585},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 163567},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 177161},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 251949},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 323084},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 373936},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 388119},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 460791},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 597378},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 653119},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 684476},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 820586},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1049278},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1192366},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1314339},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1417939},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1512845},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1588795},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1685358},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2056433},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2357200},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2667620},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2872510},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3198368},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3555733},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3704158},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3907428},
]},
],
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
				
				            maximum: 243036,
				            interval: 24303,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10313},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8497},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 15146},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 33982},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11491},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 20344},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2232},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16562},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2844},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 107343},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 58747},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 114072},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 36552},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3572},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5754},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1765},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 88666},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 100341},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 148339},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 128461},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 104224},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 84330},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 128767},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 212504},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 169056},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 183926},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 188275},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 210199},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 2007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2104},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9063},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11370},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 24075},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 23258},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 18674},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 28104},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 89488},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 101877},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 53428},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 114847},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 15927},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 41026},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 128968},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 109758},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 110269},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 33247},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 61509},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 25633},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 88057},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 153570},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 123501},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 221322},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 110459},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 23515},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 13838},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 17959},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 28803},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 28271},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10228},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 27408},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 49795},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 30937},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11314},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 54655},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 79812},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 42763},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 29464},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 101375},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 99490},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 54775},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 82389},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 73954},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 53760},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 53140},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 61932},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 120862},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 209221},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 238244},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 127346},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 176355},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 179018},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 110102},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 133492},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6908},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7496},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8052},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11976},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8248},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 43643},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 17568},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14888},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15124},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 52300},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10534},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1893},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 29617},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 123590},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 80101},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 25630},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17726},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 30265},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12222},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 34631},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 243036},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 58687},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 56014},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 50988},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 123160},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 155841},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 38323},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 54266},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3384},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2053},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2645},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2568},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4041},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8463},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6765},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7281},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8360},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5887},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 28000},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13283},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23938},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20070},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9061},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3031},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6257},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 35728},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 30447},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 35141},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19019},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7038},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1463},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3366},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3737},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3772},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5027},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2869},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2893},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4475},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2444},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5118},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5612},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8212},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13954},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11920},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10881},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10588},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7177},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 32859},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16162},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 26556},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 26343},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 22506},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15512},
]},
],
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
				            text: '羽龍的PT統計(總分446705)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 137207,
				            interval: 13720,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 152},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 541},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1855},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2706},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7692},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5817},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7350},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3170},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 53587},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 41640},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 48265},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 137207},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 75531},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 31292},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 29880},
]},
],
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
var PlayerChart2 = new CanvasJS.Chart('PlayerChartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '喵鼠的PT統計(總分370172)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 87657,
				            interval: 8765,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 401},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2265},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1653},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5608},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6954},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3111},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12666},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14823},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 65050},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 59159},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 87657},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 32088},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 16261},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 18674},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 43802},
]},
],
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
var PlayerChart3 = new CanvasJS.Chart('PlayerChartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎喵的PT統計(總分332410)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46415,
				            interval: 4641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 200},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 71},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 154},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1780},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 315},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 39037},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13447},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 46415},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 48},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 35488},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5752},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12620},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 51},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 497},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11796},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 46136},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19894},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15362},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 29329},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 30634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 847},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1159},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3151},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1281},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10777},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3624},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2523},
]},
],
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
var PlayerChart4 = new CanvasJS.Chart('PlayerChartContainer4',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雪歌的PT統計(總分315513)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71627,
				            interval: 7162,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 232},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 555},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 25},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 3418},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7463},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 4363},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 77},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5191},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7022},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8259},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 16159},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 28104},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 27798},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 21365},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 36552},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 71627},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12799},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14119},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 48584},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1715},
]},
],
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
var PlayerChart5 = new CanvasJS.Chart('PlayerChartContainer5',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋風冷月的PT統計(總分288385)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61690,
				            interval: 6169,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 61690},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 26925},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 57341},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 29221},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 17455},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 20185},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 55644},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 242},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 66},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5646},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1711},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 2337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1408},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8514},
]},
],
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
var PlayerChart6 = new CanvasJS.Chart('PlayerChartContainer6',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯的PT統計(總分245242)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25372,
				            interval: 2537,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5306},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 541},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1665},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24476},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 15915},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 25372},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5019},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1765},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2419},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 24867},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 7105},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 4630},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 18080},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 4617},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22475},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 20709},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15154},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15284},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10620},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5887},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8816},
]},
],
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
var PlayerChart7 = new CanvasJS.Chart('PlayerChartContainer7',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '葬月的PT統計(總分232447)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29654,
				            interval: 2965,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 179},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 919},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 424},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 493},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1336},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1283},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24722},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6041},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 11168},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3968},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10134},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5570},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1979},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19500},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14137},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8376},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5132},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9770},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13844},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 29654},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17103},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20089},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2169},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 842},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1796},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5247},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5233},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 645},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 652},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 852},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6676},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2512},
]},
],
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
var PlayerChart8 = new CanvasJS.Chart('PlayerChartContainer8',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞歷的PT統計(總分225985)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41511,
				            interval: 4151,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 556},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1839},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 951},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4134},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5153},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2710},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7144},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4706},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10819},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 18635},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14589},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 41511},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 32682},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15604},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5358},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11144},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12335},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9952},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4823},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10637},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4367},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6332},
]},
],
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
var PlayerChart9 = new CanvasJS.Chart('PlayerChartContainer9',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '依司瑪耳的PT統計(總分222157)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30979,
				            interval: 3097,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3905},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10909},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4090},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7279},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4209},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5394},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 390},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9614},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 4596},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 30979},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10907},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20897},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11139},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 25608},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19203},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1133},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9607},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 12, 0), y: 89},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 47},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14329},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13792},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14041},
]},
],
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
var PlayerChart10 = new CanvasJS.Chart('PlayerChartContainer10',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '土土昕的PT統計(總分210044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 179287,
				            interval: 17928,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 714},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 143},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 575},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1309},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2473},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 25140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 28, 0), y: 179287},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 403},
]},
],
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
var PlayerChart11 = new CanvasJS.Chart('PlayerChartContainer11',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '魔法的PT統計(總分194609)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29003,
				            interval: 2900,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1211},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1595},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1752},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2789},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 382},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 7440},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 25643},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 25053},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3376},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 98},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1338},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14793},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 28978},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 23493},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 29003},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4395},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5227},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10367},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 752},
]},
],
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
var PlayerChart12 = new CanvasJS.Chart('PlayerChartContainer12',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿拉的PT統計(總分159686)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40481,
				            interval: 4048,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 270},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 899},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 936},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1966},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1566},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 383},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2592},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 44},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1366},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15546},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1600},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8845},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5395},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 119},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 33096},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 40481},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2142},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6987},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7074},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6453},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2557},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1937},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2678},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3053},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6772},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 714},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1673},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2520},
]},
],
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
var PlayerChart13 = new CanvasJS.Chart('PlayerChartContainer13',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰紅茶的PT統計(總分148952)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39899,
				            interval: 3989,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1619},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1920},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 424},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 143},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2465},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 60},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 580},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 523},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3004},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2228},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 143},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3426},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 48},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 124},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 48},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14422},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 22195},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 39899},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9909},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19565},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 442},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 890},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1130},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7444},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16260},
]},
],
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
var PlayerChart14 = new CanvasJS.Chart('PlayerChartContainer14',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '赤雲天的PT統計(總分146343)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29532,
				            interval: 2953,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3436},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 670},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3160},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2844},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1518},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2088},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 713},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 176},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13431},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8641},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 29532},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 710},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5173},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11395},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1201},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16514},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11566},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3561},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17068},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 76},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6268},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 639},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 848},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5115},
]},
],
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
var PlayerChart15 = new CanvasJS.Chart('PlayerChartContainer15',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '寇內爾緹的PT統計(總分143547)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26620,
				            interval: 2662,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 827},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 332},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4143},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3071},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8636},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 26620},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6709},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17528},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5693},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 1107},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 897},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6077},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6471},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5918},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6887},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13107},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6930},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5264},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1190},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6257},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9883},
]},
],
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
var PlayerChart16 = new CanvasJS.Chart('PlayerChartContainer16',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '有生之蓮解鋒鏑的PT統計(總分131358)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17806,
				            interval: 1780,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 04, 0), y: 492},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2248},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1297},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 146},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1067},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1323},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11087},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17806},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13857},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5824},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5020},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3741},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 1697},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 537},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12994},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15592},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1313},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1510},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1600},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 676},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8761},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2213},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10423},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1532},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8579},
]},
],
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
var PlayerChart17 = new CanvasJS.Chart('PlayerChartContainer17',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰的PT統計(總分126438)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13338,
				            interval: 1333,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3683},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8324},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4657},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1807},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8338},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5123},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2109},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 10675},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5754},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3834},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5913},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5857},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 1217},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13338},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 2007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9506},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9682},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3384},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5906},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6848},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 8476},
]},
],
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
var PlayerChart18 = new CanvasJS.Chart('PlayerChartContainer18',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿榮的PT統計(總分103442)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15253,
				            interval: 1525,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1495},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8239},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9268},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11020},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2767},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15253},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1375},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 327},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 39},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 431},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 275},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4450},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2369},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 193},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 24},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1176},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5257},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7619},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8282},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5846},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1565},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10762},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4481},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 912},
]},
],
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
var PlayerChart19 = new CanvasJS.Chart('PlayerChartContainer19',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鬼魅魍魎的PT統計(總分74191)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15927,
				            interval: 1592,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 32},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 602},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 208},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 69},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 521},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 307},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 50},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 78},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 401},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2043},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 2932},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1390},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5399},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6836},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 15927},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2678},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11592},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13674},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1401},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3813},
]},
],
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
var PlayerChart20 = new CanvasJS.Chart('PlayerChartContainer20',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '藏月的PT統計(總分55641)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10325,
				            interval: 1032,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 194},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1256},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 943},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1022},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 484},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 21},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2725},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10325},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4844},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1072},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 381},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1025},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1284},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 45},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 473},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3313},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1811},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7041},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 2820},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1142},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1971},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1841},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 24, 0), y: 691},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 1624},
]},
],
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
var PlayerChart21 = new CanvasJS.Chart('PlayerChartContainer21',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Reis的PT統計(總分487197)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 243036,
				            interval: 24303,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ReisCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1437},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 243036},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 22768},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 46550},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 27028},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 66351},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 26748},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15552},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 34465},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Reis殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 910},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 168},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 721},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Reis強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1463},
]},
],
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
var PlayerChart22 = new CanvasJS.Chart('PlayerChartContainer22',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '小蠻頭的PT統計(總分333989)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 123590,
				            interval: 12359,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小蠻頭CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3421},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4963},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 123590},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 72614},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16995},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 16225},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18053},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小蠻頭殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1403},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5815},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3506},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9228},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 20788},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25302},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 8229},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3857},
]},
],
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
var PlayerChart23 = new CanvasJS.Chart('PlayerChartContainer23',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'sturtle的PT統計(總分269952)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43787,
				            interval: 4378,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 293},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1643},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8676},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1802},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6016},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9076},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5206},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5662},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2312},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4916},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2201},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8777},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5213},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9488},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 24550},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 43787},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 33510},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16411},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 10440},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 24971},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10032},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16057},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3366},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5027},
]},
],
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
var PlayerChart24 = new CanvasJS.Chart('PlayerChartContainer24',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '艾略特的PT統計(總分264655)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28057,
				            interval: 2805,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 663},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1410},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 156},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2141},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4539},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 25186},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16741},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7834},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 28057},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 21419},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10924},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12385},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 25691},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22451},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5685},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15808},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7248},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8062},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12343},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 776},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3780},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6165},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9303},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8544},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7342},
]},
],
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
var PlayerChart25 = new CanvasJS.Chart('PlayerChartContainer25',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '狄爾希斯的PT統計(總分260865)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28614,
				            interval: 2861,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "狄爾希斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5483},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4103},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 466},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6521},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2518},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3507},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4784},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1383},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8635},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14598},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18715},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9705},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5739},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2178},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16330},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 21839},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 28614},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12995},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18697},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 20560},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15769},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6483},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "狄爾希斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2869},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2893},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2444},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3141},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7257},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 3889},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8750},
]},
],
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
var PlayerChart26 = new CanvasJS.Chart('PlayerChartContainer26',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '凱爾薩斯的PT統計(總分236903)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32656,
				            interval: 3265,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾薩斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3868},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8310},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7417},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2027},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8921},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 21346},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15459},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 19087},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2207},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6829},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10578},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 29268},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 32656},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13883},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10321},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9877},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5084},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9596},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾薩斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2996},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4783},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6219},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6171},
]},
],
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
var PlayerChart27 = new CanvasJS.Chart('PlayerChartContainer27',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'SAI的PT統計(總分223201)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30434,
				            interval: 3043,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SAI殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 407},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1656},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 36},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 126},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 189},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 12370},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11106},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14625},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19788},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 819},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11303},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 30434},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11698},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3473},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 8515},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2421},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1409},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3359},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SAI強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7177},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7216},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SAICBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7461},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3104},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13282},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 14431},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15124},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9464},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12204},
]},
],
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
var PlayerChart28 = new CanvasJS.Chart('PlayerChartContainer28',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '吉爾的PT統計(總分212085)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33002,
				            interval: 3300,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4173},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2563},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4048},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4081},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5092},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10346},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 11795},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 20962},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4870},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7001},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23293},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24855},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 33002},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 18620},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16167},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9646},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5118},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 883},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5570},
]},
],
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
var PlayerChart29 = new CanvasJS.Chart('PlayerChartContainer29',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷格的PT統計(總分197090)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30091,
				            interval: 3009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷格殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 36},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2078},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 81},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9765},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 590},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 4528},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5447},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 938},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3382},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷格CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 993},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1096},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8872},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13718},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 30091},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10534},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 29617},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20069},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12742},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12222},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15145},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11756},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷格強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3356},
]},
],
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
var PlayerChart30 = new CanvasJS.Chart('PlayerChartContainer30',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿加特的PT統計(總分195727)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27790,
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
                                    name: "阿加特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7363},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 229},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4069},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4706},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2074},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3048},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2614},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2318},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7575},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4446},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6854},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4632},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3231},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6322},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2453},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2895},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4222},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23747},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3092},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 23565},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5838},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27790},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15419},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿加特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿加特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1921},
]},
],
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
var PlayerChart31 = new CanvasJS.Chart('PlayerChartContainer31',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '使達的PT統計(總分191514)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30329,
				            interval: 3032,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "使達CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3137},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 1748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "使達殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6828},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2065},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2937},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1800},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4072},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7413},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12180},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17976},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 12183},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13707},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5807},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11474},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 30329},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15715},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16969},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13245},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "使達強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5612},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6317},
]},
],
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
var PlayerChart32 = new CanvasJS.Chart('PlayerChartContainer32',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'J.Dragon的PT統計(總分176556)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 112868,
				            interval: 11286,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "J.Dragon殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 192},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 21},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7631},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "J.DragonCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1893},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 39814},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 112868},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 14137},
]},
],
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
var PlayerChart33 = new CanvasJS.Chart('PlayerChartContainer33',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '奧爾托斯的PT統計(總分173853)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35919,
				            interval: 3591,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奧爾托斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 199},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 724},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1775},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1690},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2702},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 141},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 4932},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2151},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 3338},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4976},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6274},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2013},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3506},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奧爾托斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16643},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14888},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 22209},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 30265},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19486},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 35919},
]},
],
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
var PlayerChart34 = new CanvasJS.Chart('PlayerChartContainer34',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯.的PT統計(總分169562)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25432,
				            interval: 2543,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯.殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 285},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1954},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 305},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 697},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1821},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12819},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4228},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7621},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 25432},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19123},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4524},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3178},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1278},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3397},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10253},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7048},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 1078},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8373},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6296},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7597},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8400},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6351},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9088},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯.CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 591},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯.強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4475},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 4716},
]},
],
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
var PlayerChart35 = new CanvasJS.Chart('PlayerChartContainer35',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎嘎烏拉拉的PT統計(總分154001)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22760,
				            interval: 2276,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎嘎烏拉拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2892},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3281},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3632},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5069},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8797},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1760},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10751},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 22760},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6336},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5086},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4296},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16055},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8030},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5555},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6441},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5702},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10825},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5643},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎嘎烏拉拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5071},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎嘎烏拉拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2494},
]},
],
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
var PlayerChart36 = new CanvasJS.Chart('PlayerChartContainer36',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '統六大罪人的PT統計(總分117358)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8153,
				            interval: 815,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "統六大罪人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3887},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4772},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8153},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7753},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5255},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5357},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3773},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6800},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4987},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4558},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2971},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2102},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4946},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2455},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 417},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2026},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4765},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5687},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "統六大罪人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5117},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6301},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6043},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "統六大罪人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7487},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4984},
]},
],
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
var PlayerChart37 = new CanvasJS.Chart('PlayerChartContainer37',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '蘑菇子的PT統計(總分101063)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25017,
				            interval: 2501,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘑菇子殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4311},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 789},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 127},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6039},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 156},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 121},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7792},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8096},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1017},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 369},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1448},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5212},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 316},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1655},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 347},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1490},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 479},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5427},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 25017},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14114},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘑菇子強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4024},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘑菇子CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4989},
]},
],
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
var PlayerChart38 = new CanvasJS.Chart('PlayerChartContainer38',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '艾佛烈改的PT統計(總分92175)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19667,
				            interval: 1966,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈改殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 303},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8657},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1515},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 39},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1022},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4076},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2789},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2708},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4967},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5346},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1341},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5656},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5424},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5983},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈改強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3737},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10588},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19667},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5098},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈改CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3259},
]},
],
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
var PlayerChart39 = new CanvasJS.Chart('PlayerChartContainer39',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '左右手的PT統計(總分49682)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10904,
				            interval: 1090,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "左右手殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10904},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 27},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 4676},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5812},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6442},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6159},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "左右手強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6489},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6223},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2950},
]},
],
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
}
